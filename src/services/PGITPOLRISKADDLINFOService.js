const { PGITPOLRISKADDLINFO , sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PGITPOLRISKADDLINFO.findAll({ where: filters, limit, offset, ...(order && { order }) });
};
async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT PRAI_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL'
  );
  return result[0].NEXTVAL || result[0].nextVal;
}


exports.create = async (data) => {
  const transaction = await sequelize.transaction();

  try {

    // ✅ Validate required fields (lowercase)
    if (!data.prai_risk_id || !data.prai_psec_sys_id) {
      throw new Error('prai_risk_id and prai_psec_sys_id are required');
    }

    // 🔴 Duplicate validation (UNIQUE TOGETHER)
    const existing = await PGITPOLRISKADDLINFO.findOne({
      where: {
        prai_risk_id: data.prai_risk_id,
        prai_psec_sys_id: data.prai_psec_sys_id,
        prai_pol_sys_id: data.prai_pol_sys_id
      },
      transaction
    });

    if (existing) {
      throw new Error(
        `Record already exists for RISK_ID ${data.prai_risk_id} and PSEC_SYS_ID ${data.prai_psec_sys_id}`
      );
    }

    // 🔹 Generate Sequence ID
    const nextId = await getNextPolSysId();
    data.prai_sys_id = nextId;

    const createdRecord = await PGITPOLRISKADDLINFO.create(data, {
      transaction
    });

    // 🔹 Update lvl1_sys_id same as sys_id
    await createdRecord.update(
      {
        prai_lvl1_sys_id: createdRecord.prai_sys_id,
      },
      { transaction }
    );

    await transaction.commit();

    // 🔹 Response Format
    const responseData = {
      prai_sys_id: createdRecord.prai_sys_id,
      prai_pol_sys_id: createdRecord.prai_pol_sys_id,
      prai_end_no_idx: createdRecord.prai_end_no_idx,
      prai_psec_sys_id: createdRecord.prai_psec_sys_id,
      prai_risk_lvl_no: createdRecord.prai_risk_lvl_no,
      prai_risk_sr_no: createdRecord.prai_risk_sr_no,
      prai_lvl1_sr_no: createdRecord.prai_lvl1_sr_no,
      prai_lvl2_sr_no: createdRecord.prai_lvl2_sr_no,
      prai_lvl1_sys_id: createdRecord.prai_lvl1_sys_id,
      prai_risk_id: createdRecord.prai_risk_id
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
  const item = await PGITPOLRISKADDLINFO.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKADDLINFO with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PGITPOLRISKADDLINFO.findByPk(id);
  if (!item) {
    const error = new Error(`PGITPOLRISKADDLINFO with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PRAI_POL_SYS_ID) => {
  const items = await PGITPOLRISKADDLINFO.findAll({
    where: { PRAI_POL_SYS_ID },raw: true
  });

   const groupedResult = items.reduce((acc, row) => {
    const key = row.prai_sys_id;
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

