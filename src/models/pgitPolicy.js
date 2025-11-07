module.exports = (sequelize, DataTypes) => {
  const PgitPolicy = sequelize.define('PgitPolicy', {
       pol_long_term_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_LONG_TERM_YN' 
    }
    ,
   pol_inst_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_INST_YN' 
    }
    ,
   pol_no_of_inst: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_NO_OF_INST' 
    }
    ,
   pol_lterm_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_LTERM_TYPE' 
    }
    ,
   pol_no_of_lterm_yrs: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_NO_OF_LTERM_YRS' 
    }
    ,
   pol_prem_calc_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_PREM_CALC_TYPE' 
    }
    ,
   pol_no_risk: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_NO_RISK' 
    }
    ,
   pol_no_section: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_NO_SECTION' 
    }
    ,
   pol_fac_pool_code: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_FAC_POOL_CODE' 
    }
    ,
   pol_coins_pool_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_COINS_POOL_CODE' 
    }
    ,
   pol_ri_basis: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_RI_BASIS' 
    }
    ,
   pol_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_STS' 
    }
    ,
   pol_convert_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_CONVERT_TYPE' 
    }
    ,
   pol_appr_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_APPR_STS' 
    }
    ,
   pol_appr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_APPR_DT' 
    }
    ,
   pol_appr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_APPR_UID' 
    }
    ,
   pol_close_flag: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_CLOSE_FLAG' 
    }
    ,
   pol_close_reason: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_CLOSE_REASON' 
    }
    ,
   pol_close_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_CLOSE_DT' 
    }
    ,
   pol_clm_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_CLM_SYS_ID' 
    }
    ,
   pol_clm_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_CLM_NO' 
    }
    ,
   pol_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_REC_TYPE' 
    }
    ,
   pol_mode_of_pay: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_MODE_OF_PAY' 
    }
    ,
   pol_short_coll_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_SHORT_COLL_YN' 
    }
    ,
   pol_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_SI_LC_1' 
    }
    ,
   pol_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_SI_LC_3' 
    }
    ,
   pol_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_SI_LC_2' 
    }
    ,
   pol_ncb_yrs: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_NCB_YRS' 
    }
    ,
   pol_clm_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_CLM_YN' 
    }
    ,
   pol_service_tax_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_SERVICE_TAX_YN' 
    }
    ,
   pol_adv_prem_proc_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_ADV_PREM_PROC_YN' 
    }
    ,
   pol_uw_year: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_UW_YEAR' 
    }
    ,
   pol_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_01' 
    }
    ,
   pol_flex_02: { 
      type: DataTypes.STRING(400), 
      allowNull: false, 
      
      field: 'POL_FLEX_02' 
    }
    ,
   pol_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_03' 
    }
    ,
   pol_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_04' 
    }
    ,
   pol_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_05' 
    }
    ,
   pol_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_06' 
    }
    ,
   pol_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_07' 
    }
    ,
   pol_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_08' 
    }
    ,
   pol_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_09' 
    }
    ,
   pol_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_10' 
    }
    ,
   pol_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_11' 
    }
    ,
   pol_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_12' 
    }
    ,
   pol_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_13' 
    }
    ,
   pol_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_14' 
    }
    ,
   pol_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_15' 
    }
    ,
   pol_flex_16: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_16' 
    }
    ,
   pol_flex_17: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_17' 
    }
    ,
   pol_flex_18: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_18' 
    }
    ,
   pol_flex_19: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_19' 
    }
    ,
   pol_flex_20: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_20' 
    }
    ,
   pol_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_CR_UID' 
    }
    ,
   pol_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_CR_DT' 
    }
    ,
   pol_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_UPD_UID' 
    }
    ,
   pol_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_UPD_DT' 
    }
    ,
   pol_prem_freeze_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_PREM_FREEZE_YN' 
    }
    ,
   pol_add_prem_calc_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_ADD_PREM_CALC_TYPE' 
    }
    ,
   pol_city: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_CITY' 
    }
    ,
   pol_country: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_COUNTRY' 
    }
    ,
   pol_end_layup_adj_method: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_END_LAYUP_ADJ_METHOD' 
    }
    ,
   pol_addr_state: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_ADDR_STATE' 
    }
    ,
   pol_retro_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_RETRO_DT' 
    }
    ,
   pol_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_SI_LC_1' 
    }
    ,
   pol_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_SI_LC_2' 
    }
    ,
   pol_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_SI_LC_3' 
    }
    ,
   pol_sgn_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_SGN_STS' 
    }
    ,
   pol_decl_cnt_srno: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_DECL_CNT_SRNO' 
    }
    ,
   pol_pml_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'POL_PML_PERC' 
    }
    ,
   pol_pml_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_PML_LC_1' 
    }
    ,
   pol_pml_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_PML_LC_2' 
    }
    ,
   pol_pml_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_PML_LC_3' 
    }
    ,
   pol_stamp_duty_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_STAMP_DUTY_YN' 
    }
    ,
   pol_org_pml_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_PML_LC_1' 
    }
    ,
   pol_org_pml_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_PML_LC_2' 
    }
    ,
   pol_org_pml_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_PML_LC_3' 
    }
    ,
   pol_prd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_PRD_SYS_ID' 
    }
    ,
   pol_prd_ra_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_PRD_RA_NO' 
    }
    ,
   pol_instl_method: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_INSTL_METHOD' 
    }
    ,
   pol_clm_total_loss_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_CLM_TOTAL_LOSS_YN' 
    }
    ,
   pol_tot_refund_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_TOT_REFUND_YN' 
    }
    ,
   pol_ncb_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'POL_NCB_PERC' 
    }
    ,
   pol_profit_comm_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'POL_PROFIT_COMM_PERC' 
    }
    ,
   pol_qualify_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'POL_QUALIFY_PERC' 
    }
    ,
   pol_coll_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_COLL_DIVN_CODE' 
    }
    ,
   pol_prem_curr_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_PREM_CURR_TYPE' 
    }
    ,
   pol_ri_ceding_basis: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_RI_CEDING_BASIS' 
    }
    ,
   pol_refund_period_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_REFUND_PERIOD_TYPE' 
    }
    ,
   pol_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_DEPT_CODE' 
    }
    ,
   pol_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_DS_TYPE' 
    }
    ,
   pol_ds_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_DS_CODE' 
    }
    ,
   pol_src_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_SRC_TYPE' 
    }
    ,
   pol_src_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_SRC_CODE' 
    }
    ,
   pol_bus_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_BUS_TYPE' 
    }
    ,
   pol_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_CLASS_CODE' 
    }
    ,
   pol_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_PROD_CODE' 
    }
    ,
   pol_walk_in_cust_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_WALK_IN_CUST_YN' 
    }
    ,
   pol_irda_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_IRDA_CLASS_CODE' 
    }
    ,
   pol_irda_social_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_IRDA_SOCIAL_TYPE' 
    }
    ,
   pol_cust_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_CUST_CODE' 
    }
    ,
   pol_assr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_ASSR_CODE' 
    }
    ,
   pol_assr_name: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_ASSR_NAME' 
    }
    ,
   pol_cust_cons_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_CUST_CONS_CODE' 
    }
    ,
   pol_addr_01: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_ADDR_01' 
    }
    ,
   pol_addr_02: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_ADDR_02' 
    }
    ,
   pol_addr_03: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_ADDR_03' 
    }
    ,
   pol_tel_no: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_TEL_NO' 
    }
    ,
   pol_fax_no: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FAX_NO' 
    }
    ,
   pol_email_id: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_EMAIL_ID' 
    }
    ,
   pol_state: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_STATE' 
    }
    ,
   pol_district: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_DISTRICT' 
    }
    ,
   pol_taluk: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_TALUK' 
    }
    ,
   pol_village: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_VILLAGE' 
    }
    ,
   pol_pin_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_PIN_CODE' 
    }
    ,
   pol_open_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_OPEN_POL_SYS_ID' 
    }
    ,
   pol_open_pol_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_OPEN_POL_NO' 
    }
    ,
   pol_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_NO' 
    }
    ,
   pol_issue_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_ISSUE_DT' 
    }
    ,
   pol_dt_tba: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_DT_TBA' 
    }
    ,
   pol_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_FM_DT' 
    }
    ,
   pol_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_TO_DT' 
    }
    ,
   pol_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_PERIOD_UNIT' 
    }
    ,
   pol_period: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_PERIOD' 
    }
    ,
   pol_duration_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_DURATION_TYPE' 
    }
    ,
   pol_nl_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_NL_FM_DT' 
    }
    ,
   pol_nl_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_NL_TO_DT' 
    }
    ,
   pol_interest: { 
      type: DataTypes.STRING(2000), 
      allowNull: false, 
      
      field: 'POL_INTEREST' 
    }
    ,
   pol_dflt_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_DFLT_SI_CURR_CODE' 
    }
    ,
   pol_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_PREM_CURR_CODE' 
    }
    ,
   pol_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_PREM_LC_1' 
    }
    ,
   pol_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_PREM_LC_2' 
    }
    ,
   pol_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_PREM_LC_3' 
    }
    ,
   pol_org_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_PREM_LC_1' 
    }
    ,
   pol_org_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_PREM_LC_2' 
    }
    ,
   pol_org_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_PREM_LC_3' 
    }
    ,
   pol_clm_intm_days: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_CLM_INTM_DAYS' 
    }
    ,
   pol_issue_officer_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_ISSUE_OFFICER_CODE' 
    }
    ,
   pol_cn_agent_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_CN_AGENT_CODE' 
    }
    ,
   pol_cn_dev_off_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_CN_DEV_OFF_CODE' 
    }
    ,
   pol_cn_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_CN_NO' 
    }
    ,
   pol_cn_iss_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_CN_ISS_DT' 
    }
    ,
   pol_catg: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_CATG' 
    }
    ,
   pol_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_TYPE' 
    }
    ,
   pol_end_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_END_TYPE' 
    }
    ,
   pol_end_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_END_CODE' 
    }
    ,
   pol_end_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_END_NO' 
    }
    ,
   pol_end_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_END_DT' 
    }
    ,
   pol_end_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_END_EFF_FM_DT' 
    }
    ,
   pol_end_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_END_EFF_TO_DT' 
    }
    ,
   pol_end_desc: { 
      type: DataTypes.STRING(4000), 
      allowNull: false, 
      
      field: 'POL_END_DESC' 
    }
    ,
   pol_remarks: { 
      type: DataTypes.STRING(2000), 
      allowNull: false, 
      
      field: 'POL_REMARKS' 
    }
    ,
   pol_claim_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_CLAIM_NO' 
    }
    ,
   pol_hypothecation_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_HYPOTHECATION_YN' 
    }
    ,
   pol_fleet_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_FLEET_YN' 
    }
    ,
   pol_our_share_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'POL_OUR_SHARE_PERC' 
    }
    ,
   pol_our_share_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_OUR_SHARE_SI_FC' 
    }
    ,
   pol_our_share_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_OUR_SHARE_SI_LC_1' 
    }
    ,
   pol_our_share_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_OUR_SHARE_SI_LC_2' 
    }
    ,
   pol_our_share_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_OUR_SHARE_SI_LC_3' 
    }
    ,
   pol_our_share_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_OUR_SHARE_PREM_FC' 
    }
    ,
   pol_our_share_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_OUR_SHARE_PREM_LC_1' 
    }
    ,
   pol_our_share_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_OUR_SHARE_PREM_LC_2' 
    }
    ,
   pol_our_share_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_OUR_SHARE_PREM_LC_3' 
    }
    ,
   pol_org_our_share_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'POL_ORG_OUR_SHARE_PERC' 
    }
    ,
   pol_org_our_share_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_OUR_SHARE_SI_FC' 
    }
    ,
   pol_org_our_share_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_OUR_SHARE_SI_LC_1' 
    }
    ,
   pol_org_our_share_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_OUR_SHARE_SI_LC_2' 
    }
    ,
   pol_org_our_share_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_OUR_SHARE_SI_LC_3' 
    }
    ,
   pol_org_our_share_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_OUR_SHARE_PREM_FC' 
    }
    ,
   pol_org_our_share_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_OUR_SHARE_PREM_LC_1' 
    }
    ,
   pol_org_our_share_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_OUR_SHARE_PREM_LC_2' 
    }
    ,
   pol_org_our_share_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ORG_OUR_SHARE_PREM_LC_3' 
    }
    ,
   pol_quot_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_QUOT_SYS_ID' 
    }
    ,
   pol_quot_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_QUOT_NO' 
    }
    ,
   pol_ren_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_REN_POL_SYS_ID' 
    }
    ,
   pol_ren_pol_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_REN_POL_NO' 
    }
    ,
   pol_ren_cnt_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_REN_CNT_SR_NO' 
    }
    ,
   pol_rph_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_RPH_SYS_ID' 
    }
    ,
   pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: false,
      autoIncrement: false,
      field: 'POL_SYS_ID' 
    }
    ,
   pol_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_END_NO_IDX' 
    }
    ,
   pol_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_END_SR_NO' 
    }
    ,
   pol_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_COMP_CODE' 
    }
    ,
   pol_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_DIVN_CODE' 
    }
    ,
   pol_iteration_reason: { 
      type: DataTypes.STRING(4000), 
      allowNull: false, 
      
      field: 'POL_ITERATION_REASON' 
    }
    ,
   pol_prod_symbol: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_PROD_SYMBOL' 
    }
    ,
   pol_uw_id: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_UW_ID' 
    }
    ,
   pol_quot_recvd_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_QUOT_RECVD_DT' 
    }
    ,
   pol_agent_contact_name: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_AGENT_CONTACT_NAME' 
    }
    ,
   pol_agent_contact_no: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_AGENT_CONTACT_NO' 
    }
    ,
   pol_agent_contact_email_id: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_AGENT_CONTACT_EMAIL_ID' 
    }
    ,
   pol_ctrl_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_CTRL_DT' 
    }
    ,
   pol_end_ctrl_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_END_CTRL_DT' 
    }
    ,
   pol_producer_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_PRODUCER_CODE' 
    }
    ,
   pol_sic_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_SIC_CODE' 
    }
    ,
   pol_sic_group: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_SIC_GROUP' 
    }
    ,
   pol_prior_pol_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_PRIOR_POL_NO' 
    }
    ,
   pol_terrorism_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_TERRORISM_APPL_YN' 
    }
    ,
   pol_dnr_reason: { 
      type: DataTypes.STRING(4000), 
      allowNull: false, 
      
      field: 'POL_DNR_REASON' 
    }
    ,
   pol_terr_val_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_TERR_VAL_TYPE' 
    }
    ,
   pol_ren_reason: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_REN_REASON' 
    }
    ,
   pol_conv_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_CONV_DT' 
    }
    ,
   pol_clm_made_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_CLM_MADE_YN' 
    }
    ,
   pol_intl_end_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_INTL_END_YN' 
    }
    ,
   pol_ren_manual_move_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_REN_MANUAL_MOVE_YN' 
    }
    ,
   pol_ren_proc_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_REN_PROC_TYPE' 
    }
    ,
   pol_rewritten_pol_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_REWRITTEN_POL_NO' 
    }
    ,
   pol_uw_review_reqd_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_UW_REVIEW_REQD_YN' 
    }
    ,
   pol_uw_reviewed_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_UW_REVIEWED_YN' 
    }
    ,
   pol_lap_reason: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_LAP_REASON' 
    }
    ,
   pol_ent_compl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_ENT_COMPL_YN' 
    }
    ,
   pol_ri_ded_inw_comm: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_RI_DED_INW_COMM' 
    }
    ,
   pol_ri_prem_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_RI_PREM_TYPE' 
    }
    ,
   pol_ri_end_alloc_basis: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_RI_END_ALLOC_BASIS' 
    }
    ,
   pol_fac_prov_on: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_FAC_PROV_ON' 
    }
    ,
   pol_coins_issue_type: { 
      type: DataTypes.STRING(2), 
      allowNull: false, 
      
      field: 'POL_COINS_ISSUE_TYPE' 
    }
    ,
   pol_link_alloc_comb_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_LINK_ALLOC_COMB_YN' 
    }
    ,
   pol_depo_prem_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'POL_DEPO_PREM_PERC' 
    }
    ,
   pol_first_loss_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'POL_FIRST_LOSS_PERC' 
    }
    ,
   pol_coins_part_lvl: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_COINS_PART_LVL' 
    }
    ,
   pol_sing_ac_brk: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_SING_AC_BRK' 
    }
    ,
   pol_collector_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_COLLECTOR_CODE' 
    }
    ,
   pol_collector_name: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_COLLECTOR_NAME' 
    }
    ,
   pol_acnt_handler_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_ACNT_HANDLER_CODE' 
    }
    ,
   pol_acnt_handler_name: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_ACNT_HANDLER_NAME' 
    }
    ,
   pol_fac_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'POL_FAC_PERC' 
    }
    ,
   pol_producer_name: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_PRODUCER_NAME' 
    }
    ,
   pol_inst_cvr_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_INST_CVR_YN' 
    }
    ,
   pol_grace_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_GRACE_APPL_YN' 
    }
    ,
   pol_grace_end_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_GRACE_END_DT' 
    }
    ,
   pol_trafic_serial: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_TRAFIC_SERIAL' 
    }
    ,
   pol_wf_sts: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_WF_STS' 
    }
    ,
   pol_najm_sts: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_NAJM_STS' 
    }
    ,
   pol_najm_remarks: { 
      type: DataTypes.STRING(4000), 
      allowNull: false, 
      
      field: 'POL_NAJM_REMARKS' 
    }
    ,
   pol_cbc_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_CBC_YN' 
    }
    ,
   pol_pkg_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_PKG_CODE' 
    }
    ,
   pol_scheme: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_SCHEME' 
    }
    ,
   pol_comm_channel: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_COMM_CHANNEL' 
    }
    ,
   pol_br_status: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_BR_STATUS' 
    }
    ,
   pol_parent_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_PARENT_POL_SYS_ID' 
    }
    ,
   pol_user_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_USER_END_NO_IDX' 
    }
    ,
   pol_sm_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_SM_CODE' 
    }
    ,
   pol_remarks_01: { 
      type: DataTypes.STRING(4000), 
      allowNull: false, 
      
      field: 'POL_REMARKS_01' 
    }
    ,
   pol_remarks_02: { 
      type: DataTypes.STRING(4000), 
      allowNull: false, 
      
      field: 'POL_REMARKS_02' 
    }
    ,
   pol_remarks_03: { 
      type: DataTypes.STRING(4000), 
      allowNull: false, 
      
      field: 'POL_REMARKS_03' 
    }
    ,
   pol_prem_warr_days: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_PREM_WARR_DAYS' 
    }
    ,
   pol_flex_21: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_21' 
    }
    ,
   pol_flex_22: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_22' 
    }
    ,
   pol_flex_23: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_23' 
    }
    ,
   pol_flex_24: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_24' 
    }
    ,
   pol_flex_25: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_25' 
    }
    ,
   pol_assr_contact_no: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_ASSR_CONTACT_NO' 
    }
    ,
   pol_assr_contact_mail_id: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_ASSR_CONTACT_MAIL_ID' 
    }
    ,
   pol_flex_num_01: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_FLEX_NUM_01' 
    }
    ,
   pol_flex_num_02: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_FLEX_NUM_02' 
    }
    ,
   pol_flex_num_03: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_FLEX_NUM_03' 
    }
    ,
   pol_flex_num_04: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_FLEX_NUM_04' 
    }
    ,
   pol_flex_num_05: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_FLEX_NUM_05' 
    }
    ,
   pol_flex_dt_01: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_FLEX_DT_01' 
    }
    ,
   pol_flex_dt_02: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_FLEX_DT_02' 
    }
    ,
   pol_flex_dt_03: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_FLEX_DT_03' 
    }
    ,
   pol_flex_dt_04: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_FLEX_DT_04' 
    }
    ,
   pol_flex_dt_05: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_FLEX_DT_05' 
    }
    ,
   pol_remarks_04: { 
      type: DataTypes.STRING(4000), 
      allowNull: false, 
      
      field: 'POL_REMARKS_04' 
    }
    ,
   pol_remarks_05: { 
      type: DataTypes.STRING(4000), 
      allowNull: false, 
      
      field: 'POL_REMARKS_05' 
    }
    ,
   pol_flex_26: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_26' 
    }
    ,
   pol_flex_27: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_27' 
    }
    ,
   pol_flex_28: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_28' 
    }
    ,
   pol_flex_29: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_29' 
    }
    ,
   pol_flex_30: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'POL_FLEX_30' 
    }
    ,
   pol_dish_ref_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_DISH_REF_NO' 
    }
    ,
   pol_dish_chq_no: { 
      type: DataTypes.STRING(30), 
      allowNull: false, 
      
      field: 'POL_DISH_CHQ_NO' 
    }
    ,
   pol_chq_dish_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_CHQ_DISH_TYPE' 
    }
    ,
   pol_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_AOA_LIMIT_FC' 
    }
    ,
   pol_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_AOA_LIMIT_LC_1' 
    }
    ,
   pol_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_AOA_LIMIT_LC_2' 
    }
    ,
   pol_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_AOA_LIMIT_LC_3' 
    }
    ,
   pol_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_AOY_LIMIT_FC' 
    }
    ,
   pol_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_AOY_LIMIT_LC_1' 
    }
    ,
   pol_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_AOY_LIMIT_LC_2' 
    }
    ,
   pol_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_AOY_LIMIT_LC_3' 
    }
    ,
   pol_open_bal_lc_1: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_OPEN_BAL_LC_1' 
    }
    ,
   pol_bill_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_BILL_TYPE' 
    }
    ,
   pol_bill_acc_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_BILL_ACC_NO' 
    }
    ,
   pol_tpa_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_TPA_CODE' 
    }
    ,
   pol_close_bal_lc_1: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_CLOSE_BAL_LC_1' 
    }
    ,
   pol_ose_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_OSE_YN' 
    }
    ,
   pol_parent_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_PARENT_END_NO_IDX' 
    }
    ,
   pol_parent_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_PARENT_END_SR_NO' 
    }
    ,
   pol_ose_invalid_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_OSE_INVALID_YN' 
    }
    ,
   pol_quot_exp_prd: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_QUOT_EXP_PRD' 
    }
    ,
   pol_acnt_doc_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_ACNT_DOC_DT' 
    }
    ,
   pol_cust_acnt_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_CUST_ACNT_TYPE' 
    }
    ,
   pol_brk_acnt_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_BRK_ACNT_TYPE' 
    }
    ,
   pol_suryr_acnt_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_SURYR_ACNT_TYPE' 
    }
    ,
   pol_ren_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_REN_STS' 
    }
    ,
   pol_link_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_LINK_YN' 
    }
    ,
   pol_link_pol_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_LINK_POL_NO' 
    }
    ,
   pol_inst_code: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_INST_CODE' 
    }
    ,
   pol_conv_inst_code: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_CONV_INST_CODE' 
    }
    ,
   pol_assr_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_ASSR_TYPE' 
    }
    ,
   pol_cancel_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_CANCEL_TYPE' 
    }
    ,
   pol_decl_freq: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_DECL_FREQ' 
    }
    ,
   pol_cal_yr: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_CAL_YR' 
    }
    ,
   pol_pre_insp_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_PRE_INSP_YN' 
    }
    ,
   pol_refund_even_claim: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_REFUND_EVEN_CLAIM' 
    }
    ,
   pol_cn_book_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_CN_BOOK_ID' 
    }
    ,
   pol_discovery_prd_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_DISCOVERY_PRD_APPL_YN' 
    }
    ,
   pol_discovery_prd_in_days: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_DISCOVERY_PRD_IN_DAYS' 
    }
    ,
   pol_county: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_COUNTY' 
    }
    ,
   pol_reject_reason: { 
      type: DataTypes.STRING(4000), 
      allowNull: false, 
      
      field: 'POL_REJECT_REASON' 
    }
    ,
   pol_revert_reason: { 
      type: DataTypes.STRING(4000), 
      allowNull: false, 
      
      field: 'POL_REVERT_REASON' 
    }
    ,
   pol_flex_yn_01: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_FLEX_YN_01' 
    }
    ,
   pol_flex_yn_02: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_FLEX_YN_02' 
    }
    ,
   pol_flex_yn_03: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_FLEX_YN_03' 
    }
    ,
   pol_flex_yn_04: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_FLEX_YN_04' 
    }
    ,
   pol_flex_yn_05: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_FLEX_YN_05' 
    }
    ,
   pol_flex_yn_06: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_FLEX_YN_06' 
    }
    ,
   pol_flex_yn_07: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_FLEX_YN_07' 
    }
    ,
   pol_flex_yn_08: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_FLEX_YN_08' 
    }
    ,
   pol_flex_yn_09: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_FLEX_YN_09' 
    }
    ,
   pol_flex_yn_10: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_FLEX_YN_10' 
    }
    ,
   pol_auto_renew_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_AUTO_RENEW_YN' 
    }
    ,
   pol_do_not_ren_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_DO_NOT_REN_YN' 
    }
    ,
   pol_non_ren_yr: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_NON_REN_YR' 
    }
    ,
   pol_non_ren_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_NON_REN_YN' 
    }
    ,
   pol_hold_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_HOLD_YN' 
    }
    ,
   pol_end_adv_prem_adj_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_END_ADV_PREM_ADJ_TYPE' 
    }
    ,
   pol_end_instl_appr_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_END_INSTL_APPR_TYPE' 
    }
    ,
   pol_non_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_NON_EFF_FM_DT' 
    }
    ,
   pol_non_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'POL_NON_EFF_TO_DT' 
    }
    ,
   pol_annual_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ANNUAL_PREM_LC_1' 
    }
    ,
   pol_annual_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ANNUAL_PREM_LC_2' 
    }
    ,
   pol_annual_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'POL_ANNUAL_PREM_LC_3' 
    }
    ,
   pol_mail_attachment_url: { 
      type: DataTypes.STRING(4000), 
      allowNull: false, 
      
      field: 'POL_MAIL_ATTACHMENT_URL' 
    }
    ,
   pol_old_pol_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_OLD_POL_NO' 
    }
    ,
   pol_mar_rqst_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_MAR_RQST_NO' 
    }
    ,
   pol_method_pay_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_METHOD_PAY_CODE' 
    }
    ,
   pol_ind_ac_no: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_IND_AC_NO' 
    }
    ,
   pol_excess_loss: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_EXCESS_LOSS' 
    }
    ,
   pol_prod_number: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_PROD_NUMBER' 
    }
    ,
   pol_mga_perc: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_MGA_PERC' 
    }
    ,
   pol_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'POL_CNCT_SYS_ID' 
    }
    ,
   pol_ren_rec: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_REN_REC' 
    }
    ,
   pol_civil_id: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_CIVIL_ID' 
    }
    ,
   pol_ref_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_REF_NO' 
    }
    ,
   pol_no_cn_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_NO_CN_YN' 
    }
    ,
   pol_salesman_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_SALESMAN_CODE' 
    }
    ,
   pol_showromm_loc: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_SHOWROMM_LOC' 
    }
    ,
   pol_nationality: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_NATIONALITY' 
    }
    ,
   pol_comm_reg_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_COMM_REG_NO' 
    }
    ,
   pol_substitute_car_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_SUBSTITUTE_CAR_YN' 
    }
    ,
   pol_substitute_car: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_SUBSTITUTE_CAR' 
    }
    ,
   pol_center_no: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'POL_CENTER_NO' 
    }
    ,
   pol_fac_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_FAC_YN' 
    }
    ,
   pol_ra_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'POL_RA_APPL_YN' 
    }
    ,
   pol_ra_alloc_at: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'POL_RA_ALLOC_AT' 
    }
    
    }, {
        tableName: 'PGIT_POLICY',
        timestamps: false,
        freezeTableName: false,
        underscored: false,
    });
    return PgitPolicy;
};