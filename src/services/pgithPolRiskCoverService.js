const { PgithPolRiskCover } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgithPolRiskCover.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.create = async (data) => {
  return await PgithPolRiskCover.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgithPolRiskCover.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolRiskCover with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgithPolRiskCover.findByPk(id);
  if (!item) {
    const error = new Error(`PgithPolRiskCover with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};



exports.getByPolSysId = async (PRCH_POL_SYS_ID, PRCH_END_NO_IDX, PRCH_PSEC_SYS_ID, PRCH_LVL1_SYS_ID) => {
  const whereClause = { PRCH_POL_SYS_ID };

  if (PRCH_END_NO_IDX !== null && PRCH_END_NO_IDX !== undefined && !isNaN(PRCH_END_NO_IDX)) {
    whereClause.PRCH_END_NO_IDX = PRCH_END_NO_IDX;
  }
  if (PRCH_PSEC_SYS_ID !== null && PRCH_PSEC_SYS_ID !== undefined && !isNaN(PRCH_PSEC_SYS_ID)) {
    whereClause.PRCH_PSEC_SYS_ID = PRCH_PSEC_SYS_ID;
  }
  if (PRCH_LVL1_SYS_ID !== null && PRCH_LVL1_SYS_ID !== undefined && !isNaN(PRCH_LVL1_SYS_ID)) {
    whereClause.PRCH_LVL1_SYS_ID = PRCH_LVL1_SYS_ID;
  }

  const items = await PgithPolRiskCover.findAll({
    where: whereClause,
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const endNoIdx = row.PRCH_END_NO_IDX; 
    const srNo = row.PRCH_SR_NO;

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