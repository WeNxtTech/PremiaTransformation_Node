module.exports = (sequelize, DataTypes) => {
  const PgitPolCharge = sequelize.define('PgitPolCharge', {
       pchg_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_END_SR_NO' 
    }
    ,
   pchg_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_SR_NO' 
    }
    ,
   pchg_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_CODE' 
    }
    ,
   pchg_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_TYPE' 
    }
    ,
   pchg_perc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: false, 
      
      field: 'PCHG_PERC' 
    }
    ,
   pchg_chg_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_FC' 
    }
    ,
   pchg_chg_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_1' 
    }
    ,
   pchg_chg_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_2' 
    }
    ,
   pchg_chg_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_3' 
    }
    ,
   pchg_org_chg_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_FC' 
    }
    ,
   pchg_org_chg_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_1' 
    }
    ,
   pchg_org_chg_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_2' 
    }
    ,
   pchg_org_chg_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_3' 
    }
    ,
   pchg_cust_share_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'PCHG_CUST_SHARE_PERC' 
    }
    ,
   pchg_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCHG_REC_TYPE' 
    }
    ,
   pchg_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_CR_UID' 
    }
    ,
   pchg_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCHG_CR_DT' 
    }
    ,
   pchg_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_UPD_UID' 
    }
    ,
   pchg_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCHG_UPD_DT' 
    }
    ,
   pchg_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_COMP_CODE' 
    }
    ,
   pchg_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DIVN_CODE' 
    }
    ,
   pchg_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DEPT_CODE' 
    }
    ,
   pchg_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DS_TYPE' 
    }
    ,
   pchg_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_PROD_CODE' 
    }
    ,
   pchg_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_PREM_CURR_CODE' 
    }
    ,
   pchg_rate_per: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCHG_RATE_PER' 
    }
    ,
   pchg_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_MAND_YN' 
    }
    ,
   pchg_rate_modifiable_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_RATE_MODIFIABLE_YN' 
    }
    ,
   pchg_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_01' 
    }
    ,
   pchg_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_02' 
    }
    ,
   pchg_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_03' 
    }
    ,
   pchg_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_04' 
    }
    ,
   pchg_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_05' 
    }
    ,
   pchg_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_06' 
    }
    ,
   pchg_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_07' 
    }
    ,
   pchg_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_08' 
    }
    ,
   pchg_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_09' 
    }
    ,
   pchg_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_10' 
    }
    ,
   pchg_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_11' 
    }
    ,
   pchg_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_12' 
    }
    ,
   pchg_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_13' 
    }
    ,
   pchg_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_14' 
    }
    ,
   pchg_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_15' 
    }
    ,
   pchg_sec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_SEC_SYS_ID' 
    }
    ,
   pchg_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_SEC_CODE' 
    }
    ,
   pchg_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_PRAI_SYS_ID' 
    }
    ,
   pchg_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCHG_SYS_ID' 
    }
    ,
   pchg_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_POL_SYS_ID' 
    }
    ,
   pchg_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_END_NO_IDX' 
    }
    ,
   pchg_level_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_LEVEL_NO' 
    }
    ,
   pchg_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_CNCT_SYS_ID' 
    }
    ,
   pchg_charge_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_CHARGE_MODIFIED_YN' 
    }
    ,
   pchg_refund_at: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_REFUND_AT' 
    }
    ,
   pchg_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCHG_SYS_ID' 
    }
    ,
   pchg_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_POL_SYS_ID' 
    }
    ,
   pchg_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_END_NO_IDX' 
    }
    ,
   pchg_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_END_SR_NO' 
    }
    ,
   pchg_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_SR_NO' 
    }
    ,
   pchg_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_CODE' 
    }
    ,
   pchg_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_TYPE' 
    }
    ,
   pchg_perc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: false, 
      
      field: 'PCHG_PERC' 
    }
    ,
   pchg_chg_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_FC' 
    }
    ,
   pchg_chg_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_1' 
    }
    ,
   pchg_chg_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_2' 
    }
    ,
   pchg_chg_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_3' 
    }
    ,
   pchg_org_chg_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_FC' 
    }
    ,
   pchg_org_chg_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_1' 
    }
    ,
   pchg_org_chg_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_2' 
    }
    ,
   pchg_org_chg_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_3' 
    }
    ,
   pchg_cust_share_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'PCHG_CUST_SHARE_PERC' 
    }
    ,
   pchg_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCHG_REC_TYPE' 
    }
    ,
   pchg_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_CR_UID' 
    }
    ,
   pchg_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCHG_CR_DT' 
    }
    ,
   pchg_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_UPD_UID' 
    }
    ,
   pchg_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCHG_UPD_DT' 
    }
    ,
   pchg_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_COMP_CODE' 
    }
    ,
   pchg_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DIVN_CODE' 
    }
    ,
   pchg_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DEPT_CODE' 
    }
    ,
   pchg_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DS_TYPE' 
    }
    ,
   pchg_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_PROD_CODE' 
    }
    ,
   pchg_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_PREM_CURR_CODE' 
    }
    ,
   pchg_rate_per: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCHG_RATE_PER' 
    }
    ,
   pchg_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_MAND_YN' 
    }
    ,
   pchg_rate_modifiable_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_RATE_MODIFIABLE_YN' 
    }
    ,
   pchg_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_01' 
    }
    ,
   pchg_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_02' 
    }
    ,
   pchg_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_03' 
    }
    ,
   pchg_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_04' 
    }
    ,
   pchg_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_05' 
    }
    ,
   pchg_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_06' 
    }
    ,
   pchg_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_07' 
    }
    ,
   pchg_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_08' 
    }
    ,
   pchg_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_09' 
    }
    ,
   pchg_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_10' 
    }
    ,
   pchg_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_11' 
    }
    ,
   pchg_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_12' 
    }
    ,
   pchg_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_13' 
    }
    ,
   pchg_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_14' 
    }
    ,
   pchg_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_15' 
    }
    ,
   pchg_sec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_SEC_SYS_ID' 
    }
    ,
   pchg_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_SEC_CODE' 
    }
    ,
   pchg_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_PRAI_SYS_ID' 
    }
    ,
   pchg_level_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_LEVEL_NO' 
    }
    ,
   pchg_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_CNCT_SYS_ID' 
    }
    ,
   pchg_charge_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_CHARGE_MODIFIED_YN' 
    }
    ,
   pchg_refund_at: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_REFUND_AT' 
    }
    ,
   pchg_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCHG_SYS_ID' 
    }
    ,
   pchg_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_POL_SYS_ID' 
    }
    ,
   pchg_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_END_NO_IDX' 
    }
    ,
   pchg_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_END_SR_NO' 
    }
    ,
   pchg_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_SR_NO' 
    }
    ,
   pchg_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_CODE' 
    }
    ,
   pchg_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_TYPE' 
    }
    ,
   pchg_perc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: false, 
      
      field: 'PCHG_PERC' 
    }
    ,
   pchg_chg_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_FC' 
    }
    ,
   pchg_chg_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_1' 
    }
    ,
   pchg_chg_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_2' 
    }
    ,
   pchg_chg_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_3' 
    }
    ,
   pchg_org_chg_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_FC' 
    }
    ,
   pchg_org_chg_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_1' 
    }
    ,
   pchg_org_chg_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_2' 
    }
    ,
   pchg_org_chg_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_3' 
    }
    ,
   pchg_cust_share_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'PCHG_CUST_SHARE_PERC' 
    }
    ,
   pchg_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCHG_REC_TYPE' 
    }
    ,
   pchg_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_CR_UID' 
    }
    ,
   pchg_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCHG_CR_DT' 
    }
    ,
   pchg_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_UPD_UID' 
    }
    ,
   pchg_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCHG_UPD_DT' 
    }
    ,
   pchg_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_COMP_CODE' 
    }
    ,
   pchg_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DIVN_CODE' 
    }
    ,
   pchg_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DEPT_CODE' 
    }
    ,
   pchg_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DS_TYPE' 
    }
    ,
   pchg_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_PROD_CODE' 
    }
    ,
   pchg_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_PREM_CURR_CODE' 
    }
    ,
   pchg_rate_per: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCHG_RATE_PER' 
    }
    ,
   pchg_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_MAND_YN' 
    }
    ,
   pchg_rate_modifiable_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_RATE_MODIFIABLE_YN' 
    }
    ,
   pchg_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_01' 
    }
    ,
   pchg_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_02' 
    }
    ,
   pchg_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_03' 
    }
    ,
   pchg_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_04' 
    }
    ,
   pchg_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_05' 
    }
    ,
   pchg_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_06' 
    }
    ,
   pchg_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_07' 
    }
    ,
   pchg_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_08' 
    }
    ,
   pchg_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_09' 
    }
    ,
   pchg_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_10' 
    }
    ,
   pchg_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_11' 
    }
    ,
   pchg_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_12' 
    }
    ,
   pchg_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_13' 
    }
    ,
   pchg_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_14' 
    }
    ,
   pchg_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_15' 
    }
    ,
   pchg_sec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_SEC_SYS_ID' 
    }
    ,
   pchg_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_SEC_CODE' 
    }
    ,
   pchg_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_PRAI_SYS_ID' 
    }
    ,
   pchg_level_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_LEVEL_NO' 
    }
    ,
   pchg_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_CNCT_SYS_ID' 
    }
    ,
   pchg_charge_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_CHARGE_MODIFIED_YN' 
    }
    ,
   pchg_refund_at: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_REFUND_AT' 
    }
    ,
   pchg_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCHG_SYS_ID' 
    }
    ,
   pchg_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_POL_SYS_ID' 
    }
    ,
   pchg_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_END_NO_IDX' 
    }
    ,
   pchg_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_END_SR_NO' 
    }
    ,
   pchg_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_SR_NO' 
    }
    ,
   pchg_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_CODE' 
    }
    ,
   pchg_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_TYPE' 
    }
    ,
   pchg_perc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: false, 
      
      field: 'PCHG_PERC' 
    }
    ,
   pchg_chg_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_FC' 
    }
    ,
   pchg_chg_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_1' 
    }
    ,
   pchg_chg_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_2' 
    }
    ,
   pchg_chg_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_3' 
    }
    ,
   pchg_org_chg_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_FC' 
    }
    ,
   pchg_org_chg_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_1' 
    }
    ,
   pchg_org_chg_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_2' 
    }
    ,
   pchg_org_chg_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_3' 
    }
    ,
   pchg_cust_share_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'PCHG_CUST_SHARE_PERC' 
    }
    ,
   pchg_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCHG_REC_TYPE' 
    }
    ,
   pchg_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_CR_UID' 
    }
    ,
   pchg_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCHG_CR_DT' 
    }
    ,
   pchg_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_UPD_UID' 
    }
    ,
   pchg_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCHG_UPD_DT' 
    }
    ,
   pchg_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_COMP_CODE' 
    }
    ,
   pchg_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DIVN_CODE' 
    }
    ,
   pchg_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DEPT_CODE' 
    }
    ,
   pchg_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DS_TYPE' 
    }
    ,
   pchg_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_PROD_CODE' 
    }
    ,
   pchg_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_PREM_CURR_CODE' 
    }
    ,
   pchg_rate_per: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCHG_RATE_PER' 
    }
    ,
   pchg_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_MAND_YN' 
    }
    ,
   pchg_rate_modifiable_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_RATE_MODIFIABLE_YN' 
    }
    ,
   pchg_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_01' 
    }
    ,
   pchg_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_02' 
    }
    ,
   pchg_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_03' 
    }
    ,
   pchg_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_04' 
    }
    ,
   pchg_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_05' 
    }
    ,
   pchg_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_06' 
    }
    ,
   pchg_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_07' 
    }
    ,
   pchg_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_08' 
    }
    ,
   pchg_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_09' 
    }
    ,
   pchg_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_10' 
    }
    ,
   pchg_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_11' 
    }
    ,
   pchg_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_12' 
    }
    ,
   pchg_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_13' 
    }
    ,
   pchg_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_14' 
    }
    ,
   pchg_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_15' 
    }
    ,
   pchg_sec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_SEC_SYS_ID' 
    }
    ,
   pchg_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_SEC_CODE' 
    }
    ,
   pchg_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_PRAI_SYS_ID' 
    }
    ,
   pchg_level_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_LEVEL_NO' 
    }
    ,
   pchg_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_CNCT_SYS_ID' 
    }
    ,
   pchg_charge_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_CHARGE_MODIFIED_YN' 
    }
    ,
   pchg_refund_at: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_REFUND_AT' 
    }
    ,
   pchg_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCHG_SYS_ID' 
    }
    ,
   pchg_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_POL_SYS_ID' 
    }
    ,
   pchg_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_END_NO_IDX' 
    }
    ,
   pchg_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_END_SR_NO' 
    }
    ,
   pchg_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHG_SR_NO' 
    }
    ,
   pchg_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_CODE' 
    }
    ,
   pchg_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_TYPE' 
    }
    ,
   pchg_perc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: false, 
      
      field: 'PCHG_PERC' 
    }
    ,
   pchg_chg_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_FC' 
    }
    ,
   pchg_chg_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_1' 
    }
    ,
   pchg_chg_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_2' 
    }
    ,
   pchg_chg_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_CHG_LC_3' 
    }
    ,
   pchg_org_chg_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_FC' 
    }
    ,
   pchg_org_chg_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_1' 
    }
    ,
   pchg_org_chg_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_2' 
    }
    ,
   pchg_org_chg_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHG_ORG_CHG_LC_3' 
    }
    ,
   pchg_cust_share_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'PCHG_CUST_SHARE_PERC' 
    }
    ,
   pchg_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCHG_REC_TYPE' 
    }
    ,
   pchg_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHG_CR_UID' 
    }
    ,
   pchg_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCHG_CR_DT' 
    }
    ,
   pchg_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_UPD_UID' 
    }
    ,
   pchg_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCHG_UPD_DT' 
    }
    ,
   pchg_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_COMP_CODE' 
    }
    ,
   pchg_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DIVN_CODE' 
    }
    ,
   pchg_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DEPT_CODE' 
    }
    ,
   pchg_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_DS_TYPE' 
    }
    ,
   pchg_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_PROD_CODE' 
    }
    ,
   pchg_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_PREM_CURR_CODE' 
    }
    ,
   pchg_rate_per: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCHG_RATE_PER' 
    }
    ,
   pchg_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_MAND_YN' 
    }
    ,
   pchg_rate_modifiable_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_RATE_MODIFIABLE_YN' 
    }
    ,
   pchg_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_01' 
    }
    ,
   pchg_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_02' 
    }
    ,
   pchg_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_03' 
    }
    ,
   pchg_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_04' 
    }
    ,
   pchg_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_05' 
    }
    ,
   pchg_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_06' 
    }
    ,
   pchg_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_07' 
    }
    ,
   pchg_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_08' 
    }
    ,
   pchg_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_09' 
    }
    ,
   pchg_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_10' 
    }
    ,
   pchg_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_11' 
    }
    ,
   pchg_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_12' 
    }
    ,
   pchg_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_13' 
    }
    ,
   pchg_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_14' 
    }
    ,
   pchg_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHG_FLEX_15' 
    }
    ,
   pchg_sec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_SEC_SYS_ID' 
    }
    ,
   pchg_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_SEC_CODE' 
    }
    ,
   pchg_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_PRAI_SYS_ID' 
    }
    ,
   pchg_level_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_LEVEL_NO' 
    }
    ,
   pchg_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHG_CNCT_SYS_ID' 
    }
    ,
   pchg_charge_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHG_CHARGE_MODIFIED_YN' 
    }
    ,
   pchg_refund_at: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHG_REFUND_AT' 
    }
    
    }, {
        tableName: 'PGIT_POL_CHARGE',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitPolCharge;
};