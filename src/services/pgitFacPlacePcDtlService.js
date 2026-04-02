const { PgitFacPlacePcDtl } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitFacPlacePcDtl.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgitFacPlacePcDtl.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitFacPlacePcDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacPlacePcDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitFacPlacePcDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacPlacePcDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};



exports.getByPolSysId = async (FPPD_FPS_SYS_ID) => {
  const items = await PgitFacPlacePcDtl.findAll({
    where: { FPPD_FPS_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.FPPD_SYS_ID; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};
