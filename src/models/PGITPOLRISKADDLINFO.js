module.exports = (sequelize, DataTypes) => {
  const PGITPOLRISKADDLINFO = sequelize.define('PGITPOLRISKADDLINFO', {
       prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRAI_SYS_ID' 
    }
    ,
   prai_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_POL_SYS_ID' 
    }
    ,
   prai_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_END_NO_IDX' 
    }
    ,
   prai_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_END_SR_NO' 
    }
    ,
   prai_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_PSEC_SYS_ID' 
    }
    ,
   prai_risk_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_RISK_LVL_NO' 
    }
    ,
   prai_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL1_SYS_ID' 
    }
    ,
   prai_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL1_SR_NO' 
    }
    ,
   prai_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL2_SYS_ID' 
    }
    ,
   prai_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL2_SR_NO' 
    }
    ,
   prai_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL3_SYS_ID' 
    }
    ,
   prai_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL3_SR_NO' 
    }
    ,
   prai_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL4_SYS_ID' 
    }
    ,
   prai_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL4_SR_NO' 
    }
    ,
   prai_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL5_SYS_ID' 
    }
    ,
   prai_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL5_SR_NO' 
    }
    ,
   prai_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_SI_CURR_CODE' 
    }
    ,
   prai_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PREM_CURR_CODE' 
    }
    ,
   prai_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_FC' 
    }
    ,
   prai_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_1' 
    }
    ,
   prai_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_2' 
    }
    ,
   prai_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_3' 
    }
    ,
   prai_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_FC' 
    }
    ,
   prai_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_1' 
    }
    ,
   prai_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_2' 
    }
    ,
   prai_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_3' 
    }
    ,
   prai_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_FC' 
    }
    ,
   prai_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_1' 
    }
    ,
   prai_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_2' 
    }
    ,
   prai_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_3' 
    }
    ,
   prai_org_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_FC' 
    }
    ,
   prai_org_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_1' 
    }
    ,
   prai_org_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_2' 
    }
    ,
   prai_org_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_3' 
    }
    ,
   prai_cum_bonus_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_PERC' 
    }
    ,
   prai_cum_bonus_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_FC' 
    }
    ,
   prai_cum_bonus_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_1' 
    }
    ,
   prai_cum_bonus_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_2' 
    }
    ,
   prai_cum_bonus_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_3' 
    }
    ,
   prai_silent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_SILENT_YN' 
    }
    ,
   prai_silent_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_SILENT_FM_DT' 
    }
    ,
   prai_silent_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_SILENT_TO_DT' 
    }
    ,
   prai_service_tax_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_SERVICE_TAX_YN' 
    }
    ,
   prai_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRAI_REC_TYPE' 
    }
    ,
   prai_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_EFF_FM_DT' 
    }
    ,
   prai_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_EFF_TO_DT' 
    }
    ,
   prai_end_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_END_EFF_FM_DT' 
    }
    ,
   prai_code_01: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_01' 
    }
    ,
   prai_code_02: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_02' 
    }
    ,
   prai_code_03: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_03' 
    }
    ,
   prai_code_04: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_04' 
    }
    ,
   prai_code_05: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_05' 
    }
    ,
   prai_code_06: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_06' 
    }
    ,
   prai_code_07: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_07' 
    }
    ,
   prai_code_08: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_08' 
    }
    ,
   prai_code_09: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_09' 
    }
    ,
   prai_code_10: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_10' 
    }
    ,
   prai_code_11: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_11' 
    }
    ,
   prai_code_12: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_12' 
    }
    ,
   prai_code_13: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_13' 
    }
    ,
   prai_code_14: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_14' 
    }
    ,
   prai_code_15: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_15' 
    }
    ,
   prai_code_16: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_16' 
    }
    ,
   prai_code_17: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_17' 
    }
    ,
   prai_code_18: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_18' 
    }
    ,
   prai_code_19: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_19' 
    }
    ,
   prai_code_20: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_20' 
    }
    ,
   prai_yn_01: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_01' 
    }
    ,
   prai_yn_02: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_02' 
    }
    ,
   prai_yn_03: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_03' 
    }
    ,
   prai_yn_04: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_04' 
    }
    ,
   prai_yn_05: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_05' 
    }
    ,
   prai_yn_06: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_06' 
    }
    ,
   prai_yn_07: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_07' 
    }
    ,
   prai_yn_08: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_08' 
    }
    ,
   prai_yn_09: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_09' 
    }
    ,
   prai_yn_10: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_10' 
    }
    ,
   prai_date_01: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_01' 
    }
    ,
   prai_date_02: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_02' 
    }
    ,
   prai_date_03: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_03' 
    }
    ,
   prai_date_04: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_04' 
    }
    ,
   prai_date_05: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_05' 
    }
    ,
   prai_date_06: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_06' 
    }
    ,
   prai_date_07: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_07' 
    }
    ,
   prai_date_08: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_08' 
    }
    ,
   prai_date_09: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_09' 
    }
    ,
   prai_date_10: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_10' 
    }
    ,
   prai_num_01: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_01' 
    }
    ,
   prai_num_02: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_02' 
    }
    ,
   prai_num_03: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_03' 
    }
    ,
   prai_num_04: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_04' 
    }
    ,
   prai_num_05: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_05' 
    }
    ,
   prai_data_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_01' 
    }
    ,
   prai_data_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_02' 
    }
    ,
   prai_data_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_03' 
    }
    ,
   prai_data_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_04' 
    }
    ,
   prai_data_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_05' 
    }
    ,
   prai_data_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_06' 
    }
    ,
   prai_data_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_07' 
    }
    ,
   prai_data_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_08' 
    }
    ,
   prai_data_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_09' 
    }
    ,
   prai_data_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_10' 
    }
    ,
   prai_data_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_11' 
    }
    ,
   prai_data_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_12' 
    }
    ,
   prai_data_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_13' 
    }
    ,
   prai_data_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_14' 
    }
    ,
   prai_data_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_15' 
    }
    ,
   prai_data_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_16' 
    }
    ,
   prai_data_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_17' 
    }
    ,
   prai_data_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_18' 
    }
    ,
   prai_data_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_19' 
    }
    ,
   prai_data_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_20' 
    }
    ,
   prai_remarks_01: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_01' 
    }
    ,
   prai_remarks_02: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_02' 
    }
    ,
   prai_remarks_03: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_03' 
    }
    ,
   prai_remarks_04: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_04' 
    }
    ,
   prai_remarks_05: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_05' 
    }
    ,
   prai_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRAI_CR_UID' 
    }
    ,
   prai_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRAI_CR_DT' 
    }
    ,
   prai_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_UPD_UID' 
    }
    ,
   prai_risk_id: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_RISK_ID' 
    }
    ,
   prai_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PERIOD_UNIT' 
    }
    ,
   prai_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_UPD_DT' 
    }
    ,
   prai_pml_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_FC' 
    }
    ,
   prai_pml_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_1' 
    }
    ,
   prai_pml_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_2' 
    }
    ,
   prai_pml_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_3' 
    }
    ,
   prai_pml_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_PML_PERC' 
    }
    ,
   prai_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_FC' 
    }
    ,
   prai_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_1' 
    }
    ,
   prai_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_2' 
    }
    ,
   prai_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_3' 
    }
    ,
   prai_org_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_FC' 
    }
    ,
   prai_org_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   prai_org_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   prai_org_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   prai_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_FC' 
    }
    ,
   prai_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_1' 
    }
    ,
   prai_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_2' 
    }
    ,
   prai_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_3' 
    }
    ,
   prai_org_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_FC' 
    }
    ,
   prai_org_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   prai_org_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   prai_org_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   prai_risk_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_RISK_SR_NO' 
    }
    ,
   prai_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COMP_CODE' 
    }
    ,
   prai_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DIVN_CODE' 
    }
    ,
   prai_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DEPT_CODE' 
    }
    ,
   prai_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DS_TYPE' 
    }
    ,
   prai_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PROD_CODE' 
    }
    ,
   prai_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_PERIOD' 
    }
    ,
   prai_pi_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_PI_SYS_ID' 
    }
    ,
   prai_num_06: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_06' 
    }
    ,
   prai_num_07: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_07' 
    }
    ,
   prai_num_08: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_08' 
    }
    ,
   prai_num_09: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_09' 
    }
    ,
   prai_num_10: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_10' 
    }
    ,
   prai_num_11: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_11' 
    }
    ,
   prai_num_12: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_12' 
    }
    ,
   prai_num_13: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_13' 
    }
    ,
   prai_num_14: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_14' 
    }
    ,
   prai_num_15: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_15' 
    }
    ,
   prai_num_16: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_16' 
    }
    ,
   prai_num_17: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_17' 
    }
    ,
   prai_num_18: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_18' 
    }
    ,
   prai_num_19: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_19' 
    }
    ,
   prai_num_20: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_20' 
    }
    ,
   prai_num_21: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_21' 
    }
    ,
   prai_num_22: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_22' 
    }
    ,
   prai_num_23: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_23' 
    }
    ,
   prai_num_24: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_24' 
    }
    ,
   prai_num_25: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_25' 
    }
    ,
   prai_yn_11: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_11' 
    }
    ,
   prai_yn_12: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_12' 
    }
    ,
   prai_yn_13: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_13' 
    }
    ,
   prai_yn_14: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_14' 
    }
    ,
   prai_yn_15: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_15' 
    }
    ,
   prai_yn_16: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_16' 
    }
    ,
   prai_yn_17: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_17' 
    }
    ,
   prai_yn_18: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_18' 
    }
    ,
   prai_yn_19: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_19' 
    }
    ,
   prai_yn_20: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_20' 
    }
    ,
   prai_yn_21: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_21' 
    }
    ,
   prai_yn_22: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_22' 
    }
    ,
   prai_yn_23: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_23' 
    }
    ,
   prai_yn_24: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_24' 
    }
    ,
   prai_yn_25: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_25' 
    }
    ,
   prai_data_21: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_21' 
    }
    ,
   prai_data_22: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_22' 
    }
    ,
   prai_data_23: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_23' 
    }
    ,
   prai_data_24: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_24' 
    }
    ,
   prai_data_25: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_25' 
    }
    ,
   prai_data_26: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_26' 
    }
    ,
   prai_data_27: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_27' 
    }
    ,
   prai_data_28: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_28' 
    }
    ,
   prai_data_29: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_29' 
    }
    ,
   prai_data_30: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_30' 
    }
    ,
   prai_data_31: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_31' 
    }
    ,
   prai_data_32: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_32' 
    }
    ,
   prai_data_33: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_33' 
    }
    ,
   prai_data_34: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_34' 
    }
    ,
   prai_data_35: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_35' 
    }
    ,
   prai_data_36: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_36' 
    }
    ,
   prai_data_37: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_37' 
    }
    ,
   prai_data_38: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_38' 
    }
    ,
   prai_data_39: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_39' 
    }
    ,
   prai_data_40: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_40' 
    }
    ,
   prai_code_21: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_21' 
    }
    ,
   prai_code_22: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_22' 
    }
    ,
   prai_code_23: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_23' 
    }
    ,
   prai_code_24: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_24' 
    }
    ,
   prai_code_25: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_25' 
    }
    ,
   prai_date_11: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_11' 
    }
    ,
   prai_date_12: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_12' 
    }
    ,
   prai_date_13: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_13' 
    }
    ,
   prai_date_14: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_14' 
    }
    ,
   prai_date_15: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_15' 
    }
    ,
   prai_date_16: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_16' 
    }
    ,
   prai_date_17: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_17' 
    }
    ,
   prai_date_18: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_18' 
    }
    ,
   prai_date_19: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_19' 
    }
    ,
   prai_date_20: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_20' 
    }
    ,
   prai_remarks_06: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_06' 
    }
    ,
   prai_remarks_07: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_07' 
    }
    ,
   prai_remarks_08: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_08' 
    }
    ,
   prai_remarks_09: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_09' 
    }
    ,
   prai_remarks_10: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_10' 
    }
    ,
   prai_org_cum_bonus_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_FC' 
    }
    ,
   prai_org_cum_bonus_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_1' 
    }
    ,
   prai_org_cum_bonus_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_2' 
    }
    ,
   prai_org_cum_bonus_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_3' 
    }
    ,
   prai_ren_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_REN_PRAI_SYS_ID' 
    }
    ,
   prai_risk_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_RISK_CLASS_CODE' 
    }
    ,
   prai_clm_total_loss_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_CLM_TOTAL_LOSS_YN' 
    }
    ,
   prai_org_pml_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_FC' 
    }
    ,
   prai_org_pml_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_1' 
    }
    ,
   prai_org_pml_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_2' 
    }
    ,
   prai_org_pml_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_3' 
    }
    ,
   prai_org_pml_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_PERC' 
    }
    ,
   prai_ren_sr_no: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_REN_SR_NO' 
    }
    ,
   prai_tpa_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_TPA_CODE' 
    }
    ,
   prai_pol_classification: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_POL_CLASSIFICATION' 
    }
    ,
   prai_country_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COUNTRY_CODE' 
    }
    ,
   prai_location_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_LOCATION_CODE' 
    }
    ,
   prai_no_ren_clm: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_NO_REN_CLM' 
    }
    ,
   prai_annual_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_FC' 
    }
    ,
   prai_annual_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_1' 
    }
    ,
   prai_annual_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_2' 
    }
    ,
   prai_annual_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_3' 
    }
    ,
   prai_code_26: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_26' 
    }
    ,
   prai_code_27: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_27' 
    }
    ,
   prai_code_28: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_28' 
    }
    ,
   prai_code_29: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_29' 
    }
    ,
   prai_code_30: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_30' 
    }
    ,
   prai_ncb_yrs: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_NCB_YRS' 
    }
    ,
   prai_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_CNCT_SYS_ID' 
    }
    ,
   prai_ra_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_RA_APPL_YN' 
    }
    ,
   prai_risk_ref_no: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PRAI_RISK_REF_NO' 
    }
    ,
   prai_idv_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_FC' 
    }
    ,
   prai_idv_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_1' 
    }
    ,
   prai_idv_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_2' 
    }
    ,
   prai_idv_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_3' 
    }
    ,
   prai_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_FC' 
    }
    ,
   prai_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_1' 
    }
    ,
   prai_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_2' 
    }
    ,
   prai_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_3' 
    }
    ,
   prai_first_loss_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_FIRST_LOSS_PERC' 
    }
    ,
   prai_org_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_FC' 
    }
    ,
   prai_org_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_1' 
    }
    ,
   prai_org_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_2' 
    }
    ,
   prai_org_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_3' 
    }
    ,
   prai_our_share_perc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PERC' 
    }
    ,
   prai_our_share_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_FC' 
    }
    ,
   prai_our_share_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_1' 
    }
    ,
   prai_our_share_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_2' 
    }
    ,
   prai_our_share_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_3' 
    }
    ,
   prai_our_share_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_FC' 
    }
    ,
   prai_our_share_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_1' 
    }
    ,
   prai_our_share_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_2' 
    }
    ,
   prai_our_share_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_3' 
    }
    ,
   prai_org_our_share_perc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PERC' 
    }
    ,
   prai_org_our_share_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_FC' 
    }
    ,
   prai_org_our_share_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_1' 
    }
    ,
   prai_org_our_share_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_2' 
    }
    ,
   prai_org_our_share_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_3' 
    }
    ,
   prai_org_our_share_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_FC' 
    }
    ,
   prai_org_our_share_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_1' 
    }
    ,
   prai_org_our_share_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_2' 
    }
    ,
   prai_org_our_share_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_3' 
    }
    ,
   prai_maint_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_MAINT_PERIOD_UNIT' 
    }
    ,
   prai_maint_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_PERIOD' 
    }
    ,
   prai_maint_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_FM_DT' 
    }
    ,
   prai_maint_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_TO_DT' 
    }
    ,
   prai_testing_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_TESTING_PERIOD_UNIT' 
    }
    ,
   prai_testing_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_PERIOD' 
    }
    ,
   prai_testing_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_FM_DT' 
    }
    ,
   prai_testing_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_TO_DT' 
    }
    ,
   prai_najm_sts: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_NAJM_STS' 
    }
    ,
   prai_najm_remarks: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_NAJM_REMARKS' 
    }
    ,
   prai_coins_pool_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COINS_POOL_CODE' 
    }
    ,
   prai_cert_req_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_CERT_REQ_YN' 
    }
    ,
   prai_cert_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CERT_TYPE' 
    }
    ,
   prai_cert_mode: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_CERT_MODE' 
    }
    ,
   prai_cert_no: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_CERT_NO' 
    }
    ,
   prai_cert_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_CERT_FM_DT' 
    }
    ,
   prai_cert_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_CERT_TO_DT' 
    }
    ,
   prai_date_21: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_21' 
    }
    ,
   prai_date_22: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_22' 
    }
    ,
   prai_date_23: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_23' 
    }
    ,
   prai_date_24: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_24' 
    }
    ,
   prai_date_25: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_25' 
    }
    ,
   prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRAI_SYS_ID' 
    }
    ,
   prai_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_POL_SYS_ID' 
    }
    ,
   prai_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_END_NO_IDX' 
    }
    ,
   prai_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_END_SR_NO' 
    }
    ,
   prai_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_PSEC_SYS_ID' 
    }
    ,
   prai_risk_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_RISK_LVL_NO' 
    }
    ,
   prai_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL1_SYS_ID' 
    }
    ,
   prai_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL1_SR_NO' 
    }
    ,
   prai_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL2_SYS_ID' 
    }
    ,
   prai_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL2_SR_NO' 
    }
    ,
   prai_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL3_SYS_ID' 
    }
    ,
   prai_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL3_SR_NO' 
    }
    ,
   prai_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL4_SYS_ID' 
    }
    ,
   prai_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL4_SR_NO' 
    }
    ,
   prai_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL5_SYS_ID' 
    }
    ,
   prai_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL5_SR_NO' 
    }
    ,
   prai_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_SI_CURR_CODE' 
    }
    ,
   prai_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PREM_CURR_CODE' 
    }
    ,
   prai_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_FC' 
    }
    ,
   prai_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_1' 
    }
    ,
   prai_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_2' 
    }
    ,
   prai_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_3' 
    }
    ,
   prai_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_FC' 
    }
    ,
   prai_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_1' 
    }
    ,
   prai_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_2' 
    }
    ,
   prai_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_3' 
    }
    ,
   prai_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_FC' 
    }
    ,
   prai_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_1' 
    }
    ,
   prai_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_2' 
    }
    ,
   prai_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_3' 
    }
    ,
   prai_org_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_FC' 
    }
    ,
   prai_org_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_1' 
    }
    ,
   prai_org_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_2' 
    }
    ,
   prai_org_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_3' 
    }
    ,
   prai_cum_bonus_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_PERC' 
    }
    ,
   prai_cum_bonus_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_FC' 
    }
    ,
   prai_cum_bonus_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_1' 
    }
    ,
   prai_cum_bonus_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_2' 
    }
    ,
   prai_cum_bonus_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_3' 
    }
    ,
   prai_silent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_SILENT_YN' 
    }
    ,
   prai_silent_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_SILENT_FM_DT' 
    }
    ,
   prai_silent_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_SILENT_TO_DT' 
    }
    ,
   prai_service_tax_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_SERVICE_TAX_YN' 
    }
    ,
   prai_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRAI_REC_TYPE' 
    }
    ,
   prai_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_EFF_FM_DT' 
    }
    ,
   prai_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_EFF_TO_DT' 
    }
    ,
   prai_end_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_END_EFF_FM_DT' 
    }
    ,
   prai_code_01: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_01' 
    }
    ,
   prai_code_02: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_02' 
    }
    ,
   prai_code_03: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_03' 
    }
    ,
   prai_code_04: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_04' 
    }
    ,
   prai_code_05: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_05' 
    }
    ,
   prai_code_06: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_06' 
    }
    ,
   prai_code_07: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_07' 
    }
    ,
   prai_code_08: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_08' 
    }
    ,
   prai_code_09: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_09' 
    }
    ,
   prai_code_10: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_10' 
    }
    ,
   prai_code_11: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_11' 
    }
    ,
   prai_code_12: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_12' 
    }
    ,
   prai_code_13: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_13' 
    }
    ,
   prai_code_14: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_14' 
    }
    ,
   prai_code_15: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_15' 
    }
    ,
   prai_code_16: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_16' 
    }
    ,
   prai_code_17: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_17' 
    }
    ,
   prai_code_18: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_18' 
    }
    ,
   prai_code_19: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_19' 
    }
    ,
   prai_code_20: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_20' 
    }
    ,
   prai_yn_01: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_01' 
    }
    ,
   prai_yn_02: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_02' 
    }
    ,
   prai_yn_03: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_03' 
    }
    ,
   prai_yn_04: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_04' 
    }
    ,
   prai_yn_05: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_05' 
    }
    ,
   prai_yn_06: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_06' 
    }
    ,
   prai_yn_07: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_07' 
    }
    ,
   prai_yn_08: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_08' 
    }
    ,
   prai_our_share_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_1' 
    }
    ,
   prai_our_share_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_2' 
    }
    ,
   prai_our_share_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_3' 
    }
    ,
   prai_our_share_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_FC' 
    }
    ,
   prai_our_share_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_1' 
    }
    ,
   prai_our_share_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_2' 
    }
    ,
   prai_our_share_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_3' 
    }
    ,
   prai_org_our_share_perc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PERC' 
    }
    ,
   prai_org_our_share_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_FC' 
    }
    ,
   prai_org_our_share_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_1' 
    }
    ,
   prai_org_our_share_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_2' 
    }
    ,
   prai_org_our_share_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_3' 
    }
    ,
   prai_org_our_share_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_FC' 
    }
    ,
   prai_org_our_share_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_1' 
    }
    ,
   prai_org_our_share_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_2' 
    }
    ,
   prai_org_our_share_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_3' 
    }
    ,
   prai_maint_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_MAINT_PERIOD_UNIT' 
    }
    ,
   prai_maint_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_PERIOD' 
    }
    ,
   prai_maint_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_FM_DT' 
    }
    ,
   prai_maint_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_TO_DT' 
    }
    ,
   prai_testing_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_TESTING_PERIOD_UNIT' 
    }
    ,
   prai_testing_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_PERIOD' 
    }
    ,
   prai_testing_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_FM_DT' 
    }
    ,
   prai_testing_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_TO_DT' 
    }
    ,
   prai_najm_sts: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_NAJM_STS' 
    }
    ,
   prai_najm_remarks: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_NAJM_REMARKS' 
    }
    ,
   prai_coins_pool_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COINS_POOL_CODE' 
    }
    ,
   prai_cert_req_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_CERT_REQ_YN' 
    }
    ,
   prai_cert_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CERT_TYPE' 
    }
    ,
   prai_cert_mode: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_CERT_MODE' 
    }
    ,
   prai_cert_no: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_CERT_NO' 
    }
    ,
   prai_cert_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_CERT_FM_DT' 
    }
    ,
   prai_cert_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_CERT_TO_DT' 
    }
    ,
   prai_date_21: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_21' 
    }
    ,
   prai_date_22: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_22' 
    }
    ,
   prai_date_23: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_23' 
    }
    ,
   prai_date_24: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_24' 
    }
    ,
   prai_date_25: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_25' 
    }
    ,
   prai_yn_09: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_09' 
    }
    ,
   prai_yn_10: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_10' 
    }
    ,
   prai_date_01: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_01' 
    }
    ,
   prai_date_02: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_02' 
    }
    ,
   prai_date_03: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_03' 
    }
    ,
   prai_date_04: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_04' 
    }
    ,
   prai_date_05: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_05' 
    }
    ,
   prai_date_06: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_06' 
    }
    ,
   prai_date_07: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_07' 
    }
    ,
   prai_date_08: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_08' 
    }
    ,
   prai_date_09: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_09' 
    }
    ,
   prai_date_10: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_10' 
    }
    ,
   prai_num_01: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_01' 
    }
    ,
   prai_num_02: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_02' 
    }
    ,
   prai_num_03: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_03' 
    }
    ,
   prai_num_04: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_04' 
    }
    ,
   prai_num_05: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_05' 
    }
    ,
   prai_data_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_01' 
    }
    ,
   prai_data_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_02' 
    }
    ,
   prai_data_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_03' 
    }
    ,
   prai_data_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_04' 
    }
    ,
   prai_data_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_05' 
    }
    ,
   prai_data_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_06' 
    }
    ,
   prai_data_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_07' 
    }
    ,
   prai_data_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_08' 
    }
    ,
   prai_data_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_09' 
    }
    ,
   prai_data_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_10' 
    }
    ,
   prai_data_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_11' 
    }
    ,
   prai_data_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_12' 
    }
    ,
   prai_data_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_13' 
    }
    ,
   prai_data_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_14' 
    }
    ,
   prai_data_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_15' 
    }
    ,
   prai_data_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_16' 
    }
    ,
   prai_data_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_17' 
    }
    ,
   prai_data_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_18' 
    }
    ,
   prai_data_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_19' 
    }
    ,
   prai_data_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_20' 
    }
    ,
   prai_remarks_01: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_01' 
    }
    ,
   prai_remarks_02: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_02' 
    }
    ,
   prai_remarks_03: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_03' 
    }
    ,
   prai_remarks_04: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_04' 
    }
    ,
   prai_remarks_05: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_05' 
    }
    ,
   prai_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRAI_CR_UID' 
    }
    ,
   prai_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRAI_CR_DT' 
    }
    ,
   prai_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_UPD_UID' 
    }
    ,
   prai_risk_id: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_RISK_ID' 
    }
    ,
   prai_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PERIOD_UNIT' 
    }
    ,
   prai_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_UPD_DT' 
    }
    ,
   prai_pml_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_FC' 
    }
    ,
   prai_pml_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_1' 
    }
    ,
   prai_pml_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_2' 
    }
    ,
   prai_pml_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_3' 
    }
    ,
   prai_pml_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_PML_PERC' 
    }
    ,
   prai_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_FC' 
    }
    ,
   prai_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_1' 
    }
    ,
   prai_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_2' 
    }
    ,
   prai_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_3' 
    }
    ,
   prai_org_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_FC' 
    }
    ,
   prai_org_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   prai_org_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   prai_org_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   prai_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_FC' 
    }
    ,
   prai_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_1' 
    }
    ,
   prai_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_2' 
    }
    ,
   prai_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_3' 
    }
    ,
   prai_org_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_FC' 
    }
    ,
   prai_org_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   prai_org_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   prai_org_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   prai_risk_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_RISK_SR_NO' 
    }
    ,
   prai_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COMP_CODE' 
    }
    ,
   prai_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DIVN_CODE' 
    }
    ,
   prai_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DEPT_CODE' 
    }
    ,
   prai_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DS_TYPE' 
    }
    ,
   prai_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PROD_CODE' 
    }
    ,
   prai_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_PERIOD' 
    }
    ,
   prai_pi_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_PI_SYS_ID' 
    }
    ,
   prai_num_06: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_06' 
    }
    ,
   prai_num_07: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_07' 
    }
    ,
   prai_num_08: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_08' 
    }
    ,
   prai_num_09: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_09' 
    }
    ,
   prai_num_10: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_10' 
    }
    ,
   prai_num_11: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_11' 
    }
    ,
   prai_num_12: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_12' 
    }
    ,
   prai_num_13: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_13' 
    }
    ,
   prai_num_14: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_14' 
    }
    ,
   prai_num_15: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_15' 
    }
    ,
   prai_num_16: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_16' 
    }
    ,
   prai_num_17: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_17' 
    }
    ,
   prai_num_18: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_18' 
    }
    ,
   prai_num_19: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_19' 
    }
    ,
   prai_num_20: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_20' 
    }
    ,
   prai_num_21: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_21' 
    }
    ,
   prai_num_22: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_22' 
    }
    ,
   prai_num_23: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_23' 
    }
    ,
   prai_num_24: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_24' 
    }
    ,
   prai_num_25: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_25' 
    }
    ,
   prai_yn_11: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_11' 
    }
    ,
   prai_yn_12: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_12' 
    }
    ,
   prai_yn_13: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_13' 
    }
    ,
   prai_yn_14: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_14' 
    }
    ,
   prai_yn_15: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_15' 
    }
    ,
   prai_yn_16: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_16' 
    }
    ,
   prai_yn_17: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_17' 
    }
    ,
   prai_yn_18: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_18' 
    }
    ,
   prai_yn_19: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_19' 
    }
    ,
   prai_yn_20: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_20' 
    }
    ,
   prai_yn_21: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_21' 
    }
    ,
   prai_yn_22: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_22' 
    }
    ,
   prai_yn_23: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_23' 
    }
    ,
   prai_yn_24: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_24' 
    }
    ,
   prai_yn_25: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_25' 
    }
    ,
   prai_data_21: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_21' 
    }
    ,
   prai_data_22: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_22' 
    }
    ,
   prai_data_23: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_23' 
    }
    ,
   prai_data_24: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_24' 
    }
    ,
   prai_data_25: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_25' 
    }
    ,
   prai_data_26: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_26' 
    }
    ,
   prai_data_27: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_27' 
    }
    ,
   prai_data_28: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_28' 
    }
    ,
   prai_data_29: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_29' 
    }
    ,
   prai_data_30: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_30' 
    }
    ,
   prai_data_31: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_31' 
    }
    ,
   prai_data_32: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_32' 
    }
    ,
   prai_data_33: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_33' 
    }
    ,
   prai_data_34: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_34' 
    }
    ,
   prai_data_35: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_35' 
    }
    ,
   prai_data_36: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_36' 
    }
    ,
   prai_data_37: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_37' 
    }
    ,
   prai_data_38: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_38' 
    }
    ,
   prai_data_39: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_39' 
    }
    ,
   prai_data_40: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_40' 
    }
    ,
   prai_code_21: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_21' 
    }
    ,
   prai_code_22: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_22' 
    }
    ,
   prai_code_23: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_23' 
    }
    ,
   prai_code_24: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_24' 
    }
    ,
   prai_code_25: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_25' 
    }
    ,
   prai_date_11: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_11' 
    }
    ,
   prai_date_12: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_12' 
    }
    ,
   prai_date_13: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_13' 
    }
    ,
   prai_date_14: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_14' 
    }
    ,
   prai_date_15: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_15' 
    }
    ,
   prai_date_16: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_16' 
    }
    ,
   prai_date_17: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_17' 
    }
    ,
   prai_date_18: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_18' 
    }
    ,
   prai_date_19: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_19' 
    }
    ,
   prai_date_20: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_20' 
    }
    ,
   prai_remarks_06: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_06' 
    }
    ,
   prai_remarks_07: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_07' 
    }
    ,
   prai_remarks_08: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_08' 
    }
    ,
   prai_remarks_09: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_09' 
    }
    ,
   prai_remarks_10: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_10' 
    }
    ,
   prai_org_cum_bonus_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_FC' 
    }
    ,
   prai_org_cum_bonus_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_1' 
    }
    ,
   prai_org_cum_bonus_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_2' 
    }
    ,
   prai_org_cum_bonus_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_3' 
    }
    ,
   prai_ren_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_REN_PRAI_SYS_ID' 
    }
    ,
   prai_risk_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_RISK_CLASS_CODE' 
    }
    ,
   prai_clm_total_loss_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_CLM_TOTAL_LOSS_YN' 
    }
    ,
   prai_org_pml_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_FC' 
    }
    ,
   prai_org_pml_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_1' 
    }
    ,
   prai_org_pml_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_2' 
    }
    ,
   prai_org_pml_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_3' 
    }
    ,
   prai_org_pml_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_PERC' 
    }
    ,
   prai_ren_sr_no: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_REN_SR_NO' 
    }
    ,
   prai_tpa_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_TPA_CODE' 
    }
    ,
   prai_pol_classification: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_POL_CLASSIFICATION' 
    }
    ,
   prai_country_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COUNTRY_CODE' 
    }
    ,
   prai_location_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_LOCATION_CODE' 
    }
    ,
   prai_no_ren_clm: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_NO_REN_CLM' 
    }
    ,
   prai_annual_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_FC' 
    }
    ,
   prai_annual_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_1' 
    }
    ,
   prai_annual_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_2' 
    }
    ,
   prai_annual_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_3' 
    }
    ,
   prai_code_26: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_26' 
    }
    ,
   prai_code_27: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_27' 
    }
    ,
   prai_code_28: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_28' 
    }
    ,
   prai_code_29: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_29' 
    }
    ,
   prai_code_30: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_30' 
    }
    ,
   prai_ncb_yrs: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_NCB_YRS' 
    }
    ,
   prai_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_CNCT_SYS_ID' 
    }
    ,
   prai_ra_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_RA_APPL_YN' 
    }
    ,
   prai_risk_ref_no: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PRAI_RISK_REF_NO' 
    }
    ,
   prai_idv_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_FC' 
    }
    ,
   prai_idv_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_1' 
    }
    ,
   prai_idv_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_2' 
    }
    ,
   prai_idv_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_3' 
    }
    ,
   prai_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_FC' 
    }
    ,
   prai_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_1' 
    }
    ,
   prai_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_2' 
    }
    ,
   prai_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_3' 
    }
    ,
   prai_first_loss_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_FIRST_LOSS_PERC' 
    }
    ,
   prai_org_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_FC' 
    }
    ,
   prai_org_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_1' 
    }
    ,
   prai_org_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_2' 
    }
    ,
   prai_org_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_3' 
    }
    ,
   prai_our_share_perc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PERC' 
    }
    ,
   prai_our_share_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_FC' 
    }
    ,
   prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRAI_SYS_ID' 
    }
    ,
   prai_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_POL_SYS_ID' 
    }
    ,
   prai_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_END_NO_IDX' 
    }
    ,
   prai_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_END_SR_NO' 
    }
    ,
   prai_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_PSEC_SYS_ID' 
    }
    ,
   prai_risk_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_RISK_LVL_NO' 
    }
    ,
   prai_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL1_SYS_ID' 
    }
    ,
   prai_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL1_SR_NO' 
    }
    ,
   prai_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL2_SYS_ID' 
    }
    ,
   prai_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL2_SR_NO' 
    }
    ,
   prai_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL3_SYS_ID' 
    }
    ,
   prai_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL3_SR_NO' 
    }
    ,
   prai_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL4_SYS_ID' 
    }
    ,
   prai_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL4_SR_NO' 
    }
    ,
   prai_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL5_SYS_ID' 
    }
    ,
   prai_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL5_SR_NO' 
    }
    ,
   prai_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_SI_CURR_CODE' 
    }
    ,
   prai_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PREM_CURR_CODE' 
    }
    ,
   prai_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_FC' 
    }
    ,
   prai_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_1' 
    }
    ,
   prai_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_2' 
    }
    ,
   prai_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_3' 
    }
    ,
   prai_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_FC' 
    }
    ,
   prai_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_1' 
    }
    ,
   prai_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_2' 
    }
    ,
   prai_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_3' 
    }
    ,
   prai_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_FC' 
    }
    ,
   prai_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_1' 
    }
    ,
   prai_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_2' 
    }
    ,
   prai_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_3' 
    }
    ,
   prai_org_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_FC' 
    }
    ,
   prai_org_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_1' 
    }
    ,
   prai_org_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_2' 
    }
    ,
   prai_org_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_3' 
    }
    ,
   prai_cum_bonus_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_PERC' 
    }
    ,
   prai_cum_bonus_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_FC' 
    }
    ,
   prai_cum_bonus_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_1' 
    }
    ,
   prai_cum_bonus_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_2' 
    }
    ,
   prai_cum_bonus_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_3' 
    }
    ,
   prai_silent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_SILENT_YN' 
    }
    ,
   prai_silent_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_SILENT_FM_DT' 
    }
    ,
   prai_silent_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_SILENT_TO_DT' 
    }
    ,
   prai_service_tax_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_SERVICE_TAX_YN' 
    }
    ,
   prai_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRAI_REC_TYPE' 
    }
    ,
   prai_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_EFF_FM_DT' 
    }
    ,
   prai_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_EFF_TO_DT' 
    }
    ,
   prai_end_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_END_EFF_FM_DT' 
    }
    ,
   prai_code_01: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_01' 
    }
    ,
   prai_code_02: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_02' 
    }
    ,
   prai_code_03: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_03' 
    }
    ,
   prai_code_04: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_04' 
    }
    ,
   prai_code_05: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_05' 
    }
    ,
   prai_code_06: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_06' 
    }
    ,
   prai_code_07: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_07' 
    }
    ,
   prai_code_08: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_08' 
    }
    ,
   prai_code_09: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_09' 
    }
    ,
   prai_code_10: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_10' 
    }
    ,
   prai_code_11: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_11' 
    }
    ,
   prai_code_12: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_12' 
    }
    ,
   prai_code_13: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_13' 
    }
    ,
   prai_code_14: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_14' 
    }
    ,
   prai_code_15: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_15' 
    }
    ,
   prai_code_16: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_16' 
    }
    ,
   prai_code_17: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_17' 
    }
    ,
   prai_code_18: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_18' 
    }
    ,
   prai_code_19: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_19' 
    }
    ,
   prai_code_20: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_20' 
    }
    ,
   prai_yn_01: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_01' 
    }
    ,
   prai_yn_02: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_02' 
    }
    ,
   prai_yn_03: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_03' 
    }
    ,
   prai_yn_04: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_04' 
    }
    ,
   prai_yn_05: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_05' 
    }
    ,
   prai_yn_06: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_06' 
    }
    ,
   prai_yn_07: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_07' 
    }
    ,
   prai_yn_08: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_08' 
    }
    ,
   prai_yn_09: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_09' 
    }
    ,
   prai_yn_10: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_10' 
    }
    ,
   prai_date_01: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_01' 
    }
    ,
   prai_date_02: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_02' 
    }
    ,
   prai_date_03: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_03' 
    }
    ,
   prai_date_04: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_04' 
    }
    ,
   prai_date_05: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_05' 
    }
    ,
   prai_date_06: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_06' 
    }
    ,
   prai_date_07: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_07' 
    }
    ,
   prai_date_08: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_08' 
    }
    ,
   prai_date_09: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_09' 
    }
    ,
   prai_date_10: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_10' 
    }
    ,
   prai_num_01: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_01' 
    }
    ,
   prai_num_02: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_02' 
    }
    ,
   prai_num_03: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_03' 
    }
    ,
   prai_num_04: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_04' 
    }
    ,
   prai_num_05: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_05' 
    }
    ,
   prai_data_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_01' 
    }
    ,
   prai_data_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_02' 
    }
    ,
   prai_data_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_03' 
    }
    ,
   prai_data_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_04' 
    }
    ,
   prai_data_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_05' 
    }
    ,
   prai_data_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_06' 
    }
    ,
   prai_data_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_07' 
    }
    ,
   prai_data_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_08' 
    }
    ,
   prai_data_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_09' 
    }
    ,
   prai_data_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_10' 
    }
    ,
   prai_data_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_11' 
    }
    ,
   prai_data_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_12' 
    }
    ,
   prai_data_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_13' 
    }
    ,
   prai_data_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_14' 
    }
    ,
   prai_data_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_15' 
    }
    ,
   prai_data_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_16' 
    }
    ,
   prai_data_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_17' 
    }
    ,
   prai_data_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_18' 
    }
    ,
   prai_data_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_19' 
    }
    ,
   prai_data_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_20' 
    }
    ,
   prai_remarks_01: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_01' 
    }
    ,
   prai_remarks_02: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_02' 
    }
    ,
   prai_remarks_03: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_03' 
    }
    ,
   prai_remarks_04: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_04' 
    }
    ,
   prai_remarks_05: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_05' 
    }
    ,
   prai_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRAI_CR_UID' 
    }
    ,
   prai_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRAI_CR_DT' 
    }
    ,
   prai_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_UPD_UID' 
    }
    ,
   prai_risk_id: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_RISK_ID' 
    }
    ,
   prai_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PERIOD_UNIT' 
    }
    ,
   prai_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_UPD_DT' 
    }
    ,
   prai_pml_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_FC' 
    }
    ,
   prai_pml_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_1' 
    }
    ,
   prai_pml_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_2' 
    }
    ,
   prai_pml_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_3' 
    }
    ,
   prai_pml_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_PML_PERC' 
    }
    ,
   prai_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_FC' 
    }
    ,
   prai_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_1' 
    }
    ,
   prai_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_2' 
    }
    ,
   prai_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_3' 
    }
    ,
   prai_org_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_FC' 
    }
    ,
   prai_org_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   prai_org_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   prai_org_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   prai_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_FC' 
    }
    ,
   prai_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_1' 
    }
    ,
   prai_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_2' 
    }
    ,
   prai_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_3' 
    }
    ,
   prai_org_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_FC' 
    }
    ,
   prai_org_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   prai_org_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   prai_org_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   prai_risk_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_RISK_SR_NO' 
    }
    ,
   prai_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COMP_CODE' 
    }
    ,
   prai_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DIVN_CODE' 
    }
    ,
   prai_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DEPT_CODE' 
    }
    ,
   prai_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DS_TYPE' 
    }
    ,
   prai_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PROD_CODE' 
    }
    ,
   prai_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_PERIOD' 
    }
    ,
   prai_pi_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_PI_SYS_ID' 
    }
    ,
   prai_num_06: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_06' 
    }
    ,
   prai_num_07: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_07' 
    }
    ,
   prai_num_08: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_08' 
    }
    ,
   prai_num_09: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_09' 
    }
    ,
   prai_num_10: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_10' 
    }
    ,
   prai_num_11: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_11' 
    }
    ,
   prai_num_12: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_12' 
    }
    ,
   prai_num_13: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_13' 
    }
    ,
   prai_num_14: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_14' 
    }
    ,
   prai_num_15: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_15' 
    }
    ,
   prai_num_16: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_16' 
    }
    ,
   prai_num_17: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_17' 
    }
    ,
   prai_num_18: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_18' 
    }
    ,
   prai_num_19: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_19' 
    }
    ,
   prai_num_20: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_20' 
    }
    ,
   prai_num_21: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_21' 
    }
    ,
   prai_num_22: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_22' 
    }
    ,
   prai_num_23: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_23' 
    }
    ,
   prai_num_24: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_24' 
    }
    ,
   prai_num_25: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_25' 
    }
    ,
   prai_yn_11: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_11' 
    }
    ,
   prai_yn_12: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_12' 
    }
    ,
   prai_yn_13: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_13' 
    }
    ,
   prai_yn_14: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_14' 
    }
    ,
   prai_yn_15: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_15' 
    }
    ,
   prai_yn_16: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_16' 
    }
    ,
   prai_yn_17: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_17' 
    }
    ,
   prai_yn_18: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_18' 
    }
    ,
   prai_yn_19: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_19' 
    }
    ,
   prai_yn_20: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_20' 
    }
    ,
   prai_yn_21: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_21' 
    }
    ,
   prai_yn_22: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_22' 
    }
    ,
   prai_yn_23: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_23' 
    }
    ,
   prai_yn_24: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_24' 
    }
    ,
   prai_yn_25: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_25' 
    }
    ,
   prai_data_21: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_21' 
    }
    ,
   prai_data_22: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_22' 
    }
    ,
   prai_data_23: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_23' 
    }
    ,
   prai_data_24: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_24' 
    }
    ,
   prai_data_25: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_25' 
    }
    ,
   prai_data_26: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_26' 
    }
    ,
   prai_data_27: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_27' 
    }
    ,
   prai_data_28: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_28' 
    }
    ,
   prai_data_29: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_29' 
    }
    ,
   prai_data_30: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_30' 
    }
    ,
   prai_data_31: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_31' 
    }
    ,
   prai_data_32: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_32' 
    }
    ,
   prai_data_33: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_33' 
    }
    ,
   prai_data_34: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_34' 
    }
    ,
   prai_data_35: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_35' 
    }
    ,
   prai_data_36: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_36' 
    }
    ,
   prai_data_37: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_37' 
    }
    ,
   prai_data_38: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_38' 
    }
    ,
   prai_data_39: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_39' 
    }
    ,
   prai_data_40: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_40' 
    }
    ,
   prai_code_21: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_21' 
    }
    ,
   prai_code_22: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_22' 
    }
    ,
   prai_code_23: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_23' 
    }
    ,
   prai_code_24: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_24' 
    }
    ,
   prai_code_25: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_25' 
    }
    ,
   prai_date_11: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_11' 
    }
    ,
   prai_date_12: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_12' 
    }
    ,
   prai_date_13: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_13' 
    }
    ,
   prai_date_14: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_14' 
    }
    ,
   prai_date_15: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_15' 
    }
    ,
   prai_date_16: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_16' 
    }
    ,
   prai_date_17: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_17' 
    }
    ,
   prai_date_18: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_18' 
    }
    ,
   prai_date_19: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_19' 
    }
    ,
   prai_date_20: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_20' 
    }
    ,
   prai_remarks_06: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_06' 
    }
    ,
   prai_remarks_07: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_07' 
    }
    ,
   prai_remarks_08: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_08' 
    }
    ,
   prai_remarks_09: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_09' 
    }
    ,
   prai_remarks_10: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_10' 
    }
    ,
   prai_org_cum_bonus_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_FC' 
    }
    ,
   prai_org_cum_bonus_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_1' 
    }
    ,
   prai_org_cum_bonus_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_2' 
    }
    ,
   prai_org_cum_bonus_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_3' 
    }
    ,
   prai_ren_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_REN_PRAI_SYS_ID' 
    }
    ,
   prai_risk_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_RISK_CLASS_CODE' 
    }
    ,
   prai_clm_total_loss_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_CLM_TOTAL_LOSS_YN' 
    }
    ,
   prai_org_pml_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_FC' 
    }
    ,
   prai_org_pml_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_1' 
    }
    ,
   prai_org_pml_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_2' 
    }
    ,
   prai_org_pml_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_3' 
    }
    ,
   prai_org_pml_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_PERC' 
    }
    ,
   prai_ren_sr_no: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_REN_SR_NO' 
    }
    ,
   prai_tpa_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_TPA_CODE' 
    }
    ,
   prai_pol_classification: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_POL_CLASSIFICATION' 
    }
    ,
   prai_country_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COUNTRY_CODE' 
    }
    ,
   prai_location_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_LOCATION_CODE' 
    }
    ,
   prai_no_ren_clm: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_NO_REN_CLM' 
    }
    ,
   prai_annual_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_FC' 
    }
    ,
   prai_annual_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_1' 
    }
    ,
   prai_annual_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_2' 
    }
    ,
   prai_annual_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_3' 
    }
    ,
   prai_code_26: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_26' 
    }
    ,
   prai_code_27: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_27' 
    }
    ,
   prai_code_28: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_28' 
    }
    ,
   prai_code_29: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_29' 
    }
    ,
   prai_code_30: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_30' 
    }
    ,
   prai_ncb_yrs: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_NCB_YRS' 
    }
    ,
   prai_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_CNCT_SYS_ID' 
    }
    ,
   prai_ra_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_RA_APPL_YN' 
    }
    ,
   prai_risk_ref_no: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PRAI_RISK_REF_NO' 
    }
    ,
   prai_idv_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_FC' 
    }
    ,
   prai_idv_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_1' 
    }
    ,
   prai_idv_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_2' 
    }
    ,
   prai_idv_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_3' 
    }
    ,
   prai_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_FC' 
    }
    ,
   prai_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_1' 
    }
    ,
   prai_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_2' 
    }
    ,
   prai_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_3' 
    }
    ,
   prai_first_loss_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_FIRST_LOSS_PERC' 
    }
    ,
   prai_org_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_FC' 
    }
    ,
   prai_org_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_1' 
    }
    ,
   prai_org_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_2' 
    }
    ,
   prai_org_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_3' 
    }
    ,
   prai_our_share_perc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PERC' 
    }
    ,
   prai_our_share_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_FC' 
    }
    ,
   prai_our_share_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_1' 
    }
    ,
   prai_our_share_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_2' 
    }
    ,
   prai_our_share_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_3' 
    }
    ,
   prai_our_share_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_FC' 
    }
    ,
   prai_our_share_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_1' 
    }
    ,
   prai_our_share_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_2' 
    }
    ,
   prai_our_share_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_3' 
    }
    ,
   prai_org_our_share_perc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PERC' 
    }
    ,
   prai_org_our_share_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_FC' 
    }
    ,
   prai_org_our_share_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_1' 
    }
    ,
   prai_org_our_share_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_2' 
    }
    ,
   prai_org_our_share_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_3' 
    }
    ,
   prai_org_our_share_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_FC' 
    }
    ,
   prai_org_our_share_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_1' 
    }
    ,
   prai_org_our_share_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_2' 
    }
    ,
   prai_org_our_share_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_3' 
    }
    ,
   prai_maint_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_MAINT_PERIOD_UNIT' 
    }
    ,
   prai_maint_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_PERIOD' 
    }
    ,
   prai_maint_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_FM_DT' 
    }
    ,
   prai_maint_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_TO_DT' 
    }
    ,
   prai_testing_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_TESTING_PERIOD_UNIT' 
    }
    ,
   prai_testing_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_PERIOD' 
    }
    ,
   prai_testing_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_FM_DT' 
    }
    ,
   prai_testing_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_TO_DT' 
    }
    ,
   prai_najm_sts: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_NAJM_STS' 
    }
    ,
   prai_najm_remarks: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_NAJM_REMARKS' 
    }
    ,
   prai_coins_pool_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COINS_POOL_CODE' 
    }
    ,
   prai_cert_req_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_CERT_REQ_YN' 
    }
    ,
   prai_cert_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CERT_TYPE' 
    }
    ,
   prai_cert_mode: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_CERT_MODE' 
    }
    ,
   prai_cert_no: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_CERT_NO' 
    }
    ,
   prai_cert_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_CERT_FM_DT' 
    }
    ,
   prai_cert_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_CERT_TO_DT' 
    }
    ,
   prai_date_21: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_21' 
    }
    ,
   prai_date_22: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_22' 
    }
    ,
   prai_date_23: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_23' 
    }
    ,
   prai_date_24: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_24' 
    }
    ,
   prai_date_25: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_25' 
    }
    ,
   prai_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PERIOD_UNIT' 
    }
    ,
   prai_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_UPD_DT' 
    }
    ,
   prai_pml_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_FC' 
    }
    ,
   prai_pml_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_1' 
    }
    ,
   prai_pml_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_2' 
    }
    ,
   prai_pml_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_3' 
    }
    ,
   prai_pml_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_PML_PERC' 
    }
    ,
   prai_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_FC' 
    }
    ,
   prai_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_1' 
    }
    ,
   prai_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_2' 
    }
    ,
   prai_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_3' 
    }
    ,
   prai_org_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_FC' 
    }
    ,
   prai_org_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   prai_org_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   prai_org_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   prai_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_FC' 
    }
    ,
   prai_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_1' 
    }
    ,
   prai_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_2' 
    }
    ,
   prai_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_3' 
    }
    ,
   prai_org_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_FC' 
    }
    ,
   prai_org_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   prai_org_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   prai_org_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   prai_risk_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_RISK_SR_NO' 
    }
    ,
   prai_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COMP_CODE' 
    }
    ,
   prai_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DIVN_CODE' 
    }
    ,
   prai_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DEPT_CODE' 
    }
    ,
   prai_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DS_TYPE' 
    }
    ,
   prai_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PROD_CODE' 
    }
    ,
   prai_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_PERIOD' 
    }
    ,
   prai_pi_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_PI_SYS_ID' 
    }
    ,
   prai_num_06: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_06' 
    }
    ,
   prai_num_07: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_07' 
    }
    ,
   prai_num_08: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_08' 
    }
    ,
   prai_num_09: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_09' 
    }
    ,
   prai_num_10: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_10' 
    }
    ,
   prai_num_11: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_11' 
    }
    ,
   prai_num_12: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_12' 
    }
    ,
   prai_num_13: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_13' 
    }
    ,
   prai_num_14: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_14' 
    }
    ,
   prai_num_15: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_15' 
    }
    ,
   prai_num_16: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_16' 
    }
    ,
   prai_num_17: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_17' 
    }
    ,
   prai_num_18: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_18' 
    }
    ,
   prai_num_19: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_19' 
    }
    ,
   prai_num_20: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_20' 
    }
    ,
   prai_num_21: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_21' 
    }
    ,
   prai_num_22: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_22' 
    }
    ,
   prai_num_23: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_23' 
    }
    ,
   prai_num_24: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_24' 
    }
    ,
   prai_num_25: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_25' 
    }
    ,
   prai_yn_11: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_11' 
    }
    ,
   prai_yn_12: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_12' 
    }
    ,
   prai_yn_13: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_13' 
    }
    ,
   prai_yn_14: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_14' 
    }
    ,
   prai_yn_15: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_15' 
    }
    ,
   prai_yn_16: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_16' 
    }
    ,
   prai_yn_17: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_17' 
    }
    ,
   prai_yn_18: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_18' 
    }
    ,
   prai_yn_19: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_19' 
    }
    ,
   prai_yn_20: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_20' 
    }
    ,
   prai_yn_21: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_21' 
    }
    ,
   prai_yn_22: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_22' 
    }
    ,
   prai_yn_23: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_23' 
    }
    ,
   prai_yn_24: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_24' 
    }
    ,
   prai_yn_25: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_25' 
    }
    ,
   prai_data_21: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_21' 
    }
    ,
   prai_data_22: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_22' 
    }
    ,
   prai_data_23: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_23' 
    }
    ,
   prai_data_24: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_24' 
    }
    ,
   prai_data_25: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_25' 
    }
    ,
   prai_data_26: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_26' 
    }
    ,
   prai_data_27: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_27' 
    }
    ,
   prai_data_28: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_28' 
    }
    ,
   prai_data_29: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_29' 
    }
    ,
   prai_data_30: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_30' 
    }
    ,
   prai_data_31: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_31' 
    }
    ,
   prai_data_32: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_32' 
    }
    ,
   prai_data_33: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_33' 
    }
    ,
   prai_data_34: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_34' 
    }
    ,
   prai_data_35: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_35' 
    }
    ,
   prai_data_36: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_36' 
    }
    ,
   prai_data_37: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_37' 
    }
    ,
   prai_data_38: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_38' 
    }
    ,
   prai_data_39: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_39' 
    }
    ,
   prai_data_40: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_40' 
    }
    ,
   prai_code_21: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_21' 
    }
    ,
   prai_code_22: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_22' 
    }
    ,
   prai_code_23: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_23' 
    }
    ,
   prai_code_24: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_24' 
    }
    ,
   prai_code_25: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_25' 
    }
    ,
   prai_date_11: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_11' 
    }
    ,
   prai_date_12: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_12' 
    }
    ,
   prai_date_13: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_13' 
    }
    ,
   prai_date_14: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_14' 
    }
    ,
   prai_date_15: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_15' 
    }
    ,
   prai_date_16: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_16' 
    }
    ,
   prai_date_17: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_17' 
    }
    ,
   prai_date_18: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_18' 
    }
    ,
   prai_date_19: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_19' 
    }
    ,
   prai_date_20: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_20' 
    }
    ,
   prai_remarks_06: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_06' 
    }
    ,
   prai_remarks_07: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_07' 
    }
    ,
   prai_remarks_08: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_08' 
    }
    ,
   prai_remarks_09: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_09' 
    }
    ,
   prai_remarks_10: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_10' 
    }
    ,
   prai_org_cum_bonus_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_FC' 
    }
    ,
   prai_org_cum_bonus_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_1' 
    }
    ,
   prai_org_cum_bonus_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_2' 
    }
    ,
   prai_org_cum_bonus_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_3' 
    }
    ,
   prai_ren_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_REN_PRAI_SYS_ID' 
    }
    ,
   prai_risk_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_RISK_CLASS_CODE' 
    }
    ,
   prai_clm_total_loss_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_CLM_TOTAL_LOSS_YN' 
    }
    ,
   prai_org_pml_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_FC' 
    }
    ,
   prai_org_pml_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_1' 
    }
    ,
   prai_org_pml_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_2' 
    }
    ,
   prai_org_pml_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_3' 
    }
    ,
   prai_org_pml_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_PERC' 
    }
    ,
   prai_ren_sr_no: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_REN_SR_NO' 
    }
    ,
   prai_tpa_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_TPA_CODE' 
    }
    ,
   prai_pol_classification: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_POL_CLASSIFICATION' 
    }
    ,
   prai_country_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COUNTRY_CODE' 
    }
    ,
   prai_location_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_LOCATION_CODE' 
    }
    ,
   prai_no_ren_clm: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_NO_REN_CLM' 
    }
    ,
   prai_annual_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_FC' 
    }
    ,
   prai_annual_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_1' 
    }
    ,
   prai_annual_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_2' 
    }
    ,
   prai_annual_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_3' 
    }
    ,
   prai_code_26: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_26' 
    }
    ,
   prai_code_27: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_27' 
    }
    ,
   prai_code_28: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_28' 
    }
    ,
   prai_code_29: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_29' 
    }
    ,
   prai_code_30: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_30' 
    }
    ,
   prai_ncb_yrs: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_NCB_YRS' 
    }
    ,
   prai_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_CNCT_SYS_ID' 
    }
    ,
   prai_ra_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_RA_APPL_YN' 
    }
    ,
   prai_risk_ref_no: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PRAI_RISK_REF_NO' 
    }
    ,
   prai_idv_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_FC' 
    }
    ,
   prai_idv_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_1' 
    }
    ,
   prai_idv_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_2' 
    }
    ,
   prai_idv_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_3' 
    }
    ,
   prai_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_FC' 
    }
    ,
   prai_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_1' 
    }
    ,
   prai_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_2' 
    }
    ,
   prai_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_3' 
    }
    ,
   prai_first_loss_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_FIRST_LOSS_PERC' 
    }
    ,
   prai_org_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_FC' 
    }
    ,
   prai_org_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_1' 
    }
    ,
   prai_org_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_2' 
    }
    ,
   prai_org_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_3' 
    }
    ,
   prai_our_share_perc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PERC' 
    }
    ,
   prai_our_share_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_FC' 
    }
    ,
   prai_our_share_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_1' 
    }
    ,
   prai_our_share_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_2' 
    }
    ,
   prai_our_share_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_3' 
    }
    ,
   prai_our_share_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_FC' 
    }
    ,
   prai_our_share_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_1' 
    }
    ,
   prai_our_share_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_2' 
    }
    ,
   prai_our_share_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_3' 
    }
    ,
   prai_org_our_share_perc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PERC' 
    }
    ,
   prai_org_our_share_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_FC' 
    }
    ,
   prai_org_our_share_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_1' 
    }
    ,
   prai_org_our_share_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_2' 
    }
    ,
   prai_org_our_share_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_3' 
    }
    ,
   prai_org_our_share_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_FC' 
    }
    ,
   prai_org_our_share_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_1' 
    }
    ,
   prai_org_our_share_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_2' 
    }
    ,
   prai_org_our_share_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_3' 
    }
    ,
   prai_maint_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_MAINT_PERIOD_UNIT' 
    }
    ,
   prai_maint_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_PERIOD' 
    }
    ,
   prai_maint_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_FM_DT' 
    }
    ,
   prai_maint_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_TO_DT' 
    }
    ,
   prai_testing_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_TESTING_PERIOD_UNIT' 
    }
    ,
   prai_testing_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_PERIOD' 
    }
    ,
   prai_testing_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_FM_DT' 
    }
    ,
   prai_testing_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_TO_DT' 
    }
    ,
   prai_najm_sts: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_NAJM_STS' 
    }
    ,
   prai_najm_remarks: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_NAJM_REMARKS' 
    }
    ,
   prai_coins_pool_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COINS_POOL_CODE' 
    }
    ,
   prai_cert_req_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_CERT_REQ_YN' 
    }
    ,
   prai_cert_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CERT_TYPE' 
    }
    ,
   prai_cert_mode: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_CERT_MODE' 
    }
    ,
   prai_cert_no: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_CERT_NO' 
    }
    ,
   prai_cert_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_CERT_FM_DT' 
    }
    ,
   prai_cert_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_CERT_TO_DT' 
    }
    ,
   prai_date_21: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_21' 
    }
    ,
   prai_date_22: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_22' 
    }
    ,
   prai_date_23: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_23' 
    }
    ,
   prai_date_24: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_24' 
    }
    ,
   prai_date_25: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_25' 
    }
    ,
   prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRAI_SYS_ID' 
    }
    ,
   prai_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_POL_SYS_ID' 
    }
    ,
   prai_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_END_NO_IDX' 
    }
    ,
   prai_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_END_SR_NO' 
    }
    ,
   prai_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_PSEC_SYS_ID' 
    }
    ,
   prai_risk_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_RISK_LVL_NO' 
    }
    ,
   prai_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL1_SYS_ID' 
    }
    ,
   prai_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL1_SR_NO' 
    }
    ,
   prai_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL2_SYS_ID' 
    }
    ,
   prai_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL2_SR_NO' 
    }
    ,
   prai_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL3_SYS_ID' 
    }
    ,
   prai_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL3_SR_NO' 
    }
    ,
   prai_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL4_SYS_ID' 
    }
    ,
   prai_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL4_SR_NO' 
    }
    ,
   prai_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL5_SYS_ID' 
    }
    ,
   prai_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL5_SR_NO' 
    }
    ,
   prai_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_SI_CURR_CODE' 
    }
    ,
   prai_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PREM_CURR_CODE' 
    }
    ,
   prai_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_FC' 
    }
    ,
   prai_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_1' 
    }
    ,
   prai_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_2' 
    }
    ,
   prai_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_3' 
    }
    ,
   prai_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_FC' 
    }
    ,
   prai_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_1' 
    }
    ,
   prai_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_2' 
    }
    ,
   prai_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_3' 
    }
    ,
   prai_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_FC' 
    }
    ,
   prai_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_1' 
    }
    ,
   prai_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_2' 
    }
    ,
   prai_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_3' 
    }
    ,
   prai_org_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_FC' 
    }
    ,
   prai_org_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_1' 
    }
    ,
   prai_org_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_2' 
    }
    ,
   prai_org_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_3' 
    }
    ,
   prai_cum_bonus_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_PERC' 
    }
    ,
   prai_cum_bonus_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_FC' 
    }
    ,
   prai_cum_bonus_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_1' 
    }
    ,
   prai_cum_bonus_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_2' 
    }
    ,
   prai_cum_bonus_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_3' 
    }
    ,
   prai_silent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_SILENT_YN' 
    }
    ,
   prai_silent_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_SILENT_FM_DT' 
    }
    ,
   prai_silent_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_SILENT_TO_DT' 
    }
    ,
   prai_service_tax_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_SERVICE_TAX_YN' 
    }
    ,
   prai_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRAI_REC_TYPE' 
    }
    ,
   prai_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_EFF_FM_DT' 
    }
    ,
   prai_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_EFF_TO_DT' 
    }
    ,
   prai_end_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_END_EFF_FM_DT' 
    }
    ,
   prai_code_01: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_01' 
    }
    ,
   prai_code_02: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_02' 
    }
    ,
   prai_code_03: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_03' 
    }
    ,
   prai_code_04: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_04' 
    }
    ,
   prai_code_05: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_05' 
    }
    ,
   prai_code_06: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_06' 
    }
    ,
   prai_code_07: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_07' 
    }
    ,
   prai_code_08: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_08' 
    }
    ,
   prai_code_09: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_09' 
    }
    ,
   prai_code_10: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_10' 
    }
    ,
   prai_code_11: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_11' 
    }
    ,
   prai_code_12: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_12' 
    }
    ,
   prai_code_13: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_13' 
    }
    ,
   prai_code_14: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_14' 
    }
    ,
   prai_code_15: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_15' 
    }
    ,
   prai_code_16: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_16' 
    }
    ,
   prai_code_17: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_17' 
    }
    ,
   prai_code_18: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_18' 
    }
    ,
   prai_code_19: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_19' 
    }
    ,
   prai_code_20: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_20' 
    }
    ,
   prai_yn_01: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_01' 
    }
    ,
   prai_yn_02: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_02' 
    }
    ,
   prai_yn_03: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_03' 
    }
    ,
   prai_yn_04: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_04' 
    }
    ,
   prai_yn_05: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_05' 
    }
    ,
   prai_yn_06: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_06' 
    }
    ,
   prai_yn_07: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_07' 
    }
    ,
   prai_yn_08: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_08' 
    }
    ,
   prai_yn_09: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_09' 
    }
    ,
   prai_yn_10: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_10' 
    }
    ,
   prai_date_01: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_01' 
    }
    ,
   prai_date_02: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_02' 
    }
    ,
   prai_date_03: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_03' 
    }
    ,
   prai_date_04: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_04' 
    }
    ,
   prai_date_05: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_05' 
    }
    ,
   prai_date_06: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_06' 
    }
    ,
   prai_date_07: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_07' 
    }
    ,
   prai_date_08: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_08' 
    }
    ,
   prai_date_09: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_09' 
    }
    ,
   prai_date_10: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_10' 
    }
    ,
   prai_num_01: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_01' 
    }
    ,
   prai_num_02: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_02' 
    }
    ,
   prai_num_03: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_03' 
    }
    ,
   prai_num_04: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_04' 
    }
    ,
   prai_num_05: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_05' 
    }
    ,
   prai_data_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_01' 
    }
    ,
   prai_data_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_02' 
    }
    ,
   prai_data_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_03' 
    }
    ,
   prai_data_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_04' 
    }
    ,
   prai_data_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_05' 
    }
    ,
   prai_data_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_06' 
    }
    ,
   prai_data_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_07' 
    }
    ,
   prai_data_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_08' 
    }
    ,
   prai_data_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_09' 
    }
    ,
   prai_data_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_10' 
    }
    ,
   prai_data_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_11' 
    }
    ,
   prai_data_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_12' 
    }
    ,
   prai_data_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_13' 
    }
    ,
   prai_data_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_14' 
    }
    ,
   prai_data_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_15' 
    }
    ,
   prai_data_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_16' 
    }
    ,
   prai_data_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_17' 
    }
    ,
   prai_data_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_18' 
    }
    ,
   prai_data_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_19' 
    }
    ,
   prai_data_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_20' 
    }
    ,
   prai_remarks_01: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_01' 
    }
    ,
   prai_remarks_02: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_02' 
    }
    ,
   prai_remarks_03: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_03' 
    }
    ,
   prai_remarks_04: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_04' 
    }
    ,
   prai_remarks_05: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_05' 
    }
    ,
   prai_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRAI_CR_UID' 
    }
    ,
   prai_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRAI_CR_DT' 
    }
    ,
   prai_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_UPD_UID' 
    }
    ,
   prai_risk_id: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_RISK_ID' 
    }
    ,
   prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRAI_SYS_ID' 
    }
    ,
   prai_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_POL_SYS_ID' 
    }
    ,
   prai_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_END_NO_IDX' 
    }
    ,
   prai_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_END_SR_NO' 
    }
    ,
   prai_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_PSEC_SYS_ID' 
    }
    ,
   prai_risk_lvl_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_RISK_LVL_NO' 
    }
    ,
   prai_lvl1_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL1_SYS_ID' 
    }
    ,
   prai_lvl1_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL1_SR_NO' 
    }
    ,
   prai_lvl2_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL2_SYS_ID' 
    }
    ,
   prai_lvl2_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL2_SR_NO' 
    }
    ,
   prai_lvl3_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL3_SYS_ID' 
    }
    ,
   prai_lvl3_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL3_SR_NO' 
    }
    ,
   prai_lvl4_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL4_SYS_ID' 
    }
    ,
   prai_lvl4_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL4_SR_NO' 
    }
    ,
   prai_lvl5_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL5_SYS_ID' 
    }
    ,
   prai_lvl5_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_LVL5_SR_NO' 
    }
    ,
   prai_si_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_SI_CURR_CODE' 
    }
    ,
   prai_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PREM_CURR_CODE' 
    }
    ,
   prai_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_FC' 
    }
    ,
   prai_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_1' 
    }
    ,
   prai_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_2' 
    }
    ,
   prai_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_SI_LC_3' 
    }
    ,
   prai_org_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_FC' 
    }
    ,
   prai_org_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_1' 
    }
    ,
   prai_org_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_2' 
    }
    ,
   prai_org_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_SI_LC_3' 
    }
    ,
   prai_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_FC' 
    }
    ,
   prai_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_1' 
    }
    ,
   prai_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_2' 
    }
    ,
   prai_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PREM_LC_3' 
    }
    ,
   prai_org_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_FC' 
    }
    ,
   prai_org_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_1' 
    }
    ,
   prai_org_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_2' 
    }
    ,
   prai_org_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PREM_LC_3' 
    }
    ,
   prai_cum_bonus_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_PERC' 
    }
    ,
   prai_cum_bonus_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_FC' 
    }
    ,
   prai_cum_bonus_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_1' 
    }
    ,
   prai_cum_bonus_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_2' 
    }
    ,
   prai_cum_bonus_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_CUM_BONUS_LC_3' 
    }
    ,
   prai_silent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_SILENT_YN' 
    }
    ,
   prai_silent_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_SILENT_FM_DT' 
    }
    ,
   prai_silent_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_SILENT_TO_DT' 
    }
    ,
   prai_service_tax_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_SERVICE_TAX_YN' 
    }
    ,
   prai_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRAI_REC_TYPE' 
    }
    ,
   prai_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_EFF_FM_DT' 
    }
    ,
   prai_eff_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_EFF_TO_DT' 
    }
    ,
   prai_end_eff_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_END_EFF_FM_DT' 
    }
    ,
   prai_code_01: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_01' 
    }
    ,
   prai_code_02: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_02' 
    }
    ,
   prai_code_03: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_03' 
    }
    ,
   prai_code_04: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_04' 
    }
    ,
   prai_code_05: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_05' 
    }
    ,
   prai_code_06: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_06' 
    }
    ,
   prai_code_07: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_07' 
    }
    ,
   prai_code_08: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_08' 
    }
    ,
   prai_code_09: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_09' 
    }
    ,
   prai_code_10: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_10' 
    }
    ,
   prai_code_11: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_11' 
    }
    ,
   prai_code_12: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_12' 
    }
    ,
   prai_code_13: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_13' 
    }
    ,
   prai_code_14: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_14' 
    }
    ,
   prai_code_15: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_15' 
    }
    ,
   prai_code_16: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_16' 
    }
    ,
   prai_code_17: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_17' 
    }
    ,
   prai_code_18: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_18' 
    }
    ,
   prai_code_19: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_19' 
    }
    ,
   prai_code_20: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_20' 
    }
    ,
   prai_yn_01: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_01' 
    }
    ,
   prai_yn_02: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_02' 
    }
    ,
   prai_yn_03: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_03' 
    }
    ,
   prai_yn_04: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_04' 
    }
    ,
   prai_yn_05: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_05' 
    }
    ,
   prai_yn_06: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_06' 
    }
    ,
   prai_yn_07: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_07' 
    }
    ,
   prai_yn_08: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_08' 
    }
    ,
   prai_yn_09: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_09' 
    }
    ,
   prai_yn_10: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_10' 
    }
    ,
   prai_date_01: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_01' 
    }
    ,
   prai_date_02: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_02' 
    }
    ,
   prai_date_03: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_03' 
    }
    ,
   prai_date_04: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_04' 
    }
    ,
   prai_date_05: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_05' 
    }
    ,
   prai_date_06: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_06' 
    }
    ,
   prai_date_07: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_07' 
    }
    ,
   prai_date_08: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_08' 
    }
    ,
   prai_date_09: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_09' 
    }
    ,
   prai_date_10: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_10' 
    }
    ,
   prai_num_01: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_01' 
    }
    ,
   prai_num_02: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_02' 
    }
    ,
   prai_num_03: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_03' 
    }
    ,
   prai_num_04: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_04' 
    }
    ,
   prai_num_05: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_05' 
    }
    ,
   prai_data_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_01' 
    }
    ,
   prai_data_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_02' 
    }
    ,
   prai_data_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_03' 
    }
    ,
   prai_data_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_04' 
    }
    ,
   prai_data_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_05' 
    }
    ,
   prai_data_06: { 
      type: DataTypes.STRING(400), 
      allowNull: true, 
      
      field: 'PRAI_DATA_06' 
    }
    ,
   prai_data_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_07' 
    }
    ,
   prai_data_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_08' 
    }
    ,
   prai_data_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_09' 
    }
    ,
   prai_data_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_10' 
    }
    ,
   prai_data_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_11' 
    }
    ,
   prai_data_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_12' 
    }
    ,
   prai_data_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_13' 
    }
    ,
   prai_data_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_14' 
    }
    ,
   prai_data_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_15' 
    }
    ,
   prai_data_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_16' 
    }
    ,
   prai_data_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_17' 
    }
    ,
   prai_data_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_18' 
    }
    ,
   prai_data_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_19' 
    }
    ,
   prai_data_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_20' 
    }
    ,
   prai_remarks_01: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_01' 
    }
    ,
   prai_remarks_02: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_02' 
    }
    ,
   prai_remarks_03: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_03' 
    }
    ,
   prai_remarks_04: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_04' 
    }
    ,
   prai_remarks_05: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_05' 
    }
    ,
   prai_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRAI_CR_UID' 
    }
    ,
   prai_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRAI_CR_DT' 
    }
    ,
   prai_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_UPD_UID' 
    }
    ,
   prai_risk_id: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_RISK_ID' 
    }
    ,
   prai_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PERIOD_UNIT' 
    }
    ,
   prai_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_UPD_DT' 
    }
    ,
   prai_pml_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_FC' 
    }
    ,
   prai_pml_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_1' 
    }
    ,
   prai_pml_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_2' 
    }
    ,
   prai_pml_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_PML_AMT_LC_3' 
    }
    ,
   prai_pml_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_PML_PERC' 
    }
    ,
   prai_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_FC' 
    }
    ,
   prai_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_1' 
    }
    ,
   prai_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_2' 
    }
    ,
   prai_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOA_LIMIT_LC_3' 
    }
    ,
   prai_org_aoa_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_FC' 
    }
    ,
   prai_org_aoa_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   prai_org_aoa_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   prai_org_aoa_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   prai_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_FC' 
    }
    ,
   prai_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_1' 
    }
    ,
   prai_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_2' 
    }
    ,
   prai_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_AOY_LIMIT_LC_3' 
    }
    ,
   prai_org_aoy_limit_fc: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_FC' 
    }
    ,
   prai_org_aoy_limit_lc_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   prai_org_aoy_limit_lc_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   prai_org_aoy_limit_lc_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   prai_risk_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAI_RISK_SR_NO' 
    }
    ,
   prai_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COMP_CODE' 
    }
    ,
   prai_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DIVN_CODE' 
    }
    ,
   prai_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DEPT_CODE' 
    }
    ,
   prai_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_DS_TYPE' 
    }
    ,
   prai_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_PROD_CODE' 
    }
    ,
   prai_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_PERIOD' 
    }
    ,
   prai_pi_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_PI_SYS_ID' 
    }
    ,
   prai_num_06: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_06' 
    }
    ,
   prai_num_07: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_07' 
    }
    ,
   prai_num_08: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_08' 
    }
    ,
   prai_num_09: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_09' 
    }
    ,
   prai_num_10: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_10' 
    }
    ,
   prai_num_11: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_11' 
    }
    ,
   prai_num_12: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_12' 
    }
    ,
   prai_num_13: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_13' 
    }
    ,
   prai_num_14: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_14' 
    }
    ,
   prai_num_15: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_15' 
    }
    ,
   prai_num_16: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_16' 
    }
    ,
   prai_num_17: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_17' 
    }
    ,
   prai_num_18: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_18' 
    }
    ,
   prai_num_19: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_19' 
    }
    ,
   prai_num_20: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_20' 
    }
    ,
   prai_num_21: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_21' 
    }
    ,
   prai_num_22: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_22' 
    }
    ,
   prai_num_23: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_23' 
    }
    ,
   prai_num_24: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_24' 
    }
    ,
   prai_num_25: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_NUM_25' 
    }
    ,
   prai_yn_11: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_11' 
    }
    ,
   prai_yn_12: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_12' 
    }
    ,
   prai_yn_13: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_13' 
    }
    ,
   prai_yn_14: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_14' 
    }
    ,
   prai_yn_15: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_15' 
    }
    ,
   prai_yn_16: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_16' 
    }
    ,
   prai_yn_17: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_17' 
    }
    ,
   prai_yn_18: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_18' 
    }
    ,
   prai_yn_19: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_19' 
    }
    ,
   prai_yn_20: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_20' 
    }
    ,
   prai_yn_21: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_21' 
    }
    ,
   prai_yn_22: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_22' 
    }
    ,
   prai_yn_23: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_23' 
    }
    ,
   prai_yn_24: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_24' 
    }
    ,
   prai_yn_25: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_YN_25' 
    }
    ,
   prai_data_21: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_21' 
    }
    ,
   prai_data_22: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_22' 
    }
    ,
   prai_data_23: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_23' 
    }
    ,
   prai_data_24: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_24' 
    }
    ,
   prai_data_25: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_25' 
    }
    ,
   prai_data_26: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_26' 
    }
    ,
   prai_data_27: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_27' 
    }
    ,
   prai_data_28: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_28' 
    }
    ,
   prai_data_29: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_29' 
    }
    ,
   prai_data_30: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_30' 
    }
    ,
   prai_data_31: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_31' 
    }
    ,
   prai_data_32: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_32' 
    }
    ,
   prai_data_33: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_33' 
    }
    ,
   prai_data_34: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_34' 
    }
    ,
   prai_data_35: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_35' 
    }
    ,
   prai_data_36: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_36' 
    }
    ,
   prai_data_37: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_37' 
    }
    ,
   prai_data_38: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_38' 
    }
    ,
   prai_data_39: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_39' 
    }
    ,
   prai_data_40: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_DATA_40' 
    }
    ,
   prai_code_21: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_21' 
    }
    ,
   prai_code_22: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_22' 
    }
    ,
   prai_code_23: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_23' 
    }
    ,
   prai_code_24: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_24' 
    }
    ,
   prai_code_25: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_25' 
    }
    ,
   prai_date_11: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_11' 
    }
    ,
   prai_date_12: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_12' 
    }
    ,
   prai_date_13: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_13' 
    }
    ,
   prai_date_14: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_14' 
    }
    ,
   prai_date_15: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_15' 
    }
    ,
   prai_date_16: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_16' 
    }
    ,
   prai_date_17: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_17' 
    }
    ,
   prai_date_18: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_18' 
    }
    ,
   prai_date_19: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_19' 
    }
    ,
   prai_date_20: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_20' 
    }
    ,
   prai_remarks_06: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_06' 
    }
    ,
   prai_remarks_07: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_07' 
    }
    ,
   prai_remarks_08: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_08' 
    }
    ,
   prai_remarks_09: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_09' 
    }
    ,
   prai_remarks_10: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_REMARKS_10' 
    }
    ,
   prai_org_cum_bonus_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_FC' 
    }
    ,
   prai_org_cum_bonus_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_1' 
    }
    ,
   prai_org_cum_bonus_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_2' 
    }
    ,
   prai_org_cum_bonus_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_CUM_BONUS_LC_3' 
    }
    ,
   prai_ren_prai_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_REN_PRAI_SYS_ID' 
    }
    ,
   prai_risk_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_RISK_CLASS_CODE' 
    }
    ,
   prai_clm_total_loss_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_CLM_TOTAL_LOSS_YN' 
    }
    ,
   prai_org_pml_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_FC' 
    }
    ,
   prai_org_pml_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_1' 
    }
    ,
   prai_org_pml_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_2' 
    }
    ,
   prai_org_pml_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_AMT_LC_3' 
    }
    ,
   prai_org_pml_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_ORG_PML_PERC' 
    }
    ,
   prai_ren_sr_no: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_REN_SR_NO' 
    }
    ,
   prai_tpa_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_TPA_CODE' 
    }
    ,
   prai_pol_classification: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_POL_CLASSIFICATION' 
    }
    ,
   prai_country_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COUNTRY_CODE' 
    }
    ,
   prai_location_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_LOCATION_CODE' 
    }
    ,
   prai_no_ren_clm: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_NO_REN_CLM' 
    }
    ,
   prai_annual_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_FC' 
    }
    ,
   prai_annual_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_1' 
    }
    ,
   prai_annual_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_2' 
    }
    ,
   prai_annual_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ANNUAL_PREM_LC_3' 
    }
    ,
   prai_code_26: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_26' 
    }
    ,
   prai_code_27: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_27' 
    }
    ,
   prai_code_28: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_28' 
    }
    ,
   prai_code_29: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_29' 
    }
    ,
   prai_code_30: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CODE_30' 
    }
    ,
   prai_ncb_yrs: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_NCB_YRS' 
    }
    ,
   prai_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_CNCT_SYS_ID' 
    }
    ,
   prai_ra_appl_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_RA_APPL_YN' 
    }
    ,
   prai_risk_ref_no: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PRAI_RISK_REF_NO' 
    }
    ,
   prai_idv_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_FC' 
    }
    ,
   prai_idv_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_1' 
    }
    ,
   prai_idv_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_2' 
    }
    ,
   prai_idv_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_IDV_LC_3' 
    }
    ,
   prai_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_FC' 
    }
    ,
   prai_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_1' 
    }
    ,
   prai_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_2' 
    }
    ,
   prai_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_TOT_SI_LC_3' 
    }
    ,
   prai_first_loss_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAI_FIRST_LOSS_PERC' 
    }
    ,
   prai_org_tot_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_FC' 
    }
    ,
   prai_org_tot_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_1' 
    }
    ,
   prai_org_tot_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_2' 
    }
    ,
   prai_org_tot_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_TOT_SI_LC_3' 
    }
    ,
   prai_our_share_perc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PERC' 
    }
    ,
   prai_our_share_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_FC' 
    }
    ,
   prai_our_share_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_1' 
    }
    ,
   prai_our_share_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_2' 
    }
    ,
   prai_our_share_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_SI_LC_3' 
    }
    ,
   prai_our_share_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_FC' 
    }
    ,
   prai_our_share_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_1' 
    }
    ,
   prai_our_share_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_2' 
    }
    ,
   prai_our_share_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_OUR_SHARE_PREM_LC_3' 
    }
    ,
   prai_org_our_share_perc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PERC' 
    }
    ,
   prai_org_our_share_si_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_FC' 
    }
    ,
   prai_org_our_share_si_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_1' 
    }
    ,
   prai_org_our_share_si_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_2' 
    }
    ,
   prai_org_our_share_si_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_SI_LC_3' 
    }
    ,
   prai_org_our_share_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_FC' 
    }
    ,
   prai_org_our_share_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_1' 
    }
    ,
   prai_org_our_share_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_2' 
    }
    ,
   prai_org_our_share_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAI_ORG_OUR_SHARE_PREM_LC_3' 
    }
    ,
   prai_maint_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_MAINT_PERIOD_UNIT' 
    }
    ,
   prai_maint_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_PERIOD' 
    }
    ,
   prai_maint_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_FM_DT' 
    }
    ,
   prai_maint_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_MAINT_TO_DT' 
    }
    ,
   prai_testing_period_unit: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_TESTING_PERIOD_UNIT' 
    }
    ,
   prai_testing_period: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_PERIOD' 
    }
    ,
   prai_testing_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_FM_DT' 
    }
    ,
   prai_testing_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_TESTING_TO_DT' 
    }
    ,
   prai_najm_sts: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_NAJM_STS' 
    }
    ,
   prai_najm_remarks: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAI_NAJM_REMARKS' 
    }
    ,
   prai_coins_pool_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_COINS_POOL_CODE' 
    }
    ,
   prai_cert_req_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAI_CERT_REQ_YN' 
    }
    ,
   prai_cert_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAI_CERT_TYPE' 
    }
    ,
   prai_cert_mode: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_CERT_MODE' 
    }
    ,
   prai_cert_no: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAI_CERT_NO' 
    }
    ,
   prai_cert_fm_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_CERT_FM_DT' 
    }
    ,
   prai_cert_to_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_CERT_TO_DT' 
    }
    ,
   prai_date_21: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_21' 
    }
    ,
   prai_date_22: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_22' 
    }
    ,
   prai_date_23: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_23' 
    }
    ,
   prai_date_24: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_24' 
    }
    ,
   prai_date_25: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAI_DATE_25' 
    }
    
    }, {
        tableName: 'PGIT_POL_RISK_ADDL_INFO',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITPOLRISKADDLINFO;
};