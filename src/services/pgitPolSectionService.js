const { PgitPolSection ,sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolSection.findAll({ where: filters, limit, offset, ...(order && { order }) });
};
async function getNextPsecSysId() {
  const result = await sequelize.query(
    'SELECT PSEC_SYS_IDD_SEQ.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: sequelize.QueryTypes.SELECT }
  );
  return result[0].NEXTVAL;
}

exports.create = async (data) => {
  const transaction = await sequelize.transaction();

  try {

    // 🔴 Validate required fields
    if (!data.PSEC_POL_SYS_ID || !data.PSEC_SRNO) {
      throw new Error('PSEC_POL_SYS_ID and PSEC_SRNO are required');
    }

    // 🔴 Duplicate check (PSEC_POL_SYS_ID + PSEC_SRNO)
    const existing = await PgitPolSection.findOne({
      where: {
        PSEC_POL_SYS_ID: data.PSEC_POL_SYS_ID,
        PSEC_SRNO: data.PSEC_SRNO
      },
      transaction
    });

    if (existing) {
      throw new Error(
        `Section already exists for POL_SYS_ID ${data.PSEC_POL_SYS_ID} and SRNO ${data.PSEC_SRNO}`
      );
    }

    // 🔹 Generate sequence
    const nextId = await getNextPsecSysId();
    data.PSEC_SYS_ID = nextId;

    const createdRecord = await PgitPolSection.create(data, { transaction });

    await transaction.commit();

    const responseData = {
      PSEC_SYS_ID: createdRecord.PSEC_SYS_ID,
      PSEC_POL_SYS_ID: createdRecord.PSEC_POL_SYS_ID,
      PSEC_SEC_CODE: createdRecord.PSEC_SEC_CODE,
      PSEC_END_NO_IDX: createdRecord.PSEC_END_NO_IDX,
      PSEC_END_SR_NO: createdRecord.PSEC_END_SR_NO,
      PSEC_SRNO: createdRecord.PSEC_SRNO
    };

    return {
      success: true,
      message: 'Record created successfully',
      data: responseData,
    };

  } catch (error) {
    await transaction.rollback();
    throw error;
  }
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


exports.getByPolSysId = async (PSEC_POL_SYS_ID) => {
  const items = await PgitPolSection.findAll({
    where: { PSEC_POL_SYS_ID },raw: true
  });
  const groupedResult = items.reduce((acc, row) => {
    const key = row.PSEC_SYS_ID;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult; 
  // return {
  //   success: true,
  //   message: 'Records fetched successfully',
  //   data: items
  // };
};

