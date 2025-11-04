const { sequelize, QueryTypes } = require('../models');

exports.get = async (section_code,product_code) => {
  const query = `select DISTINCT  PBD_PROD_CODE "PRODUCT_CODE",PBD_SEC_CODE "SECTION_CODE",PBD_TABLE_NAME "TABLE_NAME", PBD_BLOCK_NAME "BLOCK_NAME",PFD_FIELD_NAME "COLUMN_NAME",
 PARA_NAME "DATA_TYPE",PFD_FIELD_SR_NO "DISPLAY_ORDER_NO", PFD_MANDATORY_YN "MANDATORY" ,PFD_DISPLAY_LENGTH "FIELD_LENGTH", PROD_DESC "PRODUCT",pfd_bp_text "FIELD_PROMPT"
  from PCOM_APP_PARAMETER, pgim_prod_block_defn a , pgim_prod_field_defn b, PGIM_PRODUCT where pbd_prod_code = prod_code
  and pfd_pbd_sys_id = pbd_sys_id AND PBD_LVL_NO = 1 AND PBD_SR_NO = 1 AND PBD_SEC_CODE = :section_code AND PROD_CODE = :product_code
AND NVL(PFD_HIDE_YN,'0') <> '1' AND PFD_FIELD_NAME NOT LIKE 'M_PRAI_DESC%' AND PARA_CODE = 'DATA_TYPE' AND PARA_SUB_CODE =PFD_DATA_TYPE
order by PBD_PROD_CODE, NVL(pfd_field_sr_no,9999)`;
   const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
    replacements: {
      section_code,
      product_code,
    }
  });

  return records;
};

