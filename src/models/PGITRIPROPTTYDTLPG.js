module.exports = (sequelize, DataTypes) => {
  const PGITRIPROPTTYDTLPG = sequelize.define('PGITRIPROPTTYDTLPG', {
       RPTDG_TOT_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_TOT_PML_FC' 
    }
    ,
   RPTDG_TOT_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_TOT_PML_LC_1' 
    }
    ,
   RPTDG_TOT_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_TOT_PML_LC_2' 
    }
    ,
   RPTDG_TOT_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_TOT_PML_LC_3' 
    }
    ,
   RPTDG_TOT_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_TOT_PREM_FC' 
    }
    ,
   RPTDG_TOT_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_TOT_PREM_LC_1' 
    }
    ,
   RPTDG_TOT_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_TOT_PREM_LC_2' 
    }
    ,
   RPTDG_TOT_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_TOT_PREM_LC_3' 
    }
    ,
   RPTDG_OUR_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'RPTDG_OUR_SHARE_PERC' 
    }
    ,
   RPTDG_END_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_END_PML_LC_3' 
    }
    ,
   RPTDG_END_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_END_SI_FC' 
    }
    ,
   RPTDG_END_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_END_SI_LC_1' 
    }
    ,
   RPTDG_END_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_END_SI_LC_2' 
    }
    ,
   RPTDG_END_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_END_SI_LC_3' 
    }
    ,
   RPTDG_END_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_END_PML_FC' 
    }
    ,
   RPTDG_END_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_END_PML_LC_1' 
    }
    ,
   RPTDG_END_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_END_PML_LC_2' 
    }
    ,
   RPTDG_END_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_END_PREM_FC' 
    }
    ,
   RPTDG_END_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_END_PREM_LC_1' 
    }
    ,
   RPTDG_END_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_END_PREM_LC_2' 
    }
    ,
   RPTDG_END_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_END_PREM_LC_3' 
    }
    ,
   RPTDG_LINK_ALLOC_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RPTDG_LINK_ALLOC_YN' 
    }
    ,
   RPTDG_LINK_TOT_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_LINK_TOT_SI_FC' 
    }
    ,
   RPTDG_LINK_TOT_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_LINK_TOT_SI_LC_1' 
    }
    ,
   RPTDG_LINK_TOT_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_LINK_TOT_SI_LC_2' 
    }
    ,
   RPTDG_LINK_TOT_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_LINK_TOT_SI_LC_3' 
    }
    ,
   RPTDG_LINK_TOT_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_LINK_TOT_PML_FC' 
    }
    ,
   RPTDG_LINK_TOT_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_LINK_TOT_PML_LC_1' 
    }
    ,
   RPTDG_LINK_TOT_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_LINK_TOT_PML_LC_2' 
    }
    ,
   RPTDG_LINK_TOT_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_LINK_TOT_PML_LC_3' 
    }
    ,
   RPTDG_RA_ID: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'RPTDG_RA_ID' 
    }
    ,
   RPTDG_RA_ALLOC_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTDG_RA_ALLOC_IDX' 
    }
    ,
   RPTDG_RA_ALLOC_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'RPTDG_RA_ALLOC_DT' 
    }
    ,
   RPTDG_RRAH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTDG_RRAH_SYS_ID' 
    }
    ,
   RPTDG_RRADG_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTDG_RRADG_SYS_ID' 
    }
    ,
   RPTDG_RISK_REF_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'RPTDG_RISK_REF_NO' 
    }
    ,
   RPTDG_RISK_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPTDG_RISK_CLASS_CODE' 
    }
    ,
   RPTDG_TOP_RPRD_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTDG_TOP_RPRD_SYS_ID' 
    }
    ,
   RPTDG_LINK_RI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTDG_LINK_RI_SYS_ID' 
    }
    ,
   RPTDG_LINK_ALLOC_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTDG_LINK_ALLOC_IDX' 
    }
    ,
   RPTDG_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'RPTDG_SYS_ID' 
    }
    ,
   RPTDG_RI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTDG_RI_SYS_ID' 
    }
    ,
   RPTDG_TXN_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'RPTDG_TXN_DT' 
    }
    ,
   RPTDG_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTDG_POL_SYS_ID' 
    }
    ,
   RPTDG_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTDG_END_NO_IDX' 
    }
    ,
   RPTDG_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTDG_END_SR_NO' 
    }
    ,
   RPTDG_PRAI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTDG_PRAI_SYS_ID' 
    }
    ,
   RPTDG_RISK_DESC: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTDG_RISK_DESC' 
    }
    ,
   RPTDG_PERIL_GROUP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTDG_PERIL_GROUP_CODE' 
    }
    ,
   RPTDG_CEDING_BASIS: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTDG_CEDING_BASIS' 
    }
    ,
   RPTDG_ALLOC_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTDG_ALLOC_IDX' 
    }
    ,
   RPTDG_PARENT_RPT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTDG_PARENT_RPT_SYS_ID' 
    }
    ,
   RPTDG_PARENT_RPT_TTY_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RPTDG_PARENT_RPT_TTY_IDX' 
    }
    ,
   RPTDG_PARENT_RPT_TTY_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTDG_PARENT_RPT_TTY_SR_NO' 
    }
    ,
   RPTDG_RPT_UW_YEAR: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RPTDG_RPT_UW_YEAR' 
    }
    ,
   RPTDG_RPT_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPTDG_RPT_CURR_CODE' 
    }
    ,
   RPTDG_RPT_CURR_RATE_01: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'RPTDG_RPT_CURR_RATE_01' 
    }
    ,
   RPTDG_RPT_CURR_RATE_02: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'RPTDG_RPT_CURR_RATE_02' 
    }
    ,
   RPTDG_RPT_CURR_RATE_03: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'RPTDG_RPT_CURR_RATE_03' 
    }
    ,
   RPTDG_RPT_ROUND_OFF: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPTDG_RPT_ROUND_OFF' 
    }
    ,
   RPTDG_TTY_BUS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTDG_TTY_BUS_TYPE' 
    }
    ,
   RPTDG_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_SI_FC' 
    }
    ,
   RPTDG_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_SI_LC_1' 
    }
    ,
   RPTDG_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_SI_LC_2' 
    }
    ,
   RPTDG_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_SI_LC_3' 
    }
    ,
   RPTDG_PML_PERC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_PML_PERC' 
    }
    ,
   RPTDG_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_PML_FC' 
    }
    ,
   RPTDG_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_PML_LC_1' 
    }
    ,
   RPTDG_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_PML_LC_2' 
    }
    ,
   RPTDG_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_PML_LC_3' 
    }
    ,
   RPTDG_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_PREM_FC' 
    }
    ,
   RPTDG_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_PREM_LC_1' 
    }
    ,
   RPTDG_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_PREM_LC_2' 
    }
    ,
   RPTDG_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_PREM_LC_3' 
    }
    ,
   RPTDG_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTDG_FLEX_01' 
    }
    ,
   RPTDG_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTDG_FLEX_02' 
    }
    ,
   RPTDG_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTDG_FLEX_03' 
    }
    ,
   RPTDG_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTDG_FLEX_04' 
    }
    ,
   RPTDG_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RPTDG_FLEX_05' 
    }
    ,
   RPTDG_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RPTDG_CR_UID' 
    }
    ,
   RPTDG_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'RPTDG_CR_DT' 
    }
    ,
   RPTDG_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RPTDG_UPD_UID' 
    }
    ,
   RPTDG_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'RPTDG_UPD_DT' 
    }
    ,
   RPTDG_TOT_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_TOT_SI_FC' 
    }
    ,
   RPTDG_TOT_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_TOT_SI_LC_1' 
    }
    ,
   RPTDG_TOT_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_TOT_SI_LC_2' 
    }
    ,
   RPTDG_TOT_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'RPTDG_TOT_SI_LC_3' 
    }
    
    }, {
        tableName: 'PGIT_RI_PROP_TTY_DTL_PG',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITRIPROPTTYDTLPG;
};