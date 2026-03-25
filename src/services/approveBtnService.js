const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function calculatePremium(polSysId, polEndNoIdx, polEndSrNo) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    // Enable DBMS_OUTPUT
    await connection.execute(`BEGIN DBMS_OUTPUT.ENABLE(NULL); END;`);

    await connection.execute(
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
          POL_INST_CODE,
          POL_APPR_DT
        FROM PGIT_POLICY
        WHERE POL_SYS_ID     = :polSysId
          AND POL_END_NO_IDX = :polEndNoIdx
          AND POL_END_SR_NO  = :polEndSrNo;

        M_APPR_YN            VARCHAR2(1);
        M_RI_CONFIRM_REQ_YN  VARCHAR2(1);
        M_FAC_APPR_REQ_YN    VARCHAR2(1);
        M_RA_AVL             VARCHAR2(1);

      BEGIN

        FOR I IN C1 LOOP

          PGIPK_POLICY_APPROVAL.POL_APPR_VAL(
            P_POL_SYS_ID        => I.POL_SYS_ID,
            P_POL_END_NO_IDX    => I.POL_END_NO_IDX,
            P_POL_END_SR_NO     => I.POL_END_SR_NO,
            P_POL_APPR_DT       => TRUNC(I.POL_APPR_DT),
            P_INST_CODE         => I.POL_INST_CODE,
            P_APPR_YN           => M_APPR_YN,
            P_RI_CONFIRM_REQ_YN => M_RI_CONFIRM_REQ_YN,
            P_FAC_APPR_REQ_YN   => M_FAC_APPR_REQ_YN,
            P_POL_PROD_CODE     => I.POL_PROD_CODE,
            P_RA_AVL            => M_RA_AVL
          );

          DBMS_OUTPUT.PUT_LINE('M_APPR_YN: '           || M_APPR_YN);
          DBMS_OUTPUT.PUT_LINE('M_RI_CONFIRM_REQ_YN: ' || M_RI_CONFIRM_REQ_YN);
          DBMS_OUTPUT.PUT_LINE('M_FAC_APPR_REQ_YN: '   || M_FAC_APPR_REQ_YN);
          DBMS_OUTPUT.PUT_LINE('M_RA_AVL: '            || M_RA_AVL);

        END LOOP;

      END;
      `,
      {
        polSysId:    { val: Number(polSysId),    type: oracledb.NUMBER },
        polEndNoIdx: { val: Number(polEndNoIdx), type: oracledb.NUMBER },
        polEndSrNo:  { val: Number(polEndSrNo),  type: oracledb.NUMBER },
      }
    );

    // ── Read DBMS_OUTPUT lines ──────────────────────────────────────────────
    const outputLines = [];
    while (true) {
      const outputResult = await connection.execute(
        `
        DECLARE
          v_line   VARCHAR2(32767);
          v_status INTEGER;
        BEGIN
          DBMS_OUTPUT.GET_LINE(v_line, v_status);
          :line   := v_line;
          :status := v_status;
        END;
        `,
        {
          line: {
            dir:     oracledb.BIND_OUT,
            type:    oracledb.STRING,
            maxSize: 32767,
          },
          status: {
            dir:  oracledb.BIND_OUT,
            type: oracledb.NUMBER,
          },
        }
      );

      if (outputResult.outBinds.status === 1) break; // no more lines

      if (outputResult.outBinds.line !== null) {
        outputLines.push(outputResult.outBinds.line);
      }
    }

    // ── Parse "KEY: VALUE" lines into an object ─────────────────────────────
    const parsed = {};
    for (const line of outputLines) {
      const match = line.match(/^([^:]+):\s*(.*)$/);
      if (match) {
        const key   = match[1].trim();
        const value = match[2].trim();
        parsed[key] = value;
      }
    }

    return {
      success: true,
      message: 'Approval completed successfully',
      data: {
        apprYn:          parsed['M_APPR_YN']           ?? null,
        riConfirmReqYn:  parsed['M_RI_CONFIRM_REQ_YN'] ?? null,
        facApprReqYn:    parsed['M_FAC_APPR_REQ_YN']   ?? null,
        raAvl:           parsed['M_RA_AVL']             ?? null,
        
      },
    };

  } catch (error) {
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}

module.exports = { calculatePremium };