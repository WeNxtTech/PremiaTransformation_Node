module.exports = (sequelize, DataTypes) => {
  const PgitTaxDtl = sequelize.define('PgitTaxDtl', {
       txd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'TXD_SYS_ID' 
    }
    ,
   txd_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_POL_SYS_ID' 
    }
    ,
   txd_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_END_NO_IDX' 
    }
    ,
   txd_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_END_SR_NO' 
    }
    ,
   txd_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_COMP_CODE' 
    }
    ,
   txd_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_DIVN_CODE' 
    }
    ,
   txd_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_DEPT_CODE' 
    }
    ,
   txd_psur_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PSUR_SYS_ID' 
    }
    ,
   txd_cs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_CS_SYS_ID' 
    }
    ,
   txd_fct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FCT_SYS_ID' 
    }
    ,
   txd_aply_on: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_APLY_ON' 
    }
    ,
   txd_cust_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_CUST_CODE' 
    }
    ,
   txd_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_SR_NO' 
    }
    ,
   txd_tax_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_TAX_CODE' 
    }
    ,
   txd_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_CURR_CODE' 
    }
    ,
   txd_perc: { 
      type: DataTypes.DECIMAL(5, 2), 
      allowNull: false, 
      
      field: 'TXD_PERC' 
    }
    ,
   txd_tax_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_FC' 
    }
    ,
   txd_tax_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_1' 
    }
    ,
   txd_tax_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_2' 
    }
    ,
   txd_tax_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_3' 
    }
    ,
   txd_tax_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_TAX_MODIFIED_YN' 
    }
    ,
   txd_org_perc: { 
      type: DataTypes.DECIMAL(5, 2), 
      allowNull: true, 
      
      field: 'TXD_ORG_PERC' 
    }
    ,
   txd_org_tax_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_FC' 
    }
    ,
   txd_org_tax_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_1' 
    }
    ,
   txd_org_tax_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_2' 
    }
    ,
   txd_org_tax_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_3' 
    }
    ,
   txd_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_01' 
    }
    ,
   txd_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_02' 
    }
    ,
   txd_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_03' 
    }
    ,
   txd_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_04' 
    }
    ,
   txd_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_05' 
    }
    ,
   txd_flex_num_01: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_01' 
    }
    ,
   txd_flex_num_02: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_02' 
    }
    ,
   txd_flex_num_03: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_03' 
    }
    ,
   txd_flex_num_04: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_04' 
    }
    ,
   txd_flex_num_05: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_05' 
    }
    ,
   txd_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_REC_TYPE' 
    }
    ,
   txd_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_CR_UID' 
    }
    ,
   txd_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'TXD_CR_DT' 
    }
    ,
   txd_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_UPD_UID' 
    }
    ,
   txd_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'TXD_UPD_DT' 
    }
    ,
   txd_fps_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FPS_SYS_ID' 
    }
    ,
   txd_fps_place_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FPS_PLACE_IDX' 
    }
    ,
   txd_rev_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_REV_YN' 
    }
    ,
   txd_rtapc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_RTAPC_SYS_ID' 
    }
    ,
   txd_pbrk_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PBRK_SYS_ID' 
    }
    ,
   txd_pcc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PCC_SYS_ID' 
    }
    ,
   txd_fc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FC_SYS_ID' 
    }
    ,
   txd_fcr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FCR_SYS_ID' 
    }
    ,
   txd_pip_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PIP_SYS_ID' 
    }
    ,
   txd_pip_inst_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PIP_INST_NO' 
    }
    ,
   txd_inst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_INST_END_NO_IDX' 
    }
    ,
   txd_rtapcp_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_RTAPCP_SYS_ID' 
    }
    ,
   txd_rtapcp_peril_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_RTAPCP_PERIL_CLASS_CODE' 
    }
    ,
   txd_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PSEC_SYS_ID' 
    }
    ,
   txd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'TXD_SYS_ID' 
    }
    ,
   txd_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_POL_SYS_ID' 
    }
    ,
   txd_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_END_NO_IDX' 
    }
    ,
   txd_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_END_SR_NO' 
    }
    ,
   txd_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_COMP_CODE' 
    }
    ,
   txd_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_DIVN_CODE' 
    }
    ,
   txd_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_DEPT_CODE' 
    }
    ,
   txd_psur_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PSUR_SYS_ID' 
    }
    ,
   txd_cs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_CS_SYS_ID' 
    }
    ,
   txd_fct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FCT_SYS_ID' 
    }
    ,
   txd_aply_on: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_APLY_ON' 
    }
    ,
   txd_cust_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_CUST_CODE' 
    }
    ,
   txd_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_SR_NO' 
    }
    ,
   txd_tax_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_TAX_CODE' 
    }
    ,
   txd_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_CURR_CODE' 
    }
    ,
   txd_perc: { 
      type: DataTypes.DECIMAL(5, 2), 
      allowNull: false, 
      
      field: 'TXD_PERC' 
    }
    ,
   txd_tax_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_FC' 
    }
    ,
   txd_tax_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_1' 
    }
    ,
   txd_tax_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_2' 
    }
    ,
   txd_tax_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_3' 
    }
    ,
   txd_tax_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_TAX_MODIFIED_YN' 
    }
    ,
   txd_org_perc: { 
      type: DataTypes.DECIMAL(5, 2), 
      allowNull: true, 
      
      field: 'TXD_ORG_PERC' 
    }
    ,
   txd_org_tax_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_FC' 
    }
    ,
   txd_org_tax_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_1' 
    }
    ,
   txd_org_tax_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_2' 
    }
    ,
   txd_org_tax_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_3' 
    }
    ,
   txd_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_01' 
    }
    ,
   txd_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_02' 
    }
    ,
   txd_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_03' 
    }
    ,
   txd_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_04' 
    }
    ,
   txd_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_05' 
    }
    ,
   txd_flex_num_01: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_01' 
    }
    ,
   txd_flex_num_02: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_02' 
    }
    ,
   txd_flex_num_03: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_03' 
    }
    ,
   txd_flex_num_04: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_04' 
    }
    ,
   txd_flex_num_05: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_05' 
    }
    ,
   txd_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_REC_TYPE' 
    }
    ,
   txd_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_CR_UID' 
    }
    ,
   txd_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'TXD_CR_DT' 
    }
    ,
   txd_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_UPD_UID' 
    }
    ,
   txd_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'TXD_UPD_DT' 
    }
    ,
   txd_fps_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FPS_SYS_ID' 
    }
    ,
   txd_fps_place_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FPS_PLACE_IDX' 
    }
    ,
   txd_rev_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_REV_YN' 
    }
    ,
   txd_rtapc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_RTAPC_SYS_ID' 
    }
    ,
   txd_pbrk_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PBRK_SYS_ID' 
    }
    ,
   txd_pcc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PCC_SYS_ID' 
    }
    ,
   txd_fc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FC_SYS_ID' 
    }
    ,
   txd_fcr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FCR_SYS_ID' 
    }
    ,
   txd_pip_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PIP_SYS_ID' 
    }
    ,
   txd_pip_inst_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PIP_INST_NO' 
    }
    ,
   txd_inst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_INST_END_NO_IDX' 
    }
    ,
   txd_rtapcp_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_RTAPCP_SYS_ID' 
    }
    ,
   txd_rtapcp_peril_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_RTAPCP_PERIL_CLASS_CODE' 
    }
    ,
   txd_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PSEC_SYS_ID' 
    }
    ,
   txd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'TXD_SYS_ID' 
    }
    ,
   txd_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_POL_SYS_ID' 
    }
    ,
   txd_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_END_NO_IDX' 
    }
    ,
   txd_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_END_SR_NO' 
    }
    ,
   txd_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_COMP_CODE' 
    }
    ,
   txd_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_DIVN_CODE' 
    }
    ,
   txd_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_DEPT_CODE' 
    }
    ,
   txd_psur_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PSUR_SYS_ID' 
    }
    ,
   txd_cs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_CS_SYS_ID' 
    }
    ,
   txd_fct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FCT_SYS_ID' 
    }
    ,
   txd_aply_on: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_APLY_ON' 
    }
    ,
   txd_cust_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_CUST_CODE' 
    }
    ,
   txd_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_SR_NO' 
    }
    ,
   txd_tax_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_TAX_CODE' 
    }
    ,
   txd_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_CURR_CODE' 
    }
    ,
   txd_perc: { 
      type: DataTypes.DECIMAL(5, 2), 
      allowNull: false, 
      
      field: 'TXD_PERC' 
    }
    ,
   txd_tax_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_FC' 
    }
    ,
   txd_tax_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_1' 
    }
    ,
   txd_tax_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_2' 
    }
    ,
   txd_tax_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_3' 
    }
    ,
   txd_tax_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_TAX_MODIFIED_YN' 
    }
    ,
   txd_org_perc: { 
      type: DataTypes.DECIMAL(5, 2), 
      allowNull: true, 
      
      field: 'TXD_ORG_PERC' 
    }
    ,
   txd_org_tax_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_FC' 
    }
    ,
   txd_org_tax_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_1' 
    }
    ,
   txd_org_tax_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_2' 
    }
    ,
   txd_org_tax_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_3' 
    }
    ,
   txd_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_01' 
    }
    ,
   txd_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_02' 
    }
    ,
   txd_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_03' 
    }
    ,
   txd_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_04' 
    }
    ,
   txd_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_05' 
    }
    ,
   txd_flex_num_01: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_01' 
    }
    ,
   txd_flex_num_02: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_02' 
    }
    ,
   txd_flex_num_03: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_03' 
    }
    ,
   txd_flex_num_04: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_04' 
    }
    ,
   txd_flex_num_05: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_05' 
    }
    ,
   txd_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_REC_TYPE' 
    }
    ,
   txd_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_CR_UID' 
    }
    ,
   txd_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'TXD_CR_DT' 
    }
    ,
   txd_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_UPD_UID' 
    }
    ,
   txd_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'TXD_UPD_DT' 
    }
    ,
   txd_fps_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FPS_SYS_ID' 
    }
    ,
   txd_fps_place_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FPS_PLACE_IDX' 
    }
    ,
   txd_rev_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_REV_YN' 
    }
    ,
   txd_rtapc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_RTAPC_SYS_ID' 
    }
    ,
   txd_pbrk_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PBRK_SYS_ID' 
    }
    ,
   txd_pcc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PCC_SYS_ID' 
    }
    ,
   txd_fc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FC_SYS_ID' 
    }
    ,
   txd_fcr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FCR_SYS_ID' 
    }
    ,
   txd_pip_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PIP_SYS_ID' 
    }
    ,
   txd_pip_inst_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PIP_INST_NO' 
    }
    ,
   txd_inst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_INST_END_NO_IDX' 
    }
    ,
   txd_rtapcp_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_RTAPCP_SYS_ID' 
    }
    ,
   txd_rtapcp_peril_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_RTAPCP_PERIL_CLASS_CODE' 
    }
    ,
   txd_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PSEC_SYS_ID' 
    }
    ,
   txd_perc: { 
      type: DataTypes.DECIMAL(5, 2), 
      allowNull: false, 
      
      field: 'TXD_PERC' 
    }
    ,
   txd_tax_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_FC' 
    }
    ,
   txd_tax_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_1' 
    }
    ,
   txd_tax_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_2' 
    }
    ,
   txd_tax_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_3' 
    }
    ,
   txd_tax_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_TAX_MODIFIED_YN' 
    }
    ,
   txd_org_perc: { 
      type: DataTypes.DECIMAL(5, 2), 
      allowNull: true, 
      
      field: 'TXD_ORG_PERC' 
    }
    ,
   txd_org_tax_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_FC' 
    }
    ,
   txd_org_tax_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_1' 
    }
    ,
   txd_org_tax_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_2' 
    }
    ,
   txd_org_tax_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_3' 
    }
    ,
   txd_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_01' 
    }
    ,
   txd_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_02' 
    }
    ,
   txd_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_03' 
    }
    ,
   txd_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_04' 
    }
    ,
   txd_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_05' 
    }
    ,
   txd_flex_num_01: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_01' 
    }
    ,
   txd_flex_num_02: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_02' 
    }
    ,
   txd_flex_num_03: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_03' 
    }
    ,
   txd_flex_num_04: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_04' 
    }
    ,
   txd_flex_num_05: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_05' 
    }
    ,
   txd_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_REC_TYPE' 
    }
    ,
   txd_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_CR_UID' 
    }
    ,
   txd_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'TXD_CR_DT' 
    }
    ,
   txd_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_UPD_UID' 
    }
    ,
   txd_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'TXD_UPD_DT' 
    }
    ,
   txd_fps_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FPS_SYS_ID' 
    }
    ,
   txd_fps_place_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FPS_PLACE_IDX' 
    }
    ,
   txd_rev_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_REV_YN' 
    }
    ,
   txd_rtapc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_RTAPC_SYS_ID' 
    }
    ,
   txd_pbrk_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PBRK_SYS_ID' 
    }
    ,
   txd_pcc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PCC_SYS_ID' 
    }
    ,
   txd_fc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FC_SYS_ID' 
    }
    ,
   txd_fcr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FCR_SYS_ID' 
    }
    ,
   txd_pip_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PIP_SYS_ID' 
    }
    ,
   txd_pip_inst_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PIP_INST_NO' 
    }
    ,
   txd_inst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_INST_END_NO_IDX' 
    }
    ,
   txd_rtapcp_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_RTAPCP_SYS_ID' 
    }
    ,
   txd_rtapcp_peril_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_RTAPCP_PERIL_CLASS_CODE' 
    }
    ,
   txd_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PSEC_SYS_ID' 
    }
    ,
   txd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'TXD_SYS_ID' 
    }
    ,
   txd_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_POL_SYS_ID' 
    }
    ,
   txd_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_END_NO_IDX' 
    }
    ,
   txd_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_END_SR_NO' 
    }
    ,
   txd_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_COMP_CODE' 
    }
    ,
   txd_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_DIVN_CODE' 
    }
    ,
   txd_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_DEPT_CODE' 
    }
    ,
   txd_psur_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PSUR_SYS_ID' 
    }
    ,
   txd_cs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_CS_SYS_ID' 
    }
    ,
   txd_fct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FCT_SYS_ID' 
    }
    ,
   txd_aply_on: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_APLY_ON' 
    }
    ,
   txd_cust_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_CUST_CODE' 
    }
    ,
   txd_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_SR_NO' 
    }
    ,
   txd_tax_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_TAX_CODE' 
    }
    ,
   txd_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_CURR_CODE' 
    }
    ,
   txd_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'TXD_SYS_ID' 
    }
    ,
   txd_pol_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_POL_SYS_ID' 
    }
    ,
   txd_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_END_NO_IDX' 
    }
    ,
   txd_end_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_END_SR_NO' 
    }
    ,
   txd_comp_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_COMP_CODE' 
    }
    ,
   txd_divn_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_DIVN_CODE' 
    }
    ,
   txd_dept_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_DEPT_CODE' 
    }
    ,
   txd_psur_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PSUR_SYS_ID' 
    }
    ,
   txd_cs_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_CS_SYS_ID' 
    }
    ,
   txd_fct_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FCT_SYS_ID' 
    }
    ,
   txd_aply_on: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_APLY_ON' 
    }
    ,
   txd_cust_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_CUST_CODE' 
    }
    ,
   txd_sr_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_SR_NO' 
    }
    ,
   txd_tax_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_TAX_CODE' 
    }
    ,
   txd_curr_code: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'TXD_CURR_CODE' 
    }
    ,
   txd_perc: { 
      type: DataTypes.DECIMAL(5, 2), 
      allowNull: false, 
      
      field: 'TXD_PERC' 
    }
    ,
   txd_tax_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_FC' 
    }
    ,
   txd_tax_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_1' 
    }
    ,
   txd_tax_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_2' 
    }
    ,
   txd_tax_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_TAX_LC_3' 
    }
    ,
   txd_tax_modified_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_TAX_MODIFIED_YN' 
    }
    ,
   txd_org_perc: { 
      type: DataTypes.DECIMAL(5, 2), 
      allowNull: true, 
      
      field: 'TXD_ORG_PERC' 
    }
    ,
   txd_org_tax_fc: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_FC' 
    }
    ,
   txd_org_tax_lc_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_1' 
    }
    ,
   txd_org_tax_lc_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_2' 
    }
    ,
   txd_org_tax_lc_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_ORG_TAX_LC_3' 
    }
    ,
   txd_flex_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_01' 
    }
    ,
   txd_flex_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_02' 
    }
    ,
   txd_flex_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_03' 
    }
    ,
   txd_flex_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_04' 
    }
    ,
   txd_flex_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'TXD_FLEX_05' 
    }
    ,
   txd_flex_num_01: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_01' 
    }
    ,
   txd_flex_num_02: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_02' 
    }
    ,
   txd_flex_num_03: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_03' 
    }
    ,
   txd_flex_num_04: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_04' 
    }
    ,
   txd_flex_num_05: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'TXD_FLEX_NUM_05' 
    }
    ,
   txd_rec_type: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_REC_TYPE' 
    }
    ,
   txd_cr_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_CR_UID' 
    }
    ,
   txd_cr_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'TXD_CR_DT' 
    }
    ,
   txd_upd_uid: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_UPD_UID' 
    }
    ,
   txd_upd_dt: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'TXD_UPD_DT' 
    }
    ,
   txd_fps_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FPS_SYS_ID' 
    }
    ,
   txd_fps_place_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FPS_PLACE_IDX' 
    }
    ,
   txd_rev_yn: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'TXD_REV_YN' 
    }
    ,
   txd_rtapc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_RTAPC_SYS_ID' 
    }
    ,
   txd_pbrk_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PBRK_SYS_ID' 
    }
    ,
   txd_pcc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PCC_SYS_ID' 
    }
    ,
   txd_fc_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FC_SYS_ID' 
    }
    ,
   txd_fcr_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_FCR_SYS_ID' 
    }
    ,
   txd_pip_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PIP_SYS_ID' 
    }
    ,
   txd_pip_inst_no: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PIP_INST_NO' 
    }
    ,
   txd_inst_end_no_idx: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_INST_END_NO_IDX' 
    }
    ,
   txd_rtapcp_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_RTAPCP_SYS_ID' 
    }
    ,
   txd_rtapcp_peril_class_code: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'TXD_RTAPCP_PERIL_CLASS_CODE' 
    }
    ,
   txd_psec_sys_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'TXD_PSEC_SYS_ID' 
    }
    
    }, {
        tableName: 'PGIT_TAX_DTL',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitTaxDtl;
};