const { PgitFacPlaceShare } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitFacPlaceShare.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgitFacPlaceShare.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitFacPlaceShare.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacPlaceShare with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitFacPlaceShare.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacPlaceShare with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};



exports.getByPolSysId = async (FPS_FO_SYS_ID) => {
  const items = await PgitFacPlaceShare.findAll({
    where: { FPS_FO_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.FPS_SYS_ID; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};
