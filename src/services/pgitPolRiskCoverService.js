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


exports.getByPolSysId = async (PRC_POL_SYS_ID) => {
  const items = await PGITPOLRISKCOVER.findAll({
    where: { PRC_POL_SYS_ID },raw: true
  });
   const groupedResult = items.reduce((acc, row) => {
    const key = row.PRC_SYS_ID;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult; 

  
};

async function getNextTranSysId() {
  const [result] = await sequelize.query(
    'SELECT PRC_SYS_IDD_SEQ.NEXTVAL AS nextVal FROM DUAL'
  );
  return result[0].NEXTVAL || result[0].nextVal;
}

exports.saveRiskCover = async (data) => {
  const payload = Array.isArray(data) ? data : [data];
  const transaction = await sequelize.transaction();

  try {
    const createdRecords = [];
    for (const item of payload) {
      if (item.PRC_SYS_ID) {
        continue;
      }
      const {
        PRC_POL_SYS_ID,
        PRC_END_NO_IDX,
        PRC_END_SR_NO,
        PRC_SR_NO,
        PRC_PSEC_SYS_ID,
        PRC_LVL1_SYS_ID
      } = item;
      const existing = await PGITPOLRISKCOVER.findOne({
        where: {
          PRC_POL_SYS_ID,
          PRC_END_NO_IDX,
          PRC_END_SR_NO,
          PRC_SR_NO,
          PRC_PSEC_SYS_ID,
          PRC_LVL1_SYS_ID
        },
        transaction
      });

      if (existing) {
        throw new Error(
          `Duplicate Risk Cover found for SR_NO ${PRC_SR_NO} (Risk ${PRC_LVL1_SYS_ID})`
        );
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
    return Array.isArray(data)
      ? {
          message: 'Saved successfully',
          count: createdRecords.length,
          data: createdRecords
        }
      : createdRecords[0];

  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};
