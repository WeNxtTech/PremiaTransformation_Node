module.exports = (sequelize, DataTypes) => {
  const PgitPolPremCompSheet = sequelize.define('PgitPolPremCompSheet', {
       pcst_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PRAI_SYS_ID' 
    }
    ,
   pcst_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PRC_SYS_ID' 
    }
    ,
   pcst_pchg_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PCHG_SYS_ID' 
    }
    ,
   pcst_pps_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PPS_SYS_ID' 
    }
    ,
   pcst_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_PREM_CURR_CODE' 
    }
    ,
   pcst_amount_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'PCST_AMOUNT_FC' 
    }
    ,
   pcst_amount_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_1' 
    }
    ,
   pcst_amount_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_2' 
    }
    ,
   pcst_amount_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_3' 
    }
    ,
   pcst_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_CR_UID' 
    }
    ,
   pcst_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCST_CR_DT' 
    }
    ,
   pcst_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_UPD_UID' 
    }
    ,
   pcst_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCST_UPD_DT' 
    }
    ,
   pcst_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_POL_SYS_ID' 
    }
    ,
   pcst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_END_NO_IDX' 
    }
    ,
   pcst_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_END_SR_NO' 
    }
    ,
   pcst_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_LVL_NO' 
    }
    ,
   pcst_lvl_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_LVL_SR_NO' 
    }
    ,
   pcst_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_COMP_CODE' 
    }
    ,
   pcst_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DIVN_CODE' 
    }
    ,
   pcst_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DEPT_CODE' 
    }
    ,
   pcst_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DS_TYPE' 
    }
    ,
   pcst_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_PROD_CODE' 
    }
    ,
   pcst_disp_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_DISP_SR_NO' 
    }
    ,
   pcst_pcvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PCVR_SYS_ID' 
    }
    ,
   pcst_rec_type_ind: { 
      type: DataTypes.STRING(2), 
      allowNull: true, 
      
      field: 'PCST_REC_TYPE_IND' 
    }
    ,
   pcst_org_amount_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_FC' 
    }
    ,
   pcst_org_amount_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_1' 
    }
    ,
   pcst_org_amount_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_2' 
    }
    ,
   pcst_org_amount_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_3' 
    }
    ,
   pcst_prc_desc: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PCST_PRC_DESC' 
    }
    ,
   pcst_rate_eft: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_RATE_EFT' 
    }
    ,
   pcst_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_SI_CURR_CODE' 
    }
    ,
   pcst_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_FC' 
    }
    ,
   pcst_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_1' 
    }
    ,
   pcst_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_2' 
    }
    ,
   pcst_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_3' 
    }
    ,
   pcst_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_FC' 
    }
    ,
   pcst_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_1' 
    }
    ,
   pcst_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_2' 
    }
    ,
   pcst_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_3' 
    }
    ,
   pcst_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_01' 
    }
    ,
   pcst_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_02' 
    }
    ,
   pcst_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_03' 
    }
    ,
   pcst_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_04' 
    }
    ,
   pcst_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_05' 
    }
    ,
   pcst_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_06' 
    }
    ,
   pcst_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_07' 
    }
    ,
   pcst_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_08' 
    }
    ,
   pcst_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_09' 
    }
    ,
   pcst_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_10' 
    }
    ,
   pcst_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_11' 
    }
    ,
   pcst_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_12' 
    }
    ,
   pcst_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_13' 
    }
    ,
   pcst_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_14' 
    }
    ,
   pcst_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_15' 
    }
    ,
   pcst_prc_lvl: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_PRC_LVL' 
    }
    ,
   pcst_prc_cvr_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCST_PRC_CVR_TYPE' 
    }
    ,
   pcst_tax_aply_on: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_TAX_APLY_ON' 
    }
    ,
   pcst_org_amount_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_2' 
    }
    ,
   pcst_org_amount_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_3' 
    }
    ,
   pcst_prc_desc: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PCST_PRC_DESC' 
    }
    ,
   pcst_rate_eft: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_RATE_EFT' 
    }
    ,
   pcst_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_SI_CURR_CODE' 
    }
    ,
   pcst_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_FC' 
    }
    ,
   pcst_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_1' 
    }
    ,
   pcst_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_2' 
    }
    ,
   pcst_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_3' 
    }
    ,
   pcst_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_FC' 
    }
    ,
   pcst_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_1' 
    }
    ,
   pcst_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_2' 
    }
    ,
   pcst_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_3' 
    }
    ,
   pcst_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_01' 
    }
    ,
   pcst_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_02' 
    }
    ,
   pcst_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_03' 
    }
    ,
   pcst_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_04' 
    }
    ,
   pcst_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_05' 
    }
    ,
   pcst_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_06' 
    }
    ,
   pcst_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_07' 
    }
    ,
   pcst_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_08' 
    }
    ,
   pcst_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_09' 
    }
    ,
   pcst_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_10' 
    }
    ,
   pcst_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_11' 
    }
    ,
   pcst_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_12' 
    }
    ,
   pcst_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_13' 
    }
    ,
   pcst_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_14' 
    }
    ,
   pcst_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_15' 
    }
    ,
   pcst_prc_lvl: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_PRC_LVL' 
    }
    ,
   pcst_prc_cvr_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCST_PRC_CVR_TYPE' 
    }
    ,
   pcst_tax_aply_on: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_TAX_APLY_ON' 
    }
    ,
   pcst_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PRAI_SYS_ID' 
    }
    ,
   pcst_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PRC_SYS_ID' 
    }
    ,
   pcst_pchg_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PCHG_SYS_ID' 
    }
    ,
   pcst_pps_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PPS_SYS_ID' 
    }
    ,
   pcst_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_PREM_CURR_CODE' 
    }
    ,
   pcst_amount_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'PCST_AMOUNT_FC' 
    }
    ,
   pcst_amount_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_1' 
    }
    ,
   pcst_amount_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_2' 
    }
    ,
   pcst_amount_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_3' 
    }
    ,
   pcst_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_CR_UID' 
    }
    ,
   pcst_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCST_CR_DT' 
    }
    ,
   pcst_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_UPD_UID' 
    }
    ,
   pcst_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCST_UPD_DT' 
    }
    ,
   pcst_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_POL_SYS_ID' 
    }
    ,
   pcst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_END_NO_IDX' 
    }
    ,
   pcst_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_END_SR_NO' 
    }
    ,
   pcst_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_LVL_NO' 
    }
    ,
   pcst_lvl_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_LVL_SR_NO' 
    }
    ,
   pcst_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_COMP_CODE' 
    }
    ,
   pcst_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DIVN_CODE' 
    }
    ,
   pcst_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DEPT_CODE' 
    }
    ,
   pcst_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DS_TYPE' 
    }
    ,
   pcst_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_PROD_CODE' 
    }
    ,
   pcst_disp_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_DISP_SR_NO' 
    }
    ,
   pcst_pcvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PCVR_SYS_ID' 
    }
    ,
   pcst_rec_type_ind: { 
      type: DataTypes.STRING(2), 
      allowNull: true, 
      
      field: 'PCST_REC_TYPE_IND' 
    }
    ,
   pcst_org_amount_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_FC' 
    }
    ,
   pcst_org_amount_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_1' 
    }
    ,
   pcst_org_amount_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_3' 
    }
    ,
   pcst_prc_desc: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PCST_PRC_DESC' 
    }
    ,
   pcst_rate_eft: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_RATE_EFT' 
    }
    ,
   pcst_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_SI_CURR_CODE' 
    }
    ,
   pcst_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_FC' 
    }
    ,
   pcst_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_1' 
    }
    ,
   pcst_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_2' 
    }
    ,
   pcst_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_3' 
    }
    ,
   pcst_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_FC' 
    }
    ,
   pcst_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_1' 
    }
    ,
   pcst_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_2' 
    }
    ,
   pcst_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_3' 
    }
    ,
   pcst_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_01' 
    }
    ,
   pcst_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_02' 
    }
    ,
   pcst_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_03' 
    }
    ,
   pcst_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_04' 
    }
    ,
   pcst_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_05' 
    }
    ,
   pcst_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_06' 
    }
    ,
   pcst_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_07' 
    }
    ,
   pcst_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_08' 
    }
    ,
   pcst_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_09' 
    }
    ,
   pcst_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_10' 
    }
    ,
   pcst_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_11' 
    }
    ,
   pcst_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_12' 
    }
    ,
   pcst_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_13' 
    }
    ,
   pcst_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_14' 
    }
    ,
   pcst_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_15' 
    }
    ,
   pcst_prc_lvl: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_PRC_LVL' 
    }
    ,
   pcst_prc_cvr_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCST_PRC_CVR_TYPE' 
    }
    ,
   pcst_tax_aply_on: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_TAX_APLY_ON' 
    }
    ,
   pcst_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PRAI_SYS_ID' 
    }
    ,
   pcst_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PRC_SYS_ID' 
    }
    ,
   pcst_pchg_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PCHG_SYS_ID' 
    }
    ,
   pcst_pps_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PPS_SYS_ID' 
    }
    ,
   pcst_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_PREM_CURR_CODE' 
    }
    ,
   pcst_amount_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'PCST_AMOUNT_FC' 
    }
    ,
   pcst_amount_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_1' 
    }
    ,
   pcst_amount_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_2' 
    }
    ,
   pcst_amount_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_3' 
    }
    ,
   pcst_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_CR_UID' 
    }
    ,
   pcst_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCST_CR_DT' 
    }
    ,
   pcst_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_UPD_UID' 
    }
    ,
   pcst_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCST_UPD_DT' 
    }
    ,
   pcst_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_POL_SYS_ID' 
    }
    ,
   pcst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_END_NO_IDX' 
    }
    ,
   pcst_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_END_SR_NO' 
    }
    ,
   pcst_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_LVL_NO' 
    }
    ,
   pcst_lvl_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_LVL_SR_NO' 
    }
    ,
   pcst_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_COMP_CODE' 
    }
    ,
   pcst_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DIVN_CODE' 
    }
    ,
   pcst_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DEPT_CODE' 
    }
    ,
   pcst_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DS_TYPE' 
    }
    ,
   pcst_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_PROD_CODE' 
    }
    ,
   pcst_disp_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_DISP_SR_NO' 
    }
    ,
   pcst_pcvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PCVR_SYS_ID' 
    }
    ,
   pcst_rec_type_ind: { 
      type: DataTypes.STRING(2), 
      allowNull: true, 
      
      field: 'PCST_REC_TYPE_IND' 
    }
    ,
   pcst_org_amount_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_FC' 
    }
    ,
   pcst_org_amount_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_1' 
    }
    ,
   pcst_org_amount_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_2' 
    }
    ,
   pcst_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_FC' 
    }
    ,
   pcst_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_1' 
    }
    ,
   pcst_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_2' 
    }
    ,
   pcst_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_3' 
    }
    ,
   pcst_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_FC' 
    }
    ,
   pcst_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_1' 
    }
    ,
   pcst_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_2' 
    }
    ,
   pcst_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_3' 
    }
    ,
   pcst_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_01' 
    }
    ,
   pcst_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_02' 
    }
    ,
   pcst_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_03' 
    }
    ,
   pcst_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_04' 
    }
    ,
   pcst_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_05' 
    }
    ,
   pcst_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_06' 
    }
    ,
   pcst_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_07' 
    }
    ,
   pcst_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_08' 
    }
    ,
   pcst_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_09' 
    }
    ,
   pcst_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_10' 
    }
    ,
   pcst_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_11' 
    }
    ,
   pcst_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_12' 
    }
    ,
   pcst_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_13' 
    }
    ,
   pcst_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_14' 
    }
    ,
   pcst_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_15' 
    }
    ,
   pcst_prc_lvl: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_PRC_LVL' 
    }
    ,
   pcst_prc_cvr_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCST_PRC_CVR_TYPE' 
    }
    ,
   pcst_tax_aply_on: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_TAX_APLY_ON' 
    }
    ,
   pcst_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PRAI_SYS_ID' 
    }
    ,
   pcst_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PRC_SYS_ID' 
    }
    ,
   pcst_pchg_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PCHG_SYS_ID' 
    }
    ,
   pcst_pps_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PPS_SYS_ID' 
    }
    ,
   pcst_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_PREM_CURR_CODE' 
    }
    ,
   pcst_amount_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'PCST_AMOUNT_FC' 
    }
    ,
   pcst_amount_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_1' 
    }
    ,
   pcst_amount_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_2' 
    }
    ,
   pcst_amount_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_3' 
    }
    ,
   pcst_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_CR_UID' 
    }
    ,
   pcst_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCST_CR_DT' 
    }
    ,
   pcst_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_UPD_UID' 
    }
    ,
   pcst_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCST_UPD_DT' 
    }
    ,
   pcst_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_POL_SYS_ID' 
    }
    ,
   pcst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_END_NO_IDX' 
    }
    ,
   pcst_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_END_SR_NO' 
    }
    ,
   pcst_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_LVL_NO' 
    }
    ,
   pcst_lvl_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_LVL_SR_NO' 
    }
    ,
   pcst_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_COMP_CODE' 
    }
    ,
   pcst_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DIVN_CODE' 
    }
    ,
   pcst_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DEPT_CODE' 
    }
    ,
   pcst_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DS_TYPE' 
    }
    ,
   pcst_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_PROD_CODE' 
    }
    ,
   pcst_disp_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_DISP_SR_NO' 
    }
    ,
   pcst_pcvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PCVR_SYS_ID' 
    }
    ,
   pcst_rec_type_ind: { 
      type: DataTypes.STRING(2), 
      allowNull: true, 
      
      field: 'PCST_REC_TYPE_IND' 
    }
    ,
   pcst_org_amount_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_FC' 
    }
    ,
   pcst_org_amount_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_1' 
    }
    ,
   pcst_org_amount_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_2' 
    }
    ,
   pcst_org_amount_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_3' 
    }
    ,
   pcst_prc_desc: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PCST_PRC_DESC' 
    }
    ,
   pcst_rate_eft: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_RATE_EFT' 
    }
    ,
   pcst_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_SI_CURR_CODE' 
    }
    ,
   pcst_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_1' 
    }
    ,
   pcst_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_2' 
    }
    ,
   pcst_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_SI_LC_3' 
    }
    ,
   pcst_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_FC' 
    }
    ,
   pcst_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_1' 
    }
    ,
   pcst_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_2' 
    }
    ,
   pcst_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_SI_LC_3' 
    }
    ,
   pcst_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_01' 
    }
    ,
   pcst_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_02' 
    }
    ,
   pcst_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_03' 
    }
    ,
   pcst_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_04' 
    }
    ,
   pcst_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_05' 
    }
    ,
   pcst_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_06' 
    }
    ,
   pcst_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_07' 
    }
    ,
   pcst_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_08' 
    }
    ,
   pcst_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_09' 
    }
    ,
   pcst_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_10' 
    }
    ,
   pcst_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_11' 
    }
    ,
   pcst_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_12' 
    }
    ,
   pcst_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_13' 
    }
    ,
   pcst_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_14' 
    }
    ,
   pcst_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCST_FLEX_15' 
    }
    ,
   pcst_prc_lvl: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_PRC_LVL' 
    }
    ,
   pcst_prc_cvr_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCST_PRC_CVR_TYPE' 
    }
    ,
   pcst_tax_aply_on: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_TAX_APLY_ON' 
    }
    ,
   pcst_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PRAI_SYS_ID' 
    }
    ,
   pcst_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PRC_SYS_ID' 
    }
    ,
   pcst_pchg_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PCHG_SYS_ID' 
    }
    ,
   pcst_pps_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PPS_SYS_ID' 
    }
    ,
   pcst_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_PREM_CURR_CODE' 
    }
    ,
   pcst_amount_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'PCST_AMOUNT_FC' 
    }
    ,
   pcst_amount_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_1' 
    }
    ,
   pcst_amount_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_2' 
    }
    ,
   pcst_amount_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_AMOUNT_LC_3' 
    }
    ,
   pcst_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_CR_UID' 
    }
    ,
   pcst_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCST_CR_DT' 
    }
    ,
   pcst_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_UPD_UID' 
    }
    ,
   pcst_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCST_UPD_DT' 
    }
    ,
   pcst_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_POL_SYS_ID' 
    }
    ,
   pcst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_END_NO_IDX' 
    }
    ,
   pcst_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCST_END_SR_NO' 
    }
    ,
   pcst_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_LVL_NO' 
    }
    ,
   pcst_lvl_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_LVL_SR_NO' 
    }
    ,
   pcst_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_COMP_CODE' 
    }
    ,
   pcst_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DIVN_CODE' 
    }
    ,
   pcst_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DEPT_CODE' 
    }
    ,
   pcst_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCST_DS_TYPE' 
    }
    ,
   pcst_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_PROD_CODE' 
    }
    ,
   pcst_disp_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_DISP_SR_NO' 
    }
    ,
   pcst_pcvr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCST_PCVR_SYS_ID' 
    }
    ,
   pcst_rec_type_ind: { 
      type: DataTypes.STRING(2), 
      allowNull: true, 
      
      field: 'PCST_REC_TYPE_IND' 
    }
    ,
   pcst_org_amount_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_FC' 
    }
    ,
   pcst_org_amount_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_1' 
    }
    ,
   pcst_org_amount_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_2' 
    }
    ,
   pcst_org_amount_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCST_ORG_AMOUNT_LC_3' 
    }
    ,
   pcst_prc_desc: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PCST_PRC_DESC' 
    }
    ,
   pcst_rate_eft: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_RATE_EFT' 
    }
    ,
   pcst_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCST_SI_CURR_CODE' 
    }
    ,
   pcst_si_fc: { 
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
    return PgitPolPremCompSheet;
};