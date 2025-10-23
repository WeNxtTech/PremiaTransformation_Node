const { PgitPolApplCurr ,sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolApplCurr.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


async function getNextPolSysId() {
  const [result] = await sequelize.query('SELECT PAC_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;  // depending on driver case
}

exports.create = async (data) => {
  const nextId = await getNextPolSysId();
  data.pac_sys_id = nextId;

  return await PgitPolApplCurr.create(data);
};
// exports.create = async (data) => {
//   return await PgitPolApplCurr.create(data);
// };

exports.update = async (id, updatedData) => {
  const item = await PgitPolApplCurr.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolApplCurr with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolApplCurr.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolApplCurr with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};