const { PgitPolApplCurr ,sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolApplCurr.findAll({ where: filters, limit, offset, ...(order && { order }) });
};




// exports.create = async (data) => {
//   const nextId = await getNextPolSysId();
//   data.pac_sys_id = nextId;

//   return await PgitPolApplCurr.create(data);
// };


exports.update = async (id, updatedData) => {
  const item = await PgitPolApplCurr.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolApplCurr with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolApplCurr.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolApplCurr with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PAC_POL_SYS_ID) => {
  const items = await PgitPolApplCurr.findAll({
    where: { PAC_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.pac_sys_id; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};




async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_PAC_SYS_ID.NEXTVAL AS nextVal FROM DUAL'
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
      if (item.pac_sys_id) {
        skippedRecords.push({
          reason: 'SYS_ID already present',
          item
        });
        continue;
      }

      const {
        pac_pol_sys_id,
        pac_curr_code
      } = item;

      const existing = await PgitPolApplCurr.findOne({
        where: {
          pac_pol_sys_id,
          pac_curr_code
        },
        transaction
      });

      if (existing) {
        // ❌ Single save → error
        if (!isBulk) {
          throw new Error(
            `Duplicate Currency not allowed for CURR=${pac_curr_code} (POL_SYS_ID=${pac_pol_sys_id})`
          );
        }

        // ✅ Bulk save → skip
        skippedRecords.push({
          reason: 'Already exists in DB',
          keys: {
            pac_pol_sys_id,
            pac_curr_code
          }
        });
        continue;
      }

      const nextId = await getNextPolSysId();

      const payloadToSave = {
        ...item,
        pac_sys_id: nextId
      };

      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );

      const created = await PgitPolApplCurr.create(payloadToSave, {
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