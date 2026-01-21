const { sequelize, QueryTypes } = require("../models");
exports.get = async () => {
  const query = `SELECT * FROM WCLIT_SCREEN_SETUP ORDER BY COMPANY_ID, PRODUCT_CODE, BUSINESS_TYPE, SCREEN_ID, BLOCK_ID`;

  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  return records;
};