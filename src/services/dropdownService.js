// const { PGIM_LOV_DEFN, sequelize } = require("../models");
// const { QueryTypes } = require("sequelize");

// class DropdownService {
//   async getDropdownData(queryParams) {
//     const { PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_PROG_CODE, custCode, POL_FM_DT } = queryParams;

//     if (!PLD_BLOCK_NAME || !PLD_FIELD_NAME) {
//       throw new Error("Missing required fields: PLD_BLOCK_NAME or PLD_FIELD_NAME");
//     }     

//     // Map special fields to raw SQL queries
//     const specialQueries = {
//       POL_SRC_CODE:
//         "SELECT CUST_CODE, CUST_NAME FROM PCOM_CUST_CATG, PCOM_CUSTOMER WHERE CC_TYPE IN ('002', '012')",
//       POL_INSTL_METHOD:
//         "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'INSTL_METHOD'",
//       POL_FLEX_08:
//         "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'MODE_OF_PAY'",
//       POL_SRC_TYPE:
//         "SELECT ROWID, PARA_SUB_CODE, DECODE('ENG', 'ENG', PARA_NAME, PARA_BL_NAME), NULL, NULL FROM PCOM_APP_PARAMETER WHERE PARA_APP_CODE = '01' AND PARA_CODE = 'SRC_TYPE'",
//     };

//     // Execute special query if exists
//     if (specialQueries[PLD_FIELD_NAME]) {
//       const rows = await sequelize.query(specialQueries[PLD_FIELD_NAME], {
//         type: QueryTypes.SELECT,
//       });
//       return {
//         blockName: PLD_BLOCK_NAME,
//         fieldName: PLD_FIELD_NAME,
//         programCode: PLD_PROG_CODE,
//         data: rows,
//       };
//     }

//     // Fetch LOV SQL definition
//     const lovDef = await PGIM_LOV_DEFN.findOne({
//       where: { PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_PROG_CODE, PLD_MOD_CODE: null },
//     });

//     if (!lovDef) throw new Error("LOV definition not found");

//     let sql = lovDef.PLD_LOV_SELECT_STMT;
//     if (!sql) throw new Error("No SQL statement found in LOV definition");

//     // Normalize parameter prefixes to simple bind placeholders
//     sql = sql.replace(/:PARAMETER\.(P_PARA_[1-5])/g, (_m, p) => `:${p}`);


//     // Normalize other dotted placeholders
//     sql = sql.replace(/:GLOBAL\.M_LANG_CODE/g, ":langCode");
//     sql = sql.replace(/:GLOBAL\.M_LOGIN_APP_CODE/g, ":loginAppCode");
//     sql = sql.replace(/:PGIT_POLICY\.POL_CUST_CODE/g, ":custCode");
//     sql = sql.replace(/:PGIT_POLICY\.POL_FM_DT/g, ":POL_FM_DT");

//     // Prepare bind values (use safe defaults)
//     const bind = {
//       langCode: "ENG",
//       loginAppCode: "01",
//       custCode: custCode || null,
//       POL_FM_DT: POL_FM_DT || null,
//       P_PARA_1: queryParams.P_PARA_1 || "ENG",
//       P_PARA_2: queryParams.P_PARA_2 || custCode || null,
//       P_PARA_3: queryParams.P_PARA_3 || POL_FM_DT || null,
//       P_PARA_4: queryParams.P_PARA_4 || null,
//       P_PARA_5: queryParams.P_PARA_5 || null,
//     };
// console.log(sql);

//     // Prune binds not present in SQL
//     Object.keys(bind).forEach((key) => {
//       if (!new RegExp(`:${key}(\\b|\\W)`).test(sql)) {
//         delete bind[key];
//       }
//     });

//     // Execute query with binds
//     const rows = await sequelize.query(sql, {
//       type: QueryTypes.SELECT,
//       bind,
//     });

//     return {
//       blockName: PLD_BLOCK_NAME,
//       fieldName: PLD_FIELD_NAME,
//       programCode: PLD_PROG_CODE,
//       data: rows,
//     };
//   }
// }

