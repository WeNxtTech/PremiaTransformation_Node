module.exports = (sequelize, DataTypes) => {
  const PrDfltCurrencyParams = sequelize.define(
    'PrDfltCurrencyParams',
    {
      P_POL_SYS_ID: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        primaryKey: true,
        field: 'P_POL_SYS_ID'
      },

      P_END_NO_IDX: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        field: 'P_END_NO_IDX'
      },

      P_END_SR_NO: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        field: 'P_END_SR_NO'
      },

      P_DS_TYPE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_DS_TYPE'
      },

      P_DS_CODE: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'P_DS_CODE'
      },

      P_PROD_CODE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_PROD_CODE'
      },

      P_POL_ISS_DT: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'P_POL_ISS_DT'
      },

      P_COMP_CODE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_COMP_CODE'
      }
    },
    {
      tableName: 'PR_DFLT_CURRENCY', 
      timestamps: false,
      freezeTableName: true,
      underscored: true
    }
  );

  return PrDfltCurrencyParams;
};
