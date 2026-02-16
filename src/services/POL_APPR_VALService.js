const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

async function Approval(polSysId, polEndNoIdx, polEndSrNo) {
  try {
    const result = await sequelize.query(
      `
     
DECLARE

CURSOR C1 IS
SELECT 
POL_COMP_CODE      ,
POL_DIVN_CODE      ,
POL_DEPT_CODE      ,
POL_SYS_ID     ,
POL_END_NO_IDX ,
POL_END_SR_NO  ,
POL_FM_DT      ,
POL_PROD_CODE  ,
POL_DS_TYPE    ,
POL_INST_CODE   ,
POL_APPR_DT
FROM PGIT_POLICY
WHERE POL_SYS_ID =:polSysId
AND   POL_END_NO_IDX =:polEndNoIdx
AND   POL_END_SR_NO  =:polEndSrNo;                            

M_APPR_YN            VARCHAR2(1);
M_RI_CONFIRM_REQ_YN  VARCHAR2(1);
M_FAC_APPR_REQ_YN    VARCHAR2(1);
M_RA_AVL             VARCHAR2(1);

BEGIN
  
FOR I IN C1 LOOP

    PGIPK_POLICY_APPROVAL.POL_APPR_VAL(P_POL_SYS_ID        => I.POL_SYS_ID,
                                       P_POL_END_NO_IDX    => I.POL_END_NO_IDX,
                                       P_POL_END_SR_NO     => I.POL_END_SR_NO,
                                       P_POL_APPR_DT       => I.POL_APPR_DT,
                                       P_INST_CODE         => I.POL_INST_CODE,
                                       P_APPR_YN           => M_APPR_YN,
                                       P_RI_CONFIRM_REQ_YN => M_RI_CONFIRM_REQ_YN,
                                       P_FAC_APPR_REQ_YN   => M_FAC_APPR_REQ_YN,
                                       P_POL_PROD_CODE     => I.POL_PROD_CODE,
                                       P_RA_AVL            => M_RA_AVL);

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
  Approval,
};
