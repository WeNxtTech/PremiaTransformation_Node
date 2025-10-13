const { sequelize, QueryTypes } = require('../models');

exports.get = async () => {
  const query = `SELECT * FROM LMCUSTCLASSAPPLUSERS`;
  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  return records;
};