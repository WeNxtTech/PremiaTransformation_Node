const { PgitPolicy, sequelize } = require('../models');
const { QueryTypes, Op, fn, col, where } = require('sequelize');


exports.getAll = async (
  { search },
  { limit = 10, offset = 0, order } = {}
) => {

  let whereClause = {};

  if (search) {
    whereClause = {
      [Op.or]: [
        { POL_NO: { [Op.like]: `%${search}%` } },
        { POL_PREM_CURR_CODE: { [Op.like]: `%${search}%` } },
        { POL_DFLT_SI_CURR_CODE: { [Op.like]: `%${search}%` } },
        { POL_SRC_TYPE: { [Op.like]: `%${search}%` } },
        { POL_ASSR_CODE: { [Op.like]: `%${search}%` } },
        { POL_CUST_CODE: { [Op.like]: `%${search}%` } },
        { POL_SRC_CODE: { [Op.like]: `%${search}%` } },

        where(fn('TO_CHAR', col('POL_ISSUE_DT'), 'YYYY-MM-DD'), {
          [Op.like]: `%${search}%`,
        }),
        where(fn('TO_CHAR', col('POL_FM_DT'), 'YYYY-MM-DD'), {
          [Op.like]: `%${search}%`,
        }),
        where(fn('TO_CHAR', col('POL_TO_DT'), 'YYYY-MM-DD'), {
          [Op.like]: `%${search}%`,
        }),
      ],
    };
  }

  return PgitPolicy.findAll({
    attributes: [
      'POL_NO',
      'POL_ISSUE_DT',
      'POL_FM_DT',
      'POL_TO_DT',
      'POL_PREM_CURR_CODE',
      'POL_DFLT_SI_CURR_CODE',
      'POL_SRC_TYPE',
      'POL_ASSR_CODE',
      'POL_CUST_CODE',
      'POL_SRC_CODE',
    ],
    where: whereClause,
    limit: Number(limit),
    offset: Number(offset),
    order: order || [['POL_NO', 'DESC']],
    
  });
};


exports.getById = async (id) => {
  const policy = await PgitPolicy.findByPk(id);

  if (!policy) {
    const error = new Error(`Policy with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }

  return {
    success: true,
    message: 'Policy fetched successfully',
    data: policy
  };
};







async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT POL_SYS_ID_SEQ.NEXTVAL AS NEXTVAL FROM DUAL'
  );
  return result[0].NEXTVAL;
}

async function getNextPolNoCounter() {
  const [result] = await sequelize.query(
    'SELECT POL_NO_SEQ.NEXTVAL AS NEXTVAL FROM DUAL'
  );
  return result[0].NEXTVAL;
}



exports.create = async (data) => {
  const nextId = await getNextPolSysId();
  data.POL_SYS_ID = nextId;

  const nextNoCounter = await getNextPolNoCounter();
  const numberPart = String(nextNoCounter).padStart(4, '0');
  const year = new Date().getFullYear();
  data.POL_NO = `POL-${year}-${numberPart}`;

  const createdRecord = await PgitPolicy.create(data);

  const plsql = `
    DECLARE
      CURSOR C1 IS
        SELECT POL_SYS_ID, POL_END_NO_IDX, POL_END_SR_NO, POL_COMP_CODE,
               POL_DS_TYPE, POL_DS_CODE, POL_PROD_CODE, POL_ISSUE_DT
        FROM PGIT_POLICY
        WHERE POL_SYS_ID = :polSysId;
    BEGIN
      FOR I IN C1 LOOP
        Pcopk_Sys_Vars.M_COMP_CODE := I.POL_COMP_CODE;
        PGIPK_POLICY_ENTRY.Pr_Dflt_Currency(
          P_POL_SYS_ID => I.POL_SYS_ID,
          P_END_NO_IDX => I.POL_END_NO_IDX,
          P_END_SR_NO  => I.POL_END_SR_NO,
          P_DS_TYPE    => I.POL_DS_TYPE,
          P_DS_CODE    => I.POL_DS_CODE,
          P_PROD_CODE  => I.POL_PROD_CODE,
          P_POL_ISS_DT => TRUNC(I.POL_ISSUE_DT),
          P_COMP_CODE  => I.POL_COMP_CODE
        );
      END LOOP;
    END;
  `;

  try {
    await sequelize.query(plsql, {
      replacements: { polSysId: createdRecord.POL_SYS_ID },
      type: QueryTypes.RAW,
    });
    console.log('PL/SQL executed successfully');
  } catch (err) {
    console.error('PL/SQL failed (policy created):', err.message);
  }

  return {
    success: true,
    message: 'Record created successfully',
    data: {
      POL_SYS_ID: createdRecord.POL_SYS_ID,
      POL_END_NO_IDX: createdRecord.POL_END_NO_IDX,
      POL_END_SR_NO: createdRecord.POL_END_SR_NO,
      POL_NO: createdRecord.POL_NO,
    },
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
