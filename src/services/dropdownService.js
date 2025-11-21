// // const { PGIM_LOV_DEFN, sequelize } = require("../models");

// // class DropdownService {
// //   async getDropdownData(queryParams) {
// //     const { PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_PROG_CODE } = queryParams;
// //     try {
// //       if (!PLD_BLOCK_NAME || !PLD_FIELD_NAME) {
// //         throw new Error(
// //           "Missing required fields: PLD_BLOCK_NAME or PLD_FIELD_NAME"
// //         );
// //       }

// //       const lovDef = await PGIM_LOV_DEFN.findOne({
// //         where: {
// //           PLD_BLOCK_NAME,
// //           PLD_FIELD_NAME,
// //           PLD_PROG_CODE,
// //           PLD_MOD_CODE: null,
// //         },
// //       });

// //       if (!lovDef) {
// //         throw new Error("LOV definition not found");
// //       }

// //       let sqlQuery = lovDef.PLD_LOV_SELECT_STMT;

// //       if (!sqlQuery) {
// //         throw new Error("No SQL statement found in PLD_LOV_SELECT_STMT");
// //       }
// //       const paramMap = {
// //         P_PARA_1: lovDef.PLD_PARA_COL_1,
// //         P_PARA_2: lovDef.PLD_PARA_COL_2,
// //         P_PARA_3: lovDef.PLD_PARA_COL_3,
// //         P_PARA_4: lovDef.PLD_PARA_COL_4,
// //         P_PARA_5: lovDef.PLD_PARA_COL_5,
// //       };
// //       sqlQuery = sqlQuery.replace(
// //         /:PARAMETER\.(P_PARA_[1-5])/g,
// //         (match, key) => {
// //           const col = paramMap[key];

// //           if (!col) {
// //             console.warn(`Warning: No column found for parameter ${key}`);
// //             return "NULL";
// //           }

// //           return col;
// //         }
// //       );

// //       const bind = {
// //         "GLOBAL.M_LANG_CODE": "ENG",
// //         "GLOBAL.M_LOGIN_APP_CODE": "01",
// //       };

// //       const results = await sequelize.query(sqlQuery, {
// //         type: sequelize.QueryTypes.SELECT,
// //         bind,
// //       });

// //       console.log(results);

// //       return {
// //         blockName: PLD_BLOCK_NAME,
// //         fieldName: PLD_FIELD_NAME,
// //         programCode: PLD_PROG_CODE,
// //         data: results,
// //       };
// //     } catch (error) {
// //       console.error("Error in DropdownService:", error);
// //       throw error;
// //     }
// //   }
// // }

// // module.exports = new DropdownService();














const { PGIM_LOV_DEFN, sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

class DropdownService {
  async getDropdownData(queryParams) {
    const { PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_PROG_CODE ,custCode} = queryParams;

   
    if (!PLD_BLOCK_NAME || !PLD_FIELD_NAME) {
      throw new Error("Missing required fields: PLD_BLOCK_NAME or PLD_FIELD_NAME");
    } 

    const lovDef = await PGIM_LOV_DEFN.findOne({
      where: { PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_PROG_CODE, PLD_MOD_CODE: null }
    });
    if (!lovDef) {
      throw new Error("LOV definition not found");
    } 
    let sql = lovDef.PLD_LOV_SELECT_STMT;
    if (!sql) {
      throw new Error("No SQL statement found in PLD_LOV_SELECT_STMT");
    }

    const paramMap = {
      P_PARA_1: lovDef.PLD_PARA_COL_1,
      P_PARA_2: lovDef.PLD_PARA_COL_2,
      P_PARA_3: lovDef.PLD_PARA_COL_3,
      P_PARA_4: lovDef.PLD_PARA_COL_4,
      P_PARA_5: lovDef.PLD_PARA_COL_5,
      custCode: custCode || null,
    };
    sql = sql.replace(/:PARAMETER\.(P_PARA_[1-5])/g, (_m, key) => (paramMap[key] ? paramMap[key] : "NULL")); 
    sql = sql.replace(/:GLOBAL\.M_LANG_CODE/g, ':langCode');
    sql = sql.replace(/:GLOBAL\.M_LOGIN_APP_CODE/g, ':loginAppCode'); 
    sql = sql.replace(/:PGIT_POLICY\.POL_CUST_CODE/g, ':custCode');

const bind = {
  langCode: 'ENG',
  loginAppCode: '01',
  custCode: custCode || null,
  P_PARA_1: 'ENG',                         // this is data value, not column name
  P_PARA_2: queryParams.P_PARA_3|| custCode || null,              // customer code as data value
  P_PARA_3: queryParams.P_PARA_3 || null,
  P_PARA_4: queryParams.P_PARA_4 || null,
  P_PARA_5: queryParams.P_PARA_5 || null
};

    Object.keys(bind).forEach(k => {
      if (!new RegExp(`:${k}(\\b|\\W)`).test(sql)) delete bind[k];
    }); 
    const queryOptions = { type: QueryTypes.SELECT };
    if (Object.keys(bind).length) {
      queryOptions.bind = bind;
    } 

    const rows = await sequelize.query(sql, queryOptions); 

    return {
      blockName: PLD_BLOCK_NAME,
      fieldName: PLD_FIELD_NAME,
      programCode: PLD_PROG_CODE,
      data: rows
    }; 
  }
}

module.exports = new DropdownService();

