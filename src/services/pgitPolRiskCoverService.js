const { PGITPOLRISKCOVER ,sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLRISKCOVER.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


exports.update = async (id, updatedData) => {
  const item = await PGITPOLRISKCOVER.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKCOVER with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLRISKCOVER.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKCOVER with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PRC_POL_SYS_ID, PRC_LVL1_SYS_ID) => {

  const whereCondition = {};

  if (PRC_POL_SYS_ID !== undefined && PRC_POL_SYS_ID !== null) {
    whereCondition.PRC_POL_SYS_ID = PRC_POL_SYS_ID;
  }

  if (PRC_LVL1_SYS_ID !== undefined && PRC_LVL1_SYS_ID !== null) {
    whereCondition.PRC_LVL1_SYS_ID = PRC_LVL1_SYS_ID;
  }

  // Optional: if no filters provided, prevent full table fetch
  if (Object.keys(whereCondition).length === 0) {
    throw new Error("At least one filter (PRC_POL_SYS_ID or PRC_LVL1_SYS_ID) is required");
  }

  const items = await PGITPOLRISKCOVER.findAll({
    where: whereCondition,
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.PRC_CVR_TYPE;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};

async function getNextTranSysId(transaction) {
  const [result] = await sequelize.query(
    'SELECT PGI_PRS_SYS_ID.NEXTVAL AS nextVal FROM DUAL',
    { transaction }
  );
  return result[0].NEXTVAL || result[0].nextVal;
}

async function getNextTranSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_PRS_SYS_ID.NEXTVAL AS nextVal FROM DUAL'
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
      // If SYS_ID already present → skip
      if (item.PRC_SYS_ID) {
        skippedRecords.push({
          reason: 'SYS_ID already present',
          item
        });
        continue;
      }
 
      const {
        PRC_POL_SYS_ID,
        PRC_END_NO_IDX,
        PRC_END_SR_NO,
        PRC_SR_NO,
        PRC_PSEC_SYS_ID,
        PRC_LVL1_SYS_ID,
        PRC_CVR_TYPE
      } = item;
 
      const existing = await PGITPOLRISKCOVER.findOne({
        where: {
          PRC_POL_SYS_ID,
          PRC_END_NO_IDX,
          PRC_END_SR_NO,
          PRC_SR_NO,
          PRC_PSEC_SYS_ID,
          PRC_LVL1_SYS_ID,
          PRC_CVR_TYPE
        },
        transaction
      });
 
      // 🔴 Difference here
      if (existing) {
        if (!isBulk) {
          // single payload → error
          throw new Error(
            `Duplicate Risk Cover found for SR_NO ${PRC_SR_NO} (Risk ${PRC_CVR_TYPE})`
          );
        }
 
        // bulk payload → skip
        skippedRecords.push({
          reason: 'Already exists in DB',
          keys: {
            PRC_POL_SYS_ID,
            PRC_END_NO_IDX,
            PRC_END_SR_NO,
            PRC_SR_NO,
            PRC_PSEC_SYS_ID,
            PRC_LVL1_SYS_ID,
            PRC_CVR_TYPE
          }
        });
        continue;
      }
 
      const nextId = await getNextTranSysId();
 
      const payloadToSave = {
        ...item,
        PRC_SYS_ID: nextId
      };
 
      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );
 
      const created = await PGITPOLRISKCOVER.create(payloadToSave, {
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