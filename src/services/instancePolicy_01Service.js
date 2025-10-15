const { sequelize, QueryTypes } = require('../models');

exports.getInstPol = async () => {
  const query = `SELECT * FROM IM_INSTANCE where inst_prog_code ='PGIT6_01';`;
  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  return records;
};