const { raw } = require('express');
const { PGITPOLRISKSMI,sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLRISKSMI.findAll({ where: filters, limit, offset, ...(order && { order }) });
};




// exports.create = async (data) => {

//    const nextId=await getNextTranSysId();
//     data.PRS_SYS_ID=nextId;

//   return await PGITPOLRISKSMI.create(data);
// };

exports.update = async (id, updatedData) => {
  const item = await PGITPOLRISKSMI.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKSMI with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLRISKSMI.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKSMI with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PRS_POL_SYS_ID) => {
  const items = await PGITPOLRISKSMI.findAll({
    where: { PRS_POL_SYS_ID },raw: true
  });
    const groupedResult = items.reduce((acc, row) => {
    const key = row.PRS_SYS_ID;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult; 

  // return {
  //   success: true,
  //   message: 'Records fetched successfully',
  //   data: items
  // };
};



 async function getNextTranSysId() {
  const [result] = await sequelize.query('SELECT PRS_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;  
}

exports.saveRiskCover = async (data) => {
  const payload = Array.isArray(data) ? data : [data];
  const transaction = await sequelize.transaction();

  try {
    const createdRecords = [];
    for (const item of payload) {
      if (item.PRS_SYS_ID) {
        continue;
      }
      const {
        PRS_POL_SYS_ID,
        PRS_END_NO_IDX,
        PRS_END_SR_NO,
        PRS_SR_NO,
        PRS_PSEC_SYS_ID,
        PRS_LVL1_SYS_ID
      } = item;
      const existing = await PGITPOLRISKSMI.findOne({
        where: {
          PRS_POL_SYS_ID,
          PRS_END_NO_IDX,
          PRS_END_SR_NO,
          PRS_SR_NO,
          PRS_PSEC_SYS_ID,
          PRS_LVL1_SYS_ID
        },
        transaction
      });

      if (existing) {
        throw new Error(
          `Duplicate Risk Cover found for SR_NO ${PRS_SR_NO} (Risk ${PRS_LVL1_SYS_ID})`
        );
      }
      const nextId = await getNextTranSysId();
      const payloadToSave = {
        ...item,
        PRS_SYS_ID: nextId
      };
      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );
      const created = await PGITPOLRISKSMI.create(payloadToSave, {
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
