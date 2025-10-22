module.exports = (sequelize, DataTypes) => {
  const PgitPolSection = sequelize.define('PgitPolSection', {
       psec_class_code: { 
      type: DataTypes.STRING(20), 
      allowNull: true, 
      
      field: 'PSEC_CLASS_CODE' 
    }
    ,
   psec_cn_no: { 
      type: DataTypes.STRING(20), 
      allowNull: true, 
      
      field: 'PSEC_CN_NO' 
    }
    ,
   psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PSEC_SYS_ID' 
    }
    ,
   psec_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_POL_SYS_ID' 
    }
    ,
   psec_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_END_NO_IDX' 
    }
    ,
   psec_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_END_SR_NO' 
    }
    ,
   psec_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSEC_SEC_CODE' 
    }
    ,
   psec_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSEC_MAND_YN' 
    }
    ,
   psec_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PSEC_REC_TYPE' 
    }
    ,
   psec_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_EFF_FM_DT' 
    }
    ,
   psec_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_EFF_TO_DT' 
    }
    ,
   psec_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSEC_CR_UID' 
    }
    ,
   psec_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PSEC_CR_DT' 
    }
    ,
   psec_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_UPD_UID' 
    }
    ,
   psec_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_UPD_DT' 
    }
    ,
   psec_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_01' 
    }
    ,
   psec_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_02' 
    }
    ,
   psec_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_03' 
    }
    ,
   psec_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_04' 
    }
    ,
   psec_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_05' 
    }
    ,
   psec_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_COMP_CODE' 
    }
    ,
   psec_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DIVN_CODE' 
    }
    ,
   psec_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DEPT_CODE' 
    }
    ,
   psec_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DS_TYPE' 
    }
    ,
   psec_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_PROD_CODE' 
    }
    ,
   psec_srno: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_SRNO' 
    }
    ,
   psec_cover_smi_relation_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSEC_COVER_SMI_RELATION_YN' 
    }
    ,
   psec_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_06' 
    }
    ,
   psec_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_07' 
    }
    ,
   psec_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_08' 
    }
    ,
   psec_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_09' 
    }
    ,
   psec_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_10' 
    }
    ,
   psec_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_11' 
    }
    ,
   psec_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_12' 
    }
    ,
   psec_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_13' 
    }
    ,
   psec_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_14' 
    }
    ,
   psec_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_15' 
    }
    ,
   psec_op_min_prem_lc_1: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_OP_MIN_PREM_LC_1' 
    }
    ,
   psec_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_CNCT_SYS_ID' 
    }
    ,
   psec_ra_group_id: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PSEC_RA_GROUP_ID' 
    }
    ,
   psec_class_code: { 
      type: DataTypes.STRING(20), 
      allowNull: true, 
      
      field: 'PSEC_CLASS_CODE' 
    }
    ,
   psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PSEC_SYS_ID' 
    }
    ,
   psec_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_POL_SYS_ID' 
    }
    ,
   psec_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_END_NO_IDX' 
    }
    ,
   psec_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_END_SR_NO' 
    }
    ,
   psec_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSEC_SEC_CODE' 
    }
    ,
   psec_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSEC_MAND_YN' 
    }
    ,
   psec_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PSEC_REC_TYPE' 
    }
    ,
   psec_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_EFF_FM_DT' 
    }
    ,
   psec_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_EFF_TO_DT' 
    }
    ,
   psec_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSEC_CR_UID' 
    }
    ,
   psec_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PSEC_CR_DT' 
    }
    ,
   psec_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_UPD_UID' 
    }
    ,
   psec_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_UPD_DT' 
    }
    ,
   psec_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_01' 
    }
    ,
   psec_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_02' 
    }
    ,
   psec_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_03' 
    }
    ,
   psec_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_04' 
    }
    ,
   psec_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_05' 
    }
    ,
   psec_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_COMP_CODE' 
    }
    ,
   psec_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DIVN_CODE' 
    }
    ,
   psec_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DEPT_CODE' 
    }
    ,
   psec_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DS_TYPE' 
    }
    ,
   psec_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_PROD_CODE' 
    }
    ,
   psec_srno: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_SRNO' 
    }
    ,
   psec_cover_smi_relation_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSEC_COVER_SMI_RELATION_YN' 
    }
    ,
   psec_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_06' 
    }
    ,
   psec_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_07' 
    }
    ,
   psec_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_08' 
    }
    ,
   psec_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_09' 
    }
    ,
   psec_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_10' 
    }
    ,
   psec_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_11' 
    }
    ,
   psec_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_12' 
    }
    ,
   psec_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_13' 
    }
    ,
   psec_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_14' 
    }
    ,
   psec_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_15' 
    }
    ,
   psec_op_min_prem_lc_1: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_OP_MIN_PREM_LC_1' 
    }
    ,
   psec_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_CNCT_SYS_ID' 
    }
    ,
   psec_ra_group_id: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PSEC_RA_GROUP_ID' 
    }
    ,
   psec_class_code: { 
      type: DataTypes.STRING(20), 
      allowNull: true, 
      
      field: 'PSEC_CLASS_CODE' 
    }
    ,
   psec_cover_smi_relation_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSEC_COVER_SMI_RELATION_YN' 
    }
    ,
   psec_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_06' 
    }
    ,
   psec_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_07' 
    }
    ,
   psec_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_08' 
    }
    ,
   psec_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_09' 
    }
    ,
   psec_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_10' 
    }
    ,
   psec_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_11' 
    }
    ,
   psec_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_12' 
    }
    ,
   psec_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_13' 
    }
    ,
   psec_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_14' 
    }
    ,
   psec_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_15' 
    }
    ,
   psec_op_min_prem_lc_1: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_OP_MIN_PREM_LC_1' 
    }
    ,
   psec_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_CNCT_SYS_ID' 
    }
    ,
   psec_ra_group_id: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PSEC_RA_GROUP_ID' 
    }
    ,
   psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PSEC_SYS_ID' 
    }
    ,
   psec_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_POL_SYS_ID' 
    }
    ,
   psec_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_END_NO_IDX' 
    }
    ,
   psec_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_END_SR_NO' 
    }
    ,
   psec_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSEC_SEC_CODE' 
    }
    ,
   psec_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSEC_MAND_YN' 
    }
    ,
   psec_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PSEC_REC_TYPE' 
    }
    ,
   psec_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_EFF_FM_DT' 
    }
    ,
   psec_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_EFF_TO_DT' 
    }
    ,
   psec_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSEC_CR_UID' 
    }
    ,
   psec_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PSEC_CR_DT' 
    }
    ,
   psec_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_UPD_UID' 
    }
    ,
   psec_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_UPD_DT' 
    }
    ,
   psec_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_01' 
    }
    ,
   psec_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_02' 
    }
    ,
   psec_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_03' 
    }
    ,
   psec_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_04' 
    }
    ,
   psec_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_05' 
    }
    ,
   psec_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_COMP_CODE' 
    }
    ,
   psec_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DIVN_CODE' 
    }
    ,
   psec_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DEPT_CODE' 
    }
    ,
   psec_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DS_TYPE' 
    }
    ,
   psec_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_PROD_CODE' 
    }
    ,
   psec_srno: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_SRNO' 
    }
    ,
   psec_class_code: { 
      type: DataTypes.STRING(20), 
      allowNull: true, 
      
      field: 'PSEC_CLASS_CODE' 
    }
    ,
   psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PSEC_SYS_ID' 
    }
    ,
   psec_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_POL_SYS_ID' 
    }
    ,
   psec_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_END_NO_IDX' 
    }
    ,
   psec_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_END_SR_NO' 
    }
    ,
   psec_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSEC_SEC_CODE' 
    }
    ,
   psec_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSEC_MAND_YN' 
    }
    ,
   psec_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PSEC_REC_TYPE' 
    }
    ,
   psec_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_EFF_FM_DT' 
    }
    ,
   psec_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_EFF_TO_DT' 
    }
    ,
   psec_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSEC_CR_UID' 
    }
    ,
   psec_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PSEC_CR_DT' 
    }
    ,
   psec_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_UPD_UID' 
    }
    ,
   psec_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_UPD_DT' 
    }
    ,
   psec_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_01' 
    }
    ,
   psec_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_02' 
    }
    ,
   psec_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_03' 
    }
    ,
   psec_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_04' 
    }
    ,
   psec_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_05' 
    }
    ,
   psec_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_COMP_CODE' 
    }
    ,
   psec_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DIVN_CODE' 
    }
    ,
   psec_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DEPT_CODE' 
    }
    ,
   psec_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DS_TYPE' 
    }
    ,
   psec_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_PROD_CODE' 
    }
    ,
   psec_srno: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_SRNO' 
    }
    ,
   psec_cover_smi_relation_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSEC_COVER_SMI_RELATION_YN' 
    }
    ,
   psec_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_06' 
    }
    ,
   psec_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_07' 
    }
    ,
   psec_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_08' 
    }
    ,
   psec_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_09' 
    }
    ,
   psec_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_10' 
    }
    ,
   psec_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_11' 
    }
    ,
   psec_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_12' 
    }
    ,
   psec_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_13' 
    }
    ,
   psec_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_14' 
    }
    ,
   psec_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_15' 
    }
    ,
   psec_op_min_prem_lc_1: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_OP_MIN_PREM_LC_1' 
    }
    ,
   psec_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_CNCT_SYS_ID' 
    }
    ,
   psec_ra_group_id: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PSEC_RA_GROUP_ID' 
    }
    ,
   psec_class_code: { 
      type: DataTypes.STRING(20), 
      allowNull: true, 
      
      field: 'PSEC_CLASS_CODE' 
    }
    ,
   psec_cn_no: { 
      type: DataTypes.STRING(20), 
      allowNull: true, 
      
      field: 'PSEC_CN_NO' 
    }
    ,
   psec_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_PROD_CODE' 
    }
    ,
   psec_srno: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_SRNO' 
    }
    ,
   psec_cover_smi_relation_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSEC_COVER_SMI_RELATION_YN' 
    }
    ,
   psec_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_06' 
    }
    ,
   psec_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_07' 
    }
    ,
   psec_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_08' 
    }
    ,
   psec_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_09' 
    }
    ,
   psec_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_10' 
    }
    ,
   psec_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_11' 
    }
    ,
   psec_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_12' 
    }
    ,
   psec_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_13' 
    }
    ,
   psec_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_14' 
    }
    ,
   psec_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_15' 
    }
    ,
   psec_op_min_prem_lc_1: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_OP_MIN_PREM_LC_1' 
    }
    ,
   psec_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_CNCT_SYS_ID' 
    }
    ,
   psec_ra_group_id: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PSEC_RA_GROUP_ID' 
    }
    ,
   psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PSEC_SYS_ID' 
    }
    ,
   psec_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_POL_SYS_ID' 
    }
    ,
   psec_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_END_NO_IDX' 
    }
    ,
   psec_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_END_SR_NO' 
    }
    ,
   psec_sec_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSEC_SEC_CODE' 
    }
    ,
   psec_mand_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSEC_MAND_YN' 
    }
    ,
   psec_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PSEC_REC_TYPE' 
    }
    ,
   psec_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_EFF_FM_DT' 
    }
    ,
   psec_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_EFF_TO_DT' 
    }
    ,
   psec_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSEC_CR_UID' 
    }
    ,
   psec_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PSEC_CR_DT' 
    }
    ,
   psec_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_UPD_UID' 
    }
    ,
   psec_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_UPD_DT' 
    }
    ,
   psec_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_01' 
    }
    ,
   psec_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_02' 
    }
    ,
   psec_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_03' 
    }
    ,
   psec_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_04' 
    }
    ,
   psec_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_05' 
    }
    ,
   psec_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_COMP_CODE' 
    }
    ,
   psec_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DIVN_CODE' 
    }
    ,
   psec_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DEPT_CODE' 
    }
    ,
   psec_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DS_TYPE' 
    }
    
    }, {
        tableName: 'PGIT_POL_SECTION',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitPolSection;
};