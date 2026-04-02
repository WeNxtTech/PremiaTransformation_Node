module.exports = (sequelize, DataTypes) => {
  const PgitRiPolRiskDtl = sequelize.define('PgitRiPolRiskDtl', {
       RPRD_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'RPRD_SYS_ID' 
    }
    ,
   RPRD_RPTDG_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPRD_RPTDG_SYS_ID' 
    }
    ,
   RPRD_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPRD_POL_SYS_ID' 
    }
    ,
   RPRD_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPRD_END_NO_IDX' 
    }
    ,
   RPRD_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPRD_END_SR_NO' 
    }
    ,
   RPRD_RI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPRD_RI_SYS_ID' 
    }
    ,
   RPRD_TXN_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'RPRD_TXN_DT' 
    }
    ,
   RPRD_PRAI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPRD_PRAI_SYS_ID' 
    }
    ,
   RPRD_RISK_DESC: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPRD_RISK_DESC' 
    }
    ,
   RPRD_PERIL_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPRD_PERIL_CLASS_CODE' 
    }
    ,
   RPRD_PERIL_GROUP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPRD_PERIL_GROUP_CODE' 
    }
    ,
   RPRD_PARENT_RPT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPRD_PARENT_RPT_SYS_ID' 
    }
    ,
   RPRD_PARENT_RPT_TTY_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPRD_PARENT_RPT_TTY_IDX' 
    }
    ,
   RPRD_PARENT_RPT_TTY_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPRD_PARENT_RPT_TTY_SR_NO' 
    }
    ,
   RPRD_RPT_UW_YEAR: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPRD_RPT_UW_YEAR' 
    }
    ,
   RPRD_SI_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPRD_SI_CURR_CODE' 
    }
    ,
   RPRD_PREM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPRD_PREM_CURR_CODE' 
    }
    ,
   RPRD_SI_CURR_RATE_01: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'RPRD_SI_CURR_RATE_01' 
    }
    ,
   RPRD_SI_CURR_RATE_02: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'RPRD_SI_CURR_RATE_02' 
    }
    ,
   RPRD_SI_CURR_RATE_03: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'RPRD_SI_CURR_RATE_03' 
    }
    ,
   RPRD_PREM_CURR_RATE_01: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'RPRD_PREM_CURR_RATE_01' 
    }
    ,
   RPRD_PREM_CURR_RATE_02: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'RPRD_PREM_CURR_RATE_02' 
    }
    ,
   RPRD_PREM_CURR_RATE_03: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'RPRD_PREM_CURR_RATE_03' 
    }
    ,
   RPRD_CEDING_BASIS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPRD_CEDING_BASIS' 
    }
    ,
   RPRD_TTY_BUS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPRD_TTY_BUS_TYPE' 
    }
    ,
   RPRD_ALLOC_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPRD_ALLOC_IDX' 
    }
    ,
   RPRD_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_SI_FC' 
    }
    ,
   RPRD_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_SI_LC_1' 
    }
    ,
   RPRD_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_SI_LC_2' 
    }
    ,
   RPRD_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_SI_LC_3' 
    }
    ,
   RPRD_PML_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'RPRD_PML_PERC' 
    }
    ,
   RPRD_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PML_FC' 
    }
    ,
   RPRD_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PML_LC_1' 
    }
    ,
   RPRD_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PML_LC_2' 
    }
    ,
   RPRD_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PML_LC_3' 
    }
    ,
   RPRD_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PREM_FC' 
    }
    ,
   RPRD_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PREM_LC_1' 
    }
    ,
   RPRD_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PREM_LC_2' 
    }
    ,
   RPRD_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PREM_LC_3' 
    }
    ,
   RPRD_TOT_NET_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_NET_PREM_LC_1' 
    }
    ,
   RPRD_TOT_NET_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_NET_PREM_LC_2' 
    }
    ,
   RPRD_TOT_NET_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_NET_PREM_LC_3' 
    }
    ,
   RPRD_UE_GROSS_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_UE_GROSS_PREM_FC' 
    }
    ,
   RPRD_UE_GROSS_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_UE_GROSS_PREM_LC_1' 
    }
    ,
   RPRD_UE_GROSS_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_UE_GROSS_PREM_LC_2' 
    }
    ,
   RPRD_UE_GROSS_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_UE_GROSS_PREM_LC_3' 
    }
    ,
   RPRD_UE_NET_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_UE_NET_PREM_FC' 
    }
    ,
   RPRD_UE_NET_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_UE_NET_PREM_LC_1' 
    }
    ,
   RPRD_UE_NET_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_UE_NET_PREM_LC_2' 
    }
    ,
   RPRD_UE_NET_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_UE_NET_PREM_LC_3' 
    }
    ,
   RPRD_TOPSI_RPTDG_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPRD_TOPSI_RPTDG_SYS_ID' 
    }
    ,
   RPRD_TOT_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_PML_LC_3' 
    }
    ,
   RPRD_TOT_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_PREM_FC' 
    }
    ,
   RPRD_TOT_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_PREM_LC_1' 
    }
    ,
   RPRD_TOT_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_PREM_LC_2' 
    }
    ,
   RPRD_TOT_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_PREM_LC_3' 
    }
    ,
   RPRD_TOT_FAC_RETN_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_FAC_RETN_PREM_FC' 
    }
    ,
   RPRD_TOT_FAC_RETN_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_FAC_RETN_PREM_LC_1' 
    }
    ,
   RPRD_TOT_FAC_RETN_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_FAC_RETN_PREM_LC_2' 
    }
    ,
   RPRD_TOT_FAC_RETN_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_FAC_RETN_PREM_LC_3' 
    }
    ,
   RPRD_OUR_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'RPRD_OUR_SHARE_PERC' 
    }
    ,
   RPRD_END_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_END_PML_LC_3' 
    }
    ,
   RPRD_END_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_END_SI_FC' 
    }
    ,
   RPRD_END_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_END_SI_LC_1' 
    }
    ,
   RPRD_END_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_END_SI_LC_2' 
    }
    ,
   RPRD_END_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_END_SI_LC_3' 
    }
    ,
   RPRD_END_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_END_PML_FC' 
    }
    ,
   RPRD_END_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_END_PML_LC_1' 
    }
    ,
   RPRD_END_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_END_PML_LC_2' 
    }
    ,
   RPRD_END_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_END_PREM_FC' 
    }
    ,
   RPRD_END_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_END_PREM_LC_1' 
    }
    ,
   RPRD_END_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_END_PREM_LC_2' 
    }
    ,
   RPRD_END_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_END_PREM_LC_3' 
    }
    ,
   RPRD_RETN_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_RETN_SI_FC' 
    }
    ,
   RPRD_RETN_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_RETN_SI_LC_1' 
    }
    ,
   RPRD_RETN_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_RETN_SI_LC_2' 
    }
    ,
   RPRD_RETN_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_RETN_SI_LC_3' 
    }
    ,
   RPRD_RETN_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_RETN_PML_FC' 
    }
    ,
   RPRD_RETN_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_RETN_PML_LC_1' 
    }
    ,
   RPRD_RETN_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_RETN_PML_LC_2' 
    }
    ,
   RPRD_RETN_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_RETN_PML_LC_3' 
    }
    ,
   RPRD_RETN_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_RETN_PREM_FC' 
    }
    ,
   RPRD_RETN_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_RETN_PREM_LC_1' 
    }
    ,
   RPRD_RETN_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_RETN_PREM_LC_2' 
    }
    ,
   RPRD_RETN_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_RETN_PREM_LC_3' 
    }
    ,
   RPRD_FAC_XOL_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_XOL_SI_FC' 
    }
    ,
   RPRD_FAC_XOL_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_XOL_SI_LC_1' 
    }
    ,
   RPRD_FAC_XOL_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_XOL_SI_LC_2' 
    }
    ,
   RPRD_FAC_XOL_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_XOL_SI_LC_3' 
    }
    ,
   RPRD_FAC_XOL_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_XOL_PML_FC' 
    }
    ,
   RPRD_FAC_XOL_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_XOL_PML_LC_1' 
    }
    ,
   RPRD_FAC_XOL_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_XOL_PML_LC_2' 
    }
    ,
   RPRD_FAC_XOL_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_XOL_PML_LC_3' 
    }
    ,
   RPRD_FAC_XOL_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_XOL_PREM_FC' 
    }
    ,
   RPRD_FAC_XOL_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_XOL_PREM_LC_1' 
    }
    ,
   RPRD_FAC_XOL_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_XOL_PREM_LC_2' 
    }
    ,
   RPRD_FAC_XOL_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_XOL_PREM_LC_3' 
    }
    ,
   RPRD_LINK_ALLOC_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RPRD_LINK_ALLOC_YN' 
    }
    ,
   RPRD_FAC_SHARE_PERC: { 
      type: DataTypes.DECIMAL(15, 12), 
      allowNull: true, 
      
      field: 'RPRD_FAC_SHARE_PERC' 
    }
    ,
   RPRD_RA_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RPRD_RA_APPL_YN' 
    }
    ,
   RPRD_RA_ID: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'RPRD_RA_ID' 
    }
    ,
   RPRD_RRAH_DE_VALUE_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPRD_RRAH_DE_VALUE_01' 
    }
    ,
   RPRD_RRAH_DE_VALUE_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPRD_RRAH_DE_VALUE_02' 
    }
    ,
   RPRD_RRAH_DE_VALUE_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPRD_RRAH_DE_VALUE_03' 
    }
    ,
   RPRD_RRAH_DE_VALUE_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPRD_RRAH_DE_VALUE_04' 
    }
    ,
   RPRD_RRAH_DE_VALUE_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPRD_RRAH_DE_VALUE_05' 
    }
    ,
   RPRD_RRAH_DE_VALUE_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPRD_RRAH_DE_VALUE_06' 
    }
    ,
   RPRD_RRAH_DE_VALUE_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPRD_RRAH_DE_VALUE_07' 
    }
    ,
   RPRD_RETN_LIMIT_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RPRD_RETN_LIMIT_YN' 
    }
    ,
   RPRD_RISK_REF_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'RPRD_RISK_REF_NO' 
    }
    ,
   RPRD_RISK_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPRD_RISK_CLASS_CODE' 
    }
    ,
   RPRD_PROV_FAC_SHARE_PERC: { 
      type: DataTypes.DECIMAL(15, 12), 
      allowNull: true, 
      
      field: 'RPRD_PROV_FAC_SHARE_PERC' 
    }
    ,
   RPRD_CQS_SI_FC: { 
      type: DataTypes.DECIMAL(21, 3), 
      allowNull: true, 
      
      field: 'RPRD_CQS_SI_FC' 
    }
    ,
   RPRD_CQS_SI_LC_1: { 
      type: DataTypes.DECIMAL(21, 3), 
      allowNull: true, 
      
      field: 'RPRD_CQS_SI_LC_1' 
    }
    ,
   RPRD_CQS_SI_LC_2: { 
      type: DataTypes.DECIMAL(21, 3), 
      allowNull: true, 
      
      field: 'RPRD_CQS_SI_LC_2' 
    }
    ,
   RPRD_CQS_SI_LC_3: { 
      type: DataTypes.DECIMAL(21, 3), 
      allowNull: true, 
      
      field: 'RPRD_CQS_SI_LC_3' 
    }
    ,
   RPRD_CQS_PREM_FC: { 
      type: DataTypes.DECIMAL(21, 3), 
      allowNull: true, 
      
      field: 'RPRD_CQS_PREM_FC' 
    }
    ,
   RPRD_CQS_PREM_LC_1: { 
      type: DataTypes.DECIMAL(21, 3), 
      allowNull: true, 
      
      field: 'RPRD_CQS_PREM_LC_1' 
    }
    ,
   RPRD_CQS_PREM_LC_2: { 
      type: DataTypes.DECIMAL(21, 3), 
      allowNull: true, 
      
      field: 'RPRD_CQS_PREM_LC_2' 
    }
    ,
   RPRD_CQS_PREM_LC_3: { 
      type: DataTypes.DECIMAL(21, 3), 
      allowNull: true, 
      
      field: 'RPRD_CQS_PREM_LC_3' 
    }
    ,
   RPRD_CQS_PML_FC: { 
      type: DataTypes.DECIMAL(21, 3), 
      allowNull: true, 
      
      field: 'RPRD_CQS_PML_FC' 
    }
    ,
   RPRD_CQS_PML_LC_1: { 
      type: DataTypes.DECIMAL(21, 3), 
      allowNull: true, 
      
      field: 'RPRD_CQS_PML_LC_1' 
    }
    ,
   RPRD_CQS_PML_LC_2: { 
      type: DataTypes.DECIMAL(21, 3), 
      allowNull: true, 
      
      field: 'RPRD_CQS_PML_LC_2' 
    }
    ,
   RPRD_CQS_PML_LC_3: { 
      type: DataTypes.DECIMAL(21, 3), 
      allowNull: true, 
      
      field: 'RPRD_CQS_PML_LC_3' 
    }
    ,
   RPRD_GROSS_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_GROSS_PREM_FC' 
    }
    ,
   RPRD_GROSS_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_GROSS_PREM_LC_1' 
    }
    ,
   RPRD_GROSS_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_GROSS_PREM_LC_2' 
    }
    ,
   RPRD_GROSS_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_GROSS_PREM_LC_3' 
    }
    ,
   RPRD_NET_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_NET_PREM_FC' 
    }
    ,
   RPRD_NET_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_NET_PREM_LC_1' 
    }
    ,
   RPRD_NET_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_NET_PREM_LC_2' 
    }
    ,
   RPRD_NET_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_NET_PREM_LC_3' 
    }
    ,
   RPRD_TOT_GROSS_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_GROSS_PREM_FC' 
    }
    ,
   RPRD_TOT_GROSS_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_GROSS_PREM_LC_1' 
    }
    ,
   RPRD_TOT_GROSS_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_GROSS_PREM_LC_2' 
    }
    ,
   RPRD_TOT_GROSS_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_GROSS_PREM_LC_3' 
    }
    ,
   RPRD_TOT_NET_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_NET_PREM_FC' 
    }
    ,
   RPRD_TTY_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SI_FC' 
    }
    ,
   RPRD_TTY_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SI_LC_1' 
    }
    ,
   RPRD_TTY_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SI_LC_2' 
    }
    ,
   RPRD_TTY_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SI_LC_3' 
    }
    ,
   RPRD_TTY_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_PML_FC' 
    }
    ,
   RPRD_TTY_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_PML_LC_1' 
    }
    ,
   RPRD_TTY_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_PML_LC_2' 
    }
    ,
   RPRD_TTY_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_PML_LC_3' 
    }
    ,
   RPRD_TTY_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_PREM_FC' 
    }
    ,
   RPRD_TTY_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_PREM_LC_1' 
    }
    ,
   RPRD_TTY_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_PREM_LC_2' 
    }
    ,
   RPRD_TTY_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_PREM_LC_3' 
    }
    ,
   RPRD_TTY_SPL_RETN_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SPL_RETN_SI_FC' 
    }
    ,
   RPRD_TTY_SPL_RETN_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SPL_RETN_SI_LC_1' 
    }
    ,
   RPRD_TTY_SPL_RETN_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SPL_RETN_SI_LC_2' 
    }
    ,
   RPRD_TTY_SPL_RETN_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SPL_RETN_SI_LC_3' 
    }
    ,
   RPRD_TTY_SPL_RETN_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SPL_RETN_PML_FC' 
    }
    ,
   RPRD_TTY_SPL_RETN_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SPL_RETN_PML_LC_1' 
    }
    ,
   RPRD_TTY_SPL_RETN_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SPL_RETN_PML_LC_2' 
    }
    ,
   RPRD_TTY_SPL_RETN_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SPL_RETN_PML_LC_3' 
    }
    ,
   RPRD_TTY_SPL_RETN_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SPL_RETN_PREM_FC' 
    }
    ,
   RPRD_TTY_SPL_RETN_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SPL_RETN_PREM_LC_1' 
    }
    ,
   RPRD_TTY_SPL_RETN_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SPL_RETN_PREM_LC_2' 
    }
    ,
   RPRD_TTY_SPL_RETN_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TTY_SPL_RETN_PREM_LC_3' 
    }
    ,
   RPRD_FAC_SPL_RETN_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_SPL_RETN_SI_FC' 
    }
    ,
   RPRD_FAC_SPL_RETN_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_SPL_RETN_SI_LC_1' 
    }
    ,
   RPRD_FAC_SPL_RETN_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_SPL_RETN_SI_LC_2' 
    }
    ,
   RPRD_FAC_SPL_RETN_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_SPL_RETN_SI_LC_3' 
    }
    ,
   RPRD_FAC_SPL_RETN_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_SPL_RETN_PML_FC' 
    }
    ,
   RPRD_FAC_SPL_RETN_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_SPL_RETN_PML_LC_1' 
    }
    ,
   RPRD_FAC_SPL_RETN_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_SPL_RETN_PML_LC_2' 
    }
    ,
   RPRD_FAC_SPL_RETN_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_SPL_RETN_PML_LC_3' 
    }
    ,
   RPRD_FAC_SPL_RETN_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_SPL_RETN_PREM_FC' 
    }
    ,
   RPRD_FAC_SPL_RETN_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_SPL_RETN_PREM_LC_1' 
    }
    ,
   RPRD_FAC_SPL_RETN_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_SPL_RETN_PREM_LC_2' 
    }
    ,
   RPRD_FAC_SPL_RETN_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_FAC_SPL_RETN_PREM_LC_3' 
    }
    ,
   RPRD_OTH_SPL_RETN_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_OTH_SPL_RETN_SI_FC' 
    }
    ,
   RPRD_OTH_SPL_RETN_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_OTH_SPL_RETN_SI_LC_1' 
    }
    ,
   RPRD_OTH_SPL_RETN_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_OTH_SPL_RETN_SI_LC_2' 
    }
    ,
   RPRD_OTH_SPL_RETN_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_OTH_SPL_RETN_SI_LC_3' 
    }
    ,
   RPRD_OTH_SPL_RETN_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_OTH_SPL_RETN_PML_FC' 
    }
    ,
   RPRD_OTH_SPL_RETN_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_OTH_SPL_RETN_PML_LC_1' 
    }
    ,
   RPRD_OTH_SPL_RETN_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_OTH_SPL_RETN_PML_LC_2' 
    }
    ,
   RPRD_OTH_SPL_RETN_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_OTH_SPL_RETN_PML_LC_3' 
    }
    ,
   RPRD_OTH_SPL_RETN_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_OTH_SPL_RETN_PREM_FC' 
    }
    ,
   RPRD_OTH_SPL_RETN_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_OTH_SPL_RETN_PREM_LC_1' 
    }
    ,
   RPRD_OTH_SPL_RETN_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_OTH_SPL_RETN_PREM_LC_2' 
    }
    ,
   RPRD_OTH_SPL_RETN_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_OTH_SPL_RETN_PREM_LC_3' 
    }
    ,
   RPRD_PLACED_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PLACED_SI_FC' 
    }
    ,
   RPRD_PLACED_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PLACED_SI_LC_1' 
    }
    ,
   RPRD_PLACED_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PLACED_SI_LC_2' 
    }
    ,
   RPRD_PLACED_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PLACED_SI_LC_3' 
    }
    ,
   RPRD_PLACED_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PLACED_PML_FC' 
    }
    ,
   RPRD_PLACED_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PLACED_PML_LC_1' 
    }
    ,
   RPRD_PLACED_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PLACED_PML_LC_2' 
    }
    ,
   RPRD_PLACED_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PLACED_PML_LC_3' 
    }
    ,
   RPRD_PLACED_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PLACED_PREM_FC' 
    }
    ,
   RPRD_PLACED_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PLACED_PREM_LC_1' 
    }
    ,
   RPRD_PLACED_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PLACED_PREM_LC_2' 
    }
    ,
   RPRD_PLACED_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_PLACED_PREM_LC_3' 
    }
    ,
   RPRD_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPRD_FLEX_01' 
    }
    ,
   RPRD_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPRD_FLEX_02' 
    }
    ,
   RPRD_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPRD_FLEX_03' 
    }
    ,
   RPRD_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPRD_FLEX_04' 
    }
    ,
   RPRD_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPRD_FLEX_05' 
    }
    ,
   RPRD_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPRD_CR_UID' 
    }
    ,
   RPRD_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'RPRD_CR_DT' 
    }
    ,
   RPRD_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPRD_UPD_UID' 
    }
    ,
   RPRD_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'RPRD_UPD_DT' 
    }
    ,
   RPRD_TOT_FAC_RETN_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_FAC_RETN_SI_FC' 
    }
    ,
   RPRD_TOT_FAC_RETN_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_FAC_RETN_SI_LC_1' 
    }
    ,
   RPRD_TOT_FAC_RETN_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_FAC_RETN_SI_LC_2' 
    }
    ,
   RPRD_TOT_FAC_RETN_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_FAC_RETN_SI_LC_3' 
    }
    ,
   RPRD_TOT_FAC_RETN_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_FAC_RETN_PML_FC' 
    }
    ,
   RPRD_TOT_FAC_RETN_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_FAC_RETN_PML_LC_1' 
    }
    ,
   RPRD_TOT_FAC_RETN_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_FAC_RETN_PML_LC_2' 
    }
    ,
   RPRD_TOT_FAC_RETN_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_FAC_RETN_PML_LC_3' 
    }
    ,
   RPRD_TOT_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_SI_FC' 
    }
    ,
   RPRD_TOT_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_SI_LC_1' 
    }
    ,
   RPRD_TOT_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_SI_LC_2' 
    }
    ,
   RPRD_TOT_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_SI_LC_3' 
    }
    ,
   RPRD_TOT_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_PML_FC' 
    }
    ,
   RPRD_TOT_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_PML_LC_1' 
    }
    ,
   RPRD_TOT_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPRD_TOT_PML_LC_2' 
    }
    
    }, {
        tableName: 'PGIT_RI_POL_RISK_DTL',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitRiPolRiskDtl;
};