const { PgithPolCharge } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgithPolCharge.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgithPolCharge.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgithPolCharge.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolCharge with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgithPolCharge.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolCharge with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PCHGH_POL_SYS_ID, PCHGH_END_NO_IDX) => {
  const items = await PgithPolCharge.findAll({
    where: { PCHGH_POL_SYS_ID, PCHGH_END_NO_IDX },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.PCHGH_SR_NO;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};