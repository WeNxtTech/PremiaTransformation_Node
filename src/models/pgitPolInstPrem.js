module.exports = (sequelize, DataTypes) => {
  const PgitPolInstPrem = sequelize.define('PgitPolInstPrem', {
       pip_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PIP_SYS_ID' 
    }
    ,
   pip_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_POL_SYS_ID' 
    }
    ,
   pip_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_END_NO_IDX' 
    }
    ,
   pip_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_END_SR_NO' 
    }
    ,
   pip_inst_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_NO' 
    }
    ,
   pip_inst_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_INST_DT' 
    }
    ,
   pip_inst_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PIP_INST_PERC' 
    }
    ,
   pip_remarks: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_REMARKS' 
    }
    ,
   pip_agency_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_FC' 
    }
    ,
   pip_agency_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_1' 
    }
    ,
   pip_agency_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_2' 
    }
    ,
   pip_agency_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_3' 
    }
    ,
   pip_pcl_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_PCL_SYS_ID' 
    }
    ,
   pip_collec_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_COLLEC_DT' 
    }
    ,
   pip_bg_mode_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_BG_MODE_YN' 
    }
    ,
   pip_collec_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_COLLEC_STS' 
    }
    ,
   pip_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PIP_CR_DT' 
    }
    ,
   pip_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIP_CR_UID' 
    }
    ,
   pip_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_UPD_DT' 
    }
    ,
   pip_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_UPD_UID' 
    }
    ,
   pip_inst_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIP_INST_PREM_CURR_CODE' 
    }
    ,
   pip_inst_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'PIP_INST_PREM_FC' 
    }
    ,
   pip_inst_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_1' 
    }
    ,
   pip_inst_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_2' 
    }
    ,
   pip_inst_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_3' 
    }
    ,
   pip_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_FC' 
    }
    ,
   pip_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_1' 
    }
    ,
   pip_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_2' 
    }
    ,
   pip_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_3' 
    }
    ,
   pip_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_FC' 
    }
    ,
   pip_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_1' 
    }
    ,
   pip_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_2' 
    }
    ,
   pip_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_3' 
    }
    ,
   pip_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_FC' 
    }
    ,
   pip_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_COMP_CODE' 
    }
    ,
   pip_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DEPT_CODE' 
    }
    ,
   pip_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DIVN_CODE' 
    }
    ,
   pip_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_PROD_CODE' 
    }
    ,
   pip_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DS_TYPE' 
    }
    ,
   pip_prem_realised_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_PREM_REALISED_YN' 
    }
    ,
   pip_org_inst_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_FC' 
    }
    ,
   pip_org_inst_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_1' 
    }
    ,
   pip_org_inst_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_2' 
    }
    ,
   pip_org_inst_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_3' 
    }
    ,
   pip_org_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_FC' 
    }
    ,
   pip_org_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_1' 
    }
    ,
   pip_org_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_2' 
    }
    ,
   pip_org_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_3' 
    }
    ,
   pip_org_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_FC' 
    }
    ,
   pip_org_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_1' 
    }
    ,
   pip_org_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_2' 
    }
    ,
   pip_org_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_3' 
    }
    ,
   pip_org_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_FC' 
    }
    ,
   pip_org_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_org_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_org_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_REC_TYPE' 
    }
    ,
   pip_org_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_FC' 
    }
    ,
   pip_org_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_1' 
    }
    ,
   pip_org_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_2' 
    }
    ,
   pip_org_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_3' 
    }
    ,
   pip_prem_realised_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_PREM_REALISED_DT' 
    }
    ,
   pip_inst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_END_NO_IDX' 
    }
    ,
   pip_agency_comm_curr: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_CURR' 
    }
    ,
   pip_diff_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_FC' 
    }
    ,
   pip_diff_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_1' 
    }
    ,
   pip_diff_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_2' 
    }
    ,
   pip_diff_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_3' 
    }
    ,
   pip_end_inst_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PIP_END_INST_PERC' 
    }
    ,
   pip_inst_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_END_SR_NO' 
    }
    ,
   pip_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_01' 
    }
    ,
   pip_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_02' 
    }
    ,
   pip_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_03' 
    }
    ,
   pip_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_04' 
    }
    ,
   pip_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_05' 
    }
    ,
   pip_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_06' 
    }
    ,
   pip_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_07' 
    }
    ,
   pip_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_08' 
    }
    ,
   pip_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_09' 
    }
    ,
   pip_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_10' 
    }
    ,
   pip_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_11' 
    }
    ,
   pip_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_12' 
    }
    ,
   pip_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_13' 
    }
    ,
   pip_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_14' 
    }
    ,
   pip_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_15' 
    }
    ,
   pip_dn_collec_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLEC_STS' 
    }
    ,
   pip_dn_collec_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_DN_COLLEC_DT' 
    }
    ,
   pip_dn_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_FC' 
    }
    ,
   pip_dn_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_dn_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_dn_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_dn_diff_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_FC' 
    }
    ,
   pip_dn_diff_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_1' 
    }
    ,
   pip_dn_diff_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_2' 
    }
    ,
   pip_dn_diff_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_3' 
    }
    ,
   pip_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_CNCT_SYS_ID' 
    }
    ,
   pip_inw_coin_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_FC' 
    }
    ,
   pip_inw_coin_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_1' 
    }
    ,
   pip_inw_coin_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_2' 
    }
    ,
   pip_inw_coin_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_3' 
    }
    ,
   pip_org_inw_coin_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_FC' 
    }
    ,
   pip_org_inw_coin_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_1' 
    }
    ,
   pip_org_inw_coin_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_2' 
    }
    ,
   pip_org_inw_coin_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_3' 
    }
    ,
   pip_ri_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_FC' 
    }
    ,
   pip_ri_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_1' 
    }
    ,
   pip_ri_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_2' 
    }
    ,
   pip_ri_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_3' 
    }
    ,
   pip_ri_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_FC' 
    }
    ,
   pip_ri_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_1' 
    }
    ,
   pip_ri_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_2' 
    }
    ,
   pip_ri_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_3' 
    }
    ,
   pip_org_ri_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_FC' 
    }
    ,
   pip_org_ri_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_1' 
    }
    ,
   pip_org_ri_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_2' 
    }
    ,
   pip_org_ri_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_3' 
    }
    ,
   pip_org_ri_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_FC' 
    }
    ,
   pip_org_ri_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_1' 
    }
    ,
   pip_org_ri_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_2' 
    }
    ,
   pip_org_ri_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_3' 
    }
    ,
   pip_inst_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_INST_TYPE' 
    }
    ,
   pip_fc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FC_SYS_ID' 
    }
    ,
   pip_coll_chg_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_FC' 
    }
    ,
   pip_coll_chg_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_1' 
    }
    ,
   pip_coll_chg_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_2' 
    }
    ,
   pip_coll_chg_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_3' 
    }
    ,
   pip_org_coll_chg_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_FC' 
    }
    ,
   pip_org_coll_chg_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_1' 
    }
    ,
   pip_org_coll_chg_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_2' 
    }
    ,
   pip_org_coll_chg_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_3' 
    }
    ,
   pip_bill_due_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_BILL_DUE_DT' 
    }
    ,
   pip_bill_dt: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_BILL_DT' 
    }
    ,
   pip_inst_warr_days: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_WARR_DAYS' 
    }
    ,
   pip_inst_warr_due_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_INST_WARR_DUE_DT' 
    }
    ,
   pip_fo_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FO_SYS_ID' 
    }
    ,
   pip_fps_place_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FPS_PLACE_IDX' 
    }
    ,
   pip_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PIP_SYS_ID' 
    }
    ,
   pip_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_POL_SYS_ID' 
    }
    ,
   pip_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_END_NO_IDX' 
    }
    ,
   pip_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_END_SR_NO' 
    }
    ,
   pip_inst_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_NO' 
    }
    ,
   pip_inst_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_INST_DT' 
    }
    ,
   pip_inst_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PIP_INST_PERC' 
    }
    ,
   pip_remarks: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_REMARKS' 
    }
    ,
   pip_agency_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_FC' 
    }
    ,
   pip_agency_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_1' 
    }
    ,
   pip_agency_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_2' 
    }
    ,
   pip_agency_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_3' 
    }
    ,
   pip_pcl_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_PCL_SYS_ID' 
    }
    ,
   pip_collec_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_COLLEC_DT' 
    }
    ,
   pip_bg_mode_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_BG_MODE_YN' 
    }
    ,
   pip_collec_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_COLLEC_STS' 
    }
    ,
   pip_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PIP_CR_DT' 
    }
    ,
   pip_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIP_CR_UID' 
    }
    ,
   pip_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_UPD_DT' 
    }
    ,
   pip_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_UPD_UID' 
    }
    ,
   pip_inst_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIP_INST_PREM_CURR_CODE' 
    }
    ,
   pip_inst_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'PIP_INST_PREM_FC' 
    }
    ,
   pip_inst_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_1' 
    }
    ,
   pip_inst_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_2' 
    }
    ,
   pip_inst_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_3' 
    }
    ,
   pip_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_FC' 
    }
    ,
   pip_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_1' 
    }
    ,
   pip_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_2' 
    }
    ,
   pip_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_3' 
    }
    ,
   pip_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_FC' 
    }
    ,
   pip_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_1' 
    }
    ,
   pip_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_2' 
    }
    ,
   pip_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_3' 
    }
    ,
   pip_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_FC' 
    }
    ,
   pip_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_COMP_CODE' 
    }
    ,
   pip_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DEPT_CODE' 
    }
    ,
   pip_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DIVN_CODE' 
    }
    ,
   pip_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_PROD_CODE' 
    }
    ,
   pip_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DS_TYPE' 
    }
    ,
   pip_prem_realised_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_PREM_REALISED_YN' 
    }
    ,
   pip_org_inst_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_FC' 
    }
    ,
   pip_org_inst_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_1' 
    }
    ,
   pip_org_inst_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_2' 
    }
    ,
   pip_org_inst_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_3' 
    }
    ,
   pip_org_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_FC' 
    }
    ,
   pip_org_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_1' 
    }
    ,
   pip_org_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_2' 
    }
    ,
   pip_org_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_3' 
    }
    ,
   pip_org_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_FC' 
    }
    ,
   pip_org_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_1' 
    }
    ,
   pip_org_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_2' 
    }
    ,
   pip_org_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_3' 
    }
    ,
   pip_org_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_FC' 
    }
    ,
   pip_org_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_org_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_org_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_REC_TYPE' 
    }
    ,
   pip_org_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_FC' 
    }
    ,
   pip_org_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_1' 
    }
    ,
   pip_org_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_2' 
    }
    ,
   pip_org_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_3' 
    }
    ,
   pip_prem_realised_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_PREM_REALISED_DT' 
    }
    ,
   pip_inst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_END_NO_IDX' 
    }
    ,
   pip_agency_comm_curr: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_CURR' 
    }
    ,
   pip_diff_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_FC' 
    }
    ,
   pip_diff_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_1' 
    }
    ,
   pip_diff_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_2' 
    }
    ,
   pip_diff_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_3' 
    }
    ,
   pip_end_inst_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PIP_END_INST_PERC' 
    }
    ,
   pip_inst_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_END_SR_NO' 
    }
    ,
   pip_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_01' 
    }
    ,
   pip_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_02' 
    }
    ,
   pip_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_03' 
    }
    ,
   pip_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_04' 
    }
    ,
   pip_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_05' 
    }
    ,
   pip_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_06' 
    }
    ,
   pip_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_07' 
    }
    ,
   pip_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_08' 
    }
    ,
   pip_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_09' 
    }
    ,
   pip_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_10' 
    }
    ,
   pip_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_11' 
    }
    ,
   pip_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_12' 
    }
    ,
   pip_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_13' 
    }
    ,
   pip_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_14' 
    }
    ,
   pip_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_15' 
    }
    ,
   pip_dn_collec_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLEC_STS' 
    }
    ,
   pip_dn_collec_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_DN_COLLEC_DT' 
    }
    ,
   pip_dn_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_FC' 
    }
    ,
   pip_dn_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_dn_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_dn_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_dn_diff_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_FC' 
    }
    ,
   pip_dn_diff_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_1' 
    }
    ,
   pip_dn_diff_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_2' 
    }
    ,
   pip_dn_diff_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_3' 
    }
    ,
   pip_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_CNCT_SYS_ID' 
    }
    ,
   pip_inw_coin_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_FC' 
    }
    ,
   pip_inw_coin_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_1' 
    }
    ,
   pip_inw_coin_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_2' 
    }
    ,
   pip_inw_coin_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_3' 
    }
    ,
   pip_org_inw_coin_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_FC' 
    }
    ,
   pip_org_inw_coin_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_1' 
    }
    ,
   pip_org_inw_coin_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_2' 
    }
    ,
   pip_org_inw_coin_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_3' 
    }
    ,
   pip_ri_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_FC' 
    }
    ,
   pip_ri_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_1' 
    }
    ,
   pip_ri_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_2' 
    }
    ,
   pip_ri_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_3' 
    }
    ,
   pip_ri_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_FC' 
    }
    ,
   pip_ri_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_1' 
    }
    ,
   pip_ri_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_2' 
    }
    ,
   pip_ri_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_3' 
    }
    ,
   pip_org_ri_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_FC' 
    }
    ,
   pip_org_ri_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_1' 
    }
    ,
   pip_org_ri_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_2' 
    }
    ,
   pip_org_ri_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_3' 
    }
    ,
   pip_org_ri_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_FC' 
    }
    ,
   pip_org_ri_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_1' 
    }
    ,
   pip_org_ri_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_2' 
    }
    ,
   pip_org_ri_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_3' 
    }
    ,
   pip_inst_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_INST_TYPE' 
    }
    ,
   pip_fc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FC_SYS_ID' 
    }
    ,
   pip_coll_chg_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_FC' 
    }
    ,
   pip_coll_chg_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_1' 
    }
    ,
   pip_coll_chg_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_2' 
    }
    ,
   pip_coll_chg_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_3' 
    }
    ,
   pip_org_coll_chg_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_FC' 
    }
    ,
   pip_org_coll_chg_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_1' 
    }
    ,
   pip_org_coll_chg_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_2' 
    }
    ,
   pip_org_coll_chg_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_3' 
    }
    ,
   pip_bill_due_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_BILL_DUE_DT' 
    }
    ,
   pip_bill_dt: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_BILL_DT' 
    }
    ,
   pip_inst_warr_days: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_WARR_DAYS' 
    }
    ,
   pip_inst_warr_due_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_INST_WARR_DUE_DT' 
    }
    ,
   pip_fo_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FO_SYS_ID' 
    }
    ,
   pip_fps_place_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FPS_PLACE_IDX' 
    }
    ,
   pip_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PIP_SYS_ID' 
    }
    ,
   pip_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_POL_SYS_ID' 
    }
    ,
   pip_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_END_NO_IDX' 
    }
    ,
   pip_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_END_SR_NO' 
    }
    ,
   pip_inst_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_NO' 
    }
    ,
   pip_inst_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_INST_DT' 
    }
    ,
   pip_inst_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PIP_INST_PERC' 
    }
    ,
   pip_remarks: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_REMARKS' 
    }
    ,
   pip_agency_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_FC' 
    }
    ,
   pip_agency_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_1' 
    }
    ,
   pip_agency_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_2' 
    }
    ,
   pip_agency_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_3' 
    }
    ,
   pip_pcl_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_PCL_SYS_ID' 
    }
    ,
   pip_collec_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_COLLEC_DT' 
    }
    ,
   pip_bg_mode_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_BG_MODE_YN' 
    }
    ,
   pip_collec_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_COLLEC_STS' 
    }
    ,
   pip_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PIP_CR_DT' 
    }
    ,
   pip_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIP_CR_UID' 
    }
    ,
   pip_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_UPD_DT' 
    }
    ,
   pip_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_UPD_UID' 
    }
    ,
   pip_inst_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIP_INST_PREM_CURR_CODE' 
    }
    ,
   pip_inst_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'PIP_INST_PREM_FC' 
    }
    ,
   pip_inst_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_1' 
    }
    ,
   pip_inst_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_2' 
    }
    ,
   pip_inst_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_3' 
    }
    ,
   pip_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_FC' 
    }
    ,
   pip_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_1' 
    }
    ,
   pip_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_2' 
    }
    ,
   pip_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_3' 
    }
    ,
   pip_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_FC' 
    }
    ,
   pip_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_1' 
    }
    ,
   pip_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_2' 
    }
    ,
   pip_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_3' 
    }
    ,
   pip_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_FC' 
    }
    ,
   pip_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_COMP_CODE' 
    }
    ,
   pip_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DEPT_CODE' 
    }
    ,
   pip_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DIVN_CODE' 
    }
    ,
   pip_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_PROD_CODE' 
    }
    ,
   pip_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DS_TYPE' 
    }
    ,
   pip_prem_realised_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_PREM_REALISED_YN' 
    }
    ,
   pip_org_inst_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_FC' 
    }
    ,
   pip_org_inst_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_1' 
    }
    ,
   pip_org_inst_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_2' 
    }
    ,
   pip_org_inst_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_3' 
    }
    ,
   pip_org_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_FC' 
    }
    ,
   pip_org_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_1' 
    }
    ,
   pip_org_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_2' 
    }
    ,
   pip_org_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_3' 
    }
    ,
   pip_org_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_FC' 
    }
    ,
   pip_org_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_1' 
    }
    ,
   pip_org_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_2' 
    }
    ,
   pip_org_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_3' 
    }
    ,
   pip_org_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_FC' 
    }
    ,
   pip_org_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_org_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_org_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_REC_TYPE' 
    }
    ,
   pip_org_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_FC' 
    }
    ,
   pip_org_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_1' 
    }
    ,
   pip_org_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_2' 
    }
    ,
   pip_org_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_3' 
    }
    ,
   pip_prem_realised_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_PREM_REALISED_DT' 
    }
    ,
   pip_inst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_END_NO_IDX' 
    }
    ,
   pip_agency_comm_curr: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_CURR' 
    }
    ,
   pip_diff_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_FC' 
    }
    ,
   pip_diff_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_1' 
    }
    ,
   pip_diff_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_2' 
    }
    ,
   pip_diff_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_3' 
    }
    ,
   pip_end_inst_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PIP_END_INST_PERC' 
    }
    ,
   pip_inst_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_END_SR_NO' 
    }
    ,
   pip_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_01' 
    }
    ,
   pip_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_02' 
    }
    ,
   pip_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_03' 
    }
    ,
   pip_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_04' 
    }
    ,
   pip_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_05' 
    }
    ,
   pip_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_06' 
    }
    ,
   pip_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_07' 
    }
    ,
   pip_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_08' 
    }
    ,
   pip_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_09' 
    }
    ,
   pip_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_10' 
    }
    ,
   pip_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_11' 
    }
    ,
   pip_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_12' 
    }
    ,
   pip_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_13' 
    }
    ,
   pip_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_14' 
    }
    ,
   pip_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_15' 
    }
    ,
   pip_dn_collec_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLEC_STS' 
    }
    ,
   pip_dn_collec_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_DN_COLLEC_DT' 
    }
    ,
   pip_dn_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_FC' 
    }
    ,
   pip_dn_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_dn_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_dn_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_dn_diff_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_FC' 
    }
    ,
   pip_dn_diff_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_1' 
    }
    ,
   pip_dn_diff_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_2' 
    }
    ,
   pip_dn_diff_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_3' 
    }
    ,
   pip_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_CNCT_SYS_ID' 
    }
    ,
   pip_inw_coin_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_FC' 
    }
    ,
   pip_inw_coin_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_1' 
    }
    ,
   pip_inw_coin_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_2' 
    }
    ,
   pip_inw_coin_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_3' 
    }
    ,
   pip_org_inw_coin_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_FC' 
    }
    ,
   pip_org_inw_coin_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_1' 
    }
    ,
   pip_org_inw_coin_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_2' 
    }
    ,
   pip_org_inw_coin_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_3' 
    }
    ,
   pip_ri_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_FC' 
    }
    ,
   pip_ri_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_1' 
    }
    ,
   pip_ri_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_2' 
    }
    ,
   pip_ri_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_3' 
    }
    ,
   pip_ri_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_FC' 
    }
    ,
   pip_ri_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_1' 
    }
    ,
   pip_ri_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_2' 
    }
    ,
   pip_ri_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_3' 
    }
    ,
   pip_org_ri_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_FC' 
    }
    ,
   pip_org_ri_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_1' 
    }
    ,
   pip_org_ri_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_2' 
    }
    ,
   pip_org_ri_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_3' 
    }
    ,
   pip_org_ri_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_FC' 
    }
    ,
   pip_org_ri_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_1' 
    }
    ,
   pip_org_ri_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_2' 
    }
    ,
   pip_org_ri_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_3' 
    }
    ,
   pip_inst_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_INST_TYPE' 
    }
    ,
   pip_fc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FC_SYS_ID' 
    }
    ,
   pip_coll_chg_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_FC' 
    }
    ,
   pip_coll_chg_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_1' 
    }
    ,
   pip_coll_chg_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_2' 
    }
    ,
   pip_coll_chg_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_3' 
    }
    ,
   pip_org_coll_chg_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_FC' 
    }
    ,
   pip_org_coll_chg_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_1' 
    }
    ,
   pip_org_coll_chg_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_2' 
    }
    ,
   pip_org_coll_chg_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_3' 
    }
    ,
   pip_bill_due_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_BILL_DUE_DT' 
    }
    ,
   pip_bill_dt: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_BILL_DT' 
    }
    ,
   pip_inst_warr_days: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_WARR_DAYS' 
    }
    ,
   pip_inst_warr_due_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_INST_WARR_DUE_DT' 
    }
    ,
   pip_fo_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FO_SYS_ID' 
    }
    ,
   pip_fps_place_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FPS_PLACE_IDX' 
    }
    ,
   pip_inw_coin_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_FC' 
    }
    ,
   pip_inw_coin_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_1' 
    }
    ,
   pip_inw_coin_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_2' 
    }
    ,
   pip_inw_coin_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_3' 
    }
    ,
   pip_org_inw_coin_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_FC' 
    }
    ,
   pip_org_inw_coin_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_1' 
    }
    ,
   pip_org_inw_coin_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_2' 
    }
    ,
   pip_org_inw_coin_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_3' 
    }
    ,
   pip_ri_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_FC' 
    }
    ,
   pip_ri_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_1' 
    }
    ,
   pip_ri_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_2' 
    }
    ,
   pip_ri_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_3' 
    }
    ,
   pip_ri_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_FC' 
    }
    ,
   pip_ri_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_1' 
    }
    ,
   pip_ri_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_2' 
    }
    ,
   pip_ri_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_3' 
    }
    ,
   pip_org_ri_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_FC' 
    }
    ,
   pip_org_ri_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_1' 
    }
    ,
   pip_org_ri_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_2' 
    }
    ,
   pip_org_ri_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_3' 
    }
    ,
   pip_org_ri_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_FC' 
    }
    ,
   pip_org_ri_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_1' 
    }
    ,
   pip_org_ri_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_2' 
    }
    ,
   pip_org_ri_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_3' 
    }
    ,
   pip_inst_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_INST_TYPE' 
    }
    ,
   pip_fc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FC_SYS_ID' 
    }
    ,
   pip_coll_chg_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_FC' 
    }
    ,
   pip_coll_chg_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_1' 
    }
    ,
   pip_coll_chg_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_2' 
    }
    ,
   pip_coll_chg_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_3' 
    }
    ,
   pip_org_coll_chg_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_FC' 
    }
    ,
   pip_org_coll_chg_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_1' 
    }
    ,
   pip_org_coll_chg_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_2' 
    }
    ,
   pip_org_coll_chg_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_3' 
    }
    ,
   pip_bill_due_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_BILL_DUE_DT' 
    }
    ,
   pip_bill_dt: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_BILL_DT' 
    }
    ,
   pip_inst_warr_days: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_WARR_DAYS' 
    }
    ,
   pip_inst_warr_due_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_INST_WARR_DUE_DT' 
    }
    ,
   pip_fo_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FO_SYS_ID' 
    }
    ,
   pip_fps_place_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FPS_PLACE_IDX' 
    }
    ,
   pip_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PIP_SYS_ID' 
    }
    ,
   pip_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_POL_SYS_ID' 
    }
    ,
   pip_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_END_NO_IDX' 
    }
    ,
   pip_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_END_SR_NO' 
    }
    ,
   pip_inst_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_NO' 
    }
    ,
   pip_inst_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_INST_DT' 
    }
    ,
   pip_inst_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PIP_INST_PERC' 
    }
    ,
   pip_remarks: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_REMARKS' 
    }
    ,
   pip_agency_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_FC' 
    }
    ,
   pip_agency_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_1' 
    }
    ,
   pip_agency_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_2' 
    }
    ,
   pip_agency_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_3' 
    }
    ,
   pip_pcl_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_PCL_SYS_ID' 
    }
    ,
   pip_collec_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_COLLEC_DT' 
    }
    ,
   pip_bg_mode_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_BG_MODE_YN' 
    }
    ,
   pip_collec_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_COLLEC_STS' 
    }
    ,
   pip_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PIP_CR_DT' 
    }
    ,
   pip_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIP_CR_UID' 
    }
    ,
   pip_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_UPD_DT' 
    }
    ,
   pip_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_UPD_UID' 
    }
    ,
   pip_inst_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIP_INST_PREM_CURR_CODE' 
    }
    ,
   pip_inst_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'PIP_INST_PREM_FC' 
    }
    ,
   pip_inst_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_1' 
    }
    ,
   pip_inst_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_2' 
    }
    ,
   pip_inst_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_3' 
    }
    ,
   pip_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_FC' 
    }
    ,
   pip_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_1' 
    }
    ,
   pip_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_2' 
    }
    ,
   pip_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_3' 
    }
    ,
   pip_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_FC' 
    }
    ,
   pip_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_1' 
    }
    ,
   pip_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_2' 
    }
    ,
   pip_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_3' 
    }
    ,
   pip_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_FC' 
    }
    ,
   pip_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_COMP_CODE' 
    }
    ,
   pip_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DEPT_CODE' 
    }
    ,
   pip_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DIVN_CODE' 
    }
    ,
   pip_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_PROD_CODE' 
    }
    ,
   pip_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DS_TYPE' 
    }
    ,
   pip_prem_realised_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_PREM_REALISED_YN' 
    }
    ,
   pip_org_inst_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_FC' 
    }
    ,
   pip_org_inst_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_1' 
    }
    ,
   pip_org_inst_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_2' 
    }
    ,
   pip_org_inst_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_3' 
    }
    ,
   pip_org_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_FC' 
    }
    ,
   pip_org_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_1' 
    }
    ,
   pip_org_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_2' 
    }
    ,
   pip_org_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_3' 
    }
    ,
   pip_org_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_FC' 
    }
    ,
   pip_org_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_1' 
    }
    ,
   pip_org_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_2' 
    }
    ,
   pip_org_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_3' 
    }
    ,
   pip_org_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_FC' 
    }
    ,
   pip_org_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_org_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_org_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_REC_TYPE' 
    }
    ,
   pip_org_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_FC' 
    }
    ,
   pip_org_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_1' 
    }
    ,
   pip_org_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_2' 
    }
    ,
   pip_org_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_3' 
    }
    ,
   pip_prem_realised_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_PREM_REALISED_DT' 
    }
    ,
   pip_inst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_END_NO_IDX' 
    }
    ,
   pip_agency_comm_curr: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_CURR' 
    }
    ,
   pip_diff_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_FC' 
    }
    ,
   pip_diff_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_1' 
    }
    ,
   pip_diff_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_2' 
    }
    ,
   pip_diff_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_3' 
    }
    ,
   pip_end_inst_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PIP_END_INST_PERC' 
    }
    ,
   pip_inst_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_END_SR_NO' 
    }
    ,
   pip_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_01' 
    }
    ,
   pip_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_02' 
    }
    ,
   pip_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_03' 
    }
    ,
   pip_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_04' 
    }
    ,
   pip_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_05' 
    }
    ,
   pip_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_06' 
    }
    ,
   pip_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_07' 
    }
    ,
   pip_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_08' 
    }
    ,
   pip_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_09' 
    }
    ,
   pip_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_10' 
    }
    ,
   pip_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_11' 
    }
    ,
   pip_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_12' 
    }
    ,
   pip_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_13' 
    }
    ,
   pip_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_14' 
    }
    ,
   pip_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_15' 
    }
    ,
   pip_dn_collec_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLEC_STS' 
    }
    ,
   pip_dn_collec_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_DN_COLLEC_DT' 
    }
    ,
   pip_dn_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_FC' 
    }
    ,
   pip_dn_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_dn_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_dn_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_dn_diff_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_FC' 
    }
    ,
   pip_dn_diff_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_1' 
    }
    ,
   pip_dn_diff_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_2' 
    }
    ,
   pip_dn_diff_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_3' 
    }
    ,
   pip_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_CNCT_SYS_ID' 
    }
    ,
   pip_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PIP_SYS_ID' 
    }
    ,
   pip_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_POL_SYS_ID' 
    }
    ,
   pip_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_END_NO_IDX' 
    }
    ,
   pip_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_END_SR_NO' 
    }
    ,
   pip_inst_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_NO' 
    }
    ,
   pip_inst_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_INST_DT' 
    }
    ,
   pip_inst_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PIP_INST_PERC' 
    }
    ,
   pip_remarks: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_REMARKS' 
    }
    ,
   pip_agency_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_FC' 
    }
    ,
   pip_agency_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_1' 
    }
    ,
   pip_agency_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_2' 
    }
    ,
   pip_agency_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_LC_3' 
    }
    ,
   pip_pcl_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_PCL_SYS_ID' 
    }
    ,
   pip_collec_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_COLLEC_DT' 
    }
    ,
   pip_bg_mode_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_BG_MODE_YN' 
    }
    ,
   pip_collec_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_COLLEC_STS' 
    }
    ,
   pip_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PIP_CR_DT' 
    }
    ,
   pip_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIP_CR_UID' 
    }
    ,
   pip_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_UPD_DT' 
    }
    ,
   pip_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_UPD_UID' 
    }
    ,
   pip_inst_prem_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIP_INST_PREM_CURR_CODE' 
    }
    ,
   pip_inst_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'PIP_INST_PREM_FC' 
    }
    ,
   pip_inst_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_1' 
    }
    ,
   pip_inst_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_2' 
    }
    ,
   pip_inst_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_PREM_LC_3' 
    }
    ,
   pip_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_FC' 
    }
    ,
   pip_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_1' 
    }
    ,
   pip_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_2' 
    }
    ,
   pip_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_LOAD_LC_3' 
    }
    ,
   pip_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_FC' 
    }
    ,
   pip_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_1' 
    }
    ,
   pip_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_2' 
    }
    ,
   pip_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INST_DISC_LC_3' 
    }
    ,
   pip_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_FC' 
    }
    ,
   pip_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_COMP_CODE' 
    }
    ,
   pip_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DEPT_CODE' 
    }
    ,
   pip_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DIVN_CODE' 
    }
    ,
   pip_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_PROD_CODE' 
    }
    ,
   pip_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DS_TYPE' 
    }
    ,
   pip_prem_realised_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_PREM_REALISED_YN' 
    }
    ,
   pip_org_inst_prem_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_FC' 
    }
    ,
   pip_org_inst_prem_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_1' 
    }
    ,
   pip_org_inst_prem_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_2' 
    }
    ,
   pip_org_inst_prem_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_PREM_LC_3' 
    }
    ,
   pip_org_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_FC' 
    }
    ,
   pip_org_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_1' 
    }
    ,
   pip_org_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_2' 
    }
    ,
   pip_org_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_DISC_LC_3' 
    }
    ,
   pip_org_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_FC' 
    }
    ,
   pip_org_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_1' 
    }
    ,
   pip_org_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_2' 
    }
    ,
   pip_org_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INST_LOAD_LC_3' 
    }
    ,
   pip_org_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_FC' 
    }
    ,
   pip_org_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_org_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_org_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_REC_TYPE' 
    }
    ,
   pip_org_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_FC' 
    }
    ,
   pip_org_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_1' 
    }
    ,
   pip_org_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_2' 
    }
    ,
   pip_org_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COMM_LC_3' 
    }
    ,
   pip_prem_realised_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_PREM_REALISED_DT' 
    }
    ,
   pip_inst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_END_NO_IDX' 
    }
    ,
   pip_agency_comm_curr: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_AGENCY_COMM_CURR' 
    }
    ,
   pip_diff_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_FC' 
    }
    ,
   pip_diff_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_1' 
    }
    ,
   pip_diff_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_2' 
    }
    ,
   pip_diff_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DIFF_AMT_LC_3' 
    }
    ,
   pip_end_inst_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PIP_END_INST_PERC' 
    }
    ,
   pip_inst_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_END_SR_NO' 
    }
    ,
   pip_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_01' 
    }
    ,
   pip_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_02' 
    }
    ,
   pip_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_03' 
    }
    ,
   pip_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_04' 
    }
    ,
   pip_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_05' 
    }
    ,
   pip_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_06' 
    }
    ,
   pip_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_07' 
    }
    ,
   pip_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_08' 
    }
    ,
   pip_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_09' 
    }
    ,
   pip_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_10' 
    }
    ,
   pip_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_11' 
    }
    ,
   pip_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_12' 
    }
    ,
   pip_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_13' 
    }
    ,
   pip_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_14' 
    }
    ,
   pip_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIP_FLEX_15' 
    }
    ,
   pip_dn_collec_sts: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLEC_STS' 
    }
    ,
   pip_dn_collec_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_DN_COLLEC_DT' 
    }
    ,
   pip_dn_collected_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_FC' 
    }
    ,
   pip_dn_collected_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_1' 
    }
    ,
   pip_dn_collected_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_2' 
    }
    ,
   pip_dn_collected_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_COLLECTED_AMT_LC_3' 
    }
    ,
   pip_dn_diff_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_FC' 
    }
    ,
   pip_dn_diff_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_1' 
    }
    ,
   pip_dn_diff_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_2' 
    }
    ,
   pip_dn_diff_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_DN_DIFF_AMT_LC_3' 
    }
    ,
   pip_cnct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_CNCT_SYS_ID' 
    }
    ,
   pip_inw_coin_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_FC' 
    }
    ,
   pip_inw_coin_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_1' 
    }
    ,
   pip_inw_coin_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_2' 
    }
    ,
   pip_inw_coin_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_INW_COIN_COMM_LC_3' 
    }
    ,
   pip_org_inw_coin_comm_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_FC' 
    }
    ,
   pip_org_inw_coin_comm_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_1' 
    }
    ,
   pip_org_inw_coin_comm_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_2' 
    }
    ,
   pip_org_inw_coin_comm_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_INW_COIN_COMM_LC_3' 
    }
    ,
   pip_ri_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_FC' 
    }
    ,
   pip_ri_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_1' 
    }
    ,
   pip_ri_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_2' 
    }
    ,
   pip_ri_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_LOAD_LC_3' 
    }
    ,
   pip_ri_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_FC' 
    }
    ,
   pip_ri_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_1' 
    }
    ,
   pip_ri_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_2' 
    }
    ,
   pip_ri_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_RI_INST_DISC_LC_3' 
    }
    ,
   pip_org_ri_inst_disc_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_FC' 
    }
    ,
   pip_org_ri_inst_disc_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_1' 
    }
    ,
   pip_org_ri_inst_disc_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_2' 
    }
    ,
   pip_org_ri_inst_disc_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_DISC_LC_3' 
    }
    ,
   pip_org_ri_inst_load_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_FC' 
    }
    ,
   pip_org_ri_inst_load_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_1' 
    }
    ,
   pip_org_ri_inst_load_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_2' 
    }
    ,
   pip_org_ri_inst_load_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_RI_INST_LOAD_LC_3' 
    }
    ,
   pip_inst_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIP_INST_TYPE' 
    }
    ,
   pip_fc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FC_SYS_ID' 
    }
    ,
   pip_coll_chg_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_FC' 
    }
    ,
   pip_coll_chg_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_1' 
    }
    ,
   pip_coll_chg_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_2' 
    }
    ,
   pip_coll_chg_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_COLL_CHG_AMT_LC_3' 
    }
    ,
   pip_org_coll_chg_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_FC' 
    }
    ,
   pip_org_coll_chg_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_1' 
    }
    ,
   pip_org_coll_chg_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_2' 
    }
    ,
   pip_org_coll_chg_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIP_ORG_COLL_CHG_AMT_LC_3' 
    }
    ,
   pip_bill_due_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_BILL_DUE_DT' 
    }
    ,
   pip_bill_dt: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIP_BILL_DT' 
    }
    ,
   pip_inst_warr_days: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_INST_WARR_DAYS' 
    }
    ,
   pip_inst_warr_due_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIP_INST_WARR_DUE_DT' 
    }
    ,
   pip_fo_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FO_SYS_ID' 
    }
    ,
   pip_fps_place_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIP_FPS_PLACE_IDX' 
    }
    
    }, {
        tableName: 'PGIT_POL_INST_PREM',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitPolInstPrem;
};