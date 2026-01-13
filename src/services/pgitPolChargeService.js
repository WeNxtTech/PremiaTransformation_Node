const { PgitPolCharge ,sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolCharge.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

async function getNextPolSysId() {
  const [result] = await sequelize.query('SELECT PCHG_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal; 
}

exports.create = async (data) => {
  const nextId = await getNextPolSysId();
  data.pchg_sys_id = nextId;

  return await PgitPolCharge.create(data);
};


exports.update = async (id, updatedData) => {
  const item = await PgitPolCharge.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCharge with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolCharge.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCharge with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};