const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

class SimpleDropdownService {

  async getAcGenType() {

    const sql = `
      SELECT PARA_SUB_CODE,PARA_NAME
      FROM PCOM_APP_PARAMETER
      WHERE PARA_CODE = 'AC_GEN_TYPE'
    `;

    const rows = await sequelize.query(sql, {
      type: QueryTypes.SELECT
    });

    return rows;
  }

}

module.exports = new SimpleDropdownService();