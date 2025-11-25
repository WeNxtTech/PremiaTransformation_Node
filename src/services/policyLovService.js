const { sequelize, QueryTypes } = require('../models');

exports.getLov = async () => {
  const query = ` SELECT PLD_PROG_CODE,PLD_BLOCK_NAME,PLD_FIELD_NAME,PLD_LOV_TITLE,PLD_LOV_SELECT_STMT,PLD_COLUMN_HEAD,PLD_RETURN_FIELD_NAME
     FROM PGIM_LOV_DEFN WHERE PLD_PROG_CODE = 'PGIT6_01' AND PLD_BLOCK_NAME = 'PGIT_POLICY' AND PLD_MOD_CODE IS NULL `;
  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  return records;
};        
      