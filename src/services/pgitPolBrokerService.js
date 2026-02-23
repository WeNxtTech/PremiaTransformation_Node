const { PgitPolBroker ,sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolBroker.findAll({ where: filters, limit, offset, ...(order && { order }) });
};




// exports.create = async (data) => {
//   const nextId = await getNextPolSysId();
//   data.pbrk_sys_id = nextId;

//   return await PgitPolBroker.create(data);
// };


exports.update = async (id, updatedData) => {
  const item = await PgitPolBroker.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolBroker with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolBroker.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolBroker with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PBRK_POL_SYS_ID) => {
  const items = await PgitPolBroker.findAll({
    where: { PBRK_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.pbrk_sys_id; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};




async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT PBRK_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL'
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
      // If SYS_ID already exists → skip
      if (item.pbrk_sys_id) {
        skippedRecords.push({
          reason: 'SYS_ID already present',
          item
        });
        continue;
      }

      const {
        pbrk_pol_sys_id,
        pbrk_end_no_idx,
        pbrk_end_sr_no,
        pbrk_psec_sys_id,
        pbrk_brk_code,
        pbrk_comm_code
      } = item;

      const existing = await PgitPolBroker.findOne({
        where: {
          pbrk_pol_sys_id,
          pbrk_end_no_idx,
          pbrk_end_sr_no,
          pbrk_psec_sys_id,
          pbrk_brk_code,
          pbrk_comm_code
        },
        transaction
      });

      if (existing) {
        // ❌ Single insert → ERROR
        if (!isBulk) {
          throw new Error(
            `Duplicate Broker not allowed for BRK=${pbrk_brk_code} and COMM=${pbrk_comm_code}`
          );
        }

        // ✅ Bulk insert → SKIP
        skippedRecords.push({
          reason: 'Already exists in DB',
          keys: {
            pbrk_pol_sys_id,
            pbrk_end_no_idx,
            pbrk_end_sr_no,
            pbrk_psec_sys_id,
            pbrk_brk_code,
            pbrk_comm_code
          }
        });
        continue;
      }

      const nextId = await getNextPolSysId();

      const payloadToSave = {
        ...item,
        pbrk_sys_id: nextId
      };

      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );

      const created = await PgitPolBroker.create(payloadToSave, {
        transaction
      });

      createdRecords.push(created);
    }

    await transaction.commit();

    // Final response
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