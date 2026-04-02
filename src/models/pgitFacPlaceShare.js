module.exports = (sequelize, DataTypes) => {
  const PgitFacPlaceShare = sequelize.define('PgitFacPlaceShare', {
       FPS_PLACE_EFF_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'FPS_PLACE_EFF_DT' 
    }
    ,
   FPS_PLACE_BY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FPS_PLACE_BY' 
    }
    ,
   FPS_PREM_CALC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FPS_PREM_CALC_TYPE' 
    }
    ,
   FPS_AMEND_CALC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FPS_AMEND_CALC_TYPE' 
    }
    ,
   FPS_OFFER_NO: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPS_OFFER_NO' 
    }
    ,
   FPS_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPS_CURR_CODE' 
    }
    ,
   FPS_FAC_RATE_BASIS: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPS_FAC_RATE_BASIS' 
    }
    ,
   FPS_EXCH_RATE_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPS_EXCH_RATE_TYPE' 
    }
    ,
   FPS_EXCH_RATE_LC_1: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'FPS_EXCH_RATE_LC_1' 
    }
    ,
   FPS_EXCH_RATE_LC_2: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'FPS_EXCH_RATE_LC_2' 
    }
    ,
   FPS_EXCH_RATE_LC_3: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'FPS_EXCH_RATE_LC_3' 
    }
    ,
   FPS_SI_ROUND_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPS_SI_ROUND_TYPE' 
    }
    ,
   FPS_PREM_ROUND_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPS_PREM_ROUND_TYPE' 
    }
    ,
   FPS_PLACE_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_PLACE_SI_FC' 
    }
    ,
   FPS_PLACE_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_PLACE_SI_LC_1' 
    }
    ,
   FPS_PLACE_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_PLACE_SI_LC_2' 
    }
    ,
   FPS_PLACE_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_PLACE_SI_LC_3' 
    }
    ,
   FPS_PLACE_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_PLACE_PML_FC' 
    }
    ,
   FPS_PLACE_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_PLACE_PML_LC_1' 
    }
    ,
   FPS_PLACE_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_PLACE_PML_LC_2' 
    }
    ,
   FPS_PLACE_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_PLACE_PML_LC_3' 
    }
    ,
   FPS_PLACE_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_PLACE_PREM_FC' 
    }
    ,
   FPS_PLACE_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_PLACE_PREM_LC_1' 
    }
    ,
   FPS_PLACE_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_PLACE_PREM_LC_2' 
    }
    ,
   FPS_PLACE_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_PLACE_PREM_LC_3' 
    }
    ,
   FPS_SPL_RETN_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_SPL_RETN_SI_FC' 
    }
    ,
   FPS_SPL_RETN_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_SPL_RETN_SI_LC_1' 
    }
    ,
   FPS_SPL_RETN_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_SPL_RETN_SI_LC_2' 
    }
    ,
   FPS_SPL_RETN_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_SPL_RETN_SI_LC_3' 
    }
    ,
   FPS_SPL_RETN_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_SPL_RETN_PML_FC' 
    }
    ,
   FPS_SPL_RETN_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_SPL_RETN_PML_LC_1' 
    }
    ,
   FPS_SPL_RETN_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_SPL_RETN_PML_LC_2' 
    }
    ,
   FPS_SPL_RETN_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_SPL_RETN_PML_LC_3' 
    }
    ,
   FPS_FAC_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_FAC_PREM_FC' 
    }
    ,
   FPS_FAC_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_FAC_PREM_LC_1' 
    }
    ,
   FPS_FAC_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_FAC_PREM_LC_2' 
    }
    ,
   FPS_FAC_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_FAC_PREM_LC_3' 
    }
    ,
   FPS_SPL_RETN_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_SPL_RETN_PREM_FC' 
    }
    ,
   FPS_SPL_RETN_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_SPL_RETN_PREM_LC_1' 
    }
    ,
   FPS_SPL_RETN_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_SPL_RETN_PREM_LC_2' 
    }
    ,
   FPS_SPL_RETN_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_SPL_RETN_PREM_LC_3' 
    }
    ,
   FPS_OVR_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_OVR_PREM_FC' 
    }
    ,
   FPS_OVR_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_OVR_PREM_LC_1' 
    }
    ,
   FPS_OVR_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_OVR_PREM_LC_2' 
    }
    ,
   FPS_OVR_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_OVR_PREM_LC_3' 
    }
    ,
   FPS_ORG_PLACE_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_PLACE_SI_FC' 
    }
    ,
   FPS_ORG_PLACE_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_PLACE_SI_LC_1' 
    }
    ,
   FPS_ORG_PLACE_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_PLACE_SI_LC_2' 
    }
    ,
   FPS_ORG_PLACE_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_PLACE_SI_LC_3' 
    }
    ,
   FPS_ORG_PLACE_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_PLACE_PML_FC' 
    }
    ,
   FPS_ORG_PLACE_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_PLACE_PML_LC_1' 
    }
    ,
   FPS_ORG_PLACE_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_PLACE_PML_LC_2' 
    }
    ,
   FPS_ORG_PLACE_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_PLACE_PML_LC_3' 
    }
    ,
   FPS_ORG_PLACE_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_PLACE_PREM_FC' 
    }
    ,
   FPS_ORG_PLACE_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_PLACE_PREM_LC_1' 
    }
    ,
   FPS_ORG_PLACE_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_PLACE_PREM_LC_2' 
    }
    ,
   FPS_ORG_PLACE_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_PLACE_PREM_LC_3' 
    }
    ,
   FPS_ORG_SPL_RETN_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_SPL_RETN_SI_FC' 
    }
    ,
   FPS_ORG_SPL_RETN_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_SPL_RETN_SI_LC_1' 
    }
    ,
   FPS_ORG_SPL_RETN_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_SPL_RETN_SI_LC_2' 
    }
    ,
   FPS_ORG_SPL_RETN_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_SPL_RETN_SI_LC_3' 
    }
    ,
   FPS_ORG_SPL_RETN_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_SPL_RETN_PML_FC' 
    }
    ,
   FPS_ORG_SPL_RETN_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_SPL_RETN_PML_LC_1' 
    }
    ,
   FPS_ORG_SPL_RETN_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_SPL_RETN_PML_LC_2' 
    }
    ,
   FPS_ORG_SPL_RETN_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_SPL_RETN_PML_LC_3' 
    }
    ,
   FPS_ORG_FAC_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_FAC_PREM_FC' 
    }
    ,
   FPS_ORG_FAC_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_FAC_PREM_LC_1' 
    }
    ,
   FPS_ORG_FAC_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_FAC_PREM_LC_2' 
    }
    ,
   FPS_ORG_FAC_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_FAC_PREM_LC_3' 
    }
    ,
   FPS_ORG_SPL_RETN_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_SPL_RETN_PREM_FC' 
    }
    ,
   FPS_ORG_SPL_RETN_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_SPL_RETN_PREM_LC_1' 
    }
    ,
   FPS_ORG_SPL_RETN_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_SPL_RETN_PREM_LC_2' 
    }
    ,
   FPS_ORG_SPL_RETN_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_SPL_RETN_PREM_LC_3' 
    }
    ,
   FPS_ORG_OVR_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_OVR_PREM_FC' 
    }
    ,
   FPS_ORG_OVR_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_OVR_PREM_LC_1' 
    }
    ,
   FPS_ORG_OVR_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_OVR_PREM_LC_2' 
    }
    ,
   FPS_ORG_OVR_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_ORG_OVR_PREM_LC_3' 
    }
    ,
   FPS_APPR_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FPS_APPR_DT' 
    }
    ,
   FPS_APPR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FPS_APPR_UID' 
    }
    ,
   FPS_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'FPS_REC_TYPE' 
    }
    ,
   FPS_PLACE_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FPS_PLACE_STS' 
    }
    ,
   FPS_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPS_FLEX_01' 
    }
    ,
   FPS_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPS_FLEX_02' 
    }
    ,
   FPS_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPS_FLEX_03' 
    }
    ,
   FPS_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPS_FLEX_04' 
    }
    ,
   FPS_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPS_FLEX_05' 
    }
    ,
   FPS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'FPS_SYS_ID' 
    }
    ,
   FPS_FO_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FPS_FO_SYS_ID' 
    }
    ,
   FPS_RI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FPS_RI_SYS_ID' 
    }
    ,
   FPS_PLACE_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'FPS_PLACE_NO' 
    }
    ,
   FPS_PLACE_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FPS_PLACE_IDX' 
    }
    ,
   FPS_PLACE_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'FPS_PLACE_DT' 
    }
    ,
   FPS_PLACE_AMEND_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FPS_PLACE_AMEND_TYPE' 
    }
    ,
   FPS_PLACE_AMEND_TEXT: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'FPS_PLACE_AMEND_TEXT' 
    }
    ,
   FPS_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPS_CR_UID' 
    }
    ,
   FPS_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'FPS_CR_DT' 
    }
    ,
   FPS_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FPS_UPD_UID' 
    }
    ,
   FPS_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FPS_UPD_DT' 
    }
    ,
   FPS_DEDUCTIBLES: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_DEDUCTIBLES' 
    }
    ,
   FPC_DEDUCTIBLES: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPC_DEDUCTIBLES' 
    }
    ,
   FPS_REMIT_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FPS_REMIT_YN' 
    }
    ,
   FPS_FAC_ACNT_TO: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPS_FAC_ACNT_TO' 
    }
    ,
   FPS_BUS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FPS_BUS_TYPE' 
    }
    ,
   FPS_ACNT_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FPS_ACNT_TYPE' 
    }
    ,
   FPS_DEDUCTIBLES_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_DEDUCTIBLES_FC' 
    }
    ,
   FPS_DEDUCTIBLES_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_DEDUCTIBLES_LC_1' 
    }
    ,
   FPS_DEDUCTIBLES_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_DEDUCTIBLES_LC_2' 
    }
    ,
   FPS_DEDUCTIBLES_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPS_DEDUCTIBLES_LC_3' 
    }
    ,
   FPS_FPH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'FPS_FPH_SYS_ID' 
    }
    ,
   FPS_POOL_ID: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'FPS_POOL_ID' 
    }
    ,
   FPS_FAC_CUST_DOC: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FPS_FAC_CUST_DOC' 
    }
    ,
   FPS_PREM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FPS_PREM_CURR_CODE' 
    }
    ,
   FPS_PREM_EXCH_RATE_LC_1: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'FPS_PREM_EXCH_RATE_LC_1' 
    }
    ,
   FPS_PREM_EXCH_RATE_LC_2: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'FPS_PREM_EXCH_RATE_LC_2' 
    }
    ,
   FPS_PREM_EXCH_RATE_LC_3: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: true, 
      
      field: 'FPS_PREM_EXCH_RATE_LC_3' 
    }
    ,
   FPS_REV_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FPS_REV_YN' 
    }
    ,
   FPS_FPSN_PREV_FO_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'FPS_FPSN_PREV_FO_SYS_ID' 
    }
    ,
   FPS_LINK_ALLOC_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'FPS_LINK_ALLOC_IDX' 
    }
    ,
   FPS_ACNT_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FPS_ACNT_DT' 
    }
    ,
   FPS_UPD_SUMM_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FPS_UPD_SUMM_YN' 
    }
    ,
   FPS_INTL_COIN_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FPS_INTL_COIN_YN' 
    }
    
    }, {
        tableName: 'PGIT_FAC_PLACE_SHARE',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitFacPlaceShare;
};