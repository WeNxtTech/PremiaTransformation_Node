const { PgitTaxDtl } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitTaxDtl.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgitTaxDtl.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitTaxDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitTaxDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitTaxDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitTaxDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};