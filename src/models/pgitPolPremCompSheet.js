module.exports = (sequelize, DataTypes) => {
  const PGITPOLPREMCOMPSHEET = sequelize.define('PGITPOLPREMCOMPSHEET', {
       PCST_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_1' 
    }
    ,
   PCST_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_2' 
    }
    ,
   PCST_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_3' 
    }
    ,
   PCST_ORG_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_FC' 
    }
    ,
   PCST_ORG_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_1' 
    }
    ,
   PCST_ORG_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_2' 
    }
    ,
   PCST_ORG_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_3' 
    }
    ,
   PCST_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_01' 
    }
    ,
   PCST_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_02' 
    }
    ,
   PCST_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_03' 
    }
    ,
   PCST_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_04' 
    }
    ,
   PCST_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_05' 
    }
    ,
   PCST_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_06' 
    }
    ,
   PCST_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_07' 
    }
    ,
   PCST_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_08' 
    }
    ,
   PCST_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_09' 
    }
    ,
   PCST_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_10' 
    }
    ,
   PCST_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_11' 
    }
    ,
   PCST_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_12' 
    }
    ,
   PCST_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_13' 
    }
    ,
   PCST_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_14' 
    }
    ,
   PCST_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_15' 
    }
    ,
   PCST_PRC_LVL: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_PRC_LVL' 
    }
    ,
   PCST_PRC_CVR_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCST_PRC_CVR_TYPE' 
    }
    ,
   PCST_TAX_APLY_ON: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_TAX_APLY_ON' 
    }
    ,
   PCST_PRAI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PRAI_SYS_ID' 
    }
    ,
   PCST_PRC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PRC_SYS_ID' 
    }
    ,
   PCST_PCHG_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PCHG_SYS_ID' 
    }
    ,
   PCST_PPS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PPS_SYS_ID' 
    }
    ,
   PCST_PREM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_PREM_CURR_CODE' 
    }
    ,
   PCST_AMOUNT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'PCST_AMOUNT_FC' 
    }
    ,
   PCST_AMOUNT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_1' 
    }
    ,
   PCST_AMOUNT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_2' 
    }
    ,
   PCST_AMOUNT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_3' 
    }
    ,
   PCST_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_CR_UID' 
    }
    ,
   PCST_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCST_CR_DT' 
    }
    ,
   PCST_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_UPD_UID' 
    }
    ,
   PCST_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCST_UPD_DT' 
    }
    ,
   PCST_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      field: 'PCST_POL_SYS_ID' 
    }
    ,
   PCST_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      field: 'PCST_END_NO_IDX' 
    }
    ,
   PCST_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      field: 'PCST_END_SR_NO' 
    }
    ,
   PCST_LVL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_LVL_NO' 
    }
    ,
   PCST_LVL_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_LVL_SR_NO' 
    }
    ,
   PCST_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_COMP_CODE' 
    }
    ,
   PCST_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DIVN_CODE' 
    }
    ,
   PCST_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DEPT_CODE' 
    }
    ,
   PCST_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DS_TYPE' 
    }
    ,
   PCST_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_PROD_CODE' 
    }
    ,
   PCST_DISP_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_DISP_SR_NO' 
    }
    ,
   PCST_PCVR_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PCVR_SYS_ID' 
    }
    ,
   PCST_REC_TYPE_IND: { 
      type: DataTypes.STRING(2), 
      allowNull: true, 
      
      field: 'PCST_REC_TYPE_IND' 
    }
    ,
   PCST_ORG_AMOUNT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_FC' 
    }
    ,
   PCST_ORG_AMOUNT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_1' 
    }
    ,
   PCST_ORG_AMOUNT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_2' 
    }
    ,
   PCST_ORG_AMOUNT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_3' 
    }
    ,
   PCST_PRC_DESC: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PCST_PRC_DESC' 
    }
    ,
   PCST_RATE_EFT: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_RATE_EFT' 
    }
    ,
   PCST_SI_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_SI_CURR_CODE' 
    }
    ,
   PCST_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_FC' 
    }
    
    }, {
        tableName: 'PGIT_POL_PREM_COMP_SHEET',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITPOLPREMCOMPSHEET;
};