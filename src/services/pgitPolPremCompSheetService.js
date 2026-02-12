const { PGITPOLPREMCOMPSHEET } = require('../models');

// exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
//   return PGITPOLPREMCOMPSHEET.findAll({ where: filters, limit, offset, ...(order && { order }) });
// };

// exports.create = async (data) => {
//   return await PGITPOLPREMCOMPSHEET.create(data);
// };

// exports.update = async (id, updatedData) => {
//   const item = await PGITPOLPREMCOMPSHEET.findByPk(id);
//   if (!item) {
//     const error = new Error(`PGITPOLPREMCOMPSHEET with ID ${id} not found`);
//     error.statusCode = 404;
//     throw error;
//   }
//   await item.update(updatedData);
//   return item;
// };

// exports.deleteItem = async (id) => {
//   const item = await PGITPOLPREMCOMPSHEET.findByPk(id);
//   if (!item) {
//     const error = new Error(`PGITPOLPREMCOMPSHEET with ID ${id} not found`);
//     error.statusCode = 404;
//     throw error;
//   }
//   await item.destroy();
//   return item;
// };




exports.getById = async (keys) => {
  const policy = await PGITPOLPREMCOMPSHEET.findAll({
    where: {
      PCST_POL_SYS_ID: keys.PCST_SYS_ID,
      PCST_END_NO_IDX: keys.PCST_END_NO_IDX,
      PCST_END_SR_NO: keys.PCST_END_SR_NO
    }
  });
  if (!policy) {
    const error = new Error(
      `Policy not found with SYS_ID=${keys.PCST_SYS_ID}, END_NO_IDX=${keys.PCST_END_NO_IDX}, END_SR_NO=${keys.PCST_END_SR_NO}`
    );
    error.statusCode = 404;
    throw error;
  }
  return policy;
};
// exports.getByPolSysId = async (PSEC_POL_SYS_ID) => {
//   const items = await PgitPolSection.findAll({
//     where: { PSEC_POL_SYS_ID },raw: true
//   });
//   const groupedResult = items.reduce((acc, row) => {
//     const key = row.PSEC_SYS_ID;
//     (acc[key] ??= []).push(row);
//     return acc;
//   }, {});

//   return groupedResult; 
//}