module.exports = (sequelize, DataTypes) => {
  const PrPolicyParams = sequelize.define(
    'PrPolicyParams',
    {
      P_COMP_CODE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_COMP_CODE',
      },

      P_DIVN_CODE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_DIVN_CODE',
      },

      P_DEPT_CODE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_DEPT_CODE',
      },

      P_POL_SYS_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
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

      P_POL_FM_DT: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'P_POL_FM_DT',
      },

      P_POL_PROD_CODE: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'P_POL_PROD_CODE',
      },

      P_EXGE_TYPE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_EXGE_TYPE',
      },

      P_DS_TYPE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_DS_TYPE',
      },

      P_INST_CODE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_INST_CODE',
      },

      /* ===== OUT PARAMETERS ===== */

      P_PREM_SUCCESS: {
        type: DataTypes.STRING(1),
        allowNull: true,
        field: 'P_PREM_SUCCESS',
      },

      P_INST_SUCCESS: {
        type: DataTypes.STRING(1),
        allowNull: true,
        field: 'P_INST_SUCCESS',
      },
    },
    {
      tableName: 'PR_POLICY_PARAMS', // virtual / logical
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );

  return PrPolicyParams;
};
