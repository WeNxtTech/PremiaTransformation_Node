const { PgitPolApplCurr } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolApplCurr.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgitPolApplCurr.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitPolApplCurr.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolApplCurr with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolApplCurr.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolApplCurr with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};