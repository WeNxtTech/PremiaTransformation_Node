module.exports = (sequelize, DataTypes) => {
  const PgithPolRiskCover = sequelize.define('PgithPolRiskCover', {
       PRCH_LVL3_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_LVL3_SR_NO' 
    }
    ,
   PRCH_LVL4_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_LVL4_SYS_ID' 
    }
    ,
   PRCH_LVL4_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_LVL4_SR_NO' 
    }
    ,
   PRCH_LVL5_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_LVL5_SYS_ID' 
    }
    ,
   PRCH_LVL5_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_LVL5_SR_NO' 
    }
    ,
   PRCH_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRCH_SR_NO' 
    }
    ,
   PRCH_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRCH_CODE' 
    }
    ,
   PRCH_DESC: { 
      type: DataTypes.STRING(2000), 
      allowNull: false, 
      
      field: 'PRCH_DESC' 
    }
    ,
   PRCH_MAND_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_MAND_YN' 
    }
    ,
   PRCH_PERIL_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_PERIL_CLASS_CODE' 
    }
    ,
   PRCH_RATE: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRCH_RATE' 
    }
    ,
   PRCH_RATE_PER: { 
      type: DataTypes.DECIMAL(23, 5), 
      allowNull: true, 
      
      field: 'PRCH_RATE_PER' 
    }
    ,
   PRCH_CVR_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRCH_CVR_TYPE' 
    }
    ,
   PRCH_PREM_CALC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_PREM_CALC_TYPE' 
    }
    ,
   PRCH_ADD_SI_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRCH_ADD_SI_YN' 
    }
    ,
   PRCH_SI_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRCH_SI_CURR_CODE' 
    }
    ,
   PRCH_PREM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRCH_PREM_CURR_CODE' 
    }
    ,
   PRCH_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_SI_FC' 
    }
    ,
   PRCH_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_SI_LC_1' 
    }
    ,
   PRCH_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_SI_LC_2' 
    }
    ,
   PRCH_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_SI_LC_3' 
    }
    ,
   PRCH_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_PREM_FC' 
    }
    ,
   PRCH_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_PREM_LC_1' 
    }
    ,
   PRCH_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_PREM_LC_2' 
    }
    ,
   PRCH_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_PREM_LC_3' 
    }
    ,
   PRCH_ORG_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_SI_FC' 
    }
    ,
   PRCH_ORG_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_SI_LC_1' 
    }
    ,
   PRCH_ORG_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_SI_LC_2' 
    }
    ,
   PRCH_ORG_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_SI_LC_3' 
    }
    ,
   PRCH_ORG_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_PREM_FC' 
    }
    ,
   PRCH_ORG_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_PREM_LC_1' 
    }
    ,
   PRCH_ORG_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_PREM_LC_2' 
    }
    ,
   PRCH_ORG_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_PREM_LC_3' 
    }
    ,
   PRCH_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRCH_EFF_FM_DT' 
    }
    ,
   PRCH_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRCH_EFF_TO_DT' 
    }
    ,
   PRCH_END_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRCH_END_EFF_FM_DT' 
    }
    ,
   PRCH_BROK_COMM_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRCH_BROK_COMM_APPL_YN' 
    }
    ,
   PRCH_NO_CLM_BONUS_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRCH_NO_CLM_BONUS_APPL_YN' 
    }
    ,
   PRCH_PROF_COMM_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRCH_PROF_COMM_APPL_YN' 
    }
    ,
   PRCH_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRCH_REC_TYPE' 
    }
    ,
   PRCH_LIABILITY_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_LIABILITY_FC' 
    }
    ,
   PRCH_LIABILITY_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_LIABILITY_LC_1' 
    }
    ,
   PRCH_LIABILITY_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_LIABILITY_LC_2' 
    }
    ,
   PRCH_LIABILITY_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_LIABILITY_LC_3' 
    }
    ,
   PRCH_RATE_EFT: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_RATE_EFT' 
    }
    ,
   PRCH_SILENT_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRCH_SILENT_YN' 
    }
    ,
   PRCH_SILENT_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRCH_SILENT_EFF_FM_DT' 
    }
    ,
   PRCH_SILENT_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRCH_SILENT_EFF_TO_DT' 
    }
    ,
   PRCH_AOA_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_AOA_LIMIT_FC' 
    }
    ,
   PRCH_AOA_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_AOA_LIMIT_LC_1' 
    }
    ,
   PRCH_AOA_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_AOA_LIMIT_LC_2' 
    }
    ,
   PRCH_AOA_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_AOA_LIMIT_LC_3' 
    }
    ,
   PRCH_ORG_AOY_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_AOY_LIMIT_FC' 
    }
    ,
   PRCH_ORG_AOY_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   PRCH_ORG_AOY_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   PRCH_ORG_AOY_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   PRCH_RATE_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_RATE_MODIFIED_YN' 
    }
    ,
   PRCH_ORG_AOA_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_AOA_LIMIT_FC' 
    }
    ,
   PRCH_ORG_AOA_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   PRCH_ORG_AOA_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   PRCH_ORG_AOA_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   PRCH_AOY_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_AOY_LIMIT_FC' 
    }
    ,
   PRCH_AOY_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_AOY_LIMIT_LC_1' 
    }
    ,
   PRCH_AOY_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_AOY_LIMIT_LC_2' 
    }
    ,
   PRCH_AOY_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_AOY_LIMIT_LC_3' 
    }
    ,
   PRCH_BUILT_IN_CVR: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_BUILT_IN_CVR' 
    }
    ,
   PRCH_SUMM_CVR_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_SUMM_CVR_YN' 
    }
    ,
   PRCH_LINK_CVR_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_LINK_CVR_SYS_ID' 
    }
    ,
   PRCH_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_01' 
    }
    ,
   PRCH_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_02' 
    }
    ,
   PRCH_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_03' 
    }
    ,
   PRCH_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_04' 
    }
    ,
   PRCH_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_05' 
    }
    ,
   PRCH_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_06' 
    }
    ,
   PRCH_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_07' 
    }
    ,
   PRCH_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_08' 
    }
    ,
   PRCH_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_09' 
    }
    ,
   PRCH_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_10' 
    }
    ,
   PRCH_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_11' 
    }
    ,
   PRCH_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_12' 
    }
    ,
   PRCH_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_13' 
    }
    ,
   PRCH_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_14' 
    }
    ,
   PRCH_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_15' 
    }
    ,
   PRCH_FLEX_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_16' 
    }
    ,
   PRCH_FLEX_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_17' 
    }
    ,
   PRCH_FLEX_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_18' 
    }
    ,
   PRCH_FLEX_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_19' 
    }
    ,
   PRCH_FLEX_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRCH_FLEX_20' 
    }
    ,
   PRCH_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRCH_CR_UID' 
    }
    ,
   PRCH_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRCH_CR_DT' 
    }
    ,
   PRCH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
      allowNull: false, 
      
      field: 'PRCH_SYS_ID' 
    }
    ,
   PRCH_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRCH_POL_SYS_ID' 
    }
    ,
   PRCH_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRCH_END_NO_IDX' 
    }
    ,
   PRCH_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRCH_END_SR_NO' 
    }
    ,
   PRCH_PSEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_PSEC_SYS_ID' 
    }
    ,
   PRCH_LVL1_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_LVL1_SYS_ID' 
    }
    ,
   PRCH_LVL1_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_LVL1_SR_NO' 
    }
    ,
   PRCH_LVL2_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_LVL2_SYS_ID' 
    }
    ,
   PRCH_LVL2_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_LVL2_SR_NO' 
    }
    ,
   PRCH_LVL3_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_LVL3_SYS_ID' 
    }
    ,
   PRCH_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_UPD_UID' 
    }
    ,
   PRCH_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRCH_UPD_DT' 
    }
    ,
   PRCH_ATTACH_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_ATTACH_SR_NO' 
    }
    ,
   PRCH_ATTACH_LVL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_ATTACH_LVL_NO' 
    }
    ,
   PRCH_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_DIVN_CODE' 
    }
    ,
   PRCH_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_DEPT_CODE' 
    }
    ,
   PRCH_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_DS_TYPE' 
    }
    ,
   PRCH_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_PROD_CODE' 
    }
    ,
   PRCH_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_COMP_CODE' 
    }
    ,
   PRCH_SI_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_SI_MODIFIED_YN' 
    }
    ,
   PRCH_ORG_LIABILITY_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_LIABILITY_FC' 
    }
    ,
   PRCH_ORG_LIABILITY_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_LIABILITY_LC_1' 
    }
    ,
   PRCH_ORG_LIABILITY_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_LIABILITY_LC_2' 
    }
    ,
   PRCH_ORG_LIABILITY_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_LIABILITY_LC_3' 
    }
    ,
   PRCH_ACROSS_RISK_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_ACROSS_RISK_YN' 
    }
    ,
   PRCH_NL_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRCH_NL_FM_DT' 
    }
    ,
   PRCH_NL_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRCH_NL_TO_DT' 
    }
    ,
   PRCH_MIN_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_MIN_SI_LC_1' 
    }
    ,
   PRCH_MAX_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_MAX_SI_LC_1' 
    }
    ,
   PRCH_DERIVED_RATE: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRCH_DERIVED_RATE' 
    }
    ,
   PRCH_PCVR_ADD_RI_SI_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_PCVR_ADD_RI_SI_YN' 
    }
    ,
   PRCH_SH_PRD_RATE: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_SH_PRD_RATE' 
    }
    ,
   PRCH_RISK_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_RISK_CLASS_CODE' 
    }
    ,
   PRCH_ADD_RI_SI_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_ADD_RI_SI_YN' 
    }
    ,
   PRCH_SMI_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_SMI_CODE' 
    }
    ,
   PRCH_DERIVED_FM_SMI_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_DERIVED_FM_SMI_YN' 
    }
    ,
   PRCH_SMI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_SMI_SYS_ID' 
    }
    ,
   PRCH_DFLT_TO_CHILD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_DFLT_TO_CHILD_YN' 
    }
    ,
   PRCH_RATE_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_RATE_TYPE' 
    }
    ,
   PRCH_RATE_KEY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_RATE_KEY' 
    }
    ,
   PRCH_RATE_LEVEL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_RATE_LEVEL_NO' 
    }
    ,
   PRCH_SEC_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_SEC_CODE' 
    }
    ,
   PRCH_ESC_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ESC_SI_FC' 
    }
    ,
   PRCH_ESC_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ESC_SI_LC_1' 
    }
    ,
   PRCH_ESC_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ESC_SI_LC_2' 
    }
    ,
   PRCH_ORG_ESC_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_ESC_SI_FC' 
    }
    ,
   PRCH_ORG_ESC_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_ESC_SI_LC_1' 
    }
    ,
   PRCH_ORG_ESC_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_ESC_SI_LC_2' 
    }
    ,
   PRCH_ORG_ESC_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_ESC_SI_LC_3' 
    }
    ,
   PRCH_ESC_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ESC_SI_LC_3' 
    }
    ,
   PRCH_ANNUAL_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ANNUAL_PREM_FC' 
    }
    ,
   PRCH_ANNUAL_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ANNUAL_PREM_LC_1' 
    }
    ,
   PRCH_ANNUAL_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ANNUAL_PREM_LC_2' 
    }
    ,
   PRCH_ANNUAL_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ANNUAL_PREM_LC_3' 
    }
    ,
   PRCH_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_CNCT_SYS_ID' 
    }
    ,
   PRCH_PREM_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_PREM_MODIFIED_YN' 
    }
    ,
   PRCH_TERRORISM_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_TERRORISM_YN' 
    }
    ,
   PRCH_LVL: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_LVL' 
    }
    ,
   PRCH_CVR_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_CVR_SYS_ID' 
    }
    ,
   PRCH_CVR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_CVR_CODE' 
    }
    ,
   PRCH_DERIVED_FM_CVR_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_DERIVED_FM_CVR_YN' 
    }
    ,
   PRCH_IDV_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_IDV_YN' 
    }
    ,
   PRCH_IDV_DEF_REQ_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_IDV_DEF_REQ_YN' 
    }
    ,
   PRCH_TOT_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_TOT_SI_FC' 
    }
    ,
   PRCH_TOT_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_TOT_SI_LC_1' 
    }
    ,
   PRCH_TOT_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_TOT_SI_LC_2' 
    }
    ,
   PRCH_TOT_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_TOT_SI_LC_3' 
    }
    ,
   PRCH_FIRST_LOSS_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRCH_FIRST_LOSS_PERC' 
    }
    ,
   PRCH_ORG_TOT_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_TOT_SI_FC' 
    }
    ,
   PRCH_ORG_TOT_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_TOT_SI_LC_1' 
    }
    ,
   PRCH_ORG_TOT_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_TOT_SI_LC_2' 
    }
    ,
   PRCH_ORG_TOT_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_ORG_TOT_SI_LC_3' 
    }
    ,
   PRCH_APPLIED_ON: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_APPLIED_ON' 
    }
    ,
   PRCH_CASCADE_ORD: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_CASCADE_ORD' 
    }
    ,
   PRCH_CASCADE_LVL_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_CASCADE_LVL_PREM_FC' 
    }
    ,
   PRCH_CASCADE_LVL_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_CASCADE_LVL_PREM_LC_1' 
    }
    ,
   PRCH_CASCADE_LVL_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_CASCADE_LVL_PREM_LC_2' 
    }
    ,
   PRCH_CASCADE_LVL_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_CASCADE_LVL_PREM_LC_3' 
    }
    ,
   PRCH_CVR_IND_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_CVR_IND_CODE' 
    }
    ,
   PRCH_APPR_DISC_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_APPR_DISC_YN' 
    }
    ,
   PRCH_APPR_LOAD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_APPR_LOAD_YN' 
    }
    ,
   PRCH_AC_SEP_ENT_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRCH_AC_SEP_ENT_YN' 
    }
    ,
   PRCH_REINST_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_REINST_AMT_FC' 
    }
    ,
   PRCH_REINST_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_REINST_AMT_LC_1' 
    }
    ,
   PRCH_REINST_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_REINST_AMT_LC_2' 
    }
    ,
   PRCH_REINST_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRCH_REINST_AMT_LC_3' 
    }
    ,
   PRCH_CLSFN: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRCH_CLSFN' 
    }
    ,
   PRCH_BRH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRCH_BRH_SYS_ID' 
    }
    
    }, {
        tableName: 'PGITH_POL_RISK_COVER',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgithPolRiskCover;
};