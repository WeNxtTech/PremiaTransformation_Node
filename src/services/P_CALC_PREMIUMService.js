const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

async function calculatePremium(polSysId, polEndNoIdx, polEndSrNo) {
  try {
    const result = await sequelize.query(
      `
      DECLARE
        CURSOR C1 IS
          SELECT
            POL_COMP_CODE,
            POL_DIVN_CODE,
            POL_DEPT_CODE,
            POL_SYS_ID,
            POL_END_NO_IDX,
            POL_END_SR_NO,
            POL_FM_DT,
            POL_PROD_CODE,
            POL_DS_TYPE,
            POL_INST_CODE
          FROM PGIT_POLICY
          WHERE POL_SYS_ID     = :polSysId
          AND   POL_END_NO_IDX = :polEndNoIdx
          AND   POL_END_SR_NO  = :polEndSrNo;

        M_PREM_SUCCESS VARCHAR2(1);
        M_INST_SUCCESS VARCHAR2(1);
      BEGIN
        FOR I IN C1 LOOP
          PGIPK_PREMIUM_CALC.P_CALC_PREMIUM(
            P_COMP_CODE      => I.POL_COMP_CODE,
            P_DIVN_CODE      => I.POL_DIVN_CODE,
            P_DEPT_CODE      => I.POL_DEPT_CODE,
            P_POL_SYS_ID     => I.POL_SYS_ID,
            P_POL_END_NO_IDX => I.POL_END_NO_IDX,
            P_POL_END_SR_NO  => I.POL_END_SR_NO,
            P_POL_FM_DT      => I.POL_FM_DT,
            P_POL_PROD_CODE  => I.POL_PROD_CODE,
            P_EXGE_TYPE      => 'B',
            P_DS_TYPE        => I.POL_DS_TYPE,
            P_INST_CODE      => I.POL_INST_CODE,
            P_PREM_SUCCESS   => M_PREM_SUCCESS,
            P_INST_SUCCESS   => M_INST_SUCCESS
          );
        END LOOP;
      END;
      `,
      {
        replacements: {
          polSysId,
          polEndNoIdx,
          polEndSrNo,
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
  calculatePremium,
};
