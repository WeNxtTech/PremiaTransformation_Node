const { PGITPOLPREVINSDTL,sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLPREVINSDTL.findAll({ where: filters, limit, offset, ...(order && { order }) });
};




async function getNextPsecSysId() {
  const result = await sequelize.query( 'SELECT pid_sys_id_seq.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: sequelize.QueryTypes.SELECT }
  );
  return result[0].NEXTVAL;
}
exports.create = async (data) => {
  const nextId = await getNextPsecSysId();
  data.PID_SYS_ID = nextId;
  const createRecord = await PGITPOLPREVINSDTL.create(data);
    const responseData = {
        PID_SYS_ID: createRecord.PID_SYS_ID,
        PID_POL_SYS_ID: createRecord.PID_POL_SYS_ID,
        PID_CR_UID: createRecord.PID_CR_UID,
        PID_CR_DT:createRecord.PID_CR_DT,
      };
    
      return {
        success: true,
        message: 'Record created successfully',
        data: responseData,
      };
};

exports.update = async (id, updatedData) => {
  const item = await PGITPOLPREVINSDTL.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLPREVINSDTL with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLPREVINSDTL.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLPREVINSDTL with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};

exports.getByPolSysId = async (PID_POL_SYS_ID) => {
  const items = await PGITPOLPREVINSDTL.findAll({
    where: { PID_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.PID_SYS_ID; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};