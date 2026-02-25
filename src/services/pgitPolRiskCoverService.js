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

async function getNextTranSysId(transaction) {
  const [result] = await sequelize.query(
    'SELECT PRC_SYS_IDD_SEQ.NEXTVAL AS nextVal FROM DUAL',
    { transaction }
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

      if (item.PRC_SYS_ID) {
        skippedRecords.push({
          reason: 'SYS_ID already present',
          item
        });
        continue;
      }

      const {
        PRC_SR_NO,
        PRC_CVR_TYPE
      } = item;

      // ✅ NEW UNIQUE CHECK (ONLY 2 FIELDS)
      const existing = await PGITPOLRISKCOVER.findOne({
        where: {
          PRC_SR_NO,
          PRC_CVR_TYPE
        },
        transaction
      });

      if (existing) {
        if (!isBulk) {
          throw new Error(
            `Duplicate not allowed for SR_NO ${PRC_SR_NO} and CVR_TYPE ${PRC_CVR_TYPE}`
          );
        }

        skippedRecords.push({
          reason: 'Already exists in DB',
          keys: { PRC_SR_NO, PRC_CVR_TYPE }
        });
        continue;
      }

      const nextId = await getNextTranSysId(transaction);

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