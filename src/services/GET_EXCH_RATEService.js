const { sequelize } = require('../models');
const oracledb = require('oracledb');

async function Amount(polSysId, polEndNoIdx, polEndSrNo, currency, amount) {
  const connection = await sequelize.connectionManager.getConnection({ type: 'write' });

  try {
    await connection.execute(`BEGIN DBMS_OUTPUT.ENABLE(NULL); END;`);

    await connection.execute(
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
          M_POL_SYS_ID    := :polSysId;
          M_END_NO_IDX    := :polEndNoIdx;
          M_END_SR_NO     := :polEndSrNo;
          M_CURR_CODE     := :currency;
          M_AMT_FC        := :amount;
          M_CURR_RATE_TYP := 'B';

          PCOPK_GENERAL.GET_EXCH_RATE(
              M_POL_SYS_ID, M_END_NO_IDX, M_END_SR_NO,
              M_CURR_CODE, M_CURR_RATE_TYP,
              M_CURR_RATE_1, M_CURR_RATE_2, M_CURR_RATE_3
          );

          PCOPK_GENERAL.CONV_FC_LC(
              M_AMT_FC,
              M_CURR_RATE_1, M_CURR_RATE_2, M_CURR_RATE_3,
              M_AMT_LC_1, M_AMT_LC_2, M_AMT_LC_3
          );

          DBMS_OUTPUT.PUT_LINE('LC_1 = ' || M_AMT_LC_1);
          DBMS_OUTPUT.PUT_LINE('LC_2 = ' || M_AMT_LC_2);
          DBMS_OUTPUT.PUT_LINE('LC_3 = ' || M_AMT_LC_3);
      END;
      `,
      {
        polSysId:   { val: polSysId,    type: oracledb.NUMBER },
        polEndNoIdx:{ val: polEndNoIdx, type: oracledb.NUMBER },
        polEndSrNo: { val: polEndSrNo,  type: oracledb.NUMBER },
        currency:   { val: currency,    type: oracledb.STRING },
        amount:     { val: amount,      type: oracledb.NUMBER },
      }
    );

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

      if (outputResult.outBinds.status === 1) break;

      if (outputResult.outBinds.line !== null) {
        outputLines.push(outputResult.outBinds.line);
      }
    }

    const parsed = {};
    for (const line of outputLines) {
      const match = line.match(/^(LC_\d+)\s*=\s*(.+)$/);
      if (match) {
        parsed[match[1]] = isNaN(match[2]) ? match[2].trim() : Number(match[2]);
      }
    }

    return {
      success: true,
      message: 'Premium calculation completed',
      data: {
        lc1: parsed['LC_1'] ?? null,
        lc2: parsed['LC_2'] ?? null,
        lc3: parsed['LC_3'] ?? null,
        rawOutput: outputLines,
      },
    };

  } catch (error) {
    throw error;
  } finally {
    await sequelize.connectionManager.releaseConnection(connection, { type: 'write' });
  }
}

module.exports = { Amount };