const { PgitPolicy, sequelize } = require('../models');
const { QueryTypes, Op, fn, col, where } = require('sequelize');

/* ================================
   GET ALL
================================ */
exports.getAll = async (
  { search, POL_PROD_CODE },          // <-- accept POL_PROD_CODE from params/query
  { limit = 10, offset = 0, order } = {}
) => {
  let whereClause = {};

  // Base filter: exact match on POL_PROD_CODE if provided
  if (POL_PROD_CODE) {
    whereClause.POL_PROD_CODE = POL_PROD_CODE;   // implicit Op.eq [web:58][web:61]
  }

  // Optional search filter: LIKE on multiple fields
  if (search) {
    const searchFilter = {
      [Op.or]: [
        { POL_NO: { [Op.like]: `%${search}%` } },
        { POL_PREM_CURR_CODE: { [Op.like]: `%${search}%` } },
        { POL_DFLT_SI_CURR_CODE: { [Op.like]: `%${search}%` } },
        { POL_SRC_TYPE: { [Op.like]: `%${search}%` } },
        { POL_ASSR_CODE: { [Op.like]: `%${search}%` } },
        { POL_CUST_CODE: { [Op.like]: `%${search}%` } },
        { POL_SRC_CODE: { [Op.like]: `%${search}%` } },
        where(fn('TO_CHAR', col('POL_ISSUE_DT'), 'YYYY-MM-DD'), {
          [Op.like]: `%${search}%`,
        }),
        where(fn('TO_CHAR', col('POL_FM_DT'), 'YYYY-MM-DD'), {
          [Op.like]: `%${search}%`,
        }),
        where(fn('TO_CHAR', col('POL_TO_DT'), 'YYYY-MM-DD'), {
          [Op.like]: `%${search}%`,
        }),
      ],
    };

    // Combine existing whereClause (maybe with POL_PROD_CODE) AND searchFilter
    whereClause = {
      ...whereClause,
      [Op.and]: [searchFilter],
    };
  }

  return PgitPolicy.findAll({
    attributes: [
      'POL_NO',
      'POL_ISSUE_DT',
      'POL_FM_DT',
      'POL_TO_DT',
      'POL_PREM_CURR_CODE',
      'POL_DFLT_SI_CURR_CODE',
      'POL_SRC_TYPE',
      'POL_ASSR_CODE',
      'POL_CUST_CODE',
      'POL_SRC_CODE',
      'POL_PROD_CODE',           // optional: include in result
    ],
    where: whereClause,
    limit: Number(limit),
    offset: Number(offset),
    order: order || [['POL_NO', 'DESC']],
  });
};


/* ================================
   GET BY ID
================================ */
exports.getById = async (id) => {
  const policy = await PgitPolicy.findByPk(id);

  if (!policy) {
    const error = new Error(`Policy with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }

  return {
    success: true,
    message: 'Policy fetched successfully',
    data: policy
  };
};

/* ================================
   NEXT POL_SYS_ID
================================ */
async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT POL_SYS_ID_SEQ.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: QueryTypes.SELECT }
  );
  return result.NEXTVAL;
}

/* ================================
   GENERATE POLICY NUMBER
   (NO OUT BIND – ORACLE UPDATES TABLE)
================================ */
async function generatePolicyNumber(polSysId, transaction) {
  const plsql = `
    DECLARE
      CURSOR C1 IS
        SELECT *
        FROM PGIT_POLICY
        WHERE POL_SYS_ID = :polSysId;

      M_POL        C1%ROWTYPE;
      M_POL_NO     VARCHAR2(100);
      M_POL_NO_AVL VARCHAR2(1);
    BEGIN
      OPEN C1;
      FETCH C1 INTO M_POL;
      CLOSE C1;

      PGIPK_DOCUMENT_NUMBER.Pr_Generate_Doc_Number(
        P_DS_TYPE    => M_POL.POL_DS_TYPE,
        P_DS_CODE    => M_POL.POL_DS_CODE,
        P_COMP_CODE  => M_POL.POL_COMP_CODE,
        P_DEPT_CODE  => M_POL.POL_DEPT_CODE,
        P_DIVN_CODE  => M_POL.POL_DIVN_CODE,
        P_SYS_ID     => M_POL.POL_SYS_ID,
        P_DOC_NUMBER => M_POL_NO,
        P_DOC_NO_AVL => M_POL_NO_AVL
      );

      UPDATE PGIT_POLICY
         SET POL_NO = M_POL_NO
       WHERE POL_SYS_ID = M_POL.POL_SYS_ID;
    END;
  `;

  await sequelize.query(plsql, {
    replacements: { polSysId },
    type: QueryTypes.RAW,
    transaction
  });

  const result = await PgitPolicy.findByPk(polSysId, {
    attributes: ['POL_NO'],
    transaction
  });

  return result?.POL_NO;
}

/* ================================
   CREATE POLICY
================================ */
exports.create = async (data) => {
  const transaction = await sequelize.transaction();

  try {
    /* 1. Generate PK */
    const nextId = await getNextPolSysId();
    data.POL_SYS_ID = nextId;

    /* 2. TEMP POL_NO */
    data.POL_NO = 'NUMBER';

    /* 3. Insert Policy */
    const createdRecord = await PgitPolicy.create(data, { transaction });

    /* 4. Default Currency Procedure */
    const currencyPlsql = `
      DECLARE
        CURSOR C1 IS
          SELECT POL_SYS_ID, POL_END_NO_IDX, POL_END_SR_NO, POL_COMP_CODE,
                 POL_DS_TYPE, POL_DS_CODE, POL_PROD_CODE, POL_ISSUE_DT
          FROM PGIT_POLICY
          WHERE POL_SYS_ID = :polSysId;
      BEGIN
        FOR I IN C1 LOOP
          Pcopk_Sys_Vars.M_COMP_CODE := I.POL_COMP_CODE;
          PGIPK_POLICY_ENTRY.Pr_Dflt_Currency(
            P_POL_SYS_ID => I.POL_SYS_ID,
            P_END_NO_IDX => I.POL_END_NO_IDX,
            P_END_SR_NO  => I.POL_END_SR_NO,
            P_DS_TYPE    => I.POL_DS_TYPE,
            P_DS_CODE    => I.POL_DS_CODE,
            P_PROD_CODE  => I.POL_PROD_CODE,
            P_POL_ISS_DT => TRUNC(I.POL_ISSUE_DT),
            P_COMP_CODE  => I.POL_COMP_CODE
          );
        END LOOP;
      END;
    `;

    await sequelize.query(currencyPlsql, {
      replacements: { polSysId: createdRecord.POL_SYS_ID },
      type: QueryTypes.RAW,
      transaction
    });

    /* 5. Generate & Update POL_NO */
    const generatedPolNo = await generatePolicyNumber(
      createdRecord.POL_SYS_ID,
      transaction
    );

    if (!generatedPolNo || generatedPolNo === 'NUMBER') {
      throw new Error('POL_NO generation failed');
    }

    await transaction.commit();

    return {
      success: true,
      message: 'Policy created successfully',
      data: {
        POL_SYS_ID: createdRecord.POL_SYS_ID,
        POL_NO: generatedPolNo
      }
    };

  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};

/* ================================
   UPDATE
================================ */
exports.update = async (id, updatedData) => {
  const item = await PgitPolicy.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolicy with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

/* ================================
   DELETE
================================ */
exports.deleteItem = async (id) => {
  const item = await PgitPolicy.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolicy with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};
