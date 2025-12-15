module.exports = (sequelize, DataTypes) => {
  const PGITPOLRISKSMI = sequelize.define('PGITPOLRISKSMI', {
       PRS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRS_SYS_ID' 
    }
    ,
   PRS_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRS_POL_SYS_ID' 
    }
    ,
   PRS_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRS_END_NO_IDX' 
    }
    ,
   PRS_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRS_END_SR_NO' 
    }
    ,
   PRS_PSEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRS_PSEC_SYS_ID' 
    }
    ,
   PRS_LVL1_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRS_LVL1_SYS_ID' 
    }
    ,
   PRS_LVL1_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRS_LVL1_SR_NO' 
    }
    ,
   PRS_LVL2_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRS_LVL2_SYS_ID' 
    }
    ,
   PRS_LVL2_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRS_LVL2_SR_NO' 
    }
    ,
   PRS_LVL3_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRS_LVL3_SYS_ID' 
    }
    ,
   PRS_LVL3_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRS_LVL3_SR_NO' 
    }
    ,
   PRS_LVL4_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRS_LVL4_SYS_ID' 
    }
    ,
   PRS_LVL4_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRS_LVL4_SR_NO' 
    }
    ,
   PRS_LVL5_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRS_LVL5_SYS_ID' 
    }
    ,
   PRS_LVL5_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRS_LVL5_SR_NO' 
    }
    ,
   PRS_SMI_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRS_SMI_CODE' 
    }
    ,
   PRS_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_SI_FC' 
    }
    ,
   PRS_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_SI_LC_1' 
    }
    ,
   PRS_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_SI_LC_2' 
    }
    ,
   PRS_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_SI_LC_3' 
    }
    ,
   PRS_RATE: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRS_RATE' 
    }
    ,
   PRS_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_PREM_FC' 
    }
    ,
   PRS_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_PREM_LC_1' 
    }
    ,
   PRS_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_PREM_LC_2' 
    }
    ,
   PRS_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_PREM_LC_3' 
    }
    ,
   PRS_ORG_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_SI_FC' 
    }
    ,
   PRS_ORG_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_SI_LC_1' 
    }
    ,
   PRS_ORG_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_SI_LC_2' 
    }
    ,
   PRS_ORG_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_SI_LC_3' 
    }
    ,
   PRS_ORG_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_PREM_FC' 
    }
    ,
   PRS_ORG_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_PREM_LC_1' 
    }
    ,
   PRS_ORG_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_PREM_LC_2' 
    }
    ,
   PRS_ORG_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_PREM_LC_3' 
    }
    ,
   PRS_ADD_SI_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRS_ADD_SI_YN' 
    }
    ,
   PRS_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRS_REC_TYPE' 
    }
    ,
   PRS_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRS_EFF_FM_DT' 
    }
    ,
   PRS_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRS_EFF_TO_DT' 
    }
    ,
   PRS_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRS_CR_UID' 
    }
    ,
   PRS_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRS_CR_DT' 
    }
    ,
   PRS_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRS_UPD_UID' 
    }
    ,
   PRS_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRS_UPD_DT' 
    }
    ,
   PRS_RATE_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRS_RATE_MODIFIED_YN' 
    }
    ,
   PRS_SI_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRS_SI_MODIFIED_YN' 
    }
    ,
   PRS_AOA_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_AOA_LIMIT_FC' 
    }
    ,
   PRS_AOA_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_AOA_LIMIT_LC_1' 
    }
    ,
   PRS_AOA_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_AOA_LIMIT_LC_2' 
    }
    ,
   PRS_AOA_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_AOA_LIMIT_LC_3' 
    }
    ,
   PRS_ORG_AOA_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_AOA_LIMIT_FC' 
    }
    ,
   PRS_ORG_AOA_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   PRS_ORG_AOA_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   PRS_ORG_AOA_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   PRS_AOY_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_AOY_LIMIT_FC' 
    }
    ,
   PRS_AOY_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_AOY_LIMIT_LC_1' 
    }
    ,
   PRS_AOY_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_AOY_LIMIT_LC_3' 
    }
    ,
   PRS_ORG_AOY_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_AOY_LIMIT_FC' 
    }
    ,
   PRS_ORG_AOY_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   PRS_ORG_AOY_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   PRS_ORG_AOY_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   PRS_AOY_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_AOY_LIMIT_LC_2' 
    }
    ,
   PRS_RATE_PER: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRS_RATE_PER' 
    }
    ,
   PRS_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRS_SR_NO' 
    }
    ,
   PRS_SMI_DESC: { 
      type: DataTypes.STRING(400), 
      allowNull: false, 
      
      field: 'PRS_SMI_DESC' 
    }
    ,
   PRS_ATTACH_LVL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRS_ATTACH_LVL_NO' 
    }
    ,
   PRS_ATTACH_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRS_ATTACH_SR_NO' 
    }
    ,
   PRS_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRS_COMP_CODE' 
    }
    ,
   PRS_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRS_DIVN_CODE' 
    }
    ,
   PRS_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRS_DEPT_CODE' 
    }
    ,
   PRS_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRS_DS_TYPE' 
    }
    ,
   PRS_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRS_PROD_CODE' 
    }
    ,
   PRS_FLEXI_01: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_01' 
    }
    ,
   PRS_FLEXI_02: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_02' 
    }
    ,
   PRS_FLEXI_03: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_03' 
    }
    ,
   PRS_FLEXI_04: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_04' 
    }
    ,
   PRS_FLEXI_05: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_05' 
    }
    ,
   PRS_FLEXI_06: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_06' 
    }
    ,
   PRS_FLEXI_07: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_07' 
    }
    ,
   PRS_FLEXI_08: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_08' 
    }
    ,
   PRS_FLEXI_09: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_09' 
    }
    ,
   PRS_FLEXI_10: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_10' 
    }
    ,
   PRS_FLEXI_11: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_11' 
    }
    ,
   PRS_FLEXI_12: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_12' 
    }
    ,
   PRS_FLEXI_13: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_13' 
    }
    ,
   PRS_FLEXI_14: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_14' 
    }
    ,
   PRS_FLEXI_15: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_15' 
    }
    ,
   PRS_FLEXI_16: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_16' 
    }
    ,
   PRS_FLEXI_17: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_17' 
    }
    ,
   PRS_FLEXI_18: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_18' 
    }
    ,
   PRS_FLEXI_19: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_19' 
    }
    ,
   PRS_FLEXI_20: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRS_FLEXI_20' 
    }
    ,
   PRS_SILENT_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRS_SILENT_EFF_FM_DT' 
    }
    ,
   PRS_SILENT_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRS_SILENT_EFF_TO_DT' 
    }
    ,
   PRS_SILENT_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRS_SILENT_YN' 
    }
    ,
   PRS_DFLT_TO_CHILD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRS_DFLT_TO_CHILD_YN' 
    }
    ,
   PRS_DECL_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRS_DECL_APPL_YN' 
    }
    ,
   PRS_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRS_CNCT_SYS_ID' 
    }
    ,
   PRS_PREM_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRS_PREM_MODIFIED_YN' 
    }
    ,
   PRS_IDV_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRS_IDV_YN' 
    }
    ,
   PRS_IDV_DEF_REQ_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRS_IDV_DEF_REQ_YN' 
    }
    ,
   PRS_MIN_SI_PERC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_MIN_SI_PERC' 
    }
    ,
   PRS_MIN_PREM_PERC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_MIN_PREM_PERC' 
    }
    ,
   PRS_DEPO_PREM_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRS_DEPO_PREM_PERC' 
    }
    ,
   PRS_TOT_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_TOT_SI_FC' 
    }
    ,
   PRS_TOT_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_TOT_SI_LC_1' 
    }
    ,
   PRS_TOT_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_TOT_SI_LC_2' 
    }
    ,
   PRS_TOT_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_TOT_SI_LC_3' 
    }
    ,
   PRS_FIRST_LOSS_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRS_FIRST_LOSS_PERC' 
    }
    ,
   PRS_ORG_TOT_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_TOT_SI_FC' 
    }
    ,
   PRS_ORG_TOT_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_TOT_SI_LC_1' 
    }
    ,
   PRS_ORG_TOT_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_TOT_SI_LC_2' 
    }
    ,
   PRS_ORG_TOT_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRS_ORG_TOT_SI_LC_3' 
    }
    
    }, {
        tableName: 'PGIT_POL_RISK_SMI',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITPOLRISKSMI;
};