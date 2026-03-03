const { PGITPOLDEDUCTIBLE ,sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLDEDUCTIBLE.findAll({ where: filters, limit, offset, ...(order && { order }) });
};



// exports.create = async (data) => {
//   const nextId = await getNextPolSysId();
//   data.pcd_sys_id = nextId;

//   return await PGITPOLDEDUCTIBLE.create(data);
// };


exports.update = async (id, updatedData) => {
  const item = await PGITPOLDEDUCTIBLE.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLDEDUCTIBLE with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLDEDUCTIBLE.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLDEDUCTIBLE with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PCD_POL_SYS_ID ,PCD_LVL1_SYS_ID) => {
  const items = await PGITPOLDEDUCTIBLE.findAll({
    where: { PCD_POL_SYS_ID ,PCD_LVL1_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.pcd_sys_id; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};



async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT PCD_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL'
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
      if (item.pcd_sys_id) {
        skippedRecords.push({
          reason: 'SYS_ID already present',
          item
        });
        continue;
      }

      const {
        pcd_pol_sys_id,
        pcd_end_no_idx,
        pcd_end_sr_no,
        pcd_code,
        pcd_psec_sys_id,
        pcd_lvl1_sys_id
      } = item;

      const existing = await PGITPOLDEDUCTIBLE.findOne({
        where: {
          pcd_pol_sys_id,
          pcd_end_no_idx,
          pcd_end_sr_no,
          pcd_code,
          pcd_psec_sys_id,
          pcd_lvl1_sys_id
        },
        transaction
      });

      // 🔴 difference here
      if (existing) {
        if (!isBulk) {
          // single payload → error
          throw new Error(
            `Duplicate Deductible found for CODE ${pcd_code} (Risk ${pcd_lvl1_sys_id})`
          );
        }

        // bulk payload → skip
        skippedRecords.push({
          reason: 'Already exists in DB',
          keys: {
            pcd_pol_sys_id,
            pcd_end_no_idx,
            pcd_end_sr_no,
            pcd_code,
            pcd_psec_sys_id,
            pcd_lvl1_sys_id
          }
        });
        continue;
      }

      const nextId = await getNextPolSysId();

      const payloadToSave = {
        ...item,
        pcd_sys_id: nextId
      };

      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );

      const created = await PGITPOLDEDUCTIBLE.create(payloadToSave, {
        transaction
      });

      createdRecords.push(created);
    }

    await transaction.commit();

    // Response
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