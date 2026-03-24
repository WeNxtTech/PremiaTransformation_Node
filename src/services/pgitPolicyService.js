const { PgitPolicy, sequelize } = require('../models');
const { QueryTypes, Op, fn, col, where } = require('sequelize');


exports.getAll = async (
  { search, POL_PROD_CODE, POL_APPR_STS },
  { limit = 10, offset = 0, order } = {}
) => {
  let whereClause = {};

  if (POL_PROD_CODE) {
    whereClause.POL_PROD_CODE = POL_PROD_CODE;
  }

  if (POL_APPR_STS) { 
    whereClause.POL_APPR_STS = POL_APPR_STS;
  }

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

    whereClause = {
      ...whereClause,
      [Op.and]: [searchFilter],
    };
  }

  const results = await PgitPolicy.findAll({
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
      'POL_SYS_ID',
      'POL_END_SR_NO',
      'POL_END_NO_IDX',
      'POL_APPR_STS',
    ],
    where: whereClause,
    limit: Number(limit),
    offset: Number(offset),
    order: order || [['POL_SYS_ID', 'DESC']],
    raw: true,
  });

  const groupedResult = results.reduce((acc, row) => {
    const key = row.POL_APPR_STS;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult; 
};




exports.getById = async (keys) => {
  const policy = await PgitPolicy.findOne({
    where: {
      POL_SYS_ID: keys.POL_SYS_ID,
      POL_END_NO_IDX: keys.POL_END_NO_IDX,
      POL_END_SR_NO: keys.POL_END_SR_NO
    }
  });

  if (!policy) {
    const error = new Error(
      `Policy not found with SYS_ID=${keys.POL_SYS_ID}, END_NO_IDX=${keys.POL_END_NO_IDX}, END_SR_NO=${keys.POL_END_SR_NO}`
    );
    error.statusCode = 404;
    throw error;
  }

  const plain = policy.get({ plain: true });

  const formatted = {};
  for (const key in plain) {
    const value = plain[key];
    if (value instanceof Date) {
      formatted[key] = value.toISOString().split('T')[0];
    } else {
      formatted[key] = value;
    }
  }

  return {
    success: true,
    message: 'Policy fetched successfully',
    data: formatted
  };
};




async function getNextPolSysId() {
  const [result] = await sequelize.query(
    'SELECT PGI_POL_SYS_ID.NEXTVAL AS NEXTVAL FROM DUAL',
    { type: QueryTypes.SELECT }
  );
  return result.NEXTVAL;
}


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




exports.create = async (data) => {
  const transaction = await sequelize.transaction();

  try {
    const nextId = await getNextPolSysId();
    data.POL_SYS_ID = nextId;


    data.POL_NO = 'NUMBER';

    const createdRecord = await PgitPolicy.create(data, { transaction });

   const currencyPlsql = `
  DECLARE
    CURSOR C1 IS
      SELECT POL_SYS_ID, POL_END_NO_IDX, POL_END_SR_NO, POL_COMP_CODE,
             POL_DS_TYPE, POL_DS_CODE, POL_PROD_CODE, POL_ISSUE_DT,
             POL_FM_DT    -- ✅ ADD THIS
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

      PGIPK_POLICY_ENTRY.Pr_Dflt_Charge(
        P_POL_SYS_ID => I.POL_SYS_ID,
        P_END_NO_IDX => I.POL_END_NO_IDX,
        P_END_SR_NO  => I.POL_END_SR_NO,
        P_DS_TYPE    => I.POL_DS_TYPE,
        P_DS_CODE    => I.POL_DS_CODE,
        P_PROD_CODE  => I.POL_PROD_CODE,
        P_PREM_CODE  => NULL,
        P_POL_DT     => I.POL_FM_DT   -- ✅ now valid
      );
    END LOOP;
  END;
`;

    await sequelize.query(currencyPlsql, {
      replacements: { polSysId: createdRecord.POL_SYS_ID },
      type: QueryTypes.RAW,
      transaction
    });

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
        POL_NO: generatedPolNo, 
        createdRecord
      }
    };

  } catch (err) {
    await transaction.rollback();
    throw err;
  }
};



exports.update = async (keys, updatedData) => {
  const item = await PgitPolicy.findOne({
    where: {
      POL_SYS_ID: keys.POL_SYS_ID,
      POL_END_NO_IDX: keys.POL_END_NO_IDX,
      POL_END_SR_NO: keys.POL_END_SR_NO
    }
  });

  if (!item) {
    const error = new Error(
      `Policy not found with SYS_ID=${keys.POL_SYS_ID}, END_NO_IDX=${keys.POL_END_NO_IDX}, END_SR_NO=${keys.POL_END_SR_NO}`
    );
    error.statusCode = 404;
    throw error;
  }

  delete updatedData.POL_SYS_ID;
  delete updatedData.POL_END_NO_IDX;
  delete updatedData.POL_END_SR_NO;

  await item.update(updatedData);

  return {
    success: true,
    message: 'Policy updated successfully',
    data: item
  };
};


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


exports.getStatus = async (POL_PROD_CODE) => {
  const query = `
    SELECT DISTINCT
      PARA_SUB_CODE,
      PARA_NAME
    FROM PCOM_APP_PARAMETER, PGIT_POLICY
    WHERE PARA_CODE = 'POL_APPR_STS'
      AND POL_APPR_STS = PARA_SUB_CODE
      AND POL_PROD_CODE = :POL_PROD_CODE
  `;

  const records = await sequelize.query(query, {
    replacements: { POL_PROD_CODE },   
    type: QueryTypes.SELECT,
  });

  return records;
};
