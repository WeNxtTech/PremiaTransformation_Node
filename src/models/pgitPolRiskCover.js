module.exports = (sequelize, DataTypes) => {
  const PGITPOLRISKCOVER = sequelize.define('PGITPOLRISKCOVER', {
       PRC_CASCADE_LVL_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_1' 
    }
    ,
   PRC_CASCADE_LVL_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_2' 
    }
    ,
   PRC_CASCADE_LVL_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_3' 
    }
    ,
   PRC_CVR_IND_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CVR_IND_CODE' 
    }
    ,
   PRC_APPR_DISC_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_APPR_DISC_YN' 
    }
    ,
   PRC_APPR_LOAD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_APPR_LOAD_YN' 
    }
    ,
   PRC_AC_SEP_ENT_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_AC_SEP_ENT_YN' 
    }
    ,
   PRC_REINST_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_FC' 
    }
    ,
   PRC_REINST_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_1' 
    }
    ,
   PRC_REINST_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_2' 
    }
    ,
   PRC_REINST_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_3' 
    }
    ,
   PRC_CLSFN: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CLSFN' 
    }
    ,
   PRC_BRH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_BRH_SYS_ID' 
    }
    ,
   PRC_SILENT_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_SILENT_EFF_FM_DT' 
    }
    ,
   PRC_SILENT_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_SILENT_EFF_TO_DT' 
    }
    ,
   PRC_RATE_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_RATE_MODIFIED_YN' 
    }
    ,
   PRC_SI_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_SI_MODIFIED_YN' 
    }
    ,
   PRC_AOY_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_FC' 
    }
    ,
   PRC_AOY_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_1' 
    }
    ,
   PRC_AOY_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_2' 
    }
    ,
   PRC_AOY_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_3' 
    }
    ,
   PRC_AOA_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_FC' 
    }
    ,
   PRC_AOA_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_1' 
    }
    ,
   PRC_AOA_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_2' 
    }
    ,
   PRC_AOA_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_3' 
    }
    ,
   PRC_ORG_AOY_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_FC' 
    }
    ,
   PRC_ORG_AOY_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   PRC_ORG_AOY_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   PRC_ORG_AOY_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   PRC_ORG_AOA_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_FC' 
    }
    ,
   PRC_ORG_AOA_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   PRC_ORG_AOA_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   PRC_ORG_AOA_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   PRC_RATE_EFT: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_EFT' 
    }
    ,
   PRC_SUMM_CVR_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_SUMM_CVR_YN' 
    }
    ,
   PRC_BUILT_IN_CVR: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_BUILT_IN_CVR' 
    }
    ,
   PRC_LINK_CVR_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LINK_CVR_SYS_ID' 
    }
    ,
   PRC_ATTACH_LVL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_ATTACH_LVL_NO' 
    }
    ,
   PRC_ATTACH_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_ATTACH_SR_NO' 
    }
    ,
   PRC_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_COMP_CODE' 
    }
    ,
   PRC_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DIVN_CODE' 
    }
    ,
   PRC_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DEPT_CODE' 
    }
    ,
   PRC_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DS_TYPE' 
    }
    ,
   PRC_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_PROD_CODE' 
    }
    ,
   PRC_NL_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_NL_FM_DT' 
    }
    ,
   PRC_NL_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_NL_TO_DT' 
    }
    ,
   PRC_ORG_LIABILITY_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_FC' 
    }
    ,
   PRC_ORG_LIABILITY_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_1' 
    }
    ,
   PRC_ORG_LIABILITY_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_2' 
    }
    ,
   PRC_ORG_LIABILITY_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_3' 
    }
    ,
   PRC_ACROSS_RISK_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_ACROSS_RISK_YN' 
    }
    ,
   PRC_MIN_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_MIN_SI_LC_1' 
    }
    ,
   PRC_MAX_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_MAX_SI_LC_1' 
    }
    ,
   PRC_DERIVED_RATE: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_RATE' 
    }
    ,
   PRC_PCVR_ADD_RI_SI_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PCVR_ADD_RI_SI_YN' 
    }
    ,
   PRC_SH_PRD_RATE: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_SH_PRD_RATE' 
    }
    ,
   PRC_ADD_RI_SI_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_ADD_RI_SI_YN' 
    }
    ,
   PRC_RISK_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RISK_CLASS_CODE' 
    }
    ,
   PRC_SMI_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_SMI_CODE' 
    }
    ,
   PRC_DERIVED_FM_SMI_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_FM_SMI_YN' 
    }
    ,
   PRC_SMI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_SMI_SYS_ID' 
    }
    ,
   PRC_DFLT_TO_CHILD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DFLT_TO_CHILD_YN' 
    }
    ,
   PRC_RATE_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_TYPE' 
    }
    ,
   PRC_RATE_KEY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_KEY' 
    }
    ,
   PRC_RATE_LEVEL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_RATE_LEVEL_NO' 
    }
    ,
   PRC_SEC_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_SEC_CODE' 
    }
    ,
   PRC_ESC_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_FC' 
    }
    ,
   PRC_ESC_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_1' 
    }
    ,
   PRC_ESC_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_2' 
    }
    ,
   PRC_ORG_ESC_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_FC' 
    }
    ,
   PRC_ORG_ESC_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_1' 
    }
    ,
   PRC_ORG_ESC_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_2' 
    }
    ,
   PRC_ORG_ESC_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_3' 
    }
    ,
   PRC_ESC_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_3' 
    }
    ,
   PRC_ANNUAL_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_FC' 
    }
    ,
   PRC_ANNUAL_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_1' 
    }
    ,
   PRC_ANNUAL_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_2' 
    }
    ,
   PRC_ANNUAL_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_3' 
    }
    ,
   PRC_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CNCT_SYS_ID' 
    }
    ,
   PRC_PREM_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PREM_MODIFIED_YN' 
    }
    ,
   PRC_TERRORISM_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_TERRORISM_YN' 
    }
    ,
   PRC_LVL: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_LVL' 
    }
    ,
   PRC_CVR_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CVR_SYS_ID' 
    }
    ,
   PRC_CVR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CVR_CODE' 
    }
    ,
   PRC_DERIVED_FM_CVR_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_FM_CVR_YN' 
    }
    ,
   PRC_IDV_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_IDV_YN' 
    }
    ,
   PRC_IDV_DEF_REQ_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_IDV_DEF_REQ_YN' 
    }
    ,
   PRC_TOT_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_FC' 
    }
    ,
   PRC_TOT_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_1' 
    }
    ,
   PRC_TOT_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_2' 
    }
    ,
   PRC_TOT_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_3' 
    }
    ,
   PRC_FIRST_LOSS_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRC_FIRST_LOSS_PERC' 
    }
    ,
   PRC_ORG_TOT_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_FC' 
    }
    ,
   PRC_ORG_TOT_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_1' 
    }
    ,
   PRC_ORG_TOT_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_2' 
    }
    ,
   PRC_ORG_TOT_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_3' 
    }
    ,
   PRC_APPLIED_ON: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_APPLIED_ON' 
    }
    ,
   PRC_CASCADE_ORD: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CASCADE_ORD' 
    }
    ,
   PRC_CASCADE_LVL_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_FC' 
    }
    ,
   PRC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRC_SYS_ID' 
    }
    ,
   PRC_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_POL_SYS_ID' 
    }
    ,
   PRC_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_END_NO_IDX' 
    }
    ,
   PRC_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_END_SR_NO' 
    }
    ,
   PRC_PSEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_PSEC_SYS_ID' 
    }
    ,
   PRC_LVL1_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL1_SYS_ID' 
    }
    ,
   PRC_LVL1_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL1_SR_NO' 
    }
    ,
   PRC_LVL2_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL2_SYS_ID' 
    }
    ,
   PRC_LVL2_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL2_SR_NO' 
    }
    ,
   PRC_LVL3_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL3_SYS_ID' 
    }
    ,
   PRC_LVL3_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL3_SR_NO' 
    }
    ,
   PRC_LVL4_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL4_SYS_ID' 
    }
    ,
   PRC_LVL4_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL4_SR_NO' 
    }
    ,
   PRC_LVL5_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL5_SYS_ID' 
    }
    ,
   PRC_LVL5_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL5_SR_NO' 
    }
    ,
   PRC_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_SR_NO' 
    }
    ,
   PRC_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_CODE' 
    }
    ,
   PRC_DESC: { 
      type: DataTypes.STRING(2000), 
      allowNull: false, 
      
      field: 'PRC_DESC' 
    }
    ,
   PRC_PERIL_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_PERIL_CLASS_CODE' 
    }
    ,
   PRC_MAND_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_MAND_YN' 
    }
    ,
   PRC_RATE: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRC_RATE' 
    }
    ,
   PRC_RATE_PER: { 
      type: DataTypes.DECIMAL(23, 5), 
      allowNull: true, 
      
      field: 'PRC_RATE_PER' 
    }
    ,
   PRC_CVR_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_CVR_TYPE' 
    }
    ,
   PRC_PREM_CALC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PREM_CALC_TYPE' 
    }
    ,
   PRC_ADD_SI_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_ADD_SI_YN' 
    }
    ,
   PRC_SI_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_SI_CURR_CODE' 
    }
    ,
   PRC_PREM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_PREM_CURR_CODE' 
    }
    ,
   PRC_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_FC' 
    }
    ,
   PRC_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_1' 
    }
    ,
   PRC_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_2' 
    }
    ,
   PRC_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_3' 
    }
    ,
   PRC_ORG_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_FC' 
    }
    ,
   PRC_ORG_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_1' 
    }
    ,
   PRC_ORG_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_2' 
    }
    ,
   PRC_ORG_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_3' 
    }
    ,
   PRC_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_FC' 
    }
    ,
   PRC_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_1' 
    }
    ,
   PRC_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_2' 
    }
    ,
   PRC_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_3' 
    }
    ,
   PRC_ORG_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_FC' 
    }
    ,
   PRC_ORG_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_1' 
    }
    ,
   PRC_ORG_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_2' 
    }
    ,
   PRC_ORG_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_3' 
    }
    ,
   PRC_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_EFF_FM_DT' 
    }
    ,
   PRC_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_EFF_TO_DT' 
    }
    ,
   PRC_END_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_END_EFF_FM_DT' 
    }
    ,
   PRC_BROK_COMM_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_BROK_COMM_APPL_YN' 
    }
    ,
   PRC_NO_CLM_BONUS_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_NO_CLM_BONUS_APPL_YN' 
    }
    ,
   PRC_PROF_COMM_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_PROF_COMM_APPL_YN' 
    }
    ,
   PRC_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_REC_TYPE' 
    }
    ,
   PRC_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_CR_UID' 
    }
    ,
   PRC_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRC_CR_DT' 
    }
    ,
   PRC_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_UPD_UID' 
    }
    ,
   PRC_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_UPD_DT' 
    }
    ,
   PRC_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_01' 
    }
    ,
   PRC_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_02' 
    }
    ,
   PRC_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_03' 
    }
    ,
   PRC_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_04' 
    }
    ,
   PRC_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_05' 
    }
    ,
   PRC_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_06' 
    }
    ,
   PRC_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_07' 
    }
    ,
   PRC_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_08' 
    }
    ,
   PRC_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_09' 
    }
    ,
   PRC_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_10' 
    }
    ,
   PRC_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_11' 
    }
    ,
   PRC_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_12' 
    }
    ,
   PRC_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_13' 
    }
    ,
   PRC_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_14' 
    }
    ,
   PRC_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_15' 
    }
    ,
   PRC_FLEX_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_16' 
    }
    ,
   PRC_FLEX_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_17' 
    }
    ,
   PRC_FLEX_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_18' 
    }
    ,
   PRC_FLEX_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_19' 
    }
    ,
   PRC_FLEX_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_20' 
    }
    ,
   PRC_LIABILITY_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_FC' 
    }
    ,
   PRC_LIABILITY_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_1' 
    }
    ,
   PRC_LIABILITY_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_2' 
    }
    ,
   PRC_LIABILITY_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_3' 
    }
    ,
   PRC_SILENT_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_SILENT_YN' 
    }
    
    }, {
        tableName: 'PGIT_POL_RISK_COVER',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITPOLRISKCOVER;
};