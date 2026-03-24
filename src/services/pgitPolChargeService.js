const { PgitPolCharge ,sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolCharge.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


// exports.create = async (data) => {
//   const nextId = await getNextPolSysId();
//   data.pchg_sys_id = nextId;

//   return await PgitPolCharge.create(data);
// };


exports.update = async (id, updatedData) => {
  const item = await PgitPolCharge.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCharge with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolCharge.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCharge with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PCHG_POL_SYS_ID) => {
  const items = await PgitPolCharge.findAll({
    where: { PCHG_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.pchg_sys_id; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};







async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_PCHG_SYS_ID.NEXTVAL AS nextVal FROM DUAL'
  );
  return result[0].NEXTVAL || result[0].nextVal;
}

exports.saveRiskCover = async (data) => {
  const isBulk = Array.isArray(data);
  const payload = isBulk ? data : [data];
  const transaction = await sequelize.transaction();

  try {
    const createdRecords = [];
    const skippedRecords = [];

    for (const item of payload) {
      // SYS_ID already exists → skip
      if (item.pchg_sys_id) {
        skippedRecords.push({
          reason: 'SYS_ID already present',
          item
        });
        continue;
      }

      const {
        pchg_pol_sys_id,
        pchg_end_no_idx,
        pchg_end_sr_no,
        pchg_sr_no
      } = item;

      const existing = await PgitPolCharge.findOne({
        where: {
          pchg_pol_sys_id,
          pchg_end_no_idx,
          pchg_end_sr_no,
          pchg_sr_no
        },
        transaction
      });

      if (existing) {
        // ❌ Single insert → ERROR
        if (!isBulk) {
          throw new Error(
            `Duplicate Charge not allowed for SR_NO ${pchg_sr_no}`
          );
        }

        // ✅ Bulk insert → SKIP
        skippedRecords.push({
          reason: 'Already exists in DB',
          keys: {
            pchg_pol_sys_id,
            pchg_end_no_idx,
            pchg_end_sr_no,
            pchg_sr_no
          }
        });
        continue;
      }

      const nextId = await getNextPolSysId();

      const payloadToSave = {
        ...item,
        pchg_sys_id: nextId
      };

      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );

      const created = await PgitPolCharge.create(payloadToSave, {
        transaction
      });

      createdRecords.push(created);
    }

    await transaction.commit();

    if (isBulk) {
      return {
        message: 'Bulk save completed',
        savedCount: createdRecords.length,
        skippedCount: skippedRecords.length,
        saved: createdRecords,
        skipped: skippedRecords
      };
    }

    return createdRecords[0];

  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};