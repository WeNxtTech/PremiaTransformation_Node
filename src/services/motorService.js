const { sequelize, QueryTypes } = require("../models");
exports.getMotor = async (prodCode, instCode, busType) => {
  const query = `SELECT DISTINCT 
      POL_PROD_CODE,
      PROD_DESC "PRODUCT",
      POL_BUS_TYPE,
      PARA_NAME "BUS_TYPE_DESC",
      IFD_INST_CODE "INSTANCE_CODE",
      IFD_PROG_CODE "PROGRAM_CODE",
      IFD_PB_BLK_NAME "TABLE_NAME",
      IFD_PBF_FLD_NAME "COLUMN_NAME",
      IFD_PROMPT "FIELD_PROMPT",
      IFD_SEQ_NO "DISPLAY_ORDER_NO",
      A.IFD_MANDATORY_YN_NUM "MANDATORY",
      IFD_DATA_TYPE "DATA_TYPE",
      a.ifd_form_item_type "SOURCE_DESIGN_TYPE",
      IFD_FLD_LEN "FIELD_LENGTH",
      IFD_DISP_LEN "DISPLAY_LENGTH",
      IFD_HINT "TOOL_TIP",IFD_CANVAS_NAME "CANVA_NAME"
    FROM IM_INSTANCE_FIELD_DEFN A, PGIT_POLICY, PCOM_APP_PARAMETER, PGIM_PRODUCT
    WHERE IFD_PROG_CODE='PGIT6_01'
      AND IFD_PB_BLK_NAME='PGIT_POLICY'
      AND IFD_HIDE_YN_NUM=2
      AND IFD_PBF_FLD_NAME NOT LIKE 'M_%' AND IFD_PROMPT IS NOT NULL
      AND IFD_CANVAS_NAME='PGIT_POLICY'
      AND POL_INST_CODE = IFD_INST_CODE
      AND PARA_CODE = 'BUS_TYPE'
      AND PARA_SUB_CODE = POL_BUS_TYPE
      AND PROD_CODE = POL_PROD_CODE
      AND (:prodCode IS NULL OR POL_PROD_CODE = :prodCode)
      AND (:instCode IS NULL OR IFD_INST_CODE = :instCode)
      AND (:busType IS NULL OR POL_BUS_TYPE = :busType)
    ORDER BY PROD_DESC, PARA_NAME, IFD_INST_CODE, IFD_SEQ_NO;`;

  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: { prodCode, instCode, busType },
  });

  return records;
};
exports.saveMotorDataBulk = async (records) => {
  const transaction = await sequelize.transaction();

  try {
    for (const record of records) {
      const query = `
        MERGE INTO PGIT_POLICY tgt
        USING (SELECT :POL_PROD_CODE AS POL_PROD_CODE, :POL_INST_CODE AS POL_INST_CODE FROM DUAL) src
        ON (tgt.POL_PROD_CODE = src.POL_PROD_CODE AND tgt.POL_INST_CODE = src.POL_INST_CODE)
        WHEN MATCHED THEN
          UPDATE SET POL_BUS_TYPE = :POL_BUS_TYPE
        WHEN NOT MATCHED THEN
          INSERT (POL_PROD_CODE, POL_BUS_TYPE, POL_INST_CODE)
          VALUES (:POL_PROD_CODE, :POL_BUS_TYPE, :POL_INST_CODE)
      `;

      await sequelize.query(query, {
        replacements: {
          POL_PROD_CODE: record.POL_PROD_CODE,
          POL_INST_CODE: record.INSTANCE_CODE,
          POL_BUS_TYPE: record.POL_BUS_TYPE,
          // Add other fields here for update/insert as needed
        },
        transaction,
      });
    }
    await transaction.commit();
    return { success: true, message: 'All records processed successfully' };
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};