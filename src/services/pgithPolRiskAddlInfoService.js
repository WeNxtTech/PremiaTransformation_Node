const { PgithPolRiskAddlInfo } = require('../models');

// exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
//   return PgithPolRiskAddlInfo.findAll({ where: filters, limit, offset, ...(order && { order }) });
// };

// exports.create = async (data) => {
//   return await PgithPolRiskAddlInfo.create(data);
// };

// exports.update = async (id, updatedData) => {
//   const item = await PgithPolRiskAddlInfo.findByPk(id);
//   if (!item) {
//     const error = new Error(`PgithPolRiskAddlInfo with ID ${id} not found`);
//     error.statusCode = 404;
//     throw error;
//   }
//   await item.update(updatedData);
//   return item;
// };

// exports.deleteItem = async (id) => {
//   const item = await PgithPolRiskAddlInfo.findByPk(id);
//   if (!item) {
//     const error = new Error(`PgithPolRiskAddlInfo with ID ${id} not found`);
//     error.statusCode = 404;
//     throw error;
//   }
//   await item.destroy();
//   return item;
// };


exports.getByPolSysId = async (PRAIH_POL_SYS_ID, PRAIH_END_NO_IDX, PRAIH_PSEC_SYS_ID) => {
  const whereClause = { PRAIH_POL_SYS_ID };

  if (PRAIH_END_NO_IDX !== null && PRAIH_END_NO_IDX !== undefined && !isNaN(PRAIH_END_NO_IDX)) {
    whereClause.PRAIH_END_NO_IDX = PRAIH_END_NO_IDX;
  }
  
  if (PRAIH_PSEC_SYS_ID !== null && PRAIH_PSEC_SYS_ID !== undefined && !isNaN(PRAIH_PSEC_SYS_ID)) {
    whereClause.PRAIH_PSEC_SYS_ID = PRAIH_PSEC_SYS_ID;
  }

  const items = await PgithPolRiskAddlInfo.findAll({
    where: whereClause,
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const endNoIdx = row.PRAIH_END_NO_IDX; 
    const riskId = row.PRAIH_RISK_ID;

    // Initialize the endNoIdx group if it doesn't exist
    if (!acc[endNoIdx]) {
      acc[endNoIdx] = {};
    }

    // Initialize the riskId subgroup if it doesn't exist
    if (!acc[endNoIdx][riskId]) {
      acc[endNoIdx][riskId] = [];
    }

    // Push the row to the corresponding riskId array
    acc[endNoIdx][riskId].push(row);

    return acc;
  }, {});

  return groupedResult;
};