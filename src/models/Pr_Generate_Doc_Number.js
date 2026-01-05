module.exports = (sequelize, DataTypes) => {
  const PrGenerateDocNumberParams = sequelize.define(
    'PrGenerateDocNumberParams',
    {
      P_SYS_ID: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        primaryKey: true,
        field: 'P_SYS_ID',
      },

      P_DS_TYPE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_DS_TYPE',
      },

      P_DS_CODE: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'P_DS_CODE',
      },

      P_COMP_CODE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_COMP_CODE',
      },

      P_DEPT_CODE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_DEPT_CODE',
      },

      P_DIVN_CODE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_DIVN_CODE',
      },

      /* ===== OUT PARAMETERS ===== */

      P_DOC_NUMBER: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'P_DOC_NUMBER',
      },

      P_DOC_NO_AVL: {
        type: DataTypes.STRING(1),
        allowNull: true,
        field: 'P_DOC_NO_AVL',
      },
    },
    {
      tableName: 'PR_GENERATE_DOC_NUMBER', // virtual / logical
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );

  return PrGenerateDocNumberParams;
};
