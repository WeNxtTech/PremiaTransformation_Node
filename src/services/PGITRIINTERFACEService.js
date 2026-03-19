const { PGITRIINTERFACE } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITRIINTERFACE.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PGITRIINTERFACE.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PGITRIINTERFACE.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIINTERFACE with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITRIINTERFACE.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIINTERFACE with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (RI_POL_SYS_ID) => {
  if (!RI_POL_SYS_ID) {
    throw new Error("RI_POL_SYS_ID is required");
  }

  const items = await PGITRIINTERFACE.findAll({
    where: { RI_POL_SYS_ID },
    raw: true
  });

  return items;
};