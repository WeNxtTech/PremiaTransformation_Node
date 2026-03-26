const { PgithPolicy } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgithPolicy.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgithPolicy.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgithPolicy.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolicy with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgithPolicy.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolicy with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};



exports.getByPolSysId = async (POLH_SYS_ID) => {
  const items = await PgithPolicy.findAll({
    where: { POLH_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.POLH_END_NO_IDX; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};