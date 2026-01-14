const { PGITPOLHYPOTHECATION } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLHYPOTHECATION.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PGITPOLHYPOTHECATION.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PGITPOLHYPOTHECATION.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLHYPOTHECATION with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLHYPOTHECATION.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLHYPOTHECATION with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PHPO_POL_SYS_ID) => {
  const items = await PGITPOLHYPOTHECATION.findAll({
    where: { PHPO_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.PHPO_SYS_ID; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};
