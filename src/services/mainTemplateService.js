const { sequelize, QueryTypes } = require('../models');

exports.getMain = async () => {
  const query = `SELECT * FROM IM_PROG_FIELD_DEFN WHERE PFD_PROG_CODE ='PGIT6_01' ORDER BY PFD_SEQ_NO;`;
  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  return records;
};