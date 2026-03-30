const { PgithPolHypothecation } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgithPolHypothecation.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgithPolHypothecation.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgithPolHypothecation.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolHypothecation with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgithPolHypothecation.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolHypothecation with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};



exports.getByPolSysId = async (PHPOH_POL_SYS_ID, PHPOH_END_NO_IDX) => {
  const items = await PgithPolHypothecation.findAll({
    where: { PHPOH_POL_SYS_ID, PHPOH_END_NO_IDX },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.PHPOH_PSEC_SYS_ID; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};