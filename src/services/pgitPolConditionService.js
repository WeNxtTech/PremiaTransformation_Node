const { PgitPolCondition ,sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolCondition.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


// exports.create = async (data) => {
//   const nextId = await getNextPolSysId();
//   data.pcon_sys_id = nextId;

//   return await PgitPolCondition.create(data);
// };

exports.update = async (id, updatedData) => {
  const item = await PgitPolCondition.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCondition with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolCondition.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCondition with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (pcon_pol_sys_id) => {
  const items = await PgitPolCondition.findAll({
    where: { pcon_pol_sys_id },raw: true
  });
    const groupedResult = items.reduce((acc, row) => {
    const key = row.pcon_sys_id;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult; 

};


//  async function getNextTranSysId() {
//   const [result] = await sequelize.query('SELECT PRS_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
//   return result[0].NEXTVAL || result[0].nextVal;  
// }






async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_PCON_SYS_ID.NEXTVAL AS nextVal FROM DUAL'
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
      // Already has SYS_ID → skip
      if (item.pcon_sys_id) {
        skippedRecords.push({
          reason: 'SYS_ID already present',
          item
        });
        continue;
      }

      const {
        pcon_pol_sys_id,
        pcon_end_no_idx,
        pcon_end_sr_no,
        pcon_sr_no,
        pcon_psec_sys_id,
        pcon_lvl1_sys_id
      } = item;

      const existing = await PgitPolCondition.findOne({
        where: {
          pcon_pol_sys_id,
          pcon_end_no_idx,
          pcon_end_sr_no,
          pcon_sr_no,
          pcon_psec_sys_id,
          pcon_lvl1_sys_id
        },
        transaction
      });

      if (existing) {
        // ❌ Single save → error
        if (!isBulk) {
          throw new Error(
            `Duplicate Condition found for SR_NO ${pcon_sr_no} (Risk ${pcon_lvl1_sys_id})`
          );
        }

        // ✅ Bulk save → skip
        skippedRecords.push({
          reason: 'Already exists in DB',
          keys: {
            pcon_pol_sys_id,
            pcon_end_no_idx,
            pcon_end_sr_no,
            pcon_sr_no,
            pcon_psec_sys_id,
            pcon_lvl1_sys_id
          }
        });
        continue;
      }

      const nextId = await getNextPolSysId();

      const payloadToSave = {
        ...item,
        pcon_sys_id: nextId
      };

      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );

      const created = await PgitPolCondition.create(payloadToSave, {
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