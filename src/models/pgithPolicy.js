module.exports = (sequelize, DataTypes) => {
  const PgithPolicy = sequelize.define('PgithPolicy', {
       POLH_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_PREM_LC_1' 
    }
    ,
   POLH_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_PREM_LC_2' 
    }
    ,
   POLH_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_PREM_LC_3' 
    }
    ,
   POLH_CLM_INTM_DAYS: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_CLM_INTM_DAYS' 
    }
    ,
   POLH_ISSUE_OFFICER_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_ISSUE_OFFICER_CODE' 
    }
    ,
   POLH_CN_AGENT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_CN_AGENT_CODE' 
    }
    ,
   POLH_CN_DEV_OFF_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_CN_DEV_OFF_CODE' 
    }
    ,
   POLH_CN_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_CN_NO' 
    }
    ,
   POLH_CN_ISS_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_CN_ISS_DT' 
    }
    ,
   POLH_CATG: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_CATG' 
    }
    ,
   POLH_END_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_END_TYPE' 
    }
    ,
   POLH_END_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_END_CODE' 
    }
    ,
   POLH_END_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_END_NO' 
    }
    ,
   POLH_END_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_END_DT' 
    }
    ,
   POLH_END_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_END_EFF_FM_DT' 
    }
    ,
   POLH_END_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_END_EFF_TO_DT' 
    }
    ,
   POLH_END_DESC: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'POLH_END_DESC' 
    }
    ,
   POLH_REMARKS: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'POLH_REMARKS' 
    }
    ,
   POLH_HYPOTHECATION_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POLH_HYPOTHECATION_YN' 
    }
    ,
   POLH_FLEET_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POLH_FLEET_YN' 
    }
    ,
   POLH_OUR_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'POLH_OUR_SHARE_PERC' 
    }
    ,
   POLH_OUR_SHARE_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_OUR_SHARE_SI_FC' 
    }
    ,
   POLH_OUR_SHARE_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_OUR_SHARE_SI_LC_1' 
    }
    ,
   POLH_OUR_SHARE_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_OUR_SHARE_SI_LC_2' 
    }
    ,
   POLH_OUR_SHARE_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_OUR_SHARE_SI_LC_3' 
    }
    ,
   POLH_OUR_SHARE_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_OUR_SHARE_PREM_FC' 
    }
    ,
   POLH_OUR_SHARE_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_OUR_SHARE_PREM_LC_1' 
    }
    ,
   POLH_OUR_SHARE_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_OUR_SHARE_PREM_LC_2' 
    }
    ,
   POLH_OUR_SHARE_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_OUR_SHARE_PREM_LC_3' 
    }
    ,
   POLH_QUOT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_QUOT_SYS_ID' 
    }
    ,
   POLH_QUOT_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_QUOT_NO' 
    }
    ,
   POLH_REN_CNT_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_REN_CNT_SR_NO' 
    }
    ,
   POLH_RPH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_RPH_SYS_ID' 
    }
    ,
   POLH_LONG_TERM_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_LONG_TERM_YN' 
    }
    ,
   POLH_INST_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_INST_YN' 
    }
    ,
   POLH_NO_OF_INST: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_NO_OF_INST' 
    }
    ,
   POLH_LTERM_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_LTERM_TYPE' 
    }
    ,
   POLH_NO_OF_LTERM_YRS: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_NO_OF_LTERM_YRS' 
    }
    ,
   POLH_PREM_CALC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_PREM_CALC_TYPE' 
    }
    ,
   POLH_NO_RISK: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_NO_RISK' 
    }
    ,
   POLH_NO_SECTION: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_NO_SECTION' 
    }
    ,
   POLH_FAC_POOL_CODE: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_FAC_POOL_CODE' 
    }
    ,
   POLH_COINS_POOL_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_COINS_POOL_CODE' 
    }
    ,
   POLH_RI_BASIS: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_RI_BASIS' 
    }
    ,
   POLH_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_STS' 
    }
    ,
   POLH_CONVERT_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_CONVERT_TYPE' 
    }
    ,
   POLH_APPR_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_APPR_STS' 
    }
    ,
   POLH_APPR_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_APPR_DT' 
    }
    ,
   POLH_APPR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_APPR_UID' 
    }
    ,
   POLH_CLOSE_FLAG: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_CLOSE_FLAG' 
    }
    ,
   POLH_CLOSE_REASON: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_CLOSE_REASON' 
    }
    ,
   POLH_CLOSE_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_CLOSE_DT' 
    }
    ,
   POLH_CLM_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_CLM_SYS_ID' 
    }
    ,
   POLH_CLM_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_CLM_NO' 
    }
    ,
   POLH_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POLH_REC_TYPE' 
    }
    ,
   POLH_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_CR_UID' 
    }
    ,
   POLH_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POLH_CR_DT' 
    }
    ,
   POLH_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_UPD_UID' 
    }
    ,
   POLH_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_UPD_DT' 
    }
    ,
   POLH_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_01' 
    }
    ,
   POLH_FLEX_02: { 
      type: DataTypes.STRING(400), 
      allowNull: true, 
      
      field: 'POLH_FLEX_02' 
    }
    ,
   POLH_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_03' 
    }
    ,
   POLH_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_04' 
    }
    ,
   POLH_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_05' 
    }
    ,
   POLH_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_06' 
    }
    ,
   POLH_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_07' 
    }
    ,
   POLH_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_08' 
    }
    ,
   POLH_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_09' 
    }
    ,
   POLH_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_10' 
    }
    ,
   POLH_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_11' 
    }
    ,
   POLH_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_12' 
    }
    ,
   POLH_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_13' 
    }
    ,
   POLH_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_14' 
    }
    ,
   POLH_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_15' 
    }
    ,
   POLH_FLEX_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_16' 
    }
    ,
   POLH_FLEX_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_17' 
    }
    ,
   POLH_FLEX_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_18' 
    }
    ,
   POLH_FLEX_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_19' 
    }
    ,
   POLH_FLEX_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_20' 
    }
    ,
   POLH_SHORT_COLL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_SHORT_COLL_YN' 
    }
    ,
   POLH_MODE_OF_PAY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_MODE_OF_PAY' 
    }
    ,
   POLH_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_TYPE' 
    }
    ,
   POLH_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_SI_LC_3' 
    }
    ,
   POLH_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_SI_LC_2' 
    }
    ,
   POLH_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_SI_LC_1' 
    }
    ,
   POLH_NCB_YRS: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POLH_NCB_YRS' 
    }
    ,
   POLH_CLM_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_CLM_YN' 
    }
    ,
   POLH_WALK_IN_CUST_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POLH_WALK_IN_CUST_YN' 
    }
    ,
   POLH_TALUK: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_TALUK' 
    }
    ,
   POLH_BUS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_BUS_TYPE' 
    }
    ,
   POLH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'POLH_SYS_ID' 
    }
    ,
   POLH_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POLH_END_NO_IDX' 
    }
    ,
   POLH_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POLH_END_SR_NO' 
    }
    ,
   POLH_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_COMP_CODE' 
    }
    ,
   POLH_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_DIVN_CODE' 
    }
    ,
   POLH_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_DEPT_CODE' 
    }
    ,
   POLH_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_DS_TYPE' 
    }
    ,
   POLH_DS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_DS_CODE' 
    }
    ,
   POLH_SRC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_SRC_TYPE' 
    }
    ,
   POLH_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_CLASS_CODE' 
    }
    ,
   POLH_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_PROD_CODE' 
    }
    ,
   POLH_IRDA_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_IRDA_CLASS_CODE' 
    }
    ,
   POLH_IRDA_SOCIAL_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_IRDA_SOCIAL_TYPE' 
    }
    ,
   POLH_CUST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_CUST_CODE' 
    }
    ,
   POLH_ASSR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_ASSR_CODE' 
    }
    ,
   POLH_ASSR_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_ASSR_NAME' 
    }
    ,
   POLH_CUST_CONS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_CUST_CONS_CODE' 
    }
    ,
   POLH_ADDR_01: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POLH_ADDR_01' 
    }
    ,
   POLH_ADDR_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_ADDR_02' 
    }
    ,
   POLH_ADDR_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_ADDR_03' 
    }
    ,
   POLH_TEL_NO: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_TEL_NO' 
    }
    ,
   POLH_FAX_NO: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FAX_NO' 
    }
    ,
   POLH_EMAIL_ID: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_EMAIL_ID' 
    }
    ,
   POLH_STATE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_STATE' 
    }
    ,
   POLH_DISTRICT: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_DISTRICT' 
    }
    ,
   POLH_VILLAGE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_VILLAGE' 
    }
    ,
   POLH_PIN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_PIN_CODE' 
    }
    ,
   POLH_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POLH_NO' 
    }
    ,
   POLH_ISSUE_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_ISSUE_DT' 
    }
    ,
   POLH_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_FM_DT' 
    }
    ,
   POLH_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_TO_DT' 
    }
    ,
   POLH_PERIOD: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_PERIOD' 
    }
    ,
   POLH_PERIOD_UNIT: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_PERIOD_UNIT' 
    }
    ,
   POLH_DURATION_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_DURATION_TYPE' 
    }
    ,
   POLH_DT_TBA: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_DT_TBA' 
    }
    ,
   POLH_NL_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_NL_FM_DT' 
    }
    ,
   POLH_NL_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_NL_TO_DT' 
    }
    ,
   POLH_INTEREST: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'POLH_INTEREST' 
    }
    ,
   POLH_DFLT_SI_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_DFLT_SI_CURR_CODE' 
    }
    ,
   POLH_PREM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_PREM_CURR_CODE' 
    }
    ,
   POLH_ITERATION_REASON: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'POLH_ITERATION_REASON' 
    }
    ,
   POLH_RI_DED_INW_COMM: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_RI_DED_INW_COMM' 
    }
    ,
   POLH_RI_PREM_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_RI_PREM_TYPE' 
    }
    ,
   POLH_RI_END_ALLOC_BASIS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_RI_END_ALLOC_BASIS' 
    }
    ,
   POLH_FAC_PROV_ON: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_FAC_PROV_ON' 
    }
    ,
   POLH_COINS_ISSUE_TYPE: { 
      type: DataTypes.STRING(2), 
      allowNull: true, 
      
      field: 'POLH_COINS_ISSUE_TYPE' 
    }
    ,
   POLH_LINK_ALLOC_COMB_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_LINK_ALLOC_COMB_YN' 
    }
    ,
   POLH_DEPO_PREM_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'POLH_DEPO_PREM_PERC' 
    }
    ,
   POLH_FIRST_LOSS_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'POLH_FIRST_LOSS_PERC' 
    }
    ,
   POLH_COINS_PART_LVL: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_COINS_PART_LVL' 
    }
    ,
   POLH_ENT_COMPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_ENT_COMPL_YN' 
    }
    ,
   POLH_MAIL_ATTACHMENT_URL: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'POLH_MAIL_ATTACHMENT_URL' 
    }
    ,
   POLH_LAP_REASON: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_LAP_REASON' 
    }
    ,
   POLH_SING_AC_BRK: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_SING_AC_BRK' 
    }
    ,
   POLH_PRODUCER_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_PRODUCER_NAME' 
    }
    ,
   POLH_COLLECTOR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_COLLECTOR_CODE' 
    }
    ,
   POLH_COLLECTOR_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_COLLECTOR_NAME' 
    }
    ,
   POLH_ACNT_HANDLER_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_ACNT_HANDLER_CODE' 
    }
    ,
   POLH_ACNT_HANDLER_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_ACNT_HANDLER_NAME' 
    }
    ,
   POLH_FAC_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'POLH_FAC_PERC' 
    }
    ,
   POLH_TRAFIC_SERIAL: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_TRAFIC_SERIAL' 
    }
    ,
   POLH_INST_CVR_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_INST_CVR_YN' 
    }
    ,
   POLH_GRACE_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_GRACE_APPL_YN' 
    }
    ,
   POLH_GRACE_END_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_GRACE_END_DT' 
    }
    ,
   POLH_WF_STS: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_WF_STS' 
    }
    ,
   POLH_CBC_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_CBC_YN' 
    }
    ,
   POLH_PKG_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_PKG_CODE' 
    }
    ,
   POLH_NAJM_STS: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_NAJM_STS' 
    }
    ,
   POLH_NAJM_REMARKS: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'POLH_NAJM_REMARKS' 
    }
    ,
   POLH_USER_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_USER_END_NO_IDX' 
    }
    ,
   POLH_SM_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_SM_CODE' 
    }
    ,
   POLH_REMARKS_01: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'POLH_REMARKS_01' 
    }
    ,
   POLH_REMARKS_02: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'POLH_REMARKS_02' 
    }
    ,
   POLH_REMARKS_03: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'POLH_REMARKS_03' 
    }
    ,
   POLH_PREM_WARR_DAYS: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_PREM_WARR_DAYS' 
    }
    ,
   POLH_FLEX_21: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_21' 
    }
    ,
   POLH_FLEX_22: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_22' 
    }
    ,
   POLH_FLEX_23: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_23' 
    }
    ,
   POLH_FLEX_24: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_24' 
    }
    ,
   POLH_FLEX_25: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_25' 
    }
    ,
   POLH_ASSR_CONTACT_NO: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_ASSR_CONTACT_NO' 
    }
    ,
   POLH_ASSR_CONTACT_MAIL_ID: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_ASSR_CONTACT_MAIL_ID' 
    }
    ,
   POLH_FLEX_NUM_01: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_FLEX_NUM_01' 
    }
    ,
   POLH_FLEX_NUM_02: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_FLEX_NUM_02' 
    }
    ,
   POLH_FLEX_NUM_03: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_FLEX_NUM_03' 
    }
    ,
   POLH_FLEX_NUM_04: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_FLEX_NUM_04' 
    }
    ,
   POLH_FLEX_NUM_05: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_FLEX_NUM_05' 
    }
    ,
   POLH_FLEX_DT_01: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_FLEX_DT_01' 
    }
    ,
   POLH_FLEX_DT_02: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_FLEX_DT_02' 
    }
    ,
   POLH_FLEX_DT_03: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_FLEX_DT_03' 
    }
    ,
   POLH_FLEX_DT_04: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_FLEX_DT_04' 
    }
    ,
   POLH_FLEX_DT_05: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_FLEX_DT_05' 
    }
    ,
   POLH_REMARKS_04: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'POLH_REMARKS_04' 
    }
    ,
   POLH_REMARKS_05: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'POLH_REMARKS_05' 
    }
    ,
   POLH_FLEX_26: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_26' 
    }
    ,
   POLH_FLEX_27: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_27' 
    }
    ,
   POLH_FLEX_28: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_28' 
    }
    ,
   POLH_FLEX_29: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_29' 
    }
    ,
   POLH_FLEX_30: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_FLEX_30' 
    }
    ,
   POLH_CANCEL_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_CANCEL_TYPE' 
    }
    ,
   POLH_DECL_FREQ: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_DECL_FREQ' 
    }
    ,
   POLH_CAL_YR: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_CAL_YR' 
    }
    ,
   POLH_PRE_INSP_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_PRE_INSP_YN' 
    }
    ,
   POLH_REFUND_EVEN_CLAIM: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_REFUND_EVEN_CLAIM' 
    }
    ,
   POLH_CN_BOOK_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_CN_BOOK_ID' 
    }
    ,
   POLH_DISCOVERY_PRD_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_DISCOVERY_PRD_APPL_YN' 
    }
    ,
   POLH_DISCOVERY_PRD_IN_DAYS: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_DISCOVERY_PRD_IN_DAYS' 
    }
    ,
   POLH_COUNTY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_COUNTY' 
    }
    ,
   POLH_REJECT_REASON: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'POLH_REJECT_REASON' 
    }
    ,
   POLH_REVERT_REASON: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'POLH_REVERT_REASON' 
    }
    ,
   POLH_FLEX_YN_01: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_FLEX_YN_01' 
    }
    ,
   POLH_FLEX_YN_02: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_FLEX_YN_02' 
    }
    ,
   POLH_FLEX_YN_03: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_FLEX_YN_03' 
    }
    ,
   POLH_FLEX_YN_04: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_FLEX_YN_04' 
    }
    ,
   POLH_FLEX_YN_05: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_FLEX_YN_05' 
    }
    ,
   POLH_FLEX_YN_06: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_FLEX_YN_06' 
    }
    ,
   POLH_FLEX_YN_07: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_FLEX_YN_07' 
    }
    ,
   POLH_FLEX_YN_08: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_FLEX_YN_08' 
    }
    ,
   POLH_FLEX_YN_09: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_FLEX_YN_09' 
    }
    ,
   POLH_FLEX_YN_10: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_FLEX_YN_10' 
    }
    ,
   POLH_AUTO_RENEW_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_AUTO_RENEW_YN' 
    }
    ,
   POLH_DO_NOT_REN_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_DO_NOT_REN_YN' 
    }
    ,
   POLH_NON_REN_YR: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_NON_REN_YR' 
    }
    ,
   POLH_NON_REN_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_NON_REN_YN' 
    }
    ,
   POLH_HOLD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_HOLD_YN' 
    }
    ,
   POLH_END_ADV_PREM_ADJ_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_END_ADV_PREM_ADJ_TYPE' 
    }
    ,
   POLH_END_INSTL_APPR_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_END_INSTL_APPR_TYPE' 
    }
    ,
   POLH_AC_FEED_01: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_AC_FEED_01' 
    }
    ,
   POLH_AC_FEED_02: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_AC_FEED_02' 
    }
    ,
   POLH_AC_FEED_03: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_AC_FEED_03' 
    }
    ,
   POLH_AC_FEED_04: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_AC_FEED_04' 
    }
    ,
   POLH_AC_FEED_05: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_AC_FEED_05' 
    }
    ,
   POLH_AC_FEED_06: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_AC_FEED_06' 
    }
    ,
   POLH_AC_FEED_07: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_AC_FEED_07' 
    }
    ,
   POLH_NON_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_NON_EFF_FM_DT' 
    }
    ,
   POLH_NON_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_NON_EFF_TO_DT' 
    }
    ,
   POLH_ANNUAL_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ANNUAL_PREM_LC_1' 
    }
    ,
   POLH_ANNUAL_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ANNUAL_PREM_LC_2' 
    }
    ,
   POLH_ANNUAL_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ANNUAL_PREM_LC_3' 
    }
    ,
   POLH_OLD_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_OLD_POL_NO' 
    }
    ,
   POLH_MAR_RQST_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_MAR_RQST_NO' 
    }
    ,
   POLH_METHOD_PAY_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_METHOD_PAY_CODE' 
    }
    ,
   POLH_IND_AC_NO: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_IND_AC_NO' 
    }
    ,
   POLH_EXCESS_LOSS: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_EXCESS_LOSS' 
    }
    ,
   POLH_PROD_NUMBER: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_PROD_NUMBER' 
    }
    ,
   POLH_MGA_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'POLH_MGA_PERC' 
    }
    ,
   POLH_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_CNCT_SYS_ID' 
    }
    ,
   POLH_REN_REC: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_REN_REC' 
    }
    ,
   POLH_CIVIL_ID: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_CIVIL_ID' 
    }
    ,
   POLH_REF_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_REF_NO' 
    }
    ,
   POLH_NO_CN_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_NO_CN_YN' 
    }
    ,
   POLH_SALESMAN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_SALESMAN_CODE' 
    }
    ,
   POLH_SHOWROMM_LOC: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_SHOWROMM_LOC' 
    }
    ,
   POLH_NATIONALITY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_NATIONALITY' 
    }
    ,
   POLH_COMM_REG_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_COMM_REG_NO' 
    }
    ,
   POLH_SUBSTITUTE_CAR_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_SUBSTITUTE_CAR_YN' 
    }
    ,
   POLH_SUBSTITUTE_CAR: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_SUBSTITUTE_CAR' 
    }
    ,
   POLH_CENTER_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_CENTER_NO' 
    }
    ,
   POLH_FAC_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_FAC_YN' 
    }
    ,
   POLH_RA_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_RA_APPL_YN' 
    }
    ,
   POLH_RA_ALLOC_AT: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_RA_ALLOC_AT' 
    }
    ,
   POLH_PROD_SYMBOL: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_PROD_SYMBOL' 
    }
    ,
   POLH_UW_ID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_UW_ID' 
    }
    ,
   POLH_QUOT_RECVD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_QUOT_RECVD_DT' 
    }
    ,
   POLH_AGENT_CONTACT_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_AGENT_CONTACT_NAME' 
    }
    ,
   POLH_AGENT_CONTACT_NO: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_AGENT_CONTACT_NO' 
    }
    ,
   POLH_AGENT_CONTACT_EMAIL_ID: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_AGENT_CONTACT_EMAIL_ID' 
    }
    ,
   POLH_CTRL_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_CTRL_DT' 
    }
    ,
   POLH_END_CTRL_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_END_CTRL_DT' 
    }
    ,
   POLH_PRODUCER_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_PRODUCER_CODE' 
    }
    ,
   POLH_SIC_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_SIC_CODE' 
    }
    ,
   POLH_SIC_GROUP: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_SIC_GROUP' 
    }
    ,
   POLH_PRIOR_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_PRIOR_POL_NO' 
    }
    ,
   POLH_TERRORISM_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_TERRORISM_APPL_YN' 
    }
    ,
   POLH_TERR_VAL_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_TERR_VAL_TYPE' 
    }
    ,
   POLH_DNR_REASON: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'POLH_DNR_REASON' 
    }
    ,
   POLH_REN_REASON: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'POLH_REN_REASON' 
    }
    ,
   POLH_CONV_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_CONV_DT' 
    }
    ,
   POLH_CLM_MADE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_CLM_MADE_YN' 
    }
    ,
   POLH_INTL_END_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_INTL_END_YN' 
    }
    ,
   POLH_REN_PROC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_REN_PROC_TYPE' 
    }
    ,
   POLH_REN_MANUAL_MOVE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_REN_MANUAL_MOVE_YN' 
    }
    ,
   POLH_REWRITTEN_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_REWRITTEN_POL_NO' 
    }
    ,
   POLH_UW_REVIEW_REQD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_UW_REVIEW_REQD_YN' 
    }
    ,
   POLH_UW_REVIEWED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_UW_REVIEWED_YN' 
    }
    ,
   POLH_UW_YEAR: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_UW_YEAR' 
    }
    ,
   POLH_SRC_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_SRC_CODE' 
    }
    ,
   POLH_OPEN_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_OPEN_POL_SYS_ID' 
    }
    ,
   POLH_OPEN_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_OPEN_POL_NO' 
    }
    ,
   POLH_ORG_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_PREM_LC_1' 
    }
    ,
   POLH_ORG_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_PREM_LC_2' 
    }
    ,
   POLH_ORG_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_PREM_LC_3' 
    }
    ,
   POLH_CLAIM_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_CLAIM_NO' 
    }
    ,
   POLH_ORG_OUR_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'POLH_ORG_OUR_SHARE_PERC' 
    }
    ,
   POLH_ORG_OUR_SHARE_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_OUR_SHARE_SI_FC' 
    }
    ,
   POLH_ORG_OUR_SHARE_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_OUR_SHARE_SI_LC_1' 
    }
    ,
   POLH_ORG_OUR_SHARE_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_OUR_SHARE_SI_LC_2' 
    }
    ,
   POLH_ORG_OUR_SHARE_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_OUR_SHARE_SI_LC_3' 
    }
    ,
   POLH_ORG_OUR_SHARE_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_OUR_SHARE_PREM_FC' 
    }
    ,
   POLH_ORG_OUR_SHARE_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_OUR_SHARE_PREM_LC_1' 
    }
    ,
   POLH_ORG_OUR_SHARE_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_OUR_SHARE_PREM_LC_2' 
    }
    ,
   POLH_ORG_OUR_SHARE_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_OUR_SHARE_PREM_LC_3' 
    }
    ,
   POLH_REN_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_REN_POL_SYS_ID' 
    }
    ,
   POLH_REN_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_REN_POL_NO' 
    }
    ,
   POLH_SERVICE_TAX_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_SERVICE_TAX_YN' 
    }
    ,
   POLH_ADV_PREM_PROC_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_ADV_PREM_PROC_YN' 
    }
    ,
   POLH_PREM_FREEZE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_PREM_FREEZE_YN' 
    }
    ,
   POLH_ADD_PREM_CALC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_ADD_PREM_CALC_TYPE' 
    }
    ,
   POLH_UPD_SUMM_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_UPD_SUMM_YN' 
    }
    ,
   POLH_CITY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_CITY' 
    }
    ,
   POLH_COUNTRY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_COUNTRY' 
    }
    ,
   POLH_END_LAYUP_ADJ_METHOD: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_END_LAYUP_ADJ_METHOD' 
    }
    ,
   POLH_ADDR_STATE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_ADDR_STATE' 
    }
    ,
   POLH_RETRO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_RETRO_DT' 
    }
    ,
   POLH_ORG_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_SI_LC_1' 
    }
    ,
   POLH_ORG_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_SI_LC_2' 
    }
    ,
   POLH_ORG_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_SI_LC_3' 
    }
    ,
   POLH_SGN_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_SGN_STS' 
    }
    ,
   POLH_DECL_CNT_SRNO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_DECL_CNT_SRNO' 
    }
    ,
   POLH_PML_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'POLH_PML_PERC' 
    }
    ,
   POLH_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_PML_LC_1' 
    }
    ,
   POLH_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_PML_LC_2' 
    }
    ,
   POLH_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_PML_LC_3' 
    }
    ,
   POLH_STAMP_DUTY_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_STAMP_DUTY_YN' 
    }
    ,
   POLH_ORG_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_PML_LC_1' 
    }
    ,
   POLH_ORG_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_PML_LC_2' 
    }
    ,
   POLH_ORG_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_ORG_PML_LC_3' 
    }
    ,
   POLH_PRD_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_PRD_SYS_ID' 
    }
    ,
   POLH_PRD_RA_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_PRD_RA_NO' 
    }
    ,
   POLH_INSTL_METHOD: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_INSTL_METHOD' 
    }
    ,
   POLH_CLM_TOTAL_LOSS_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_CLM_TOTAL_LOSS_YN' 
    }
    ,
   POLH_TOT_REFUND_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_TOT_REFUND_YN' 
    }
    ,
   POLH_NCB_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'POLH_NCB_PERC' 
    }
    ,
   POLH_PROFIT_COMM_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'POLH_PROFIT_COMM_PERC' 
    }
    ,
   POLH_QUALIFY_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'POLH_QUALIFY_PERC' 
    }
    ,
   POLH_COLL_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_COLL_DIVN_CODE' 
    }
    ,
   POLH_PREM_CURR_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_PREM_CURR_TYPE' 
    }
    ,
   POLH_RI_CEDING_BASIS: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POLH_RI_CEDING_BASIS' 
    }
    ,
   POLH_REFUND_PERIOD_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_REFUND_PERIOD_TYPE' 
    }
    ,
   POLH_DISH_REF_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_DISH_REF_NO' 
    }
    ,
   POLH_DISH_CHQ_NO: { 
      type: DataTypes.STRING(30), 
      allowNull: true, 
      
      field: 'POLH_DISH_CHQ_NO' 
    }
    ,
   POLH_CHQ_DISH_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_CHQ_DISH_TYPE' 
    }
    ,
   POLH_AOA_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_AOA_LIMIT_FC' 
    }
    ,
   POLH_AOA_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_AOA_LIMIT_LC_1' 
    }
    ,
   POLH_AOA_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_AOA_LIMIT_LC_2' 
    }
    ,
   POLH_AOA_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_AOA_LIMIT_LC_3' 
    }
    ,
   POLH_AOY_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_AOY_LIMIT_FC' 
    }
    ,
   POLH_AOY_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_AOY_LIMIT_LC_1' 
    }
    ,
   POLH_AOY_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_AOY_LIMIT_LC_2' 
    }
    ,
   POLH_AOY_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_AOY_LIMIT_LC_3' 
    }
    ,
   POLH_BILL_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_BILL_TYPE' 
    }
    ,
   POLH_BILL_ACC_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_BILL_ACC_NO' 
    }
    ,
   POLH_TPA_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_TPA_CODE' 
    }
    ,
   POLH_CLOSE_BAL_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_CLOSE_BAL_LC_1' 
    }
    ,
   POLH_OPEN_BAL_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'POLH_OPEN_BAL_LC_1' 
    }
    ,
   POLH_OSE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_OSE_YN' 
    }
    ,
   POLH_PARENT_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_PARENT_END_NO_IDX' 
    }
    ,
   POLH_PARENT_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_PARENT_END_SR_NO' 
    }
    ,
   POLH_OSE_INVALID_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_OSE_INVALID_YN' 
    }
    ,
   POLH_QUOT_EXP_PRD: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'POLH_QUOT_EXP_PRD' 
    }
    ,
   POLH_ACNT_DOC_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'POLH_ACNT_DOC_DT' 
    }
    ,
   POLH_CUST_ACNT_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_CUST_ACNT_TYPE' 
    }
    ,
   POLH_BRK_ACNT_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_BRK_ACNT_TYPE' 
    }
    ,
   POLH_SURYR_ACNT_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_SURYR_ACNT_TYPE' 
    }
    ,
   POLH_REN_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_REN_STS' 
    }
    ,
   POLH_LINK_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'POLH_LINK_YN' 
    }
    ,
   POLH_LINK_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_LINK_POL_NO' 
    }
    ,
   POLH_INST_CODE: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_INST_CODE' 
    }
    ,
   POLH_CONV_INST_CODE: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'POLH_CONV_INST_CODE' 
    }
    ,
   POLH_ASSR_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'POLH_ASSR_TYPE' 
    }
    
    }, {
        tableName: 'PGITH_POLICY',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgithPolicy;
};