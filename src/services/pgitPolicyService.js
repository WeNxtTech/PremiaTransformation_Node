const { PgitPolicy ,sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolicy.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


async function getNextPolSysId() {
  const [result] = await sequelize.query('SELECT POL_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;
}

exports.create = async (data) => {
  const nextId = await getNextPolSysId();
  data.POL_SYS_ID = nextId;

  const createdRecord = await PgitPolicy.create(data);

  const responseData = {
    POL_SYS_ID: createdRecord.POL_SYS_ID,
    POL_END_NO_IDX: createdRecord.POL_END_NO_IDX,
    POL_END_SR_NO: createdRecord.POL_END_SR_NO                                                                                         
  };

  return {
    success: true,
    message: 'Record created successfully',
    data: responseData,
  };
};


exports.update = async (id, updatedData) => {
  const item = await PgitPolicy.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolicy with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolicy.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolicy with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};