// module.exports = new DropdownService();














const { PGIM_LOV_DEFN, sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

class DropdownService {
  async getDropdownData(queryParams) {
    const { PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_PROG_CODE, custCode, POL_FM_DT } = queryParams;

    if (!PLD_BLOCK_NAME || !PLD_FIELD_NAME) {
      throw new Error("Missing required fields: PLD_BLOCK_NAME or PLD_FIELD_NAME");
    }

    // Special queries map for fixed LOV fields
    const specialQueries = {
      POL_SRC_CODE:
        "SELECT CUST_CODE, CUST_NAME FROM PCOM_CUST_CATG, PCOM_CUSTOMER WHERE CC_TYPE IN ('002', '012')",
      POL_INSTL_METHOD:
        "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'INSTL_METHOD'",
      POL_FLEX_08:
        "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'MODE_OF_PAY'",
      POL_SRC_TYPE:
        "SELECT ROWID, PARA_SUB_CODE, DECODE('ENG', 'ENG', PARA_NAME, PARA_BL_NAME), NULL, NULL FROM PCOM_APP_PARAMETER WHERE PARA_APP_CODE = '01' AND PARA_CODE = 'SRC_TYPE'",
    };

    if (specialQueries[PLD_FIELD_NAME]) {
      const rows = await sequelize.query(specialQueries[PLD_FIELD_NAME], {
        type: QueryTypes.SELECT,
      });
      return {
        blockName: PLD_BLOCK_NAME,
        fieldName: PLD_FIELD_NAME,
        programCode: PLD_PROG_CODE,
        data: this.convertObjectsToFilteredObjects(rows),
      };
    }

    const lovDef = await PGIM_LOV_DEFN.findOne({
      where: { PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_PROG_CODE, PLD_MOD_CODE: null },
    });

    if (!lovDef) throw new Error("LOV definition not found");

    let sql = lovDef.PLD_LOV_SELECT_STMT;

    sql = sql.replace(/:PARAMETER\.(P_PARA_[1-5])/g, (_m, p) => `:${p}`);
    sql = sql.replace(/:GLOBAL\.M_LANG_CODE/g, ":langCode");
    sql = sql.replace(/:GLOBAL\.M_LOGIN_APP_CODE/g, ":loginAppCode");
    sql = sql.replace(/:PGIT_POLICY\.POL_CUST_CODE/g, ":custCode");
    sql = sql.replace(/:PGIT_POLICY\.POL_FM_DT/g, ":POL_FM_DT");

    const bind = {
      langCode: "ENG",
      loginAppCode: "01",
      custCode: custCode || null,
      POL_FM_DT: POL_FM_DT || null,
      P_PARA_1: queryParams.P_PARA_1 || "ENG",
      P_PARA_2: queryParams.P_PARA_2 || custCode || null,
      P_PARA_3: queryParams.P_PARA_3 || POL_FM_DT || null,
      P_PARA_4: queryParams.P_PARA_4 || null,
      P_PARA_5: queryParams.P_PARA_5 || null,
    };

    Object.keys(bind).forEach((key) => {
      if (!new RegExp(`:${key}(\\b|\\W)`).test(sql)) {
        delete bind[key];
      }
    });

    const rows = await sequelize.query(sql, {
      type: QueryTypes.SELECT,
      bind,
    });

    return {
      blockName: PLD_BLOCK_NAME,
      fieldName: PLD_FIELD_NAME,
      programCode: PLD_PROG_CODE,
      data: this.convertObjectsToFilteredObjects(rows),
    };
  }

  // Helper to return objects excluding "NULL" and "ROWID" keys
  convertObjectsToFilteredObjects(rows) {
    if (!rows || rows.length === 0) return [];
    return rows.map(row => {
      const filtered = {};
      Object.keys(row).forEach(key => {
        if (key !== "NULL" && key !== "ROWID" && key !=="NULL_1" && key !=="ASSR_CIVIL_ID") {
          filtered[key] = row[key];
        }
      });
      return filtered;
    });
  }
}

module.exports = new DropdownService();
