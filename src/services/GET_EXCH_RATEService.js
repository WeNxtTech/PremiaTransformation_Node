 
const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');
 
async function Amount(polSysId, polEndNoIdx, polEndSrNo , currency ,amount ) {
  try {
    const result = await sequelize.query(
     
 
`
DECLARE
    M_CURR_RATE_TYP  VARCHAR2(1);
    M_CURR_RATE_1    NUMBER;
    M_CURR_RATE_2    NUMBER;
    M_CURR_RATE_3    NUMBER;
    M_POL_SYS_ID     NUMBER;
    M_END_NO_IDX     NUMBER;
    M_END_SR_NO      NUMBER;
    M_CURR_CODE      VARCHAR2(12);
    M_AMT_FC         NUMBER;
    M_AMT_LC_1       NUMBER;
    M_AMT_LC_2       NUMBER;
    M_AMT_LC_3       NUMBER;
BEGIN
    M_POL_SYS_ID    :=:polSysId;
    M_END_NO_IDX    :=:polEndNoIdx;
    M_END_SR_NO     :=:polEndSrNo;
    M_CURR_CODE     :=:currency;
    M_AMT_FC        :=:amount;
    M_CURR_RATE_TYP := 'B';
 
    PCOPK_GENERAL.GET_EXCH_RATE(
        M_POL_SYS_ID,
        M_END_NO_IDX,
        M_END_SR_NO,
        M_CURR_CODE,
        M_CURR_RATE_TYP,
        M_CURR_RATE_1,
        M_CURR_RATE_2,
        M_CURR_RATE_3
    );
 
    PCOPK_GENERAL.CONV_FC_LC(
        M_AMT_FC,
        M_CURR_RATE_1,
        M_CURR_RATE_2,
        M_CURR_RATE_3,
        M_AMT_LC_1,
        M_AMT_LC_2,
        M_AMT_LC_3
    );
 
    DBMS_OUTPUT.PUT_LINE('Rate 1 = ' || M_CURR_RATE_1);
    DBMS_OUTPUT.PUT_LINE('Rate 2 = ' || M_CURR_RATE_2);
    DBMS_OUTPUT.PUT_LINE('Rate 3 = ' || M_CURR_RATE_3);
    DBMS_OUTPUT.PUT_LINE('LC Amount 1 = ' || M_AMT_LC_1);
    DBMS_OUTPUT.PUT_LINE('LC Amount 2 = ' || M_AMT_LC_2);
    DBMS_OUTPUT.PUT_LINE('LC Amount 3 = ' || M_AMT_LC_3);
END;
`
 
 
      ,
      {
        replacements: {
          polSysId,
          polEndNoIdx,
          polEndSrNo,
          currency,
          amount
        },
        type: QueryTypes.RAW,
      }
    );
 
    return {
      success: true,
      message: 'Premium calculation completed',
    };
  } catch (error) {
    throw error;
  }
}
 
module.exports = {
  Amount,
};
 