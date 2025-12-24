const { PgitPolicy, sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

// Oracle Date Converter for procedure
function convertToOracleDate(input) {
  if (!input) return null;
  const d = new Date(input);
  if (isNaN(d)) return null;
  
  const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const day = String(d.getDate()).padStart(2, "0");
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  
  return `${day}-${month}-${year} ${hh}:${mm}:${ss}`;
}

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

  // 🔥 PROCEDURE CALL - PGIPK_POLICY_ENTRY.Pr_Dflt_Currency
  const procedureParams = {
    P_POL_SYS_ID: createdRecord.POL_SYS_ID,
    P_END_NO_IDX: parseInt(createdRecord.POL_END_NO_IDX) || 0,
    P_END_SR_NO: parseInt(createdRecord.POL_END_SR_NO) || 0,
    P_DS_TYPE: data.POL_DS_TYPE ,
    P_DS_CODE: data.POL_DS_CODE ,
    P_PROD_CODE: data.POL_PROD_CODE ,
    P_POL_ISS_DT: convertToOracleDate(createdRecord.POL_ISSUE_DT),
    P_COMP_CODE: data.POL_COMP_CODE ,
  };

  console.log('🔍 Calling Pr_Dflt_Currency:', procedureParams);

  const plsql = `
    BEGIN
      PGIPK_POLICY_ENTRY.Pr_Dflt_Currency(
        :P_POL_SYS_ID, :P_END_NO_IDX, :P_END_SR_NO,
        :P_DS_TYPE, :P_DS_CODE, :P_PROD_CODE,
        :P_POL_ISS_DT, :P_COMP_CODE
      );
    END;
  `;

  try {
    await sequelize.query(plsql, {
      type: QueryTypes.RAW,
      bind: procedureParams,
    });
    console.log('✅ Procedure executed successfully');
  } catch (error) {
    console.error('⚠️ Procedure failed (policy still created):');
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
