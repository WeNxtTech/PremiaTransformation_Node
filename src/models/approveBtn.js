module.exports = (sequelize, DataTypes) => {
  const PrApprovalParams = sequelize.define(
    'PrApprovalParams',
    {
      /* ===== IN PARAMETERS ===== */

      P_POL_SYS_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'P_POL_SYS_ID',
      },

      P_POL_END_NO_IDX: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'P_POL_END_NO_IDX',
      },

      P_POL_END_SR_NO: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'P_POL_END_SR_NO',
      },

      P_POL_APPR_DT: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'P_POL_APPR_DT',
      },

      P_INST_CODE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_INST_CODE',
      },

      P_POL_PROD_CODE: {
        type: DataTypes.STRING(12),
        allowNull: false,
        field: 'P_POL_PROD_CODE',
      },

      /* ===== OUT PARAMETERS ===== */

      P_APPR_YN: {
        type: DataTypes.STRING(1),
        allowNull: true,
        field: 'P_APPR_YN',
      },

      P_RI_CONFIRM_REQ_YN: {
        type: DataTypes.STRING(1),
        allowNull: true,
        field: 'P_RI_CONFIRM_REQ_YN',
      },

      P_FAC_APPR_REQ_YN: {
        type: DataTypes.STRING(1),
        allowNull: true,
        field: 'P_FAC_APPR_REQ_YN',
      },

      P_RA_AVL: {
        type: DataTypes.STRING(1),
        allowNull: true,
        field: 'P_RA_AVL',
      },
    },
    {
      tableName: 'PR_APPROVAL_PARAMS', // virtual/logical name
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );

  return PrApprovalParams;
};