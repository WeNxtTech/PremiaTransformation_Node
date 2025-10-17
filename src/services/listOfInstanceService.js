const { sequelize, QueryTypes } = require('../models');

exports.getList = async () => {
  const query = `SELECT DISTINCT POL_PROD_CODE ,PROD_DESC PRODIUCT ,PARA_NAME BUS_TYPE_DESC, POL_INST_CODE  
FROM PGIT_POLICY , PCOM_APP_PARAMETER, IM_INSTANCE, PGIM_PRODUCT
WHERE PARA_CODE = 'BUS_TYPE'
AND PARA_SUB_CODE = POL_BUS_TYPE
AND INST_CODE = POL_INST_CODE
AND PROD_CODE = POL_PROD_CODE
ORDER BY 1,2;`;
  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  return records;
};