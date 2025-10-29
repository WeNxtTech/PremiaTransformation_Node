const { sequelize, QueryTypes } = require('../models');

 exports.get = async (type) => {
 
 const query = ` SELECT PARA_SUB_CODE AS CODE, PARA_NAME AS DESCRIPTION FROM PCOM_APP_PARAMETER WHERE PARA_CODE = :type
    UNION 
    SELECT PC_CODE AS CODE, PC_DESC AS DESCRIPTION FROM PCOM_CODES WHERE PC_TYPE = :type`;

  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: { type }
  });

  return records;
};



