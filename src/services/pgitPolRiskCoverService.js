const { PGITPOLRISKCOVER ,sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLRISKCOVER.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


 async function getNextTranSysId() {
  const [result] = await sequelize.query('SELECT PRC_SYS_IDD_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;  
}
exports.create = async (data) => {

    const nextId=await getNextTranSysId();
    data.PRC_SYS_ID=nextId;

  return await PGITPOLRISKCOVER.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PGITPOLRISKCOVER.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKCOVER with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLRISKCOVER.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKCOVER with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PRC_POL_SYS_ID) => {
  const items = await PGITPOLRISKCOVER.findAll({
    where: { PRC_POL_SYS_ID }
  });

  return {
    success: true,
    message: 'Records fetched successfully',
    data: items
  };
};
