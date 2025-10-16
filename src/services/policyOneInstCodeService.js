const { sequelize, QueryTypes } = require('../models');

exports.getOneInst = async (instCode) => {
  const query = `
    SELECT 
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
    FROM IM_INSTANCE_FIELD_DEFN A
    WHERE IFD_PROG_CODE = 'PGIT6_01'
      AND (:instCode IS NULL OR IFD_INST_CODE = :instCode)
    ORDER BY IFD_SEQ_NO;
  `;

  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: { instCode },
  });

  return records;
};
