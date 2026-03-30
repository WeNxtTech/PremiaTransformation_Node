const { PgithPolPrevInsDtl } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgithPolPrevInsDtl.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgithPolPrevInsDtl.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgithPolPrevInsDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolPrevInsDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgithPolPrevInsDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolPrevInsDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};

exports.getByPolSysId = async (PIDH_POL_SYS_ID, PIDH_END_NO_IDX) => {
  const items = await PgithPolPrevInsDtl.findAll({
    where: { PIDH_POL_SYS_ID, PIDH_END_NO_IDX },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.PIDH_END_NO_IDX; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};