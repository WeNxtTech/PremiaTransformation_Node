const { PgitPolCondition ,sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolCondition.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

async function getNextPolSysId() {
  const [result] = await sequelize.query('SELECT PCON_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;  
}

exports.create = async (data) => {
  const nextId = await getNextPolSysId();
  data.pcon_sys_id = nextId;

  return await PgitPolCondition.create(data);
};

exports.update = async (id, updatedData) => {
  const item = await PgitPolCondition.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCondition with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolCondition.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolCondition with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (pcon_pol_sys_id) => {
  const items = await PgitPolCondition.findAll({
    where: { pcon_pol_sys_id },raw: true
  });
    const groupedResult = items.reduce((acc, row) => {
    const key = row.pcon_sys_id;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult; 

};

