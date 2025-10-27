const { PGITPOLRISKADDLINFO , sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLRISKADDLINFO.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

async function getNextPolSysId() {
  const [result] = await sequelize.query('SELECT PRAI_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;
}

exports.create = async (data) => {
  const nextId = await getNextPolSysId();
  data.prai_sys_id = nextId;

  const createdRecord = await PGITPOLRISKADDLINFO.create(data);

  const responseData = {
    prai_sys_id: createdRecord.prai_sys_id,
    prai_pol_sys_id: createdRecord.prai_pol_sys_id,
    prai_end_no_idx: createdRecord.prai_end_no_idx,
    prai_psec_sys_id: createdRecord.prai_psec_sys_id,
    prai_risk_lvl_no: createdRecord.prai_risk_lvl_no,
    prai_risk_sr_no: createdRecord.prai_risk_sr_no,
    prai_lvl1_sr_no: createdRecord.prai_lvl1_sr_no,
    prai_lvl2_sr_no: createdRecord.prai_lvl2_sr_no
   
  };

  return {
    success: true,
    message: 'Record created successfully',
    data: responseData,
  };
};
// async function getNextPolSysId() {
//   const [result] = await sequelize.query('SELECT PRAI_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
//   return result[0].NEXTVAL || result[0].nextVal;  // depending on driver case
// }
// exports.create = async (data) => {
//   const nextId = await getNextPolSysId();
//   data.prai_sys_id = nextId;

//   return await PGITPOLRISKADDLINFO.create(data);
// };


exports.update = async (id, updatedData) => {
  const item = await PGITPOLRISKADDLINFO.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKADDLINFO with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLRISKADDLINFO.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKADDLINFO with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};