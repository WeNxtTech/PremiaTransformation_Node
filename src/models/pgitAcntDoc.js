module.exports = (sequelize, DataTypes) => {
  const PgitAcntDoc = sequelize.define('PgitAcntDoc', {
       ad_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'AD_SYS_ID' 
    }
    ,
   ad_tran_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_TRAN_SYS_ID' 
    }
    ,
   ad_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_POL_SYS_ID' 
    }
    ,
   ad_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_END_NO_IDX' 
    }
    ,
   ad_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_END_SR_NO' 
    }
    ,
   ad_prov_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'AD_PROV_YN' 
    }
    ,
   ad_bulk_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'AD_BULK_YN' 
    }
    ,
   ad_pol_no: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_POL_NO' 
    }
    ,
   ad_end_no: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_END_NO' 
    }
    ,
   ad_clm_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_CLM_SYS_ID' 
    }
    ,
   ad_clm_no: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_CLM_NO' 
    }
    ,
   ad_cust_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_CUST_CODE' 
    }
    ,
   ad_cust_cons_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_CUST_CONS_CODE' 
    }
    ,
   ad_doc_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_DOC_TYPE' 
    }
    ,
   ad_tran_type: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'AD_TRAN_TYPE' 
    }
    ,
   ad_tran_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'AD_TRAN_CODE' 
    }
    ,
   ad_acnt_year: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_ACNT_YEAR' 
    }
    ,
   ad_doc_no: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'AD_DOC_NO' 
    }
    ,
   ad_doc_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'AD_DOC_DT' 
    }
    ,
   ad_cal_month: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_CAL_MONTH' 
    }
    ,
   ad_cal_year: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_CAL_YEAR' 
    }
    ,
   ad_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_SR_NO' 
    }
    ,
   ad_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_COMP_CODE' 
    }
    ,
   ad_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_DIVN_CODE' 
    }
    ,
   ad_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_DEPT_CODE' 
    }
    ,
   ad_int_ent_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'AD_INT_ENT_YN' 
    }
    ,
   ad_drcr_flag: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_DRCR_FLAG' 
    }
    ,
   ad_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_CURR_CODE' 
    }
    ,
   ad_amt_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'AD_AMT_FC' 
    }
    ,
   ad_amt_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'AD_AMT_LC_1' 
    }
    ,
   ad_amt_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'AD_AMT_LC_2' 
    }
    ,
   ad_amt_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'AD_AMT_LC_3' 
    }
    ,
   ad_pd_sys_id: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'AD_PD_SYS_ID' 
    }
    ,
   ad_narration: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'AD_NARRATION' 
    }
    ,
   ad_narration_bl: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'AD_NARRATION_BL' 
    }
    ,
   ad_remarks: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'AD_REMARKS' 
    }
    ,
   ad_remarks_bl: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'AD_REMARKS_BL' 
    }
    ,
   ad_print_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'AD_PRINT_YN' 
    }
    ,
   ad_post_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'AD_POST_YN' 
    }
    ,
   ad_lot_no: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_LOT_NO' 
    }
    ,
   ad_main_acnt_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_MAIN_ACNT_CODE' 
    }
    ,
   ad_sub_acnt_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_SUB_ACNT_CODE' 
    }
    ,
   ad_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'AD_CR_UID' 
    }
    ,
   ad_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'AD_CR_DT' 
    }
    ,
   ad_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_UPD_UID' 
    }
    ,
   ad_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'AD_UPD_DT' 
    }
    ,
   ad_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_01' 
    }
    ,
   ad_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_02' 
    }
    ,
   ad_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_03' 
    }
    ,
   ad_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_04' 
    }
    ,
   ad_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_05' 
    }
    ,
   ad_flex_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_06' 
    }
    ,
   ad_flex_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_07' 
    }
    ,
   ad_flex_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_08' 
    }
    ,
   ad_flex_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_09' 
    }
    ,
   ad_flex_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_10' 
    }
    ,
   ad_flex_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_11' 
    }
    ,
   ad_flex_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_12' 
    }
    ,
   ad_flex_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_13' 
    }
    ,
   ad_flex_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_14' 
    }
    ,
   ad_flex_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_15' 
    }
    ,
   ad_ds_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_DS_TYPE' 
    }
    ,
   ad_prod_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_PROD_CODE' 
    }
    ,
   ad_anly_code_1: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_ANLY_CODE_1' 
    }
    ,
   ad_anly_code_2: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_ANLY_CODE_2' 
    }
    ,
   ad_acty_code_1: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_ACTY_CODE_1' 
    }
    ,
   ad_acty_code_2: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_ACTY_CODE_2' 
    }
    ,
   ad_assr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_ASSR_CODE' 
    }
    ,
   ad_assr_name: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_ASSR_NAME' 
    }
    ,
   ad_txn_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'AD_TXN_COMP_CODE' 
    }
    ,
   ad_txn_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'AD_TXN_DIVN_CODE' 
    }
    ,
   ad_txn_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'AD_TXN_DEPT_CODE' 
    }
    ,
   ad_pi_ref_no: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_PI_REF_NO' 
    }
    ,
   ad_pcl_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_PCL_SYS_ID' 
    }
    ,
   ad_instr_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_INSTR_TYPE' 
    }
    ,
   ad_pcdtl_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_PCDTL_SYS_ID' 
    }
    ,
   ad_pci_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_PCI_SYS_ID' 
    }
    ,
   ad_clm_txn_ind: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_CLM_TXN_IND' 
    }
    ,
   ad_clm_ref_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_CLM_REF_SYS_ID' 
    }
    ,
   ad_post_ref_no: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_POST_REF_NO' 
    }
    ,
   ad_dummy_doc_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_DUMMY_DOC_NO' 
    }
    ,
   ad_place_no: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_PLACE_NO' 
    }
    ,
   ad_place_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_PLACE_IDX' 
    }
    ,
   ad_tty_acnt_proc_id: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_TTY_ACNT_PROC_ID' 
    }
    ,
   ad_rtaph_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_RTAPH_SYS_ID' 
    }
    ,
   ad_cod_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_COD_SYS_ID' 
    }
    ,
   ad_pcbp_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_PCBP_SYS_ID' 
    }
    ,
   ad_uph_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_UPH_SYS_ID' 
    }
    ,
   ad_upd_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_UPD_TYPE' 
    }
    ,
   ad_urrh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_URRH_SYS_ID' 
    }
    ,
   ad_urrd_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_URRD_TYPE' 
    }
    ,
   ad_ibnrh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_IBNRH_SYS_ID' 
    }
    ,
   ad_ibnrd_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_IBNRD_TYPE' 
    }
    ,
   ad_tty_code: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'AD_TTY_CODE' 
    }
    ,
   ad_tty_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_TTY_TYPE' 
    }
    ,
   ad_ri_period_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_RI_PERIOD_CODE' 
    }
    ,
   ad_revenue_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_REVENUE_TYPE' 
    }
    ,
   ad_tty_type_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_TTY_TYPE_CODE' 
    }
    ,
   ad_uw_year: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_UW_YEAR' 
    }
    ,
   ad_tty_year: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_TTY_YEAR' 
    }
    ,
   ad_ceding_basis: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_CEDING_BASIS' 
    }
    ,
   ad_share_perc: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'AD_SHARE_PERC' 
    }
    ,
   ad_peril_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_PERIL_CLASS_CODE' 
    }
    ,
   ad_ri_cust_name: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_RI_CUST_NAME' 
    }
    ,
   ad_brk_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_BRK_CODE' 
    }
    ,
   ad_tty_acnt_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_TTY_ACNT_TYPE' 
    }
    ,
   ad_tty_tran_type: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_TTY_TRAN_TYPE' 
    }
    ,
   ad_layer_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_LAYER_CODE' 
    }
    ,
   ad_ri_cust_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'AD_RI_CUST_CODE' 
    }
    ,
   ad_flex_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_16' 
    }
    ,
   ad_flex_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_17' 
    }
    ,
   ad_flex_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_18' 
    }
    ,
   ad_flex_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_19' 
    }
    ,
   ad_flex_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'AD_FLEX_20' 
    }
    ,
   ad_due_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'AD_DUE_DT' 
    }
    ,
   ad_coh_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_COH_SYS_ID' 
    }
    ,
   ad_cihd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_CIHD_SYS_ID' 
    }
    ,
   ad_rci_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_RCI_SYS_ID' 
    }
    ,
   ad_spd_sph_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'AD_SPD_SPH_SYS_ID' 
    }
    
    }, {
        tableName: 'PGIT_ACNT_DOC',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitAcntDoc;
};