const { sequelize, QueryTypes } = require("../models");
exports.get = async () => {
  const query = ` 
 SELECT DISTINCT PLD_PROG_CODE, PLD_BLOCK_NAME, PLD_FIELD_NAME, PLD_LOV_TITLE, PLD_LOV_SELECT_STMT
              
      FROM PGIM_LOV_DEFN
    WHERE PLD_PROG_CODE = 'PGIT6_02'
      AND PLD_BLOCK_NAME = 'PGIT_POL_INST_PREM'`;

  const records = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  return records;
};