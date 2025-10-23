// const { PgitPolSection  } = require('../models');
const { PgitPolSection, sequelize } = require('../models');

async function getNextPsecSysId() {
  const [result] = await sequelize.query('SELECT PSEC_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal; // accommodate case differences
}

exports.create = async (data) => {
  const nextId = await getNextPsecSysId();
  data.psec_sys_id = nextId;

  return await PgitPolSection.create(data);
};

// exports.create = async (data) => {
//   return await PgitPolSection.create(data);
// };
exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolSection.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

exports.update = async (id, updatedData) => {
  const item = await PgitPolSection.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolSection with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolSection.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolSection with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};