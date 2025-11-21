const express = require('express');
const router = express.Router();
const dropdownController = require('../controllers/dropdownController');

router.get('/', dropdownController.getDropdowns);

module.exports = router;





// const { PGIM_LOV_DEFN, sequelize } = require("../models");
// const { QueryTypes } = require("sequelize");

// class DropdownService {
//   async getDropdownData(queryParams) {
//     const { PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_PROG_CODE,custCode } = queryParams;

//     if (!PLD_BLOCK_NAME || !PLD_FIELD_NAME) {
//       throw new Error("Missing required fields: PLD_BLOCK_NAME or PLD_FIELD_NAME");
//     }

//     // Fetch the LOV definition
//     const lovDef = await PGIM_LOV_DEFN.findOne({
//       where: { PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_PROG_CODE, PLD_MOD_CODE: null }
//     });

//     if (!lovDef) {
//       throw new Error("LOV definition not found");
//     }

//     let sql = lovDef.PLD_LOV_SELECT_STMT;
//     if (!sql) {
//       throw new Error("No SQL statement found in PLD_LOV_SELECT_STMT");
//     }

//     // Normalize dotted placeholders to simple bind names
//     sql = sql.replace(/:GLOBAL\.M_LANG_CODE/g, ':langCode');
//     sql = sql.replace(/:GLOBAL\.M_LOGIN_APP_CODE/g, ':loginAppCode');
//     sql = sql.replace(/:PGIT_POLICY\.POL_CUST_CODE/g, ':custCode');
//     // Construct bind object including PLD_PARA_COL_n from lovDef or queryParams
// const bind = {
//   langCode: 'ENG',
//   loginAppCode: '01',
//   custCode: custCode || null,
//   P_PARA_1: 'ENG',                         // this is data value, not column name
//   P_PARA_2: queryParams.P_PARA_3|| custCode || null,              // customer code as data value
//   P_PARA_3: queryParams.P_PARA_3 || null,
//   P_PARA_4: queryParams.P_PARA_4 || null,
//   P_PARA_5: queryParams.P_PARA_5 || null
// };



//     // Prune bind keys not present in SQL to avoid "bind placeholders used but not provided" errors
//     Object.keys(bind).forEach(key => {
//       if (!new RegExp(`:${key}(\\b|\\W)`).test(sql)) {
//         delete bind[key];
//       }
//     });

//     // Prepare Sequelize query options
//     const queryOptions = { type: QueryTypes.SELECT };
//     if (Object.keys(bind).length > 0) {
//       queryOptions.bind = bind;
//     }

//     // Execute query
//     const rows = await sequelize.query(sql, queryOptions);


//     // Return structured data response
//     return {
//       blockName: PLD_BLOCK_NAME,
//       fieldName: PLD_FIELD_NAME,
//       programCode: PLD_PROG_CODE,
//       data: rows
//     };
//   }
// }

// module.exports = new DropdownService();


