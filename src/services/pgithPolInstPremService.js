const { PgithPolInstPrem } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgithPolInstPrem.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgithPolInstPrem.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgithPolInstPrem.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolInstPrem with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgithPolInstPrem.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolInstPrem with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PIPH_POL_SYS_ID, PIPH_END_NO_IDX) => {
  const items = await PgithPolInstPrem.findAll({
    where: { PIPH_POL_SYS_ID, PIPH_END_NO_IDX },
    raw: true
  });

  return items;
};