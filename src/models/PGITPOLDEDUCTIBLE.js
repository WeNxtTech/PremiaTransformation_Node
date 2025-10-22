module.exports = (sequelize, DataTypes) => {
  const PGITPOLDEDUCTIBLE = sequelize.define('PGITPOLDEDUCTIBLE', {
       pcd_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_CNCT_SYS_ID' 
    }
    ,
   pcd_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_BRH_SYS_ID' 
    }
    ,
   pcd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCD_SYS_ID' 
    }
    ,
   pcd_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_POL_SYS_ID' 
    }
    ,
   pcd_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_END_NO_IDX' 
    }
    ,
   pcd_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_END_SR_NO' 
    }
    ,
   pcd_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PSEC_SYS_ID' 
    }
    ,
   pcd_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PRC_SYS_ID' 
    }
    ,
   pcd_prs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PRS_SYS_ID' 
    }
    ,
   pcd_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL1_SYS_ID' 
    }
    ,
   pcd_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL1_SR_NO' 
    }
    ,
   pcd_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL2_SYS_ID' 
    }
    ,
   pcd_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL2_SR_NO' 
    }
    ,
   pcd_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL3_SYS_ID' 
    }
    ,
   pcd_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL3_SR_NO' 
    }
    ,
   pcd_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL4_SYS_ID' 
    }
    ,
   pcd_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL4_SR_NO' 
    }
    ,
   pcd_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL5_SYS_ID' 
    }
    ,
   pcd_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL5_SR_NO' 
    }
    ,
   pcd_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_CODE' 
    }
    ,
   pcd_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PCD_DESC' 
    }
    ,
   pcd_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_TYPE' 
    }
    ,
   pcd_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCD_PERC' 
    }
    ,
   pcd_value_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_FC' 
    }
    ,
   pcd_value_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_1' 
    }
    ,
   pcd_value_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_2' 
    }
    ,
   pcd_value_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_3' 
    }
    ,
   pcd_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCD_REC_TYPE' 
    }
    ,
   pcd_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_CR_UID' 
    }
    ,
   pcd_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCD_CR_DT' 
    }
    ,
   pcd_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_UPD_UID' 
    }
    ,
   pcd_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCD_UPD_DT' 
    }
    ,
   pcd_attach_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_ATTACH_LVL_NO' 
    }
    ,
   pcd_attach_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_ATTACH_SR_NO' 
    }
    ,
   pcd_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_COMP_CODE' 
    }
    ,
   pcd_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DIVN_CODE' 
    }
    ,
   pcd_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DEPT_CODE' 
    }
    ,
   pcd_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DS_TYPE' 
    }
    ,
   pcd_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_PROD_CODE' 
    }
    ,
   pcd_org_value_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_FC' 
    }
    ,
   pcd_org_value_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_1' 
    }
    ,
   pcd_org_value_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_2' 
    }
    ,
   pcd_org_value_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_3' 
    }
    ,
   pcd_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_01' 
    }
    ,
   pcd_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_02' 
    }
    ,
   pcd_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_03' 
    }
    ,
   pcd_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_04' 
    }
    ,
   pcd_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_05' 
    }
    ,
   pcd_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_06' 
    }
    ,
   pcd_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_07' 
    }
    ,
   pcd_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_08' 
    }
    ,
   pcd_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_09' 
    }
    ,
   pcd_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_10' 
    }
    ,
   pcd_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_11' 
    }
    ,
   pcd_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_12' 
    }
    ,
   pcd_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_13' 
    }
    ,
   pcd_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_14' 
    }
    ,
   pcd_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_15' 
    }
    ,
   pcd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCD_SYS_ID' 
    }
    ,
   pcd_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_POL_SYS_ID' 
    }
    ,
   pcd_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_END_NO_IDX' 
    }
    ,
   pcd_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_END_SR_NO' 
    }
    ,
   pcd_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PSEC_SYS_ID' 
    }
    ,
   pcd_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PRC_SYS_ID' 
    }
    ,
   pcd_prs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PRS_SYS_ID' 
    }
    ,
   pcd_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL1_SYS_ID' 
    }
    ,
   pcd_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL1_SR_NO' 
    }
    ,
   pcd_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL2_SYS_ID' 
    }
    ,
   pcd_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL2_SR_NO' 
    }
    ,
   pcd_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL3_SYS_ID' 
    }
    ,
   pcd_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL3_SR_NO' 
    }
    ,
   pcd_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL4_SYS_ID' 
    }
    ,
   pcd_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL4_SR_NO' 
    }
    ,
   pcd_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL5_SYS_ID' 
    }
    ,
   pcd_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL5_SR_NO' 
    }
    ,
   pcd_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_CODE' 
    }
    ,
   pcd_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PCD_DESC' 
    }
    ,
   pcd_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_TYPE' 
    }
    ,
   pcd_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCD_PERC' 
    }
    ,
   pcd_value_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_FC' 
    }
    ,
   pcd_value_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_1' 
    }
    ,
   pcd_value_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_2' 
    }
    ,
   pcd_value_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_3' 
    }
    ,
   pcd_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCD_REC_TYPE' 
    }
    ,
   pcd_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_CR_UID' 
    }
    ,
   pcd_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCD_CR_DT' 
    }
    ,
   pcd_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_UPD_UID' 
    }
    ,
   pcd_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCD_UPD_DT' 
    }
    ,
   pcd_attach_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_ATTACH_LVL_NO' 
    }
    ,
   pcd_attach_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_ATTACH_SR_NO' 
    }
    ,
   pcd_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_COMP_CODE' 
    }
    ,
   pcd_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DIVN_CODE' 
    }
    ,
   pcd_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DEPT_CODE' 
    }
    ,
   pcd_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DS_TYPE' 
    }
    ,
   pcd_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_PROD_CODE' 
    }
    ,
   pcd_org_value_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_FC' 
    }
    ,
   pcd_org_value_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_1' 
    }
    ,
   pcd_org_value_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_2' 
    }
    ,
   pcd_org_value_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_3' 
    }
    ,
   pcd_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_01' 
    }
    ,
   pcd_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_02' 
    }
    ,
   pcd_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_03' 
    }
    ,
   pcd_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_04' 
    }
    ,
   pcd_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_05' 
    }
    ,
   pcd_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_06' 
    }
    ,
   pcd_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_07' 
    }
    ,
   pcd_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_08' 
    }
    ,
   pcd_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_09' 
    }
    ,
   pcd_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_10' 
    }
    ,
   pcd_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_11' 
    }
    ,
   pcd_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_12' 
    }
    ,
   pcd_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_13' 
    }
    ,
   pcd_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_14' 
    }
    ,
   pcd_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_15' 
    }
    ,
   pcd_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_CNCT_SYS_ID' 
    }
    ,
   pcd_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_BRH_SYS_ID' 
    }
    ,
   pcd_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL2_SR_NO' 
    }
    ,
   pcd_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL3_SYS_ID' 
    }
    ,
   pcd_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL3_SR_NO' 
    }
    ,
   pcd_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL4_SYS_ID' 
    }
    ,
   pcd_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL4_SR_NO' 
    }
    ,
   pcd_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL5_SYS_ID' 
    }
    ,
   pcd_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL5_SR_NO' 
    }
    ,
   pcd_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_CODE' 
    }
    ,
   pcd_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PCD_DESC' 
    }
    ,
   pcd_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_TYPE' 
    }
    ,
   pcd_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCD_PERC' 
    }
    ,
   pcd_value_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_FC' 
    }
    ,
   pcd_value_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_1' 
    }
    ,
   pcd_value_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_2' 
    }
    ,
   pcd_value_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_3' 
    }
    ,
   pcd_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCD_REC_TYPE' 
    }
    ,
   pcd_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_CR_UID' 
    }
    ,
   pcd_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCD_CR_DT' 
    }
    ,
   pcd_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_UPD_UID' 
    }
    ,
   pcd_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCD_UPD_DT' 
    }
    ,
   pcd_attach_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_ATTACH_LVL_NO' 
    }
    ,
   pcd_attach_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_ATTACH_SR_NO' 
    }
    ,
   pcd_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_COMP_CODE' 
    }
    ,
   pcd_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DIVN_CODE' 
    }
    ,
   pcd_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DEPT_CODE' 
    }
    ,
   pcd_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DS_TYPE' 
    }
    ,
   pcd_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_PROD_CODE' 
    }
    ,
   pcd_org_value_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_FC' 
    }
    ,
   pcd_org_value_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_1' 
    }
    ,
   pcd_org_value_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_2' 
    }
    ,
   pcd_org_value_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_3' 
    }
    ,
   pcd_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_01' 
    }
    ,
   pcd_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_02' 
    }
    ,
   pcd_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_03' 
    }
    ,
   pcd_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_04' 
    }
    ,
   pcd_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_05' 
    }
    ,
   pcd_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_06' 
    }
    ,
   pcd_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_07' 
    }
    ,
   pcd_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_08' 
    }
    ,
   pcd_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_09' 
    }
    ,
   pcd_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_10' 
    }
    ,
   pcd_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_11' 
    }
    ,
   pcd_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_12' 
    }
    ,
   pcd_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_13' 
    }
    ,
   pcd_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_14' 
    }
    ,
   pcd_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_15' 
    }
    ,
   pcd_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_CNCT_SYS_ID' 
    }
    ,
   pcd_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_BRH_SYS_ID' 
    }
    ,
   pcd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCD_SYS_ID' 
    }
    ,
   pcd_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_POL_SYS_ID' 
    }
    ,
   pcd_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_END_NO_IDX' 
    }
    ,
   pcd_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_END_SR_NO' 
    }
    ,
   pcd_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PSEC_SYS_ID' 
    }
    ,
   pcd_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PRC_SYS_ID' 
    }
    ,
   pcd_prs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PRS_SYS_ID' 
    }
    ,
   pcd_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL1_SYS_ID' 
    }
    ,
   pcd_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL1_SR_NO' 
    }
    ,
   pcd_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL2_SYS_ID' 
    }
    ,
   pcd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCD_SYS_ID' 
    }
    ,
   pcd_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_POL_SYS_ID' 
    }
    ,
   pcd_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_END_NO_IDX' 
    }
    ,
   pcd_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_END_SR_NO' 
    }
    ,
   pcd_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PSEC_SYS_ID' 
    }
    ,
   pcd_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PRC_SYS_ID' 
    }
    ,
   pcd_prs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PRS_SYS_ID' 
    }
    ,
   pcd_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL1_SYS_ID' 
    }
    ,
   pcd_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL1_SR_NO' 
    }
    ,
   pcd_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL2_SYS_ID' 
    }
    ,
   pcd_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL2_SR_NO' 
    }
    ,
   pcd_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL3_SYS_ID' 
    }
    ,
   pcd_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL3_SR_NO' 
    }
    ,
   pcd_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL4_SYS_ID' 
    }
    ,
   pcd_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL4_SR_NO' 
    }
    ,
   pcd_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL5_SYS_ID' 
    }
    ,
   pcd_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL5_SR_NO' 
    }
    ,
   pcd_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_CODE' 
    }
    ,
   pcd_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PCD_DESC' 
    }
    ,
   pcd_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_TYPE' 
    }
    ,
   pcd_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCD_PERC' 
    }
    ,
   pcd_value_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_FC' 
    }
    ,
   pcd_value_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_1' 
    }
    ,
   pcd_value_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_2' 
    }
    ,
   pcd_value_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_3' 
    }
    ,
   pcd_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCD_REC_TYPE' 
    }
    ,
   pcd_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_CR_UID' 
    }
    ,
   pcd_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCD_CR_DT' 
    }
    ,
   pcd_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_UPD_UID' 
    }
    ,
   pcd_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCD_UPD_DT' 
    }
    ,
   pcd_attach_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_ATTACH_LVL_NO' 
    }
    ,
   pcd_attach_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_ATTACH_SR_NO' 
    }
    ,
   pcd_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_COMP_CODE' 
    }
    ,
   pcd_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DIVN_CODE' 
    }
    ,
   pcd_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DEPT_CODE' 
    }
    ,
   pcd_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DS_TYPE' 
    }
    ,
   pcd_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_PROD_CODE' 
    }
    ,
   pcd_org_value_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_FC' 
    }
    ,
   pcd_org_value_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_1' 
    }
    ,
   pcd_org_value_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_2' 
    }
    ,
   pcd_org_value_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_3' 
    }
    ,
   pcd_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_01' 
    }
    ,
   pcd_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_02' 
    }
    ,
   pcd_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_03' 
    }
    ,
   pcd_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_04' 
    }
    ,
   pcd_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_05' 
    }
    ,
   pcd_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_06' 
    }
    ,
   pcd_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_07' 
    }
    ,
   pcd_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_08' 
    }
    ,
   pcd_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_09' 
    }
    ,
   pcd_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_10' 
    }
    ,
   pcd_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_11' 
    }
    ,
   pcd_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_12' 
    }
    ,
   pcd_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_13' 
    }
    ,
   pcd_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_14' 
    }
    ,
   pcd_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_15' 
    }
    ,
   pcd_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_CNCT_SYS_ID' 
    }
    ,
   pcd_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_BRH_SYS_ID' 
    }
    ,
   pcd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCD_SYS_ID' 
    }
    ,
   pcd_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_POL_SYS_ID' 
    }
    ,
   pcd_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_END_NO_IDX' 
    }
    ,
   pcd_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCD_END_SR_NO' 
    }
    ,
   pcd_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PSEC_SYS_ID' 
    }
    ,
   pcd_prc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PRC_SYS_ID' 
    }
    ,
   pcd_prs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_PRS_SYS_ID' 
    }
    ,
   pcd_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL1_SYS_ID' 
    }
    ,
   pcd_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL1_SR_NO' 
    }
    ,
   pcd_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL2_SYS_ID' 
    }
    ,
   pcd_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL2_SR_NO' 
    }
    ,
   pcd_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL3_SYS_ID' 
    }
    ,
   pcd_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL3_SR_NO' 
    }
    ,
   pcd_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL4_SYS_ID' 
    }
    ,
   pcd_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL4_SR_NO' 
    }
    ,
   pcd_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL5_SYS_ID' 
    }
    ,
   pcd_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_LVL5_SR_NO' 
    }
    ,
   pcd_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_CODE' 
    }
    ,
   pcd_desc: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PCD_DESC' 
    }
    ,
   pcd_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_TYPE' 
    }
    ,
   pcd_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCD_PERC' 
    }
    ,
   pcd_value_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_FC' 
    }
    ,
   pcd_value_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_1' 
    }
    ,
   pcd_value_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_2' 
    }
    ,
   pcd_value_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_VALUE_LC_3' 
    }
    ,
   pcd_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCD_REC_TYPE' 
    }
    ,
   pcd_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCD_CR_UID' 
    }
    ,
   pcd_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCD_CR_DT' 
    }
    ,
   pcd_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_UPD_UID' 
    }
    ,
   pcd_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCD_UPD_DT' 
    }
    ,
   pcd_attach_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_ATTACH_LVL_NO' 
    }
    ,
   pcd_attach_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_ATTACH_SR_NO' 
    }
    ,
   pcd_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_COMP_CODE' 
    }
    ,
   pcd_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DIVN_CODE' 
    }
    ,
   pcd_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DEPT_CODE' 
    }
    ,
   pcd_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_DS_TYPE' 
    }
    ,
   pcd_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCD_PROD_CODE' 
    }
    ,
   pcd_org_value_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_FC' 
    }
    ,
   pcd_org_value_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_1' 
    }
    ,
   pcd_org_value_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_2' 
    }
    ,
   pcd_org_value_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCD_ORG_VALUE_LC_3' 
    }
    ,
   pcd_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_01' 
    }
    ,
   pcd_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_02' 
    }
    ,
   pcd_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_03' 
    }
    ,
   pcd_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_04' 
    }
    ,
   pcd_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_05' 
    }
    ,
   pcd_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_06' 
    }
    ,
   pcd_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_07' 
    }
    ,
   pcd_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_08' 
    }
    ,
   pcd_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_09' 
    }
    ,
   pcd_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_10' 
    }
    ,
   pcd_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_11' 
    }
    ,
   pcd_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_12' 
    }
    ,
   pcd_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_13' 
    }
    ,
   pcd_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_14' 
    }
    ,
   pcd_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCD_FLEX_15' 
    }
    ,
   pcd_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_CNCT_SYS_ID' 
    }
    ,
   pcd_brh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCD_BRH_SYS_ID' 
    }
    
    }, {
        tableName: 'PGIT_POL_DEDUCTIBLE',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITPOLDEDUCTIBLE;
};