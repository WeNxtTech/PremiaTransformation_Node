const { PgitFacOut } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitFacOut.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgitFacOut.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitFacOut.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacOut with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitFacOut.findByPk(id);
  if (!item) {
    const error = new Error(`PgitFacOut with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (FO_POL_SYS_ID) => {
  const items = await PgitFacOut.findAll({
    where: { FO_RI_SYS_ID: FO_POL_SYS_ID }, // ✅ FIX HERE
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.FO_RI_SYS_ID; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};