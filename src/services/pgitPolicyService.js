const { PgitPolicy, sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolicy.findAll({ where: filters, limit, offset, ...(order && { order }) });
};

async function getNextPolSysId() {
  const [result] = await sequelize.query('SELECT POL_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;
}

async function getNextPolNoCounter() {
  const [result] = await sequelize.query('SELECT POL_NO_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;
}

exports.create = async (data) => {
  const nextId = await getNextPolSysId();
  data.POL_SYS_ID = nextId;

  const nextNoCounter = await getNextPolNoCounter();
  const numberPart = String(nextNoCounter).padStart(4, '0');
  const year = new Date().getFullYear();
  data.POL_NO = `POL-${year}-${numberPart}`;

  const createdRecord = await PgitPolicy.create(data);

  // 🔥 EXACT PL/SQL BLOCK - Matches your cursor logic
  const plsql = `
    DECLARE
      CURSOR C1 IS
      SELECT POL_SYS_ID, POL_END_NO_IDX, POL_END_SR_NO, POL_COMP_CODE, 
             POL_DS_TYPE, POL_DS_CODE, POL_PROD_CODE, POL_ISSUE_DT
      FROM PGIT_POLICY
      WHERE POL_SYS_ID = ${createdRecord.POL_SYS_ID};
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

  console.log('🔍 Executing PL/SQL block for POL_SYS_ID:', createdRecord.POL_SYS_ID);

  try {
    await sequelize.query(plsql, {
      type: QueryTypes.RAW,
    });
    console.log('✅ PL/SQL block executed successfully');
  } catch (error) {
    console.error('⚠️ PL/SQL block failed (policy still created):', error.message || error);
  }

  const responseData = {
    POL_SYS_ID: createdRecord.POL_SYS_ID,
    POL_END_NO_IDX: createdRecord.POL_END_NO_IDX,
    POL_END_SR_NO: createdRecord.POL_END_SR_NO,
    POL_NO: createdRecord.POL_NO
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
