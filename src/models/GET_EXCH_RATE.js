module.exports = (sequelize, DataTypes) => {
  const PrPolCurrencyParams = sequelize.define(
    'PrPolCurrencyParams',
    {
      /* ===== IN PARAMETERS ===== */

      P_POL_SYS_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'P_POL_SYS_ID',
      },

      P_END_NO_IDX: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'P_END_NO_IDX',
      },

      P_END_SR_NO: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'P_END_SR_NO',
      },

      P_CURR_CODE: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'P_CURR_CODE',
      },

      /* ===== OUT PARAMETERS ===== */

      P_CURR_RATE_TYPE: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'P_CURR_RATE_TYPE',
      },

      P_EXCH_RATE_1: {
        type: DataTypes.DECIMAL(15, 6),
        allowNull: true,
        field: 'P_EXCH_RATE_1',
      },

      P_EXCH_RATE_2: {
        type: DataTypes.DECIMAL(15, 6),
        allowNull: true,
        field: 'P_EXCH_RATE_2',
      },

      P_EXCH_RATE_3: {
        type: DataTypes.DECIMAL(15, 6),
        allowNull: true,
        field: 'P_EXCH_RATE_3',
      },
    },
    {
      tableName: 'PR_POL_CURRENCY_PARAMS', // logical / virtual
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );

  return PrPolCurrencyParams;
};
