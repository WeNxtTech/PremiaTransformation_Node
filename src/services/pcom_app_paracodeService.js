const { sequelize, QueryTypes } = require('../models');

 exports.get = async (type) => {
 
 const query = `
    SELECT PARA_SUB_CODE AS CODE, PARA_NAME AS DESCRIPTION FROM PCOM_APP_PARAMETER WHERE PARA_CODE = :type
    UNION ALL
    SELECT PC_CODE AS CODE, PC_DESC AS DESCRIPTION FROM PCOM_CODES WHERE PC_TYPE = :type`;

  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: { type }
  });

  return records;
};



// exports.get = async (type) => {
//   let query;
//   if (type === 'APP_PARAMETER') {
//     query = `SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = :type`;
//   } else if (type === 'CODES') {
//     query = `SELECT PC_CODE, PC_DESC FROM PCOM_CODES WHERE PC_TYPE = :type`;
//   } else {
//     throw new Error('Invalid type parameter');
//   }

//   const records = await sequelize.query(query, {
//     type: QueryTypes.SELECT,
//     replacements: { type }
//   });

//   return records;
// };