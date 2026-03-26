const { PgithPolDeductible } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgithPolDeductible.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgithPolDeductible.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgithPolDeductible.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolDeductible with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgithPolDeductible.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolDeductible with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PCDH_POL_SYS_ID) => {
  const items = await PgithPolDeductible.findAll({
    where: { PCDH_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.PCDH_END_NO_IDX; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};