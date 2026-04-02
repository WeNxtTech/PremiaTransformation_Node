const { PgitRiPolRiskDtl } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitRiPolRiskDtl.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgitRiPolRiskDtl.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitRiPolRiskDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitRiPolRiskDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitRiPolRiskDtl.findByPk(id);
  if (!item) {
    const error = new Error(`PgitRiPolRiskDtl with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


// exports.getByPolSysId = async (RPRD_POL_SYS_ID) => {
//   const items = await PgitRiPolRiskDtl.findAll({
//     where: { RPRD_POL_SYS_ID },
//     raw: true
//   });

//   if (!items.length) return {};

//   const groupedResult = items.reduce((acc, row) => {
//     const key = row.RPRD_RPTDG_SYS_ID ?? 'unknown';
//     (acc[key] ??= []).push(row);
//     return acc;
//   }, {});

//   return groupedResult;
// };


exports.getByPolSysId = async (RPRD_POL_SYS_ID) => {
  const items = await PgitRiPolRiskDtl.findAll({
    where: { RPRD_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.RPRD_SYS_ID; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};
