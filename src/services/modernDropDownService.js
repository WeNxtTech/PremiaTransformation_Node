const { sequelize, QueryTypes } = require('../models');

exports.getInsured = async (custcode) => {
  const query = `SELECT   ASSR_CODE,  ASSR_NAME FROM PCOM_ASSURED WHERE ASSR_CUST_CODE =:custcode  `;
  return sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: { custcode }
  });
}; 


exports.getSrcCode = async (srccode) => {
  const query = ` SELECT CUST_CODE , CUST_NAME FROM PCOM_CUST_CATG, PCOM_CUSTOMER WHERE CC_TYPE =:srccode `;
  return sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: { srccode }
  });
}; 


exports.getCurrency = async () => {
  const query = `  SELECT DISTINCT CURR_CODE, CURR_NAME FROM FM_CURRENCY `;
  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  return records;
};        
    
exports.getCustomer = async () => {
  const query = `SELECT CUST_CODE,CUST_NAME FROM  PCOM_CUSTOMER `;
  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });
  return records;
};        

