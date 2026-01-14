const { PgitPolApplCurr ,sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolApplCurr.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


async function getNextPolSysId() {
  const [result] = await sequelize.query('SELECT PAC_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;  
}

exports.create = async (data) => {
  const nextId = await getNextPolSysId();
  data.pac_sys_id = nextId;

  return await PgitPolApplCurr.create(data);
};


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


exports.getByPolSysId = async (PAC_POL_SYS_ID) => {
  const items = await PgitPolApplCurr.findAll({
    where: { PAC_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.pac_sys_id; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};
