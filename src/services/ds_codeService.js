const { sequelize, QueryTypes } = require("../models");
exports.get = async () => {
  const query = `SELECT * FROM DS_CODE_MAPPING;`;

  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  return records;
};