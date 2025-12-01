  const { sequelize, QueryTypes } = require('../models');

exports.getSecLov = async (dasDapProdCode, dasDsType) => {
  const query = `
    SELECT DISTINCT 
      A.DAS_SEC_CODE,
      B.PC_DESC
    FROM PGIM_DOC_APPL_SECTION A, PCOM_CODES B
    WHERE 
       B.PC_TYPE = 'SECTION'
      AND B.PC_CODE = A.DAS_SEC_CODE
      AND A.DAS_DAP_PROD_CODE = :dasDapProdCode
  `;
  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: { dasDapProdCode, dasDsType } 
  });
  return records;
};
