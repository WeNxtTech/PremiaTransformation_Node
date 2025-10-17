const { sequelize, QueryTypes } = require("../models");

exports.getOne = async (prodCode, instCode, progCode) => {
  const query = `
    SELECT DISTINCT 
      POL_PROD_CODE "PROD_CODE",
      IFD_INST_CODE "INSTANCE_CODE",
      IFD_PROG_CODE "PROGRAM_CODE",
      IFD_PB_BLK_NAME "TABLE_NAME",
      IFD_PBF_FLD_NAME "COLUMN_NAME",
      IFD_PROMPT "FIELD_PROMPT",
      IFD_SEQ_NO "DISPLAY_ORDER_NO",
      A.IFD_MANDATORY_YN_NUM "MANDATORY",
      IFD_DATA_TYPE "DATA_TYPE",
      A.IFD_FORM_ITEM_TYPE "SOURCE_DESIGN_TYPE",
      IFD_FLD_LEN "FIELD_LENGTH",
      IFD_DISP_LEN "DISPLAY_LENGTH",
      IFD_HINT "TOOL_TIP"
    FROM IM_INSTANCE_FIELD_DEFN A, PGIT_POLICY
    WHERE (:progCode IS NULL OR IFD_PROG_CODE = :progCode)
      AND (:prodCode IS NULL OR POL_PROD_CODE = :prodCode)
      AND (:instCode IS NULL OR IFD_INST_CODE = :instCode)
    ORDER BY IFD_SEQ_NO;
  `;

  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: { prodCode, instCode, progCode },
  });

  return records;
};
