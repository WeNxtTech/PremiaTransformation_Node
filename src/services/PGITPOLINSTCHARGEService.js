const { PGITPOLINSTCHARGE,sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLINSTCHARGE.findAll({ where: filters, limit, offset, ...(order && { order }) });
};


async function getNextPsecSysId() {
  const result = await sequelize.query( 'SELECT PIC_SYS_ID_SEQ.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: sequelize.QueryTypes.SELECT }
  );
  return result[0].NEXTVAL;
}

exports.create = async (data) => {
const nextId = await getNextPsecSysId();
data.PIC_SYS_ID = nextId;
  const createdRecord = await PGITPOLINSTCHARGE.create(data);

      return {
        success: true,
        message: 'Record created successfully',
        data: createdRecord,
      };
    };


exports.update = async (id, updatedData) => {
  const item = await PGITPOLINSTCHARGE.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLINSTCHARGE with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLINSTCHARGE.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLINSTCHARGE with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};