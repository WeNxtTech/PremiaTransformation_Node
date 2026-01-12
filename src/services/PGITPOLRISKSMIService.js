const { raw } = require('express');
const { PGITPOLRISKSMI,sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLRISKSMI.findAll({ where: filters, limit, offset, ...(order && { order }) });
};



 async function getNextTranSysId() {
  const [result] = await sequelize.query('SELECT PRS_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;  
}
exports.create = async (data) => {

   const nextId=await getNextTranSysId();
    data.PRS_SYS_ID=nextId;

  return await PGITPOLRISKSMI.create(data);
};

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
