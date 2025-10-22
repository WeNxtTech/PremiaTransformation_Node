module.exports = (sequelize, DataTypes) => {
  const PgitPolBroker = sequelize.define('PgitPolBroker', {
       pbrk_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PBRK_SYS_ID' 
    }
    ,
   pbrk_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRK_POL_SYS_ID' 
    }
    ,
   pbrk_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRK_END_SR_NO' 
    }
    ,
   pbrk_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_END_NO_IDX' 
    }
    ,
   pbrk_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_PSEC_SYS_ID' 
    }
    ,
   pbrk_brk_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_BRK_CODE' 
    }
    ,
   pbrk_calc_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_CALC_TYPE' 
    }
    ,
   pbrk_comm_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_COMM_CODE' 
    }
    ,
   pbrk_comm_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_COMM_DESC' 
    }
    ,
   pbrk_comm_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'PBRK_COMM_PERC' 
    }
    ,
   pbrk_comm_curr: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_COMM_CURR' 
    }
    ,
   pbrk_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_FC' 
    }
    ,
   pbrk_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_1' 
    }
    ,
   pbrk_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_2' 
    }
    ,
   pbrk_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_3' 
    }
    ,
   pbrk_org_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_FC' 
    }
    ,
   pbrk_org_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_1' 
    }
    ,
   pbrk_org_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_2' 
    }
    ,
   pbrk_org_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_3' 
    }
    ,
   pbrk_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PBRK_REC_TYPE' 
    }
    ,
   pbrk_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_CR_UID' 
    }
    ,
   pbrk_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PBRK_CR_DT' 
    }
    ,
   pbrk_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_UPD_UID' 
    }
    ,
   pbrk_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PBRK_UPD_DT' 
    }
    ,
   pbrk_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COMP_CODE' 
    }
    ,
   pbrk_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DIVN_CODE' 
    }
    ,
   pbrk_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DEPT_CODE' 
    }
    ,
   pbrk_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DS_TYPE' 
    }
    ,
   pbrk_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_PROD_CODE' 
    }
    ,
   pbrk_comm_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COMM_TYPE' 
    }
    ,
   pbrk_cvr_ind_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_CVR_IND_CODE' 
    }
    ,
   pbrk_max_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_MAX_PERC' 
    }
    ,
   pbrk_min_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_MIN_PERC' 
    }
    ,
   pbrk_editable_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_EDITABLE_YN' 
    }
    ,
   pbrk_cmnr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_CMNR_SYS_ID' 
    }
    ,
   pbrk_org_comm_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_PERC' 
    }
    ,
   pbrk_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_01' 
    }
    ,
   pbrk_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_02' 
    }
    ,
   pbrk_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_03' 
    }
    ,
   pbrk_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_04' 
    }
    ,
   pbrk_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_05' 
    }
    ,
   pbrk_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_06' 
    }
    ,
   pbrk_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_07' 
    }
    ,
   pbrk_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_08' 
    }
    ,
   pbrk_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_09' 
    }
    ,
   pbrk_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_10' 
    }
    ,
   pbrk_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_11' 
    }
    ,
   pbrk_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_12' 
    }
    ,
   pbrk_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_13' 
    }
    ,
   pbrk_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_14' 
    }
    ,
   pbrk_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_15' 
    }
    ,
   pbrk_country_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COUNTRY_CODE' 
    }
    ,
   pbrk_location_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_LOCATION_CODE' 
    }
    ,
   pbrk_risk_sel_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_RISK_SEL_TYPE' 
    }
    ,
   pbrk_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_CNCT_SYS_ID' 
    }
    ,
   pbrk_comm_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_COMM_MODIFIED_YN' 
    }
    ,
   pbrk_upd_summ_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_UPD_SUMM_YN' 
    }
    ,
   pbrk_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_11' 
    }
    ,
   pbrk_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_12' 
    }
    ,
   pbrk_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_13' 
    }
    ,
   pbrk_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_14' 
    }
    ,
   pbrk_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_15' 
    }
    ,
   pbrk_country_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COUNTRY_CODE' 
    }
    ,
   pbrk_location_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_LOCATION_CODE' 
    }
    ,
   pbrk_risk_sel_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_RISK_SEL_TYPE' 
    }
    ,
   pbrk_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_CNCT_SYS_ID' 
    }
    ,
   pbrk_comm_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_COMM_MODIFIED_YN' 
    }
    ,
   pbrk_upd_summ_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_UPD_SUMM_YN' 
    }
    ,
   pbrk_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PBRK_SYS_ID' 
    }
    ,
   pbrk_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRK_POL_SYS_ID' 
    }
    ,
   pbrk_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRK_END_SR_NO' 
    }
    ,
   pbrk_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_END_NO_IDX' 
    }
    ,
   pbrk_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_PSEC_SYS_ID' 
    }
    ,
   pbrk_brk_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_BRK_CODE' 
    }
    ,
   pbrk_calc_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_CALC_TYPE' 
    }
    ,
   pbrk_comm_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_COMM_CODE' 
    }
    ,
   pbrk_comm_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_COMM_DESC' 
    }
    ,
   pbrk_comm_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'PBRK_COMM_PERC' 
    }
    ,
   pbrk_comm_curr: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_COMM_CURR' 
    }
    ,
   pbrk_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_FC' 
    }
    ,
   pbrk_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_1' 
    }
    ,
   pbrk_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_2' 
    }
    ,
   pbrk_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_3' 
    }
    ,
   pbrk_org_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_FC' 
    }
    ,
   pbrk_org_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_1' 
    }
    ,
   pbrk_org_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_2' 
    }
    ,
   pbrk_org_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_3' 
    }
    ,
   pbrk_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PBRK_REC_TYPE' 
    }
    ,
   pbrk_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_CR_UID' 
    }
    ,
   pbrk_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PBRK_CR_DT' 
    }
    ,
   pbrk_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_UPD_UID' 
    }
    ,
   pbrk_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PBRK_UPD_DT' 
    }
    ,
   pbrk_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COMP_CODE' 
    }
    ,
   pbrk_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DIVN_CODE' 
    }
    ,
   pbrk_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DEPT_CODE' 
    }
    ,
   pbrk_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DS_TYPE' 
    }
    ,
   pbrk_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_PROD_CODE' 
    }
    ,
   pbrk_comm_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COMM_TYPE' 
    }
    ,
   pbrk_cvr_ind_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_CVR_IND_CODE' 
    }
    ,
   pbrk_max_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_MAX_PERC' 
    }
    ,
   pbrk_min_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_MIN_PERC' 
    }
    ,
   pbrk_editable_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_EDITABLE_YN' 
    }
    ,
   pbrk_cmnr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_CMNR_SYS_ID' 
    }
    ,
   pbrk_org_comm_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_PERC' 
    }
    ,
   pbrk_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_01' 
    }
    ,
   pbrk_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_02' 
    }
    ,
   pbrk_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_03' 
    }
    ,
   pbrk_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_04' 
    }
    ,
   pbrk_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_05' 
    }
    ,
   pbrk_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_06' 
    }
    ,
   pbrk_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_07' 
    }
    ,
   pbrk_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_08' 
    }
    ,
   pbrk_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_09' 
    }
    ,
   pbrk_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_10' 
    }
    ,
   pbrk_comm_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COMM_TYPE' 
    }
    ,
   pbrk_cvr_ind_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_CVR_IND_CODE' 
    }
    ,
   pbrk_max_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_MAX_PERC' 
    }
    ,
   pbrk_min_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_MIN_PERC' 
    }
    ,
   pbrk_editable_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_EDITABLE_YN' 
    }
    ,
   pbrk_cmnr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_CMNR_SYS_ID' 
    }
    ,
   pbrk_org_comm_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_PERC' 
    }
    ,
   pbrk_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_01' 
    }
    ,
   pbrk_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_02' 
    }
    ,
   pbrk_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_03' 
    }
    ,
   pbrk_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_04' 
    }
    ,
   pbrk_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_05' 
    }
    ,
   pbrk_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_06' 
    }
    ,
   pbrk_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_07' 
    }
    ,
   pbrk_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_08' 
    }
    ,
   pbrk_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_09' 
    }
    ,
   pbrk_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_10' 
    }
    ,
   pbrk_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_11' 
    }
    ,
   pbrk_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_12' 
    }
    ,
   pbrk_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_13' 
    }
    ,
   pbrk_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_14' 
    }
    ,
   pbrk_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_15' 
    }
    ,
   pbrk_country_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COUNTRY_CODE' 
    }
    ,
   pbrk_location_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_LOCATION_CODE' 
    }
    ,
   pbrk_risk_sel_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_RISK_SEL_TYPE' 
    }
    ,
   pbrk_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_CNCT_SYS_ID' 
    }
    ,
   pbrk_comm_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_COMM_MODIFIED_YN' 
    }
    ,
   pbrk_upd_summ_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_UPD_SUMM_YN' 
    }
    ,
   pbrk_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PBRK_SYS_ID' 
    }
    ,
   pbrk_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRK_POL_SYS_ID' 
    }
    ,
   pbrk_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRK_END_SR_NO' 
    }
    ,
   pbrk_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_END_NO_IDX' 
    }
    ,
   pbrk_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_PSEC_SYS_ID' 
    }
    ,
   pbrk_brk_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_BRK_CODE' 
    }
    ,
   pbrk_calc_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_CALC_TYPE' 
    }
    ,
   pbrk_comm_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_COMM_CODE' 
    }
    ,
   pbrk_comm_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_COMM_DESC' 
    }
    ,
   pbrk_comm_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'PBRK_COMM_PERC' 
    }
    ,
   pbrk_comm_curr: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_COMM_CURR' 
    }
    ,
   pbrk_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_FC' 
    }
    ,
   pbrk_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_1' 
    }
    ,
   pbrk_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_2' 
    }
    ,
   pbrk_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_3' 
    }
    ,
   pbrk_org_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_FC' 
    }
    ,
   pbrk_org_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_1' 
    }
    ,
   pbrk_org_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_2' 
    }
    ,
   pbrk_org_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_3' 
    }
    ,
   pbrk_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PBRK_REC_TYPE' 
    }
    ,
   pbrk_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_CR_UID' 
    }
    ,
   pbrk_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PBRK_CR_DT' 
    }
    ,
   pbrk_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_UPD_UID' 
    }
    ,
   pbrk_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PBRK_UPD_DT' 
    }
    ,
   pbrk_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COMP_CODE' 
    }
    ,
   pbrk_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DIVN_CODE' 
    }
    ,
   pbrk_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DEPT_CODE' 
    }
    ,
   pbrk_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DS_TYPE' 
    }
    ,
   pbrk_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_PROD_CODE' 
    }
    ,
   pbrk_comm_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_COMM_DESC' 
    }
    ,
   pbrk_comm_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'PBRK_COMM_PERC' 
    }
    ,
   pbrk_comm_curr: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_COMM_CURR' 
    }
    ,
   pbrk_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_FC' 
    }
    ,
   pbrk_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_1' 
    }
    ,
   pbrk_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_2' 
    }
    ,
   pbrk_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_3' 
    }
    ,
   pbrk_org_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_FC' 
    }
    ,
   pbrk_org_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_1' 
    }
    ,
   pbrk_org_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_2' 
    }
    ,
   pbrk_org_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_3' 
    }
    ,
   pbrk_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PBRK_REC_TYPE' 
    }
    ,
   pbrk_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_CR_UID' 
    }
    ,
   pbrk_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PBRK_CR_DT' 
    }
    ,
   pbrk_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_UPD_UID' 
    }
    ,
   pbrk_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PBRK_UPD_DT' 
    }
    ,
   pbrk_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COMP_CODE' 
    }
    ,
   pbrk_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DIVN_CODE' 
    }
    ,
   pbrk_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DEPT_CODE' 
    }
    ,
   pbrk_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DS_TYPE' 
    }
    ,
   pbrk_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_PROD_CODE' 
    }
    ,
   pbrk_comm_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COMM_TYPE' 
    }
    ,
   pbrk_cvr_ind_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_CVR_IND_CODE' 
    }
    ,
   pbrk_max_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_MAX_PERC' 
    }
    ,
   pbrk_min_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_MIN_PERC' 
    }
    ,
   pbrk_editable_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_EDITABLE_YN' 
    }
    ,
   pbrk_cmnr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_CMNR_SYS_ID' 
    }
    ,
   pbrk_org_comm_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_PERC' 
    }
    ,
   pbrk_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_01' 
    }
    ,
   pbrk_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_02' 
    }
    ,
   pbrk_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_03' 
    }
    ,
   pbrk_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_04' 
    }
    ,
   pbrk_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_05' 
    }
    ,
   pbrk_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_06' 
    }
    ,
   pbrk_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_07' 
    }
    ,
   pbrk_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_08' 
    }
    ,
   pbrk_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_09' 
    }
    ,
   pbrk_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_10' 
    }
    ,
   pbrk_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_11' 
    }
    ,
   pbrk_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_12' 
    }
    ,
   pbrk_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_13' 
    }
    ,
   pbrk_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_14' 
    }
    ,
   pbrk_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_15' 
    }
    ,
   pbrk_country_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COUNTRY_CODE' 
    }
    ,
   pbrk_location_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_LOCATION_CODE' 
    }
    ,
   pbrk_risk_sel_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_RISK_SEL_TYPE' 
    }
    ,
   pbrk_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_CNCT_SYS_ID' 
    }
    ,
   pbrk_comm_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_COMM_MODIFIED_YN' 
    }
    ,
   pbrk_upd_summ_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_UPD_SUMM_YN' 
    }
    ,
   pbrk_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PBRK_SYS_ID' 
    }
    ,
   pbrk_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRK_POL_SYS_ID' 
    }
    ,
   pbrk_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRK_END_SR_NO' 
    }
    ,
   pbrk_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_END_NO_IDX' 
    }
    ,
   pbrk_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_PSEC_SYS_ID' 
    }
    ,
   pbrk_brk_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_BRK_CODE' 
    }
    ,
   pbrk_calc_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_CALC_TYPE' 
    }
    ,
   pbrk_comm_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_COMM_CODE' 
    }
    ,
   pbrk_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PBRK_SYS_ID' 
    }
    ,
   pbrk_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRK_POL_SYS_ID' 
    }
    ,
   pbrk_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRK_END_SR_NO' 
    }
    ,
   pbrk_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_END_NO_IDX' 
    }
    ,
   pbrk_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_PSEC_SYS_ID' 
    }
    ,
   pbrk_brk_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_BRK_CODE' 
    }
    ,
   pbrk_calc_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_CALC_TYPE' 
    }
    ,
   pbrk_comm_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_COMM_CODE' 
    }
    ,
   pbrk_comm_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_COMM_DESC' 
    }
    ,
   pbrk_comm_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'PBRK_COMM_PERC' 
    }
    ,
   pbrk_comm_curr: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_COMM_CURR' 
    }
    ,
   pbrk_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_FC' 
    }
    ,
   pbrk_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_1' 
    }
    ,
   pbrk_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_2' 
    }
    ,
   pbrk_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_COMM_LC_3' 
    }
    ,
   pbrk_org_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_FC' 
    }
    ,
   pbrk_org_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_1' 
    }
    ,
   pbrk_org_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_2' 
    }
    ,
   pbrk_org_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_LC_3' 
    }
    ,
   pbrk_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PBRK_REC_TYPE' 
    }
    ,
   pbrk_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRK_CR_UID' 
    }
    ,
   pbrk_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PBRK_CR_DT' 
    }
    ,
   pbrk_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_UPD_UID' 
    }
    ,
   pbrk_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PBRK_UPD_DT' 
    }
    ,
   pbrk_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COMP_CODE' 
    }
    ,
   pbrk_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DIVN_CODE' 
    }
    ,
   pbrk_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DEPT_CODE' 
    }
    ,
   pbrk_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_DS_TYPE' 
    }
    ,
   pbrk_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_PROD_CODE' 
    }
    ,
   pbrk_comm_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COMM_TYPE' 
    }
    ,
   pbrk_cvr_ind_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_CVR_IND_CODE' 
    }
    ,
   pbrk_max_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_MAX_PERC' 
    }
    ,
   pbrk_min_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_MIN_PERC' 
    }
    ,
   pbrk_editable_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_EDITABLE_YN' 
    }
    ,
   pbrk_cmnr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_CMNR_SYS_ID' 
    }
    ,
   pbrk_org_comm_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRK_ORG_COMM_PERC' 
    }
    ,
   pbrk_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_01' 
    }
    ,
   pbrk_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_02' 
    }
    ,
   pbrk_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_03' 
    }
    ,
   pbrk_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_04' 
    }
    ,
   pbrk_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_05' 
    }
    ,
   pbrk_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_06' 
    }
    ,
   pbrk_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_07' 
    }
    ,
   pbrk_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_08' 
    }
    ,
   pbrk_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_09' 
    }
    ,
   pbrk_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_10' 
    }
    ,
   pbrk_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_11' 
    }
    ,
   pbrk_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_12' 
    }
    ,
   pbrk_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_13' 
    }
    ,
   pbrk_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_14' 
    }
    ,
   pbrk_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRK_FLEX_15' 
    }
    ,
   pbrk_country_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_COUNTRY_CODE' 
    }
    ,
   pbrk_location_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_LOCATION_CODE' 
    }
    ,
   pbrk_risk_sel_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRK_RISK_SEL_TYPE' 
    }
    ,
   pbrk_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRK_CNCT_SYS_ID' 
    }
    ,
   pbrk_comm_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_COMM_MODIFIED_YN' 
    }
    ,
   pbrk_upd_summ_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRK_UPD_SUMM_YN' 
    }
    
    }, {
        tableName: 'PGIT_POL_BROKER',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitPolBroker;
};