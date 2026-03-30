const { PgithPolSection } = require('../models');

// exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
//   return PgithPolSection.findAll({ where: filters, limit, offset, ...(order && { order }) });
// };

// exports.create = async (data) => {
//   return await PgithPolSection.create(data);
// };

// exports.update = async (id, updatedData) => {
//   const item = await PgithPolSection.findByPk(id);
//   if (!item) {
//     const error = new Error(`PgithPolSection with ID ${id} not found`);
//     error.statusCode = 404;
//     throw error;
//   }
//   await item.update(updatedData);
//   return item;
// };

// exports.deleteItem = async (id) => {
//   const item = await PgithPolSection.findByPk(id);
//   if (!item) {
//     const error = new Error(`PgithPolSection with ID ${id} not found`);
//     error.statusCode = 404;
//     throw error;
//   }
//   await item.destroy();
//   return item;
// };


exports.getByPolSysId = async (PSECH_POL_SYS_ID, PSECH_END_NO_IDX) => {
  const whereClause = { PSECH_POL_SYS_ID };
  
  if (PSECH_END_NO_IDX !== null && PSECH_END_NO_IDX !== undefined && !isNaN(PSECH_END_NO_IDX)) {
    whereClause.PSECH_END_NO_IDX = PSECH_END_NO_IDX;
  }

  const items = await PgithPolSection.findAll({
    where: whereClause,
    raw: true
  });
  const groupedResult = items.reduce((acc, row) => {
    const sysId = row.PSECH_SYS_ID;
    const srNo = row.PSECH_SRNO;

    if (!acc[sysId]) {
      acc[sysId] = {};
    }

    if (!acc[sysId][srNo]) {
      acc[sysId][srNo] = [];
    }

    acc[sysId][srNo].push(row);

    return acc;
  }, {});

  return groupedResult; 
};
