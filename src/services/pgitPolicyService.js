const { PgitPolicy ,sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolicy.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


async function getNextPolSysId() {
  const [result] = await sequelize.query('SELECT POL_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;
}

exports.create = async (data) => {
  console.log(data);
  const nextId = await getNextPolSysId();
  data.pol_sys_id = nextId;

  const createdRecord = await PgitPolicy.create(data);

  const responseData = {
    pol_sys_id: createdRecord.pol_sys_id,
    pol_end_no_idx: createdRecord.pol_end_no_idx,
    pol_end_sr_no: createdRecord.pol_end_sr_no
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