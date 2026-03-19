const { PGITRIPROPTTYALLOC } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITRIPROPTTYALLOC.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PGITRIPROPTTYALLOC.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PGITRIPROPTTYALLOC.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYALLOC with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITRIPROPTTYALLOC.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYALLOC with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};




exports.getByPolSysId = async (RPTA_POL_SYS_ID) => {
  if (!RPTA_POL_SYS_ID) {
    throw new Error("RPTA_POL_SYS_ID is required");
  }

  const items = await PGITRIPROPTTYALLOC.findAll({
    where: { RPTA_POL_SYS_ID },
    raw: true
  });

  return items;
};