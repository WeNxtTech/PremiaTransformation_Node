const { PgithPolBroker } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgithPolBroker.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgithPolBroker.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgithPolBroker.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolBroker with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgithPolBroker.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolBroker with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};



exports.getByPolSysId = async (PBRKH_POL_SYS_ID, PBRKH_END_NO_IDX) => {
  const items = await PgithPolBroker.findAll({
    where: { PBRKH_POL_SYS_ID, PBRKH_END_NO_IDX },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.PBRKH_END_NO_IDX; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};