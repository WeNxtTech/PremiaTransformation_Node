module.exports = (sequelize, DataTypes) => {
  const PgitPolApplCurr = sequelize.define('PgitPolApplCurr', {
       pac_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PAC_SYS_ID' 
    }
    ,
   pac_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_POL_SYS_ID' 
    }
    ,
   pac_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_END_NO_IDX' 
    }
    ,
   pac_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_END_SR_NO' 
    }
    ,
   pac_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CURR_CODE' 
    }
    ,
   pac_curr_rate_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_TYPE' 
    }
    ,
   pac_curr_rate_1: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_1' 
    }
    ,
   pac_curr_rate_2: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_2' 
    }
    ,
   pac_curr_rate_3: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_3' 
    }
    ,
   pac_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PAC_REC_TYPE' 
    }
    ,
   pac_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CR_UID' 
    }
    ,
   pac_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PAC_CR_DT' 
    }
    ,
   pac_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_UPD_UID' 
    }
    ,
   pac_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PAC_UPD_DT' 
    }
    ,
   pac_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_COMP_CODE' 
    }
    ,
   pac_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DIVN_CODE' 
    }
    ,
   pac_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DEPT_CODE' 
    }
    ,
   pac_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DS_TYPE' 
    }
    ,
   pac_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_PROD_CODE' 
    }
    ,
   pac_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_06' 
    }
    ,
   pac_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_07' 
    }
    ,
   pac_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_08' 
    }
    ,
   pac_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_09' 
    }
    ,
   pac_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_10' 
    }
    ,
   pac_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_11' 
    }
    ,
   pac_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_12' 
    }
    ,
   pac_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_13' 
    }
    ,
   pac_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_14' 
    }
    ,
   pac_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_15' 
    }
    ,
   pac_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_01' 
    }
    ,
   pac_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_02' 
    }
    ,
   pac_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_03' 
    }
    ,
   pac_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_04' 
    }
    ,
   pac_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_05' 
    }
    ,
   pac_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PAC_CNCT_SYS_ID' 
    }
    ,
   pac_curr_rate_3: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_3' 
    }
    ,
   pac_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PAC_REC_TYPE' 
    }
    ,
   pac_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CR_UID' 
    }
    ,
   pac_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PAC_CR_DT' 
    }
    ,
   pac_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_UPD_UID' 
    }
    ,
   pac_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PAC_UPD_DT' 
    }
    ,
   pac_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_COMP_CODE' 
    }
    ,
   pac_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DIVN_CODE' 
    }
    ,
   pac_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DEPT_CODE' 
    }
    ,
   pac_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DS_TYPE' 
    }
    ,
   pac_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_PROD_CODE' 
    }
    ,
   pac_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_06' 
    }
    ,
   pac_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_07' 
    }
    ,
   pac_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_08' 
    }
    ,
   pac_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_09' 
    }
    ,
   pac_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_10' 
    }
    ,
   pac_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_11' 
    }
    ,
   pac_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_12' 
    }
    ,
   pac_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_13' 
    }
    ,
   pac_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_14' 
    }
    ,
   pac_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_15' 
    }
    ,
   pac_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_01' 
    }
    ,
   pac_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_02' 
    }
    ,
   pac_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_03' 
    }
    ,
   pac_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_04' 
    }
    ,
   pac_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_05' 
    }
    ,
   pac_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PAC_CNCT_SYS_ID' 
    }
    ,
   pac_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PAC_SYS_ID' 
    }
    ,
   pac_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_POL_SYS_ID' 
    }
    ,
   pac_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_END_NO_IDX' 
    }
    ,
   pac_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_END_SR_NO' 
    }
    ,
   pac_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CURR_CODE' 
    }
    ,
   pac_curr_rate_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_TYPE' 
    }
    ,
   pac_curr_rate_1: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_1' 
    }
    ,
   pac_curr_rate_2: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_2' 
    }
    ,
   pac_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_10' 
    }
    ,
   pac_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_11' 
    }
    ,
   pac_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_12' 
    }
    ,
   pac_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_13' 
    }
    ,
   pac_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_14' 
    }
    ,
   pac_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_15' 
    }
    ,
   pac_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_01' 
    }
    ,
   pac_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_02' 
    }
    ,
   pac_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_03' 
    }
    ,
   pac_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_04' 
    }
    ,
   pac_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_05' 
    }
    ,
   pac_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PAC_CNCT_SYS_ID' 
    }
    ,
   pac_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PAC_SYS_ID' 
    }
    ,
   pac_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_POL_SYS_ID' 
    }
    ,
   pac_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_END_NO_IDX' 
    }
    ,
   pac_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_END_SR_NO' 
    }
    ,
   pac_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CURR_CODE' 
    }
    ,
   pac_curr_rate_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_TYPE' 
    }
    ,
   pac_curr_rate_1: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_1' 
    }
    ,
   pac_curr_rate_2: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_2' 
    }
    ,
   pac_curr_rate_3: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_3' 
    }
    ,
   pac_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PAC_REC_TYPE' 
    }
    ,
   pac_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CR_UID' 
    }
    ,
   pac_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PAC_CR_DT' 
    }
    ,
   pac_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_UPD_UID' 
    }
    ,
   pac_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PAC_UPD_DT' 
    }
    ,
   pac_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_COMP_CODE' 
    }
    ,
   pac_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DIVN_CODE' 
    }
    ,
   pac_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DEPT_CODE' 
    }
    ,
   pac_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DS_TYPE' 
    }
    ,
   pac_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_PROD_CODE' 
    }
    ,
   pac_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_06' 
    }
    ,
   pac_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_07' 
    }
    ,
   pac_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_08' 
    }
    ,
   pac_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_09' 
    }
    ,
   pac_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PAC_SYS_ID' 
    }
    ,
   pac_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_POL_SYS_ID' 
    }
    ,
   pac_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_END_NO_IDX' 
    }
    ,
   pac_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_END_SR_NO' 
    }
    ,
   pac_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CURR_CODE' 
    }
    ,
   pac_curr_rate_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_TYPE' 
    }
    ,
   pac_curr_rate_1: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_1' 
    }
    ,
   pac_curr_rate_2: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_2' 
    }
    ,
   pac_curr_rate_3: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_3' 
    }
    ,
   pac_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PAC_REC_TYPE' 
    }
    ,
   pac_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CR_UID' 
    }
    ,
   pac_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PAC_CR_DT' 
    }
    ,
   pac_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_UPD_UID' 
    }
    ,
   pac_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PAC_UPD_DT' 
    }
    ,
   pac_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_COMP_CODE' 
    }
    ,
   pac_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DIVN_CODE' 
    }
    ,
   pac_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DEPT_CODE' 
    }
    ,
   pac_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DS_TYPE' 
    }
    ,
   pac_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_PROD_CODE' 
    }
    ,
   pac_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_06' 
    }
    ,
   pac_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_07' 
    }
    ,
   pac_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_08' 
    }
    ,
   pac_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_09' 
    }
    ,
   pac_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_10' 
    }
    ,
   pac_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_11' 
    }
    ,
   pac_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_12' 
    }
    ,
   pac_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_13' 
    }
    ,
   pac_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_14' 
    }
    ,
   pac_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_15' 
    }
    ,
   pac_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_01' 
    }
    ,
   pac_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_02' 
    }
    ,
   pac_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_03' 
    }
    ,
   pac_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_04' 
    }
    ,
   pac_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_05' 
    }
    ,
   pac_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PAC_CNCT_SYS_ID' 
    }
    ,
   pac_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PAC_SYS_ID' 
    }
    ,
   pac_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_POL_SYS_ID' 
    }
    ,
   pac_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_END_NO_IDX' 
    }
    ,
   pac_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PAC_END_SR_NO' 
    }
    ,
   pac_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CURR_CODE' 
    }
    ,
   pac_curr_rate_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_TYPE' 
    }
    ,
   pac_curr_rate_1: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_1' 
    }
    ,
   pac_curr_rate_2: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_2' 
    }
    ,
   pac_curr_rate_3: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PAC_CURR_RATE_3' 
    }
    ,
   pac_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PAC_REC_TYPE' 
    }
    ,
   pac_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PAC_CR_UID' 
    }
    ,
   pac_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PAC_CR_DT' 
    }
    ,
   pac_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_UPD_UID' 
    }
    ,
   pac_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PAC_UPD_DT' 
    }
    ,
   pac_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_COMP_CODE' 
    }
    ,
   pac_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DIVN_CODE' 
    }
    ,
   pac_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DEPT_CODE' 
    }
    ,
   pac_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_DS_TYPE' 
    }
    ,
   pac_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PAC_PROD_CODE' 
    }
    ,
   pac_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_06' 
    }
    ,
   pac_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_07' 
    }
    ,
   pac_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_08' 
    }
    ,
   pac_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_09' 
    }
    ,
   pac_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_10' 
    }
    ,
   pac_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_11' 
    }
    ,
   pac_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_12' 
    }
    ,
   pac_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_13' 
    }
    ,
   pac_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_14' 
    }
    ,
   pac_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_15' 
    }
    ,
   pac_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_01' 
    }
    ,
   pac_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_02' 
    }
    ,
   pac_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_03' 
    }
    ,
   pac_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_04' 
    }
    ,
   pac_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PAC_FLEX_05' 
    }
    ,
   pac_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PAC_CNCT_SYS_ID' 
    }
    
    }, {
        tableName: 'PGIT_POL_APPL_CURR',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitPolApplCurr;
};