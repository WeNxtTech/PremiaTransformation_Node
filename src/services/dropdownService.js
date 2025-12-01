const { PGIM_LOV_DEFN, sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

// ----------- DATE CONVERSION FIX ------------
function convertToOracleDate(input) {
  if (!input) return null;

  const d = new Date(input);
  if (isNaN(d)) return null;

  const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

  const day = String(d.getDate()).padStart(2, "0");
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();

  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");

  return `${day}-${month}-${year} ${hh}:${mm}:${ss}`;
}

// ----------- Extract SELECT Columns (For Auto Filter Column) ------------
function extractSelectColumns(sql) {
  const selectPart = sql.split(/from/i)[0];
  return selectPart
    .replace(/select/i, "")
    .split(",")
    .map(col => col.trim().split(" ")[0]);
}

// ----------- DUPLICATE BIND FIX ------------
function expandDuplicateBinds(sql, bind) {
  const newBind = {};

  for (const key of Object.keys(bind)) {
    const regex = new RegExp(`:${key}(?![A-Za-z0-9_])`, "g");
    const matches = [...sql.matchAll(regex)];

    if (matches.length > 1) {
      matches.forEach((_, i) => {
        const newKey = `${key}_${i + 1}`;
        sql = sql.replace(`:${key}`, `:${newKey}`);
        newBind[newKey] = bind[key];
      });
    } else if (matches.length === 1) {
      newBind[key] = bind[key];
    }
  }

  return { sql, bind: newBind };
}

class DropdownService {
  async getDropdownData(queryParams) {
    const { PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_PROG_CODE, custCode, POL_FM_DT, filter ,prodCode ,secCode

    } = queryParams;

    if (!PLD_BLOCK_NAME || !PLD_FIELD_NAME) {
      throw new Error("Missing required fields: PLD_BLOCK_NAME or PLD_FIELD_NAME");
    }

    const specialQueries = {
      POL_SRC_CODE:
        "SELECT CUST_CODE, CUST_NAME FROM PCOM_CUST_CATG, PCOM_CUSTOMER WHERE CC_TYPE IN ('002', '012')",
      POL_INSTL_METHOD:
        "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'INSTL_METHOD'",
      POL_FLEX_08:
        "SELECT PARA_SUB_CODE, PARA_NAME FROM PCOM_APP_PARAMETER WHERE PARA_CODE = 'MODE_OF_PAY'"
    };

    // ----------- SPECIAL QUERIES WITH FILTER ADDED ------------
    if (specialQueries[PLD_FIELD_NAME]) {
      let sql = specialQueries[PLD_FIELD_NAME];
      let bind = {};

      if (filter && filter.trim()) {
        sql += ` AND UPPER(CUST_NAME) LIKE UPPER(:filterStr)`;
        bind.filterStr = `${filter.trim()}%`;
      }

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

    // **************** NORMAL LOV FLOW (your existing logic) ****************

    const lovDef = await PGIM_LOV_DEFN.findOne({
      where: { PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_PROG_CODE },
    });

    if (!lovDef) throw new Error("LOV definition not found");

    let sql = lovDef.PLD_LOV_SELECT_STMT;

    sql = sql.replace(/:PARAMETER\.(P_PARA_[1-5])/g, (_m, p) => `:${p}`);
    sql = sql.replace(/:GLOBAL\.M_LANG_CODE/g, ":langCode");
    sql = sql.replace(/:GLOBAL\.M_LOGIN_APP_CODE/g, ":loginAppCode");
    sql = sql.replace(/:PGIT_POLICY\.POL_CUST_CODE/g, ":custCode");
    sql = sql.replace(/:PGIT_POLICY\.POL_FM_DT/g, ":POL_FM_DT");
    sql = sql.replace(/:GLOBAL\.M_PROD_CODE/g, ":prodCode");
    sql = sql.replace(/:GLOBAL\.M_SECTION_CODE/g, ":secCode");

    const sqlUses_PARA3 = sql.includes(":P_PARA_3");
    const sqlUses_POLFMDT = sql.includes(":POL_FM_DT");

    let bind = {
      langCode: "ENG",
      loginAppCode: "01",
      custCode: custCode || null,
      prodCode: prodCode || null,
      secCode: secCode || null,
      P_PARA_1: queryParams.P_PARA_1 || prodCode || "ENG",
      P_PARA_2: queryParams.P_PARA_2 || custCode || secCode || "01" || null,
      P_PARA_3: queryParams.P_PARA_3 || POL_FM_DT || null,
      P_PARA_4: queryParams.P_PARA_4 || null,
      P_PARA_5: queryParams.P_PARA_5 || null,
      POL_FM_DT: POL_FM_DT || null
    };

    if (sqlUses_PARA3 && bind.P_PARA_3)
      bind.P_PARA_3 = convertToOracleDate(bind.P_PARA_3);

    if (sqlUses_POLFMDT && bind.POL_FM_DT)
      bind.POL_FM_DT = convertToOracleDate(bind.POL_FM_DT);

    // ----------- AUTO DETECT FILTER COLUMN -----------
    if (filter && filter.trim()) {
      let filterColumn = lovDef.PLD_FILTER_COLUMN;

      if (!filterColumn || !filterColumn.trim()) {
        const selectCols = extractSelectColumns(sql);
        filterColumn = selectCols[2] || selectCols[1] || selectCols[0];
      }

      if (/where/i.test(sql)) {
        sql += ` AND UPPER(${filterColumn}) LIKE UPPER(:filterStr)`;
      } else {
        sql += ` WHERE UPPER(${filterColumn}) LIKE UPPER(:filterStr)`;
      }

      bind.filterStr = `${filter.trim()}%`;
    }

    // Remove unused binds
    Object.keys(bind).forEach((key) => {
      if (!new RegExp(`:${key}(\\b|\\W)`).test(sql)) {
        delete bind[key];
      }
    });

    ({ sql, bind } = expandDuplicateBinds(sql, bind));



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
  

  convertObjectsToFilteredObjects(rows) {
    if (!rows || rows.length === 0) return [];
    return rows.map(row => {
      const filtered = {};
      Object.keys(row).forEach(key => {
        if (key !== "NULL" && key !== "ROWID" && key !== "NULL_1" && key !== "ASSR_CIVIL_ID"
          && key !== "PSMI_ADD_SI_YN" && key !== "NULL_2"
        ) {
          filtered[key] = row[key];
        }
      });
      return filtered;
    });
  }
}

module.exports = new DropdownService();
