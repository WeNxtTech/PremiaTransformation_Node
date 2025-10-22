module.exports = (sequelize, DataTypes) => {
  const PgitPolCondition = sequelize.define('PgitPolCondition', {
       pcon_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_END_NO_IDX' 
    }
    ,
   pcon_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_END_SR_NO' 
    }
    ,
   pcon_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_SR_NO' 
    }
    ,
   pcon_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCON_CODE' 
    }
    ,
   pcon_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PCON_DESC' 
    }
    ,
   pcon_long_desc: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC' 
    }
    ,
   pcon_value: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PCON_VALUE' 
    }
    ,
   pcon_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCON_REC_TYPE' 
    }
    ,
   pcon_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCON_CR_UID' 
    }
    ,
   pcon_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCON_CR_DT' 
    }
    ,
   pcon_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_UPD_UID' 
    }
    ,
   pcon_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCON_UPD_DT' 
    }
    ,
   pcon_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_COMP_CODE' 
    }
    ,
   pcon_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DIVN_CODE' 
    }
    ,
   pcon_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DEPT_CODE' 
    }
    ,
   pcon_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DS_TYPE' 
    }
    ,
   pcon_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_PROD_CODE' 
    }
    ,
   pcon_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_01' 
    }
    ,
   pcon_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_02' 
    }
    ,
   pcon_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_03' 
    }
    ,
   pcon_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_04' 
    }
    ,
   pcon_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_05' 
    }
    ,
   pcon_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_06' 
    }
    ,
   pcon_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_07' 
    }
    ,
   pcon_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_08' 
    }
    ,
   pcon_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_09' 
    }
    ,
   pcon_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_10' 
    }
    ,
   pcon_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_11' 
    }
    ,
   pcon_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_12' 
    }
    ,
   pcon_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_13' 
    }
    ,
   pcon_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_14' 
    }
    ,
   pcon_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_15' 
    }
    ,
   pcon_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PSEC_SYS_ID' 
    }
    ,
   pcon_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PRC_SYS_ID' 
    }
    ,
   pcon_prs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PRS_SYS_ID' 
    }
    ,
   pcon_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL1_SYS_ID' 
    }
    ,
   pcon_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL1_SR_NO' 
    }
    ,
   pcon_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL2_SYS_ID' 
    }
    ,
   pcon_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL2_SR_NO' 
    }
    ,
   pcon_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL3_SYS_ID' 
    }
    ,
   pcon_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL3_SR_NO' 
    }
    ,
   pcon_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL4_SYS_ID' 
    }
    ,
   pcon_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL4_SR_NO' 
    }
    ,
   pcon_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL5_SYS_ID' 
    }
    ,
   pcon_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL5_SR_NO' 
    }
    ,
   pcon_pcd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PCD_SYS_ID' 
    }
    ,
   pcon_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_TYPE' 
    }
    ,
   pcon_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_CNCT_SYS_ID' 
    }
    ,
   pcon_long_desc1: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC1' 
    }
    ,
   pcon_long_desc2: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC2' 
    }
    ,
   pcon_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_BRH_SYS_ID' 
    }
    ,
   pcon_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCON_SYS_ID' 
    }
    ,
   pcon_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_POL_SYS_ID' 
    }
    ,
   pcon_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCON_SYS_ID' 
    }
    ,
   pcon_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_POL_SYS_ID' 
    }
    ,
   pcon_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_END_NO_IDX' 
    }
    ,
   pcon_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_END_SR_NO' 
    }
    ,
   pcon_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_SR_NO' 
    }
    ,
   pcon_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCON_CODE' 
    }
    ,
   pcon_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PCON_DESC' 
    }
    ,
   pcon_long_desc: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC' 
    }
    ,
   pcon_value: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PCON_VALUE' 
    }
    ,
   pcon_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCON_REC_TYPE' 
    }
    ,
   pcon_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCON_CR_UID' 
    }
    ,
   pcon_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCON_CR_DT' 
    }
    ,
   pcon_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_UPD_UID' 
    }
    ,
   pcon_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCON_UPD_DT' 
    }
    ,
   pcon_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_COMP_CODE' 
    }
    ,
   pcon_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DIVN_CODE' 
    }
    ,
   pcon_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DEPT_CODE' 
    }
    ,
   pcon_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DS_TYPE' 
    }
    ,
   pcon_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_PROD_CODE' 
    }
    ,
   pcon_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_01' 
    }
    ,
   pcon_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_02' 
    }
    ,
   pcon_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_03' 
    }
    ,
   pcon_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_04' 
    }
    ,
   pcon_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_05' 
    }
    ,
   pcon_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_06' 
    }
    ,
   pcon_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_07' 
    }
    ,
   pcon_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_08' 
    }
    ,
   pcon_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_09' 
    }
    ,
   pcon_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_10' 
    }
    ,
   pcon_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_11' 
    }
    ,
   pcon_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_12' 
    }
    ,
   pcon_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_13' 
    }
    ,
   pcon_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_14' 
    }
    ,
   pcon_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_15' 
    }
    ,
   pcon_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PSEC_SYS_ID' 
    }
    ,
   pcon_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PRC_SYS_ID' 
    }
    ,
   pcon_prs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PRS_SYS_ID' 
    }
    ,
   pcon_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL1_SYS_ID' 
    }
    ,
   pcon_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL1_SR_NO' 
    }
    ,
   pcon_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL2_SYS_ID' 
    }
    ,
   pcon_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL2_SR_NO' 
    }
    ,
   pcon_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL3_SYS_ID' 
    }
    ,
   pcon_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL3_SR_NO' 
    }
    ,
   pcon_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL4_SYS_ID' 
    }
    ,
   pcon_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL4_SR_NO' 
    }
    ,
   pcon_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL5_SYS_ID' 
    }
    ,
   pcon_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL5_SR_NO' 
    }
    ,
   pcon_pcd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PCD_SYS_ID' 
    }
    ,
   pcon_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_TYPE' 
    }
    ,
   pcon_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_CNCT_SYS_ID' 
    }
    ,
   pcon_long_desc1: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC1' 
    }
    ,
   pcon_long_desc2: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC2' 
    }
    ,
   pcon_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_BRH_SYS_ID' 
    }
    ,
   pcon_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCON_SYS_ID' 
    }
    ,
   pcon_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_POL_SYS_ID' 
    }
    ,
   pcon_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_END_NO_IDX' 
    }
    ,
   pcon_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_END_SR_NO' 
    }
    ,
   pcon_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_SR_NO' 
    }
    ,
   pcon_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCON_CODE' 
    }
    ,
   pcon_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PCON_DESC' 
    }
    ,
   pcon_long_desc: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC' 
    }
    ,
   pcon_value: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PCON_VALUE' 
    }
    ,
   pcon_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCON_REC_TYPE' 
    }
    ,
   pcon_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCON_CR_UID' 
    }
    ,
   pcon_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCON_CR_DT' 
    }
    ,
   pcon_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_UPD_UID' 
    }
    ,
   pcon_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCON_UPD_DT' 
    }
    ,
   pcon_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_COMP_CODE' 
    }
    ,
   pcon_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DIVN_CODE' 
    }
    ,
   pcon_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DEPT_CODE' 
    }
    ,
   pcon_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DS_TYPE' 
    }
    ,
   pcon_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_PROD_CODE' 
    }
    ,
   pcon_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_01' 
    }
    ,
   pcon_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_02' 
    }
    ,
   pcon_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_03' 
    }
    ,
   pcon_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_04' 
    }
    ,
   pcon_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_05' 
    }
    ,
   pcon_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_06' 
    }
    ,
   pcon_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_07' 
    }
    ,
   pcon_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_08' 
    }
    ,
   pcon_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_09' 
    }
    ,
   pcon_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_10' 
    }
    ,
   pcon_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_11' 
    }
    ,
   pcon_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_12' 
    }
    ,
   pcon_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_13' 
    }
    ,
   pcon_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_14' 
    }
    ,
   pcon_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_15' 
    }
    ,
   pcon_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PSEC_SYS_ID' 
    }
    ,
   pcon_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PRC_SYS_ID' 
    }
    ,
   pcon_prs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PRS_SYS_ID' 
    }
    ,
   pcon_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL1_SYS_ID' 
    }
    ,
   pcon_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL1_SR_NO' 
    }
    ,
   pcon_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL2_SYS_ID' 
    }
    ,
   pcon_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL2_SR_NO' 
    }
    ,
   pcon_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL3_SYS_ID' 
    }
    ,
   pcon_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL3_SR_NO' 
    }
    ,
   pcon_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL4_SYS_ID' 
    }
    ,
   pcon_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL4_SR_NO' 
    }
    ,
   pcon_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL5_SYS_ID' 
    }
    ,
   pcon_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL5_SR_NO' 
    }
    ,
   pcon_pcd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PCD_SYS_ID' 
    }
    ,
   pcon_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_TYPE' 
    }
    ,
   pcon_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_CNCT_SYS_ID' 
    }
    ,
   pcon_long_desc1: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC1' 
    }
    ,
   pcon_long_desc2: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC2' 
    }
    ,
   pcon_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_BRH_SYS_ID' 
    }
    ,
   pcon_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCON_SYS_ID' 
    }
    ,
   pcon_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_POL_SYS_ID' 
    }
    ,
   pcon_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_END_NO_IDX' 
    }
    ,
   pcon_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_END_SR_NO' 
    }
    ,
   pcon_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_SR_NO' 
    }
    ,
   pcon_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCON_CODE' 
    }
    ,
   pcon_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PCON_DESC' 
    }
    ,
   pcon_long_desc: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC' 
    }
    ,
   pcon_value: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PCON_VALUE' 
    }
    ,
   pcon_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCON_REC_TYPE' 
    }
    ,
   pcon_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCON_CR_UID' 
    }
    ,
   pcon_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCON_CR_DT' 
    }
    ,
   pcon_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_UPD_UID' 
    }
    ,
   pcon_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCON_UPD_DT' 
    }
    ,
   pcon_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_COMP_CODE' 
    }
    ,
   pcon_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DIVN_CODE' 
    }
    ,
   pcon_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DEPT_CODE' 
    }
    ,
   pcon_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DS_TYPE' 
    }
    ,
   pcon_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_PROD_CODE' 
    }
    ,
   pcon_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_01' 
    }
    ,
   pcon_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_02' 
    }
    ,
   pcon_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_03' 
    }
    ,
   pcon_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_04' 
    }
    ,
   pcon_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_05' 
    }
    ,
   pcon_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_06' 
    }
    ,
   pcon_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_07' 
    }
    ,
   pcon_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_08' 
    }
    ,
   pcon_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_09' 
    }
    ,
   pcon_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_10' 
    }
    ,
   pcon_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_11' 
    }
    ,
   pcon_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_12' 
    }
    ,
   pcon_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_13' 
    }
    ,
   pcon_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_14' 
    }
    ,
   pcon_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_15' 
    }
    ,
   pcon_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PSEC_SYS_ID' 
    }
    ,
   pcon_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PRC_SYS_ID' 
    }
    ,
   pcon_prs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PRS_SYS_ID' 
    }
    ,
   pcon_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL1_SYS_ID' 
    }
    ,
   pcon_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL1_SR_NO' 
    }
    ,
   pcon_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL2_SYS_ID' 
    }
    ,
   pcon_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL2_SR_NO' 
    }
    ,
   pcon_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL3_SYS_ID' 
    }
    ,
   pcon_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL3_SR_NO' 
    }
    ,
   pcon_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL4_SYS_ID' 
    }
    ,
   pcon_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL4_SR_NO' 
    }
    ,
   pcon_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL5_SYS_ID' 
    }
    ,
   pcon_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL5_SR_NO' 
    }
    ,
   pcon_pcd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PCD_SYS_ID' 
    }
    ,
   pcon_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_TYPE' 
    }
    ,
   pcon_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_CNCT_SYS_ID' 
    }
    ,
   pcon_long_desc1: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC1' 
    }
    ,
   pcon_long_desc2: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC2' 
    }
    ,
   pcon_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_BRH_SYS_ID' 
    }
    ,
   pcon_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCON_SYS_ID' 
    }
    ,
   pcon_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_POL_SYS_ID' 
    }
    ,
   pcon_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_END_NO_IDX' 
    }
    ,
   pcon_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_END_SR_NO' 
    }
    ,
   pcon_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCON_SR_NO' 
    }
    ,
   pcon_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCON_CODE' 
    }
    ,
   pcon_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PCON_DESC' 
    }
    ,
   pcon_long_desc: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC' 
    }
    ,
   pcon_value: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PCON_VALUE' 
    }
    ,
   pcon_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCON_REC_TYPE' 
    }
    ,
   pcon_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCON_CR_UID' 
    }
    ,
   pcon_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCON_CR_DT' 
    }
    ,
   pcon_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_UPD_UID' 
    }
    ,
   pcon_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCON_UPD_DT' 
    }
    ,
   pcon_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_COMP_CODE' 
    }
    ,
   pcon_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DIVN_CODE' 
    }
    ,
   pcon_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DEPT_CODE' 
    }
    ,
   pcon_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_DS_TYPE' 
    }
    ,
   pcon_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_PROD_CODE' 
    }
    ,
   pcon_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_01' 
    }
    ,
   pcon_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_02' 
    }
    ,
   pcon_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_03' 
    }
    ,
   pcon_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_04' 
    }
    ,
   pcon_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_05' 
    }
    ,
   pcon_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_06' 
    }
    ,
   pcon_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_07' 
    }
    ,
   pcon_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_08' 
    }
    ,
   pcon_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_09' 
    }
    ,
   pcon_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_10' 
    }
    ,
   pcon_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_11' 
    }
    ,
   pcon_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_12' 
    }
    ,
   pcon_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_13' 
    }
    ,
   pcon_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_14' 
    }
    ,
   pcon_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCON_FLEX_15' 
    }
    ,
   pcon_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PSEC_SYS_ID' 
    }
    ,
   pcon_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PRC_SYS_ID' 
    }
    ,
   pcon_prs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PRS_SYS_ID' 
    }
    ,
   pcon_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL1_SYS_ID' 
    }
    ,
   pcon_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL1_SR_NO' 
    }
    ,
   pcon_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL2_SYS_ID' 
    }
    ,
   pcon_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL2_SR_NO' 
    }
    ,
   pcon_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL3_SYS_ID' 
    }
    ,
   pcon_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL3_SR_NO' 
    }
    ,
   pcon_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL4_SYS_ID' 
    }
    ,
   pcon_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL4_SR_NO' 
    }
    ,
   pcon_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL5_SYS_ID' 
    }
    ,
   pcon_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_LVL5_SR_NO' 
    }
    ,
   pcon_pcd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_PCD_SYS_ID' 
    }
    ,
   pcon_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCON_TYPE' 
    }
    ,
   pcon_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_CNCT_SYS_ID' 
    }
    ,
   pcon_long_desc1: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC1' 
    }
    ,
   pcon_long_desc2: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCON_LONG_DESC2' 
    }
    ,
   pcon_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCON_BRH_SYS_ID' 
    }
    
    }, {
        tableName: 'PGIT_POL_CONDITION',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitPolCondition;
};