const { PgitPolCondition } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolCondition.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgitPolCondition.create(data);
};

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