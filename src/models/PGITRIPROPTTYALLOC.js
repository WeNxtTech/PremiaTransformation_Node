module.exports = (sequelize, DataTypes) => {
  const PGITRIPROPTTYALLOC = sequelize.define('PGITRIPROPTTYALLOC', {
       RPTA_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_SYS_ID' 
    }
    ,
   RPTA_RPTDG_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_RPTDG_SYS_ID' 
    }
    ,
   RPTA_PRAI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTA_PRAI_SYS_ID' 
    }
    ,
   RPTA_TTY_BUS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTA_TTY_BUS_TYPE' 
    }
    ,
   RPTA_PERIL_GROUP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTA_PERIL_GROUP_CODE' 
    }
    ,
   RPTA_RI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_RI_SYS_ID' 
    }
    ,
   RPTA_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_POL_SYS_ID' 
    }
    ,
   RPTA_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_END_NO_IDX' 
    }
    ,
   RPTA_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_END_SR_NO' 
    }
    ,
   RPTA_CEDING_BASIS: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTA_CEDING_BASIS' 
    }
    ,
   RPTA_ALLOC_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_ALLOC_IDX' 
    }
    ,
   RPTA_ALLOC_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'RPTA_ALLOC_SR_NO' 
    }
    ,
   RPTA_PARENT_RPT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_PARENT_RPT_SYS_ID' 
    }
    ,
   RPTA_PARENT_RPT_TTY_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_PARENT_RPT_TTY_IDX' 
    }
    ,
   RPTA_PARENT_RPT_TTY_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTA_PARENT_RPT_TTY_SR_NO' 
    }
    ,
   RPTA_RPT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_RPT_SYS_ID' 
    }
    ,
   RPTA_RPT_TTY_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_RPT_TTY_IDX' 
    }
    ,
   RPTA_RPT_TTY_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTA_RPT_TTY_SR_NO' 
    }
    ,
   RPTA_RPTT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_RPTT_SYS_ID' 
    }
    ,
   RPTA_RPTL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_RPTL_SYS_ID' 
    }
    ,
   RPTA_RPTT_TTY_TYPE_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTA_RPTT_TTY_TYPE_CODE' 
    }
    ,
   RPTA_RPT_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTA_RPT_CURR_CODE' 
    }
    ,
   RPTA_RPTL_ALLOC_MODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTA_RPTL_ALLOC_MODE' 
    }
    ,
   RPTA_RPTL_TTY_ALLOC_ON: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTA_RPTL_TTY_ALLOC_ON' 
    }
    ,
   RPTA_RPTT_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_RPTT_SR_NO' 
    }
    ,
   RPTA_TXN_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'RPTA_TXN_DT' 
    }
    ,
   RPTA_RPT_UW_YEAR: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTA_RPT_UW_YEAR' 
    }
    ,
   RPTA_TTY_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SI_FC' 
    }
    ,
   RPTA_TTY_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SI_LC_1' 
    }
    ,
   RPTA_TTY_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SI_LC_2' 
    }
    ,
   RPTA_TTY_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SI_LC_3' 
    }
    ,
   RPTA_TTY_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_PML_FC' 
    }
    ,
   RPTA_TTY_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_PML_LC_1' 
    }
    ,
   RPTA_TTY_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_PML_LC_2' 
    }
    ,
   RPTA_TTY_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_PML_LC_3' 
    }
    ,
   RPTA_TTY_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_PREM_FC' 
    }
    ,
   RPTA_TTY_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_PREM_LC_1' 
    }
    ,
   RPTA_TTY_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_PREM_LC_2' 
    }
    ,
   RPTA_TTY_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_PREM_LC_3' 
    }
    ,
   RPTA_TTY_ADDL_CESS_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_ADDL_CESS_SI_FC' 
    }
    ,
   RPTA_TTY_ADDL_CESS_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_ADDL_CESS_SI_LC_1' 
    }
    ,
   RPTA_TTY_ADDL_CESS_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_ADDL_CESS_SI_LC_2' 
    }
    ,
   RPTA_TTY_ADDL_CESS_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_ADDL_CESS_SI_LC_3' 
    }
    ,
   RPTA_TTY_ADDL_CESS_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_ADDL_CESS_PML_FC' 
    }
    ,
   RPTA_TTY_ADDL_CESS_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_ADDL_CESS_PML_LC_1' 
    }
    ,
   RPTA_TTY_ADDL_CESS_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_ADDL_CESS_PML_LC_2' 
    }
    ,
   RPTA_TTY_ADDL_CESS_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_ADDL_CESS_PML_LC_3' 
    }
    ,
   RPTA_TTY_ADDL_CESS_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_ADDL_CESS_PREM_FC' 
    }
    ,
   RPTA_TTY_ADDL_CESS_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_ADDL_CESS_PREM_LC_1' 
    }
    ,
   RPTA_TTY_ADDL_CESS_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_ADDL_CESS_PREM_LC_2' 
    }
    ,
   RPTA_TTY_ADDL_CESS_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_ADDL_CESS_PREM_LC_3' 
    }
    ,
   RPTA_TTY_SI_BALANCE_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SI_BALANCE_FC' 
    }
    ,
   RPTA_TTY_PML_BALANCE_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_PML_BALANCE_FC' 
    }
    ,
   RPTA_TTY_PREM_BALANCE_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_PREM_BALANCE_FC' 
    }
    ,
   RPTA_TTY_GROSS_RETN_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_GROSS_RETN_SI_FC' 
    }
    ,
   RPTA_TTY_GROSS_RETN_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_GROSS_RETN_PML_FC' 
    }
    ,
   RPTA_TTY_GROSS_RETN_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_GROSS_RETN_PREM_FC' 
    }
    ,
   RPTA_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RPTA_MODIFIED_YN' 
    }
    ,
   RPTA_OVERRIDDEN_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RPTA_OVERRIDDEN_YN' 
    }
    ,
   RPTA_ALLOC_APPR_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RPTA_ALLOC_APPR_YN' 
    }
    ,
   RPTA_ALLOC_APPR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPTA_ALLOC_APPR_UID' 
    }
    ,
   RPTA_ALLOC_APPR_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'RPTA_ALLOC_APPR_DT' 
    }
    ,
   RPTA_REV_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'RPTA_REV_YN' 
    }
    ,
   RPTA_ACNT_CLOSE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RPTA_ACNT_CLOSE_YN' 
    }
    ,
   RPTA_ACNT_CLOSE_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'RPTA_ACNT_CLOSE_DT' 
    }
    ,
   RPTA_ACNT_CLOSE_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPTA_ACNT_CLOSE_UID' 
    }
    ,
   RPTA_TTY_SPL_RETN_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SPL_RETN_SI_FC' 
    }
    ,
   RPTA_TTY_SPL_RETN_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SPL_RETN_SI_LC_1' 
    }
    ,
   RPTA_TTY_SPL_RETN_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SPL_RETN_SI_LC_2' 
    }
    ,
   RPTA_TTY_SPL_RETN_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SPL_RETN_SI_LC_3' 
    }
    ,
   RPTA_TTY_SPL_RETN_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SPL_RETN_PML_FC' 
    }
    ,
   RPTA_TTY_SPL_RETN_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SPL_RETN_PML_LC_1' 
    }
    ,
   RPTA_TTY_SPL_RETN_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SPL_RETN_PML_LC_2' 
    }
    ,
   RPTA_TTY_SPL_RETN_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SPL_RETN_PML_LC_3' 
    }
    ,
   RPTA_TTY_SPL_RETN_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SPL_RETN_PREM_FC' 
    }
    ,
   RPTA_TTY_SPL_RETN_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SPL_RETN_PREM_LC_1' 
    }
    ,
   RPTA_TTY_SPL_RETN_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SPL_RETN_PREM_LC_2' 
    }
    ,
   RPTA_TTY_SPL_RETN_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SPL_RETN_PREM_LC_3' 
    }
    ,
   RPTA_OVR_SPL_RETN_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_OVR_SPL_RETN_PREM_FC' 
    }
    ,
   RPTA_OVR_SPL_RETN_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_OVR_SPL_RETN_PREM_LC_1' 
    }
    ,
   RPTA_OVR_SPL_RETN_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_OVR_SPL_RETN_PREM_LC_2' 
    }
    ,
   RPTA_OVR_SPL_RETN_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_OVR_SPL_RETN_PREM_LC_3' 
    }
    ,
   RPTA_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTA_FLEX_01' 
    }
    ,
   RPTA_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTA_FLEX_02' 
    }
    ,
   RPTA_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTA_FLEX_03' 
    }
    ,
   RPTA_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTA_FLEX_04' 
    }
    ,
   RPTA_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTA_FLEX_05' 
    }
    ,
   RPTA_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTA_CR_UID' 
    }
    ,
   RPTA_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'RPTA_CR_DT' 
    }
    ,
   RPTA_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPTA_UPD_UID' 
    }
    ,
   RPTA_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'RPTA_UPD_DT' 
    }
    ,
   RPTA_TTY_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'RPTA_TTY_SHARE_PERC' 
    }
    ,
   RPTA_RA_ALLOC_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTA_RA_ALLOC_IDX' 
    }
    ,
   RPTA_CESSION_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'RPTA_CESSION_NO' 
    }
    ,
   RPTA_LINK_TTY_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'RPTA_LINK_TTY_SHARE_PERC' 
    }
    ,
   RPTA_LINK_TTY_SI_BALANCE_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_LINK_TTY_SI_BALANCE_FC' 
    }
    ,
   RPTA_LINK_TTY_PML_BALANCE_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_LINK_TTY_PML_BALANCE_FC' 
    }
    ,
   RPTA_LINK_ALLOC_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RPTA_LINK_ALLOC_YN' 
    }
    ,
   RPTA_LINK_GROSS_RETN_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_LINK_GROSS_RETN_SI_FC' 
    }
    ,
   RPTA_LINK_GROSS_RETN_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_LINK_GROSS_RETN_PML_FC' 
    }
    ,
   RPTA_LINK_TTY_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_LINK_TTY_SI_FC' 
    }
    ,
   RPTA_LINK_TTY_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_LINK_TTY_SI_LC_1' 
    }
    ,
   RPTA_LINK_TTY_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_LINK_TTY_SI_LC_2' 
    }
    ,
   RPTA_LINK_TTY_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_LINK_TTY_SI_LC_3' 
    }
    ,
   RPTA_LINK_TTY_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_LINK_TTY_PML_FC' 
    }
    ,
   RPTA_LINK_TTY_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_LINK_TTY_PML_LC_1' 
    }
    ,
   RPTA_LINK_TTY_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_LINK_TTY_PML_LC_2' 
    }
    ,
   RPTA_LINK_TTY_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTA_LINK_TTY_PML_LC_3' 
    }
    ,
   RPTA_LINK_ALLOC_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTA_LINK_ALLOC_IDX' 
    }
    
    }, {
        tableName: 'PGIT_RI_PROP_TTY_ALLOC',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITRIPROPTTYALLOC;
};