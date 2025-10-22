module.exports = (sequelize, DataTypes) => {
  const PgitPolRiskCover = sequelize.define('PgitPolRiskCover', {
       prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRC_SYS_ID' 
    }
    ,
   prc_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_POL_SYS_ID' 
    }
    ,
   prc_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_END_NO_IDX' 
    }
    ,
   prc_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_END_SR_NO' 
    }
    ,
   prc_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_PSEC_SYS_ID' 
    }
    ,
   prc_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL1_SYS_ID' 
    }
    ,
   prc_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL1_SR_NO' 
    }
    ,
   prc_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL2_SYS_ID' 
    }
    ,
   prc_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL2_SR_NO' 
    }
    ,
   prc_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL3_SYS_ID' 
    }
    ,
   prc_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL3_SR_NO' 
    }
    ,
   prc_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL4_SYS_ID' 
    }
    ,
   prc_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL4_SR_NO' 
    }
    ,
   prc_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL5_SYS_ID' 
    }
    ,
   prc_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL5_SR_NO' 
    }
    ,
   prc_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_SR_NO' 
    }
    ,
   prc_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_CODE' 
    }
    ,
   prc_desc: { 
      type: DataTypes.STRING(2000), 
      allowNull: false, 
      
      field: 'PRC_DESC' 
    }
    ,
   prc_peril_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_PERIL_CLASS_CODE' 
    }
    ,
   prc_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_MAND_YN' 
    }
    ,
   prc_rate: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRC_RATE' 
    }
    ,
   prc_rate_per: { 
      type: DataTypes.DECIMAL(23, 5), 
      allowNull: true, 
      
      field: 'PRC_RATE_PER' 
    }
    ,
   prc_cvr_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_CVR_TYPE' 
    }
    ,
   prc_prem_calc_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PREM_CALC_TYPE' 
    }
    ,
   prc_add_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_ADD_SI_YN' 
    }
    ,
   prc_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_SI_CURR_CODE' 
    }
    ,
   prc_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_PREM_CURR_CODE' 
    }
    ,
   prc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_FC' 
    }
    ,
   prc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_1' 
    }
    ,
   prc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_2' 
    }
    ,
   prc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_3' 
    }
    ,
   prc_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_FC' 
    }
    ,
   prc_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_1' 
    }
    ,
   prc_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_2' 
    }
    ,
   prc_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_3' 
    }
    ,
   prc_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_FC' 
    }
    ,
   prc_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_1' 
    }
    ,
   prc_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_2' 
    }
    ,
   prc_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_3' 
    }
    ,
   prc_org_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_FC' 
    }
    ,
   prc_org_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_1' 
    }
    ,
   prc_org_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_2' 
    }
    ,
   prc_org_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_3' 
    }
    ,
   prc_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_EFF_FM_DT' 
    }
    ,
   prc_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_EFF_TO_DT' 
    }
    ,
   prc_end_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_END_EFF_FM_DT' 
    }
    ,
   prc_brok_comm_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_BROK_COMM_APPL_YN' 
    }
    ,
   prc_no_clm_bonus_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_NO_CLM_BONUS_APPL_YN' 
    }
    ,
   prc_prof_comm_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_PROF_COMM_APPL_YN' 
    }
    ,
   prc_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_REC_TYPE' 
    }
    ,
   prc_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_CR_UID' 
    }
    ,
   prc_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRC_CR_DT' 
    }
    ,
   prc_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_UPD_UID' 
    }
    ,
   prc_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_UPD_DT' 
    }
    ,
   prc_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_01' 
    }
    ,
   prc_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_02' 
    }
    ,
   prc_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_03' 
    }
    ,
   prc_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_04' 
    }
    ,
   prc_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_05' 
    }
    ,
   prc_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_06' 
    }
    ,
   prc_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_07' 
    }
    ,
   prc_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_08' 
    }
    ,
   prc_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_09' 
    }
    ,
   prc_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_10' 
    }
    ,
   prc_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_11' 
    }
    ,
   prc_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_12' 
    }
    ,
   prc_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_13' 
    }
    ,
   prc_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_14' 
    }
    ,
   prc_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_15' 
    }
    ,
   prc_flex_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_16' 
    }
    ,
   prc_flex_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_17' 
    }
    ,
   prc_flex_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_18' 
    }
    ,
   prc_flex_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_19' 
    }
    ,
   prc_flex_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_20' 
    }
    ,
   prc_liability_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_FC' 
    }
    ,
   prc_liability_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_1' 
    }
    ,
   prc_liability_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_2' 
    }
    ,
   prc_liability_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_3' 
    }
    ,
   prc_silent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_SILENT_YN' 
    }
    ,
   prc_silent_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_SILENT_EFF_FM_DT' 
    }
    ,
   prc_silent_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_SILENT_EFF_TO_DT' 
    }
    ,
   prc_rate_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_RATE_MODIFIED_YN' 
    }
    ,
   prc_si_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_SI_MODIFIED_YN' 
    }
    ,
   prc_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_FC' 
    }
    ,
   prc_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_1' 
    }
    ,
   prc_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_2' 
    }
    ,
   prc_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_3' 
    }
    ,
   prc_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_FC' 
    }
    ,
   prc_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_1' 
    }
    ,
   prc_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_2' 
    }
    ,
   prc_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_3' 
    }
    ,
   prc_org_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_FC' 
    }
    ,
   prc_org_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   prc_org_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   prc_org_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   prc_org_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_FC' 
    }
    ,
   prc_org_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   prc_org_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   prc_org_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   prc_rate_eft: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_EFT' 
    }
    ,
   prc_summ_cvr_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_SUMM_CVR_YN' 
    }
    ,
   prc_built_in_cvr: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_BUILT_IN_CVR' 
    }
    ,
   prc_link_cvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LINK_CVR_SYS_ID' 
    }
    ,
   prc_attach_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_ATTACH_LVL_NO' 
    }
    ,
   prc_attach_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_ATTACH_SR_NO' 
    }
    ,
   prc_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_COMP_CODE' 
    }
    ,
   prc_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DIVN_CODE' 
    }
    ,
   prc_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DEPT_CODE' 
    }
    ,
   prc_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DS_TYPE' 
    }
    ,
   prc_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_PROD_CODE' 
    }
    ,
   prc_nl_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_NL_FM_DT' 
    }
    ,
   prc_nl_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_NL_TO_DT' 
    }
    ,
   prc_org_liability_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_FC' 
    }
    ,
   prc_org_liability_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_1' 
    }
    ,
   prc_org_liability_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_2' 
    }
    ,
   prc_org_liability_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_3' 
    }
    ,
   prc_across_risk_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_ACROSS_RISK_YN' 
    }
    ,
   prc_min_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_MIN_SI_LC_1' 
    }
    ,
   prc_max_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_MAX_SI_LC_1' 
    }
    ,
   prc_derived_rate: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_RATE' 
    }
    ,
   prc_pcvr_add_ri_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PCVR_ADD_RI_SI_YN' 
    }
    ,
   prc_sh_prd_rate: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_SH_PRD_RATE' 
    }
    ,
   prc_add_ri_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_ADD_RI_SI_YN' 
    }
    ,
   prc_risk_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RISK_CLASS_CODE' 
    }
    ,
   prc_smi_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_SMI_CODE' 
    }
    ,
   prc_derived_fm_smi_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_FM_SMI_YN' 
    }
    ,
   prc_smi_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_SMI_SYS_ID' 
    }
    ,
   prc_dflt_to_child_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DFLT_TO_CHILD_YN' 
    }
    ,
   prc_rate_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_TYPE' 
    }
    ,
   prc_rate_key: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_KEY' 
    }
    ,
   prc_rate_level_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_RATE_LEVEL_NO' 
    }
    ,
   prc_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_SEC_CODE' 
    }
    ,
   prc_esc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_FC' 
    }
    ,
   prc_esc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_1' 
    }
    ,
   prc_esc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_2' 
    }
    ,
   prc_org_esc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_FC' 
    }
    ,
   prc_org_esc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_1' 
    }
    ,
   prc_org_esc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_2' 
    }
    ,
   prc_org_esc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_3' 
    }
    ,
   prc_esc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_3' 
    }
    ,
   prc_annual_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_FC' 
    }
    ,
   prc_annual_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_1' 
    }
    ,
   prc_annual_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_2' 
    }
    ,
   prc_annual_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_3' 
    }
    ,
   prc_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CNCT_SYS_ID' 
    }
    ,
   prc_prem_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PREM_MODIFIED_YN' 
    }
    ,
   prc_terrorism_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_TERRORISM_YN' 
    }
    ,
   prc_lvl: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_LVL' 
    }
    ,
   prc_cvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CVR_SYS_ID' 
    }
    ,
   prc_cvr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CVR_CODE' 
    }
    ,
   prc_derived_fm_cvr_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_FM_CVR_YN' 
    }
    ,
   prc_idv_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_IDV_YN' 
    }
    ,
   prc_idv_def_req_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_IDV_DEF_REQ_YN' 
    }
    ,
   prc_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_FC' 
    }
    ,
   prc_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_1' 
    }
    ,
   prc_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_2' 
    }
    ,
   prc_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_3' 
    }
    ,
   prc_first_loss_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRC_FIRST_LOSS_PERC' 
    }
    ,
   prc_org_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_FC' 
    }
    ,
   prc_org_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_1' 
    }
    ,
   prc_org_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_2' 
    }
    ,
   prc_org_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_3' 
    }
    ,
   prc_applied_on: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_APPLIED_ON' 
    }
    ,
   prc_cascade_ord: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CASCADE_ORD' 
    }
    ,
   prc_cascade_lvl_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_FC' 
    }
    ,
   prc_cascade_lvl_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_1' 
    }
    ,
   prc_cascade_lvl_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_2' 
    }
    ,
   prc_cascade_lvl_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_3' 
    }
    ,
   prc_cvr_ind_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CVR_IND_CODE' 
    }
    ,
   prc_appr_disc_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_APPR_DISC_YN' 
    }
    ,
   prc_appr_load_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_APPR_LOAD_YN' 
    }
    ,
   prc_ac_sep_ent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_AC_SEP_ENT_YN' 
    }
    ,
   prc_reinst_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_FC' 
    }
    ,
   prc_reinst_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_1' 
    }
    ,
   prc_reinst_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_2' 
    }
    ,
   prc_reinst_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_3' 
    }
    ,
   prc_clsfn: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CLSFN' 
    }
    ,
   prc_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_BRH_SYS_ID' 
    }
    ,
   prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRC_SYS_ID' 
    }
    ,
   prc_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_POL_SYS_ID' 
    }
    ,
   prc_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_END_NO_IDX' 
    }
    ,
   prc_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_END_SR_NO' 
    }
    ,
   prc_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_PSEC_SYS_ID' 
    }
    ,
   prc_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL1_SYS_ID' 
    }
    ,
   prc_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL1_SR_NO' 
    }
    ,
   prc_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL2_SYS_ID' 
    }
    ,
   prc_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL2_SR_NO' 
    }
    ,
   prc_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL3_SYS_ID' 
    }
    ,
   prc_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL3_SR_NO' 
    }
    ,
   prc_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL4_SYS_ID' 
    }
    ,
   prc_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL4_SR_NO' 
    }
    ,
   prc_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL5_SYS_ID' 
    }
    ,
   prc_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL5_SR_NO' 
    }
    ,
   prc_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_SR_NO' 
    }
    ,
   prc_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_CODE' 
    }
    ,
   prc_desc: { 
      type: DataTypes.STRING(2000), 
      allowNull: false, 
      
      field: 'PRC_DESC' 
    }
    ,
   prc_peril_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_PERIL_CLASS_CODE' 
    }
    ,
   prc_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_MAND_YN' 
    }
    ,
   prc_rate: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRC_RATE' 
    }
    ,
   prc_rate_per: { 
      type: DataTypes.DECIMAL(23, 5), 
      allowNull: true, 
      
      field: 'PRC_RATE_PER' 
    }
    ,
   prc_cvr_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_CVR_TYPE' 
    }
    ,
   prc_prem_calc_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PREM_CALC_TYPE' 
    }
    ,
   prc_add_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_ADD_SI_YN' 
    }
    ,
   prc_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_SI_CURR_CODE' 
    }
    ,
   prc_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_PREM_CURR_CODE' 
    }
    ,
   prc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_FC' 
    }
    ,
   prc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_1' 
    }
    ,
   prc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_2' 
    }
    ,
   prc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_3' 
    }
    ,
   prc_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_FC' 
    }
    ,
   prc_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_1' 
    }
    ,
   prc_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_2' 
    }
    ,
   prc_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_3' 
    }
    ,
   prc_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_FC' 
    }
    ,
   prc_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_1' 
    }
    ,
   prc_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_2' 
    }
    ,
   prc_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_3' 
    }
    ,
   prc_org_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_FC' 
    }
    ,
   prc_org_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_1' 
    }
    ,
   prc_org_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_2' 
    }
    ,
   prc_org_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_3' 
    }
    ,
   prc_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_EFF_FM_DT' 
    }
    ,
   prc_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_EFF_TO_DT' 
    }
    ,
   prc_end_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_END_EFF_FM_DT' 
    }
    ,
   prc_brok_comm_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_BROK_COMM_APPL_YN' 
    }
    ,
   prc_no_clm_bonus_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_NO_CLM_BONUS_APPL_YN' 
    }
    ,
   prc_prof_comm_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_PROF_COMM_APPL_YN' 
    }
    ,
   prc_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_REC_TYPE' 
    }
    ,
   prc_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_CR_UID' 
    }
    ,
   prc_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRC_CR_DT' 
    }
    ,
   prc_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_UPD_UID' 
    }
    ,
   prc_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_UPD_DT' 
    }
    ,
   prc_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_01' 
    }
    ,
   prc_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_02' 
    }
    ,
   prc_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_03' 
    }
    ,
   prc_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_04' 
    }
    ,
   prc_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_05' 
    }
    ,
   prc_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_06' 
    }
    ,
   prc_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_07' 
    }
    ,
   prc_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_08' 
    }
    ,
   prc_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_09' 
    }
    ,
   prc_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_10' 
    }
    ,
   prc_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_11' 
    }
    ,
   prc_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_12' 
    }
    ,
   prc_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_13' 
    }
    ,
   prc_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_14' 
    }
    ,
   prc_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_15' 
    }
    ,
   prc_flex_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_16' 
    }
    ,
   prc_flex_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_17' 
    }
    ,
   prc_flex_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_18' 
    }
    ,
   prc_flex_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_19' 
    }
    ,
   prc_flex_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_20' 
    }
    ,
   prc_liability_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_FC' 
    }
    ,
   prc_liability_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_1' 
    }
    ,
   prc_liability_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_2' 
    }
    ,
   prc_liability_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_3' 
    }
    ,
   prc_silent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_SILENT_YN' 
    }
    ,
   prc_silent_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_SILENT_EFF_FM_DT' 
    }
    ,
   prc_silent_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_SILENT_EFF_TO_DT' 
    }
    ,
   prc_rate_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_RATE_MODIFIED_YN' 
    }
    ,
   prc_si_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_SI_MODIFIED_YN' 
    }
    ,
   prc_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_FC' 
    }
    ,
   prc_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_1' 
    }
    ,
   prc_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_2' 
    }
    ,
   prc_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_3' 
    }
    ,
   prc_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_FC' 
    }
    ,
   prc_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_1' 
    }
    ,
   prc_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_2' 
    }
    ,
   prc_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_3' 
    }
    ,
   prc_org_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_FC' 
    }
    ,
   prc_org_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   prc_org_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   prc_org_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   prc_org_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_FC' 
    }
    ,
   prc_org_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   prc_org_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   prc_org_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   prc_rate_eft: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_EFT' 
    }
    ,
   prc_summ_cvr_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_SUMM_CVR_YN' 
    }
    ,
   prc_built_in_cvr: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_BUILT_IN_CVR' 
    }
    ,
   prc_link_cvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LINK_CVR_SYS_ID' 
    }
    ,
   prc_attach_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_ATTACH_LVL_NO' 
    }
    ,
   prc_attach_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_ATTACH_SR_NO' 
    }
    ,
   prc_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_COMP_CODE' 
    }
    ,
   prc_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DIVN_CODE' 
    }
    ,
   prc_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DEPT_CODE' 
    }
    ,
   prc_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DS_TYPE' 
    }
    ,
   prc_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_PROD_CODE' 
    }
    ,
   prc_nl_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_NL_FM_DT' 
    }
    ,
   prc_nl_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_NL_TO_DT' 
    }
    ,
   prc_org_liability_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_FC' 
    }
    ,
   prc_org_liability_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_1' 
    }
    ,
   prc_org_liability_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_2' 
    }
    ,
   prc_org_liability_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_3' 
    }
    ,
   prc_across_risk_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_ACROSS_RISK_YN' 
    }
    ,
   prc_min_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_MIN_SI_LC_1' 
    }
    ,
   prc_max_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_MAX_SI_LC_1' 
    }
    ,
   prc_derived_rate: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_RATE' 
    }
    ,
   prc_pcvr_add_ri_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PCVR_ADD_RI_SI_YN' 
    }
    ,
   prc_sh_prd_rate: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_SH_PRD_RATE' 
    }
    ,
   prc_add_ri_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_ADD_RI_SI_YN' 
    }
    ,
   prc_risk_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RISK_CLASS_CODE' 
    }
    ,
   prc_smi_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_SMI_CODE' 
    }
    ,
   prc_derived_fm_smi_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_FM_SMI_YN' 
    }
    ,
   prc_smi_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_SMI_SYS_ID' 
    }
    ,
   prc_dflt_to_child_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DFLT_TO_CHILD_YN' 
    }
    ,
   prc_rate_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_TYPE' 
    }
    ,
   prc_rate_key: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_KEY' 
    }
    ,
   prc_rate_level_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_RATE_LEVEL_NO' 
    }
    ,
   prc_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_SEC_CODE' 
    }
    ,
   prc_esc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_FC' 
    }
    ,
   prc_esc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_1' 
    }
    ,
   prc_esc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_2' 
    }
    ,
   prc_org_esc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_FC' 
    }
    ,
   prc_org_esc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_1' 
    }
    ,
   prc_org_esc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_2' 
    }
    ,
   prc_org_esc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_3' 
    }
    ,
   prc_esc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_3' 
    }
    ,
   prc_annual_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_FC' 
    }
    ,
   prc_annual_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_1' 
    }
    ,
   prc_annual_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_2' 
    }
    ,
   prc_annual_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_3' 
    }
    ,
   prc_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CNCT_SYS_ID' 
    }
    ,
   prc_prem_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PREM_MODIFIED_YN' 
    }
    ,
   prc_terrorism_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_TERRORISM_YN' 
    }
    ,
   prc_lvl: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_LVL' 
    }
    ,
   prc_cvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CVR_SYS_ID' 
    }
    ,
   prc_cvr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CVR_CODE' 
    }
    ,
   prc_derived_fm_cvr_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_FM_CVR_YN' 
    }
    ,
   prc_idv_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_IDV_YN' 
    }
    ,
   prc_idv_def_req_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_IDV_DEF_REQ_YN' 
    }
    ,
   prc_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_FC' 
    }
    ,
   prc_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_1' 
    }
    ,
   prc_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_2' 
    }
    ,
   prc_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_3' 
    }
    ,
   prc_first_loss_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRC_FIRST_LOSS_PERC' 
    }
    ,
   prc_org_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_FC' 
    }
    ,
   prc_org_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_1' 
    }
    ,
   prc_org_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_2' 
    }
    ,
   prc_org_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_3' 
    }
    ,
   prc_applied_on: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_APPLIED_ON' 
    }
    ,
   prc_cascade_ord: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CASCADE_ORD' 
    }
    ,
   prc_cascade_lvl_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_FC' 
    }
    ,
   prc_cascade_lvl_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_1' 
    }
    ,
   prc_cascade_lvl_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_2' 
    }
    ,
   prc_cascade_lvl_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_3' 
    }
    ,
   prc_cvr_ind_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CVR_IND_CODE' 
    }
    ,
   prc_appr_disc_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_APPR_DISC_YN' 
    }
    ,
   prc_appr_load_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_APPR_LOAD_YN' 
    }
    ,
   prc_ac_sep_ent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_AC_SEP_ENT_YN' 
    }
    ,
   prc_reinst_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_FC' 
    }
    ,
   prc_reinst_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_1' 
    }
    ,
   prc_reinst_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_2' 
    }
    ,
   prc_reinst_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_3' 
    }
    ,
   prc_clsfn: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CLSFN' 
    }
    ,
   prc_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_BRH_SYS_ID' 
    }
    ,
   prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRC_SYS_ID' 
    }
    ,
   prc_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_POL_SYS_ID' 
    }
    ,
   prc_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_END_NO_IDX' 
    }
    ,
   prc_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_END_SR_NO' 
    }
    ,
   prc_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_PSEC_SYS_ID' 
    }
    ,
   prc_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL1_SYS_ID' 
    }
    ,
   prc_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL1_SR_NO' 
    }
    ,
   prc_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL2_SYS_ID' 
    }
    ,
   prc_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL2_SR_NO' 
    }
    ,
   prc_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL3_SYS_ID' 
    }
    ,
   prc_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL3_SR_NO' 
    }
    ,
   prc_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL4_SYS_ID' 
    }
    ,
   prc_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL4_SR_NO' 
    }
    ,
   prc_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL5_SYS_ID' 
    }
    ,
   prc_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL5_SR_NO' 
    }
    ,
   prc_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_SR_NO' 
    }
    ,
   prc_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_CODE' 
    }
    ,
   prc_desc: { 
      type: DataTypes.STRING(2000), 
      allowNull: false, 
      
      field: 'PRC_DESC' 
    }
    ,
   prc_peril_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_PERIL_CLASS_CODE' 
    }
    ,
   prc_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_MAND_YN' 
    }
    ,
   prc_rate: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRC_RATE' 
    }
    ,
   prc_rate_per: { 
      type: DataTypes.DECIMAL(23, 5), 
      allowNull: true, 
      
      field: 'PRC_RATE_PER' 
    }
    ,
   prc_cvr_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_CVR_TYPE' 
    }
    ,
   prc_prem_calc_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PREM_CALC_TYPE' 
    }
    ,
   prc_add_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_ADD_SI_YN' 
    }
    ,
   prc_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_SI_CURR_CODE' 
    }
    ,
   prc_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_PREM_CURR_CODE' 
    }
    ,
   prc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_FC' 
    }
    ,
   prc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_1' 
    }
    ,
   prc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_2' 
    }
    ,
   prc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_3' 
    }
    ,
   prc_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_FC' 
    }
    ,
   prc_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_1' 
    }
    ,
   prc_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_2' 
    }
    ,
   prc_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_3' 
    }
    ,
   prc_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_FC' 
    }
    ,
   prc_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_1' 
    }
    ,
   prc_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_2' 
    }
    ,
   prc_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_3' 
    }
    ,
   prc_org_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_FC' 
    }
    ,
   prc_org_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_1' 
    }
    ,
   prc_org_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_2' 
    }
    ,
   prc_org_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_3' 
    }
    ,
   prc_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_EFF_FM_DT' 
    }
    ,
   prc_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_EFF_TO_DT' 
    }
    ,
   prc_end_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_END_EFF_FM_DT' 
    }
    ,
   prc_brok_comm_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_BROK_COMM_APPL_YN' 
    }
    ,
   prc_no_clm_bonus_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_NO_CLM_BONUS_APPL_YN' 
    }
    ,
   prc_prof_comm_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_PROF_COMM_APPL_YN' 
    }
    ,
   prc_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_REC_TYPE' 
    }
    ,
   prc_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_CR_UID' 
    }
    ,
   prc_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRC_CR_DT' 
    }
    ,
   prc_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_UPD_UID' 
    }
    ,
   prc_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_UPD_DT' 
    }
    ,
   prc_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_01' 
    }
    ,
   prc_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_02' 
    }
    ,
   prc_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_03' 
    }
    ,
   prc_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_04' 
    }
    ,
   prc_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_05' 
    }
    ,
   prc_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_06' 
    }
    ,
   prc_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_07' 
    }
    ,
   prc_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_08' 
    }
    ,
   prc_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_09' 
    }
    ,
   prc_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_10' 
    }
    ,
   prc_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_11' 
    }
    ,
   prc_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_12' 
    }
    ,
   prc_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_13' 
    }
    ,
   prc_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_14' 
    }
    ,
   prc_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_15' 
    }
    ,
   prc_flex_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_16' 
    }
    ,
   prc_flex_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_17' 
    }
    ,
   prc_flex_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_18' 
    }
    ,
   prc_flex_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_19' 
    }
    ,
   prc_flex_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_20' 
    }
    ,
   prc_liability_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_FC' 
    }
    ,
   prc_liability_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_1' 
    }
    ,
   prc_liability_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_2' 
    }
    ,
   prc_liability_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_3' 
    }
    ,
   prc_silent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_SILENT_YN' 
    }
    ,
   prc_silent_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_SILENT_EFF_FM_DT' 
    }
    ,
   prc_silent_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_SILENT_EFF_TO_DT' 
    }
    ,
   prc_rate_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_RATE_MODIFIED_YN' 
    }
    ,
   prc_si_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_SI_MODIFIED_YN' 
    }
    ,
   prc_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_FC' 
    }
    ,
   prc_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_1' 
    }
    ,
   prc_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_2' 
    }
    ,
   prc_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_3' 
    }
    ,
   prc_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_FC' 
    }
    ,
   prc_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_1' 
    }
    ,
   prc_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_2' 
    }
    ,
   prc_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_3' 
    }
    ,
   prc_org_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_FC' 
    }
    ,
   prc_org_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   prc_org_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   prc_org_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   prc_org_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_FC' 
    }
    ,
   prc_org_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   prc_org_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   prc_org_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   prc_rate_eft: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_EFT' 
    }
    ,
   prc_summ_cvr_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_SUMM_CVR_YN' 
    }
    ,
   prc_built_in_cvr: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_BUILT_IN_CVR' 
    }
    ,
   prc_link_cvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LINK_CVR_SYS_ID' 
    }
    ,
   prc_attach_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_ATTACH_LVL_NO' 
    }
    ,
   prc_attach_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_ATTACH_SR_NO' 
    }
    ,
   prc_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_COMP_CODE' 
    }
    ,
   prc_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DIVN_CODE' 
    }
    ,
   prc_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DEPT_CODE' 
    }
    ,
   prc_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DS_TYPE' 
    }
    ,
   prc_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_PROD_CODE' 
    }
    ,
   prc_nl_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_NL_FM_DT' 
    }
    ,
   prc_nl_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_NL_TO_DT' 
    }
    ,
   prc_org_liability_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_FC' 
    }
    ,
   prc_org_liability_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_1' 
    }
    ,
   prc_org_liability_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_2' 
    }
    ,
   prc_org_liability_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_3' 
    }
    ,
   prc_across_risk_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_ACROSS_RISK_YN' 
    }
    ,
   prc_min_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_MIN_SI_LC_1' 
    }
    ,
   prc_max_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_MAX_SI_LC_1' 
    }
    ,
   prc_derived_rate: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_RATE' 
    }
    ,
   prc_pcvr_add_ri_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PCVR_ADD_RI_SI_YN' 
    }
    ,
   prc_sh_prd_rate: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_SH_PRD_RATE' 
    }
    ,
   prc_add_ri_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_ADD_RI_SI_YN' 
    }
    ,
   prc_risk_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RISK_CLASS_CODE' 
    }
    ,
   prc_smi_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_SMI_CODE' 
    }
    ,
   prc_derived_fm_smi_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_FM_SMI_YN' 
    }
    ,
   prc_smi_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_SMI_SYS_ID' 
    }
    ,
   prc_dflt_to_child_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DFLT_TO_CHILD_YN' 
    }
    ,
   prc_rate_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_TYPE' 
    }
    ,
   prc_rate_key: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_KEY' 
    }
    ,
   prc_rate_level_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_RATE_LEVEL_NO' 
    }
    ,
   prc_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_SEC_CODE' 
    }
    ,
   prc_esc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_FC' 
    }
    ,
   prc_esc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_1' 
    }
    ,
   prc_esc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_2' 
    }
    ,
   prc_org_esc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_FC' 
    }
    ,
   prc_org_esc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_1' 
    }
    ,
   prc_org_esc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_2' 
    }
    ,
   prc_org_esc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_3' 
    }
    ,
   prc_esc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_3' 
    }
    ,
   prc_annual_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_FC' 
    }
    ,
   prc_annual_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_1' 
    }
    ,
   prc_annual_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_2' 
    }
    ,
   prc_annual_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_3' 
    }
    ,
   prc_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CNCT_SYS_ID' 
    }
    ,
   prc_prem_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PREM_MODIFIED_YN' 
    }
    ,
   prc_terrorism_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_TERRORISM_YN' 
    }
    ,
   prc_lvl: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_LVL' 
    }
    ,
   prc_cvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CVR_SYS_ID' 
    }
    ,
   prc_cvr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CVR_CODE' 
    }
    ,
   prc_derived_fm_cvr_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_FM_CVR_YN' 
    }
    ,
   prc_idv_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_IDV_YN' 
    }
    ,
   prc_idv_def_req_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_IDV_DEF_REQ_YN' 
    }
    ,
   prc_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_FC' 
    }
    ,
   prc_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_1' 
    }
    ,
   prc_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_2' 
    }
    ,
   prc_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_3' 
    }
    ,
   prc_first_loss_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRC_FIRST_LOSS_PERC' 
    }
    ,
   prc_org_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_FC' 
    }
    ,
   prc_org_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_1' 
    }
    ,
   prc_org_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_2' 
    }
    ,
   prc_org_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_3' 
    }
    ,
   prc_applied_on: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_APPLIED_ON' 
    }
    ,
   prc_cascade_ord: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CASCADE_ORD' 
    }
    ,
   prc_cascade_lvl_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_FC' 
    }
    ,
   prc_cascade_lvl_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_1' 
    }
    ,
   prc_cascade_lvl_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_2' 
    }
    ,
   prc_cascade_lvl_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_3' 
    }
    ,
   prc_cvr_ind_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CVR_IND_CODE' 
    }
    ,
   prc_appr_disc_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_APPR_DISC_YN' 
    }
    ,
   prc_appr_load_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_APPR_LOAD_YN' 
    }
    ,
   prc_ac_sep_ent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_AC_SEP_ENT_YN' 
    }
    ,
   prc_reinst_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_FC' 
    }
    ,
   prc_reinst_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_1' 
    }
    ,
   prc_reinst_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_2' 
    }
    ,
   prc_reinst_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_3' 
    }
    ,
   prc_clsfn: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CLSFN' 
    }
    ,
   prc_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_BRH_SYS_ID' 
    }
    ,
   prc_cascade_lvl_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_1' 
    }
    ,
   prc_cascade_lvl_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_2' 
    }
    ,
   prc_cascade_lvl_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_3' 
    }
    ,
   prc_cvr_ind_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CVR_IND_CODE' 
    }
    ,
   prc_appr_disc_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_APPR_DISC_YN' 
    }
    ,
   prc_appr_load_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_APPR_LOAD_YN' 
    }
    ,
   prc_ac_sep_ent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_AC_SEP_ENT_YN' 
    }
    ,
   prc_reinst_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_FC' 
    }
    ,
   prc_reinst_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_1' 
    }
    ,
   prc_reinst_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_2' 
    }
    ,
   prc_reinst_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_3' 
    }
    ,
   prc_clsfn: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CLSFN' 
    }
    ,
   prc_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_BRH_SYS_ID' 
    }
    ,
   prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRC_SYS_ID' 
    }
    ,
   prc_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_POL_SYS_ID' 
    }
    ,
   prc_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_END_NO_IDX' 
    }
    ,
   prc_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_END_SR_NO' 
    }
    ,
   prc_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_PSEC_SYS_ID' 
    }
    ,
   prc_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL1_SYS_ID' 
    }
    ,
   prc_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL1_SR_NO' 
    }
    ,
   prc_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL2_SYS_ID' 
    }
    ,
   prc_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL2_SR_NO' 
    }
    ,
   prc_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL3_SYS_ID' 
    }
    ,
   prc_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL3_SR_NO' 
    }
    ,
   prc_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL4_SYS_ID' 
    }
    ,
   prc_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL4_SR_NO' 
    }
    ,
   prc_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL5_SYS_ID' 
    }
    ,
   prc_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL5_SR_NO' 
    }
    ,
   prc_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_SR_NO' 
    }
    ,
   prc_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_CODE' 
    }
    ,
   prc_desc: { 
      type: DataTypes.STRING(2000), 
      allowNull: false, 
      
      field: 'PRC_DESC' 
    }
    ,
   prc_peril_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_PERIL_CLASS_CODE' 
    }
    ,
   prc_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_MAND_YN' 
    }
    ,
   prc_rate: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRC_RATE' 
    }
    ,
   prc_rate_per: { 
      type: DataTypes.DECIMAL(23, 5), 
      allowNull: true, 
      
      field: 'PRC_RATE_PER' 
    }
    ,
   prc_cvr_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_CVR_TYPE' 
    }
    ,
   prc_prem_calc_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PREM_CALC_TYPE' 
    }
    ,
   prc_add_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_ADD_SI_YN' 
    }
    ,
   prc_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_SI_CURR_CODE' 
    }
    ,
   prc_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_PREM_CURR_CODE' 
    }
    ,
   prc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_FC' 
    }
    ,
   prc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_1' 
    }
    ,
   prc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_2' 
    }
    ,
   prc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_3' 
    }
    ,
   prc_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_FC' 
    }
    ,
   prc_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_1' 
    }
    ,
   prc_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_2' 
    }
    ,
   prc_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_3' 
    }
    ,
   prc_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_FC' 
    }
    ,
   prc_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_1' 
    }
    ,
   prc_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_2' 
    }
    ,
   prc_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_3' 
    }
    ,
   prc_org_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_FC' 
    }
    ,
   prc_org_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_1' 
    }
    ,
   prc_org_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_2' 
    }
    ,
   prc_org_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_3' 
    }
    ,
   prc_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_EFF_FM_DT' 
    }
    ,
   prc_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_EFF_TO_DT' 
    }
    ,
   prc_end_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_END_EFF_FM_DT' 
    }
    ,
   prc_brok_comm_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_BROK_COMM_APPL_YN' 
    }
    ,
   prc_no_clm_bonus_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_NO_CLM_BONUS_APPL_YN' 
    }
    ,
   prc_prof_comm_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_PROF_COMM_APPL_YN' 
    }
    ,
   prc_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_REC_TYPE' 
    }
    ,
   prc_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_CR_UID' 
    }
    ,
   prc_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRC_CR_DT' 
    }
    ,
   prc_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_UPD_UID' 
    }
    ,
   prc_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_UPD_DT' 
    }
    ,
   prc_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_01' 
    }
    ,
   prc_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_02' 
    }
    ,
   prc_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_03' 
    }
    ,
   prc_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_04' 
    }
    ,
   prc_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_05' 
    }
    ,
   prc_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_06' 
    }
    ,
   prc_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_07' 
    }
    ,
   prc_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_08' 
    }
    ,
   prc_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_09' 
    }
    ,
   prc_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_10' 
    }
    ,
   prc_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_11' 
    }
    ,
   prc_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_12' 
    }
    ,
   prc_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_13' 
    }
    ,
   prc_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_14' 
    }
    ,
   prc_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_15' 
    }
    ,
   prc_flex_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_16' 
    }
    ,
   prc_flex_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_17' 
    }
    ,
   prc_flex_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_18' 
    }
    ,
   prc_flex_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_19' 
    }
    ,
   prc_flex_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_20' 
    }
    ,
   prc_liability_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_FC' 
    }
    ,
   prc_liability_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_1' 
    }
    ,
   prc_liability_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_2' 
    }
    ,
   prc_liability_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_3' 
    }
    ,
   prc_silent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_SILENT_YN' 
    }
    ,
   prc_silent_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_SILENT_EFF_FM_DT' 
    }
    ,
   prc_silent_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_SILENT_EFF_TO_DT' 
    }
    ,
   prc_rate_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_RATE_MODIFIED_YN' 
    }
    ,
   prc_si_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_SI_MODIFIED_YN' 
    }
    ,
   prc_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_FC' 
    }
    ,
   prc_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_1' 
    }
    ,
   prc_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_2' 
    }
    ,
   prc_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_3' 
    }
    ,
   prc_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_FC' 
    }
    ,
   prc_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_1' 
    }
    ,
   prc_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_2' 
    }
    ,
   prc_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_3' 
    }
    ,
   prc_org_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_FC' 
    }
    ,
   prc_org_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   prc_org_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   prc_org_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   prc_org_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_FC' 
    }
    ,
   prc_org_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   prc_org_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   prc_org_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   prc_rate_eft: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_EFT' 
    }
    ,
   prc_summ_cvr_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_SUMM_CVR_YN' 
    }
    ,
   prc_built_in_cvr: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_BUILT_IN_CVR' 
    }
    ,
   prc_link_cvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LINK_CVR_SYS_ID' 
    }
    ,
   prc_attach_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_ATTACH_LVL_NO' 
    }
    ,
   prc_attach_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_ATTACH_SR_NO' 
    }
    ,
   prc_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_COMP_CODE' 
    }
    ,
   prc_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DIVN_CODE' 
    }
    ,
   prc_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DEPT_CODE' 
    }
    ,
   prc_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DS_TYPE' 
    }
    ,
   prc_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_PROD_CODE' 
    }
    ,
   prc_nl_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_NL_FM_DT' 
    }
    ,
   prc_nl_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_NL_TO_DT' 
    }
    ,
   prc_org_liability_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_FC' 
    }
    ,
   prc_org_liability_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_1' 
    }
    ,
   prc_org_liability_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_2' 
    }
    ,
   prc_org_liability_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_3' 
    }
    ,
   prc_across_risk_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_ACROSS_RISK_YN' 
    }
    ,
   prc_min_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_MIN_SI_LC_1' 
    }
    ,
   prc_max_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_MAX_SI_LC_1' 
    }
    ,
   prc_derived_rate: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_RATE' 
    }
    ,
   prc_pcvr_add_ri_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PCVR_ADD_RI_SI_YN' 
    }
    ,
   prc_sh_prd_rate: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_SH_PRD_RATE' 
    }
    ,
   prc_add_ri_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_ADD_RI_SI_YN' 
    }
    ,
   prc_risk_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RISK_CLASS_CODE' 
    }
    ,
   prc_smi_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_SMI_CODE' 
    }
    ,
   prc_derived_fm_smi_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_FM_SMI_YN' 
    }
    ,
   prc_smi_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_SMI_SYS_ID' 
    }
    ,
   prc_dflt_to_child_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DFLT_TO_CHILD_YN' 
    }
    ,
   prc_rate_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_TYPE' 
    }
    ,
   prc_rate_key: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_KEY' 
    }
    ,
   prc_rate_level_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_RATE_LEVEL_NO' 
    }
    ,
   prc_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_SEC_CODE' 
    }
    ,
   prc_esc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_FC' 
    }
    ,
   prc_esc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_1' 
    }
    ,
   prc_esc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_2' 
    }
    ,
   prc_org_esc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_FC' 
    }
    ,
   prc_org_esc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_1' 
    }
    ,
   prc_org_esc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_2' 
    }
    ,
   prc_org_esc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_3' 
    }
    ,
   prc_esc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_3' 
    }
    ,
   prc_annual_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_FC' 
    }
    ,
   prc_annual_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_1' 
    }
    ,
   prc_annual_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_2' 
    }
    ,
   prc_annual_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_3' 
    }
    ,
   prc_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CNCT_SYS_ID' 
    }
    ,
   prc_prem_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PREM_MODIFIED_YN' 
    }
    ,
   prc_terrorism_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_TERRORISM_YN' 
    }
    ,
   prc_lvl: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_LVL' 
    }
    ,
   prc_cvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CVR_SYS_ID' 
    }
    ,
   prc_cvr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CVR_CODE' 
    }
    ,
   prc_derived_fm_cvr_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_FM_CVR_YN' 
    }
    ,
   prc_idv_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_IDV_YN' 
    }
    ,
   prc_idv_def_req_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_IDV_DEF_REQ_YN' 
    }
    ,
   prc_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_FC' 
    }
    ,
   prc_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_1' 
    }
    ,
   prc_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_2' 
    }
    ,
   prc_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_3' 
    }
    ,
   prc_first_loss_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRC_FIRST_LOSS_PERC' 
    }
    ,
   prc_org_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_FC' 
    }
    ,
   prc_org_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_1' 
    }
    ,
   prc_org_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_2' 
    }
    ,
   prc_org_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_3' 
    }
    ,
   prc_applied_on: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_APPLIED_ON' 
    }
    ,
   prc_cascade_ord: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CASCADE_ORD' 
    }
    ,
   prc_cascade_lvl_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_FC' 
    }
    ,
   prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRC_SYS_ID' 
    }
    ,
   prc_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_POL_SYS_ID' 
    }
    ,
   prc_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_END_NO_IDX' 
    }
    ,
   prc_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_END_SR_NO' 
    }
    ,
   prc_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_PSEC_SYS_ID' 
    }
    ,
   prc_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL1_SYS_ID' 
    }
    ,
   prc_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL1_SR_NO' 
    }
    ,
   prc_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL2_SYS_ID' 
    }
    ,
   prc_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL2_SR_NO' 
    }
    ,
   prc_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL3_SYS_ID' 
    }
    ,
   prc_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL3_SR_NO' 
    }
    ,
   prc_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL4_SYS_ID' 
    }
    ,
   prc_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL4_SR_NO' 
    }
    ,
   prc_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL5_SYS_ID' 
    }
    ,
   prc_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LVL5_SR_NO' 
    }
    ,
   prc_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRC_SR_NO' 
    }
    ,
   prc_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_CODE' 
    }
    ,
   prc_desc: { 
      type: DataTypes.STRING(2000), 
      allowNull: false, 
      
      field: 'PRC_DESC' 
    }
    ,
   prc_peril_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_PERIL_CLASS_CODE' 
    }
    ,
   prc_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_MAND_YN' 
    }
    ,
   prc_rate: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRC_RATE' 
    }
    ,
   prc_rate_per: { 
      type: DataTypes.DECIMAL(23, 5), 
      allowNull: true, 
      
      field: 'PRC_RATE_PER' 
    }
    ,
   prc_cvr_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_CVR_TYPE' 
    }
    ,
   prc_prem_calc_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PREM_CALC_TYPE' 
    }
    ,
   prc_add_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_ADD_SI_YN' 
    }
    ,
   prc_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_SI_CURR_CODE' 
    }
    ,
   prc_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_PREM_CURR_CODE' 
    }
    ,
   prc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_FC' 
    }
    ,
   prc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_1' 
    }
    ,
   prc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_2' 
    }
    ,
   prc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_SI_LC_3' 
    }
    ,
   prc_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_FC' 
    }
    ,
   prc_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_1' 
    }
    ,
   prc_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_2' 
    }
    ,
   prc_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_SI_LC_3' 
    }
    ,
   prc_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_FC' 
    }
    ,
   prc_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_1' 
    }
    ,
   prc_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_2' 
    }
    ,
   prc_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_PREM_LC_3' 
    }
    ,
   prc_org_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_FC' 
    }
    ,
   prc_org_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_1' 
    }
    ,
   prc_org_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_2' 
    }
    ,
   prc_org_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_PREM_LC_3' 
    }
    ,
   prc_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_EFF_FM_DT' 
    }
    ,
   prc_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_EFF_TO_DT' 
    }
    ,
   prc_end_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_END_EFF_FM_DT' 
    }
    ,
   prc_brok_comm_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_BROK_COMM_APPL_YN' 
    }
    ,
   prc_no_clm_bonus_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_NO_CLM_BONUS_APPL_YN' 
    }
    ,
   prc_prof_comm_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_PROF_COMM_APPL_YN' 
    }
    ,
   prc_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_REC_TYPE' 
    }
    ,
   prc_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRC_CR_UID' 
    }
    ,
   prc_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRC_CR_DT' 
    }
    ,
   prc_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_UPD_UID' 
    }
    ,
   prc_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_UPD_DT' 
    }
    ,
   prc_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_01' 
    }
    ,
   prc_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_02' 
    }
    ,
   prc_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_03' 
    }
    ,
   prc_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_04' 
    }
    ,
   prc_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_05' 
    }
    ,
   prc_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_06' 
    }
    ,
   prc_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_07' 
    }
    ,
   prc_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_08' 
    }
    ,
   prc_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_09' 
    }
    ,
   prc_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_10' 
    }
    ,
   prc_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_11' 
    }
    ,
   prc_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_12' 
    }
    ,
   prc_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_13' 
    }
    ,
   prc_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_14' 
    }
    ,
   prc_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_15' 
    }
    ,
   prc_flex_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_16' 
    }
    ,
   prc_flex_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_17' 
    }
    ,
   prc_flex_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_18' 
    }
    ,
   prc_flex_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_19' 
    }
    ,
   prc_flex_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRC_FLEX_20' 
    }
    ,
   prc_liability_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_FC' 
    }
    ,
   prc_liability_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_1' 
    }
    ,
   prc_liability_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_2' 
    }
    ,
   prc_liability_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_LIABILITY_LC_3' 
    }
    ,
   prc_silent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRC_SILENT_YN' 
    }
    ,
   prc_silent_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_SILENT_EFF_FM_DT' 
    }
    ,
   prc_silent_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_SILENT_EFF_TO_DT' 
    }
    ,
   prc_rate_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_RATE_MODIFIED_YN' 
    }
    ,
   prc_si_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_SI_MODIFIED_YN' 
    }
    ,
   prc_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_FC' 
    }
    ,
   prc_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_1' 
    }
    ,
   prc_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_2' 
    }
    ,
   prc_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOY_LIMIT_LC_3' 
    }
    ,
   prc_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_FC' 
    }
    ,
   prc_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_1' 
    }
    ,
   prc_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_2' 
    }
    ,
   prc_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_AOA_LIMIT_LC_3' 
    }
    ,
   prc_org_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_FC' 
    }
    ,
   prc_org_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   prc_org_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   prc_org_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   prc_org_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_FC' 
    }
    ,
   prc_org_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   prc_org_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   prc_org_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   prc_rate_eft: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_EFT' 
    }
    ,
   prc_summ_cvr_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_SUMM_CVR_YN' 
    }
    ,
   prc_built_in_cvr: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_BUILT_IN_CVR' 
    }
    ,
   prc_link_cvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_LINK_CVR_SYS_ID' 
    }
    ,
   prc_attach_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_ATTACH_LVL_NO' 
    }
    ,
   prc_attach_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_ATTACH_SR_NO' 
    }
    ,
   prc_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_COMP_CODE' 
    }
    ,
   prc_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DIVN_CODE' 
    }
    ,
   prc_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DEPT_CODE' 
    }
    ,
   prc_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_DS_TYPE' 
    }
    ,
   prc_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_PROD_CODE' 
    }
    ,
   prc_nl_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_NL_FM_DT' 
    }
    ,
   prc_nl_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRC_NL_TO_DT' 
    }
    ,
   prc_org_liability_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_FC' 
    }
    ,
   prc_org_liability_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_1' 
    }
    ,
   prc_org_liability_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_2' 
    }
    ,
   prc_org_liability_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_LIABILITY_LC_3' 
    }
    ,
   prc_across_risk_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_ACROSS_RISK_YN' 
    }
    ,
   prc_min_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_MIN_SI_LC_1' 
    }
    ,
   prc_max_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_MAX_SI_LC_1' 
    }
    ,
   prc_derived_rate: { 
      type: DataTypes.DECIMAL(22, 5), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_RATE' 
    }
    ,
   prc_pcvr_add_ri_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PCVR_ADD_RI_SI_YN' 
    }
    ,
   prc_sh_prd_rate: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_SH_PRD_RATE' 
    }
    ,
   prc_add_ri_si_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_ADD_RI_SI_YN' 
    }
    ,
   prc_risk_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RISK_CLASS_CODE' 
    }
    ,
   prc_smi_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_SMI_CODE' 
    }
    ,
   prc_derived_fm_smi_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_FM_SMI_YN' 
    }
    ,
   prc_smi_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_SMI_SYS_ID' 
    }
    ,
   prc_dflt_to_child_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DFLT_TO_CHILD_YN' 
    }
    ,
   prc_rate_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_TYPE' 
    }
    ,
   prc_rate_key: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_RATE_KEY' 
    }
    ,
   prc_rate_level_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_RATE_LEVEL_NO' 
    }
    ,
   prc_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_SEC_CODE' 
    }
    ,
   prc_esc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_FC' 
    }
    ,
   prc_esc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_1' 
    }
    ,
   prc_esc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_2' 
    }
    ,
   prc_org_esc_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_FC' 
    }
    ,
   prc_org_esc_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_1' 
    }
    ,
   prc_org_esc_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_2' 
    }
    ,
   prc_org_esc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_ESC_SI_LC_3' 
    }
    ,
   prc_esc_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ESC_SI_LC_3' 
    }
    ,
   prc_annual_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_FC' 
    }
    ,
   prc_annual_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_1' 
    }
    ,
   prc_annual_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_2' 
    }
    ,
   prc_annual_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ANNUAL_PREM_LC_3' 
    }
    ,
   prc_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CNCT_SYS_ID' 
    }
    ,
   prc_prem_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_PREM_MODIFIED_YN' 
    }
    ,
   prc_terrorism_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_TERRORISM_YN' 
    }
    ,
   prc_lvl: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_LVL' 
    }
    ,
   prc_cvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CVR_SYS_ID' 
    }
    ,
   prc_cvr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CVR_CODE' 
    }
    ,
   prc_derived_fm_cvr_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_DERIVED_FM_CVR_YN' 
    }
    ,
   prc_idv_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_IDV_YN' 
    }
    ,
   prc_idv_def_req_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_IDV_DEF_REQ_YN' 
    }
    ,
   prc_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_FC' 
    }
    ,
   prc_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_1' 
    }
    ,
   prc_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_2' 
    }
    ,
   prc_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_TOT_SI_LC_3' 
    }
    ,
   prc_first_loss_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRC_FIRST_LOSS_PERC' 
    }
    ,
   prc_org_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_FC' 
    }
    ,
   prc_org_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_1' 
    }
    ,
   prc_org_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_2' 
    }
    ,
   prc_org_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_ORG_TOT_SI_LC_3' 
    }
    ,
   prc_applied_on: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_APPLIED_ON' 
    }
    ,
   prc_cascade_ord: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_CASCADE_ORD' 
    }
    ,
   prc_cascade_lvl_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_FC' 
    }
    ,
   prc_cascade_lvl_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_1' 
    }
    ,
   prc_cascade_lvl_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_2' 
    }
    ,
   prc_cascade_lvl_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_CASCADE_LVL_PREM_LC_3' 
    }
    ,
   prc_cvr_ind_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CVR_IND_CODE' 
    }
    ,
   prc_appr_disc_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_APPR_DISC_YN' 
    }
    ,
   prc_appr_load_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_APPR_LOAD_YN' 
    }
    ,
   prc_ac_sep_ent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRC_AC_SEP_ENT_YN' 
    }
    ,
   prc_reinst_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_FC' 
    }
    ,
   prc_reinst_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_1' 
    }
    ,
   prc_reinst_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_2' 
    }
    ,
   prc_reinst_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRC_REINST_AMT_LC_3' 
    }
    ,
   prc_clsfn: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRC_CLSFN' 
    }
    ,
   prc_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRC_BRH_SYS_ID' 
    }
    
    }, {
        tableName: 'PGIT_POL_RISK_COVER',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitPolRiskCover;
};