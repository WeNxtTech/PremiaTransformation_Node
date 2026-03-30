const { PgithPolApplCurr } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgithPolApplCurr.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgithPolApplCurr.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgithPolApplCurr.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolApplCurr with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgithPolApplCurr.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolApplCurr with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};

exports.getByPolSysId = async (PACH_POL_SYS_ID, PACH_END_NO_IDX) => {
  const items = await PgithPolApplCurr.findAll({
    where: { PACH_POL_SYS_ID, PACH_END_NO_IDX },
    raw: true
  });

  return items;
};