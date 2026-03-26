module.exports = (sequelize, DataTypes) => {
  const PgithPolPrevInsDtl = sequelize.define('PgithPolPrevInsDtl', {
       PIDH_LVL_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIDH_LVL_SR_NO' 
    }
    ,
   PIDH_CLAIM_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIDH_CLAIM_YN' 
    }
    ,
   PIDH_POL_CLAIM_LC_1: { 
      type: DataTypes.DECIMAL(22, 3), 
      allowNull: true, 
      
      field: 'PIDH_POL_CLAIM_LC_1' 
    }
    ,
   PIDH_POL_CLAIM_LC_2: { 
      type: DataTypes.DECIMAL(22, 3), 
      allowNull: true, 
      
      field: 'PIDH_POL_CLAIM_LC_2' 
    }
    ,
   PIDH_POL_CLAIM_LC_3: { 
      type: DataTypes.DECIMAL(22, 3), 
      allowNull: true, 
      
      field: 'PIDH_POL_CLAIM_LC_3' 
    }
    ,
   PIDH_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_06' 
    }
    ,
   PIDH_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_07' 
    }
    ,
   PIDH_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_08' 
    }
    ,
   PIDH_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_09' 
    }
    ,
   PIDH_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_10' 
    }
    ,
   PIDH_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_11' 
    }
    ,
   PIDH_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_12' 
    }
    ,
   PIDH_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_13' 
    }
    ,
   PIDH_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_14' 
    }
    ,
   PIDH_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_15' 
    }
    ,
   PIDH_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIDH_CNCT_SYS_ID' 
    }
    ,
   PIDH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PIDH_SYS_ID' 
    }
    ,
   PIDH_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PIDH_POL_SYS_ID' 
    }
    ,
   PIDH_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIDH_END_NO_IDX' 
    }
    ,
   PIDH_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIDH_END_SR_NO' 
    }
    ,
   PIDH_POL_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIDH_POL_SI_LC_1' 
    }
    ,
   PIDH_POL_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIDH_POL_SI_LC_2' 
    }
    ,
   PIDH_POL_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIDH_POL_SI_LC_3' 
    }
    ,
   PIDH_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIDH_REC_TYPE' 
    }
    ,
   PIDH_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_01' 
    }
    ,
   PIDH_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_02' 
    }
    ,
   PIDH_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_03' 
    }
    ,
   PIDH_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_04' 
    }
    ,
   PIDH_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_FLEX_05' 
    }
    ,
   PIDH_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIDH_CR_UID' 
    }
    ,
   PIDH_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PIDH_CR_DT' 
    }
    ,
   PIDH_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIDH_UPD_UID' 
    }
    ,
   PIDH_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIDH_UPD_DT' 
    }
    ,
   PIDH_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIDH_COMP_CODE' 
    }
    ,
   PIDH_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIDH_DIVN_CODE' 
    }
    ,
   PIDH_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIDH_DEPT_CODE' 
    }
    ,
   PIDH_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIDH_DS_TYPE' 
    }
    ,
   PIDH_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIDH_PROD_CODE' 
    }
    ,
   PIDH_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PIDH_POL_NO' 
    }
    ,
   PIDH_INS_COMP_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIDH_INS_COMP_NAME' 
    }
    ,
   PIDH_POL_START_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIDH_POL_START_DT' 
    }
    ,
   PIDH_POL_END_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIDH_POL_END_DT' 
    }
    ,
   PIDH_POL_UW_YEAR: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIDH_POL_UW_YEAR' 
    }
    ,
   PIDH_POL_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIDH_POL_PREM_LC_1' 
    }
    ,
   PIDH_POL_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIDH_POL_PREM_LC_2' 
    }
    ,
   PIDH_POL_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIDH_POL_PREM_LC_3' 
    }
    ,
   PIDH_RISK_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIDH_RISK_SYS_ID' 
    }
    ,
   PIDH_CLAIM_RATIO: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIDH_CLAIM_RATIO' 
    }
    ,
   PIDH_NCB_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PIDH_NCB_PERC' 
    }
    ,
   PIDH_LVL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIDH_LVL_NO' 
    }
    
    }, {
        tableName: 'PGITH_POL_PREV_INS_DTL',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgithPolPrevInsDtl;
};