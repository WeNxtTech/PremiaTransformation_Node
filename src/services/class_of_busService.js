const { sequelize, QueryTypes } = require('../models');

exports.getClassOfBus = async () => {
  const query = `SELECT CLASS_CODE,CLASS_DESC FROM PGIM_CLASS`;
  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  return records;
};