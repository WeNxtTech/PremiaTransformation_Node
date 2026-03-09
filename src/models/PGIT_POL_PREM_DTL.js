module.exports = (sequelize, DataTypes) => {
  const PGIT_POL_PREM_DTL = sequelize.define(
    'PGIT_POL_PREM_DTL',
    {
      PPD_SYS_ID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        field: 'PPD_SYS_ID',
      },

      PPD_POL_SYS_ID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: 'PPD_POL_SYS_ID',
      },

      PPD_END_NO_IDX: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'PPD_END_NO_IDX',
      },

      PPD_END_SR_NO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'PPD_END_SR_NO',
      },

      PPD_PREM_CURR_CODE: {
        type: DataTypes.STRING(12),
        allowNull: true,
        field: 'PPD_PREM_CURR_CODE',
      },

      PPD_PREM_FC: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_PREM_FC',
      },

      PPD_PREM_LC_1: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_PREM_LC_1',
      },

      PPD_PREM_LC_2: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_PREM_LC_2',
      },

      PPD_PREM_LC_3: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_PREM_LC_3',
      },

      PPD_ORG_PREM_FC: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_ORG_PREM_FC',
      },

      PPD_ORG_PREM_LC_1: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_ORG_PREM_LC_1',
      },

      PPD_ORG_PREM_LC_2: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_ORG_PREM_LC_2',
      },

      PPD_ORG_PREM_LC_3: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_ORG_PREM_LC_3',
      },

      PPD_LOAD_FC: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_LOAD_FC',
      },

      PPD_LOAD_LC_1: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_LOAD_LC_1',
      },

      PPD_LOAD_LC_2: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_LOAD_LC_2',
      },

      PPD_LOAD_LC_3: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_LOAD_LC_3',
      },

      PPD_DISC_FC: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_DISC_FC',
      },

      PPD_DISC_LC_1: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_DISC_LC_1',
      },

      PPD_DISC_LC_2: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_DISC_LC_2',
      },

      PPD_DISC_LC_3: {
        type: DataTypes.DECIMAL(20, 3),
        allowNull: true,
        field: 'PPD_DISC_LC_3',
      },

      PPD_CR_UID: {
        type: DataTypes.STRING(12),
        allowNull: true,
        field: 'PPD_CR_UID',
      },

      PPD_CR_DT: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'PPD_CR_DT',
      },

      PPD_UPD_UID: {
        type: DataTypes.STRING(12),
        allowNull: true,
        field: 'PPD_UPD_UID',
      },

      PPD_UPD_DT: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'PPD_UPD_DT',
      },

      PPD_COMP_CODE: {
        type: DataTypes.STRING(12),
        allowNull: true,
        field: 'PPD_COMP_CODE',
      },

      PPD_DIVN_CODE: {
        type: DataTypes.STRING(12),
        allowNull: true,
        field: 'PPD_DIVN_CODE',
      },

      PPD_DEPT_CODE: {
        type: DataTypes.STRING(12),
        allowNull: true,
        field: 'PPD_DEPT_CODE',
      },

      PPD_DS_TYPE: {
        type: DataTypes.STRING(12),
        allowNull: true,
        field: 'PPD_DS_TYPE',
      },

      PPD_PROD_CODE: {
        type: DataTypes.STRING(12),
        allowNull: true,
        field: 'PPD_PROD_CODE',
      },

      PPD_REC_TYPE: {
        type: DataTypes.STRING(1),
        allowNull: true,
        field: 'PPD_REC_TYPE',
      },

      PPD_CNCT_SYS_ID: {
        type: DataTypes.BIGINT,
        allowNull: true,
        field: 'PPD_CNCT_SYS_ID',
      },
    },
    {
      tableName: 'PGIT_POL_PREM_DTL',
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );

  return PGIT_POL_PREM_DTL;
};