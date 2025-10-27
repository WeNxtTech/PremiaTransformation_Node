const { sequelize, QueryTypes } = require('../models');

exports.get = async (type) => {
 
  const query = `  SELECT PC_CODE,PC_DESC FROM PCOM_CODES WHERE PC_TYPE = :type `;
  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: {type} 
  });
     console.log(records)
  return records;
};
