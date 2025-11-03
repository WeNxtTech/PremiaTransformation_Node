// const { sequelize, QueryTypes } = require('../models');

// exports.getRiskLov = async () => {
//   const query = `
//  SELECT PLD_PROG_CODE,PLD_BLOCK_NAME,PLD_FIELD_NAME,PLD_LOV_TITLE,PLD_LOV_SELECT_STMT,PLD_VALUES,PLD_INDEPT_DEPT,PC_PARA
// FROM PGIM_LOV_DEFN_API 
// WHERE ROWID IN (
//     SELECT MIN(ROWID)
//     FROM PGIM_LOV_DEFN_API
//     WHERE PLD_PROG_CODE = 'PGIT6_03'
//       AND PLD_BLOCK_NAME = 'PGIT_POL_RISK_ADDL_INFO_01'
//       AND (PLD_MOD_CODE = '20-PD-01_01' OR PLD_MOD_CODE IS NULL)
//     GROUP BY PLD_FIELD_NAME
// )
//    `;
//   const records = await sequelize.query(query, {
//     type: QueryTypes.SELECT,
//   });

//   return records;
// };

const { sequelize, QueryTypes } = require('../models');

exports.getRiskData = async (ProdCode, SectionCode) => {
  const query = `
    SELECT PLD_PROG_CODE, PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_LOV_TITLE, PLD_LOV_SELECT_STMT,
           PLD_VALUES, PLD_INDEPT_DEPT, PC_PARA, pld_prod_code, PLD_SECTION_CODE
    FROM PGIM_LOV_DEFN_API
    WHERE PLD_PROG_CODE = 'PGIT6_03'
      AND PLD_BLOCK_NAME = 'PGIT_POL_RISK_ADDL_INFO_01'
      AND pld_prod_code = :ProdCode
      AND PLD_SECTION_CODE = :SectionCode
  `;

  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: {
      ProdCode,
      SectionCode
    }
  });

  return records;
};
