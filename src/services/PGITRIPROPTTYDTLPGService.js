const { PGITRIPROPTTYDTLPG } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITRIPROPTTYDTLPG.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PGITRIPROPTTYDTLPG.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PGITRIPROPTTYDTLPG.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYDTLPG with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITRIPROPTTYDTLPG.findByPk(id);
  if (!item) {
    const error = new Error(`PGITRIPROPTTYDTLPG with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};




// exports.getByPolSysId = async (RPTDG_POL_SYS_ID) => {
//   if (!RPTDG_POL_SYS_ID) {
//     throw new Error("RPTDG_POL_SYS_ID is required");
//   }

//   const items = await PGITRIPROPTTYDTLPG.findAll({
//     where: { RPTDG_POL_SYS_ID },
//     raw: true
//   });

//   return items;
// };



exports.getById = async ({ RPTDG_POL_SYS_ID, RPTDG_END_NO_IDX, RPTDG_END_SR_NO }) => {
  const items = await PGITRIPROPTTYDTLPG.findAll({
    where: { RPTDG_POL_SYS_ID, RPTDG_END_NO_IDX, RPTDG_END_SR_NO },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.RPTDG_SYS_ID;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult; // ✅ no "items" after this
};