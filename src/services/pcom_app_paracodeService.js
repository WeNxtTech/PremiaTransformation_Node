const { sequelize, QueryTypes } = require('../models');

 exports.get = async (type) => {
  if (type === 'PCOM_CUSTOMER') {
    const customerQuery = `SELECT CUST_CODE AS CODE, CUST_NAME AS DESCRIPTION  FROM PCOM_CUSTOMER `;
    return sequelize.query(customerQuery, {
      type: QueryTypes.SELECT
    });
  }

  if (type === 'FM_CURRENCY') {
    const currencyQuery = ` SELECT DISTINCT CURR_CODE AS CODE, CURR_NAME AS DESCRIPTION FROM FM_CURRENCY `;
    return sequelize.query(currencyQuery, {
      type: QueryTypes.SELECT
    });
  }
 
 const query = ` SELECT PARA_SUB_CODE AS CODE, PARA_NAME AS DESCRIPTION FROM PCOM_APP_PARAMETER_API WHERE PARA_CODE = :type
    UNION 
    SELECT PC_CODE AS CODE, PC_DESC AS DESCRIPTION FROM PCOM_CODES_API WHERE PC_TYPE = :type
    UNION
    SELECT  ASSR_CODE AS CODE,  ASSR_NAME AS DESCRIPTION FROM PCOM_ASSURED WHERE ASSR_CUST_CODE =:type
    UNION
    SELECT CUST_CODE AS CODE, CUST_NAME AS DESCRIPTION FROM PCOM_CUST_CATG, PCOM_CUSTOMER WHERE CC_TYPE =:type
    `;

  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: { type }
  });

  return records;
};



