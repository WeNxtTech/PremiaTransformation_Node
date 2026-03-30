const { PgithPolRiskSmi } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgithPolRiskSmi.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgithPolRiskSmi.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgithPolRiskSmi.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolRiskSmi with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgithPolRiskSmi.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolRiskSmi with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PRSH_POL_SYS_ID, PRSH_END_NO_IDX, PRSH_PSEC_SYS_ID, PRSH_LVL1_SYS_ID) => {
  const whereClause = { PRSH_POL_SYS_ID };

  if (PRSH_END_NO_IDX !== null && PRSH_END_NO_IDX !== undefined && !isNaN(PRSH_END_NO_IDX)) {
    whereClause.PRSH_END_NO_IDX = PRSH_END_NO_IDX;
  }
  if (PRSH_PSEC_SYS_ID !== null && PRSH_PSEC_SYS_ID !== undefined && !isNaN(PRSH_PSEC_SYS_ID)) {
    whereClause.PRSH_PSEC_SYS_ID = PRSH_PSEC_SYS_ID;
  }
  if (PRSH_LVL1_SYS_ID !== null && PRSH_LVL1_SYS_ID !== undefined && !isNaN(PRSH_LVL1_SYS_ID)) {
    whereClause.PRSH_LVL1_SYS_ID = PRSH_LVL1_SYS_ID;
  }

  const items = await PgithPolRiskSmi.findAll({
    where: whereClause,
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const endNoIdx = row.PRSH_END_NO_IDX; 
    const srNo = row.PRSH_SR_NO;

    if (!acc[endNoIdx]) {
      acc[endNoIdx] = {};
    }
    
    if (!acc[endNoIdx][srNo]) {
      acc[endNoIdx][srNo] = [];
    }
    
    acc[endNoIdx][srNo].push(row);
    
    return acc;
  }, {});

  return groupedResult;
};