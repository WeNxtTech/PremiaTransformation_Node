// services/dropdownService.js

const { PGIM_LOV_DEFN, sequelize } = require("../models");

class DropdownService {
  async getDropdownData(queryParams) {
    const { PLD_BLOCK_NAME, PLD_FIELD_NAME } = queryParams;
    try {
      if (!PLD_BLOCK_NAME || !PLD_FIELD_NAME) {
        throw new Error("Missing required fields: PLD_BLOCK_NAME or PLD_FIELD_NAME");
      }

      const lovDef = await PGIM_LOV_DEFN.findOne({
        where: {
          PLD_BLOCK_NAME,
          PLD_FIELD_NAME,
          PLD_MOD_CODE: null
        }
      });

      if (!lovDef) {
        throw new Error("LOV definition not found");
      }

      let sqlQuery = lovDef.PLD_LOV_SELECT_STMT;

      if (!sqlQuery) {
        throw new Error("No SQL statement found in PLD_LOV_SELECT_STMT");
      }
      const paramMap = {
        P_PARA_1: lovDef.PLD_PARA_COL_1,
        P_PARA_2: lovDef.PLD_PARA_COL_2,
        P_PARA_3: lovDef.PLD_PARA_COL_3,
        P_PARA_4: lovDef.PLD_PARA_COL_4,
        P_PARA_5: lovDef.PLD_PARA_COL_5
      };
      sqlQuery = sqlQuery.replace(/:PARAMETER\.(P_PARA_[1-5])/g, (match, key) => {
        const col = paramMap[key];

        if (!col) {
          console.warn(`Warning: No column found for parameter ${key}`);
          return "NULL";
        }

        return col;
      });

      const results = await sequelize.query(sqlQuery, {
        type: sequelize.QueryTypes.SELECT
      });

      console.log(results)

      return {
        blockName: PLD_BLOCK_NAME,
        fieldName: PLD_FIELD_NAME,
        data: results
      };

    } catch (error) {
      console.error("Error in DropdownService:", error);
      throw error;
    }
  }
}

module.exports = new DropdownService();
