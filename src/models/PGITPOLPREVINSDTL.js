module.exports = (sequelize, DataTypes) => {
  const PGITPOLPREVINSDTL = sequelize.define('PGITPOLPREVINSDTL', {
       PID_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PID_SYS_ID' 
    }
    ,
   PID_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PID_POL_SYS_ID' 
    }
    ,
   PID_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PID_END_NO_IDX' 
    }
    ,
   PID_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PID_END_SR_NO' 
    }
    ,
   PID_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PID_POL_NO' 
    }
    ,
   PID_INS_COMP_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_INS_COMP_NAME' 
    }
    ,
   PID_POL_START_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PID_POL_START_DT' 
    }
    ,
   PID_POL_END_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PID_POL_END_DT' 
    }
    ,
   PID_POL_UW_YEAR: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PID_POL_UW_YEAR' 
    }
    ,
   PID_POL_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PID_POL_SI_LC_1' 
    }
    ,
   PID_POL_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PID_POL_SI_LC_2' 
    }
    ,
   PID_POL_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PID_POL_SI_LC_3' 
    }
    ,
   PID_POL_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PID_POL_PREM_LC_1' 
    }
    ,
   PID_POL_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PID_POL_PREM_LC_2' 
    }
    ,
   PID_POL_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PID_POL_PREM_LC_3' 
    }
    ,
   PID_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PID_REC_TYPE' 
    }
    ,
   PID_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_01' 
    }
    ,
   PID_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_02' 
    }
    ,
   PID_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_03' 
    }
    ,
   PID_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_04' 
    }
    ,
   PID_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_05' 
    }
    ,
   PID_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PID_CR_UID' 
    }
    ,
   PID_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PID_CR_DT' 
    }
    ,
   PID_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PID_UPD_UID' 
    }
    ,
   PID_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PID_UPD_DT' 
    }
    ,
   PID_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PID_COMP_CODE' 
    }
    ,
   PID_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PID_DIVN_CODE' 
    }
    ,
   PID_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PID_DEPT_CODE' 
    }
    ,
   PID_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PID_DS_TYPE' 
    }
    ,
   PID_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PID_PROD_CODE' 
    }
    ,
   PID_RISK_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PID_RISK_SYS_ID' 
    }
    ,
   PID_CLAIM_RATIO: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PID_CLAIM_RATIO' 
    }
    ,
   PID_NCB_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PID_NCB_PERC' 
    }
    ,
   PID_LVL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PID_LVL_NO' 
    }
    ,
   PID_LVL_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PID_LVL_SR_NO' 
    }
    ,
   PID_CLAIM_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PID_CLAIM_YN' 
    }
    ,
   PID_POL_CLAIM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PID_POL_CLAIM_LC_1' 
    }
    ,
   PID_POL_CLAIM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PID_POL_CLAIM_LC_2' 
    }
    ,
   PID_POL_CLAIM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PID_POL_CLAIM_LC_3' 
    }
    ,
   PID_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_06' 
    }
    ,
   PID_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_07' 
    }
    ,
   PID_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_08' 
    }
    ,
   PID_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_09' 
    }
    ,
   PID_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_10' 
    }
    ,
   PID_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_11' 
    }
    ,
   PID_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_12' 
    }
    ,
   PID_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_13' 
    }
    ,
   PID_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_14' 
    }
    ,
   PID_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PID_FLEX_15' 
    }
    ,
   PID_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PID_CNCT_SYS_ID' 
    }
    
    }, {
        tableName: 'PGIT_POL_PREV_INS_DTL',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITPOLPREVINSDTL;
};