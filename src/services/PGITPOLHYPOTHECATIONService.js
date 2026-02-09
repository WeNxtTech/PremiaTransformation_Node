const { PGITPOLHYPOTHECATION,sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLHYPOTHECATION.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


async function getNextPsecSysId() {
  const result = await sequelize.query( 'SELECT PHPO_SYS_ID_SEQ.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: sequelize.QueryTypes.SELECT }
  );
  return result[0].NEXTVAL;
}

exports.create = async (data) => {
  const nextId = await getNextPsecSysId();
  data.PHPO_SYS_ID = nextId;
  const createRecord = await PGITPOLHYPOTHECATION.create(data);
  const responseData = {
    PHPO_SYS_ID: createRecord.PHPO_SYS_ID,
        PHPO_POL_SYS_ID: createRecord.PHPO_POL_SYS_ID,
        PHPO_CR_UID: createRecord.PHPO_CR_UID,
        PHPO_CR_DT:createRecord.PHPO_CR_DT,
  }

   return {
        success: true,
        message: 'Record created successfully',
        data: responseData,
      };
};

exports.update = async (id, updatedData) =>  {
  const item = await PGITPOLHYPOTHECATION.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLHYPOTHECATION with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLHYPOTHECATION.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLHYPOTHECATION with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PHPO_POL_SYS_ID) => {
  const items = await PGITPOLHYPOTHECATION.findAll({
    where: { PHPO_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.PHPO_SYS_ID; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};
