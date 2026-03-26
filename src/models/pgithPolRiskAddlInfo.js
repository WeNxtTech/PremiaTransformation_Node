module.exports = (sequelize, DataTypes) => {
  const PgithPolRiskAddlInfo = sequelize.define('PgithPolRiskAddlInfo', {
       PRAIH_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_DEPT_CODE' 
    }
    ,
   PRAIH_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_DS_TYPE' 
    }
    ,
   PRAIH_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_PROD_CODE' 
    }
    ,
   PRAIH_ORG_AOY_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   PRAIH_ORG_AOY_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   PRAIH_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_UPD_DT' 
    }
    ,
   PRAIH_PML_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_PML_AMT_FC' 
    }
    ,
   PRAIH_PML_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_PML_AMT_LC_2' 
    }
    ,
   PRAIH_PML_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_PML_AMT_LC_3' 
    }
    ,
   PRAIH_AOA_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_AOA_LIMIT_FC' 
    }
    ,
   PRAIH_AOA_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_AOA_LIMIT_LC_1' 
    }
    ,
   PRAIH_AOA_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_AOA_LIMIT_LC_2' 
    }
    ,
   PRAIH_AOA_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_AOA_LIMIT_LC_3' 
    }
    ,
   PRAIH_ORG_AOA_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_AOA_LIMIT_FC' 
    }
    ,
   PRAIH_ORG_AOA_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   PRAIH_ORG_AOA_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   PRAIH_ORG_AOA_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   PRAIH_AOY_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_AOY_LIMIT_FC' 
    }
    ,
   PRAIH_AOY_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_AOY_LIMIT_LC_1' 
    }
    ,
   PRAIH_AOY_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_AOY_LIMIT_LC_2' 
    }
    ,
   PRAIH_AOY_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_AOY_LIMIT_LC_3' 
    }
    ,
   PRAIH_ORG_AOY_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_AOY_LIMIT_FC' 
    }
    ,
   PRAIH_ORG_AOY_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   PRAIH_ORG_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_SI_FC' 
    }
    ,
   PRAIH_ORG_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_SI_LC_1' 
    }
    ,
   PRAIH_ORG_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_SI_LC_2' 
    }
    ,
   PRAIH_ORG_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_SI_LC_3' 
    }
    ,
   PRAIH_ORG_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_PREM_FC' 
    }
    ,
   PRAIH_ORG_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_PREM_LC_1' 
    }
    ,
   PRAIH_ORG_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_PREM_LC_2' 
    }
    ,
   PRAIH_ORG_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_PREM_LC_3' 
    }
    ,
   PRAIH_PERIOD: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_PERIOD' 
    }
    ,
   PRAIH_PI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_PI_SYS_ID' 
    }
    ,
   PRAIH_NUM_06: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_06' 
    }
    ,
   PRAIH_NUM_07: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_07' 
    }
    ,
   PRAIH_NUM_08: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_08' 
    }
    ,
   PRAIH_NUM_09: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_09' 
    }
    ,
   PRAIH_NUM_10: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_10' 
    }
    ,
   PRAIH_NUM_11: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_11' 
    }
    ,
   PRAIH_NUM_12: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_12' 
    }
    ,
   PRAIH_NUM_13: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_13' 
    }
    ,
   PRAIH_NUM_14: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_14' 
    }
    ,
   PRAIH_NUM_15: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_15' 
    }
    ,
   PRAIH_NUM_16: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_16' 
    }
    ,
   PRAIH_NUM_17: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_17' 
    }
    ,
   PRAIH_NUM_18: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_18' 
    }
    ,
   PRAIH_NUM_19: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_19' 
    }
    ,
   PRAIH_NUM_20: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_20' 
    }
    ,
   PRAIH_NUM_21: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_21' 
    }
    ,
   PRAIH_NUM_22: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_22' 
    }
    ,
   PRAIH_NUM_23: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_23' 
    }
    ,
   PRAIH_NUM_24: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_24' 
    }
    ,
   PRAIH_NUM_25: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_25' 
    }
    ,
   PRAIH_YN_11: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_11' 
    }
    ,
   PRAIH_YN_12: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_12' 
    }
    ,
   PRAIH_YN_13: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_13' 
    }
    ,
   PRAIH_YN_14: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_14' 
    }
    ,
   PRAIH_YN_15: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_15' 
    }
    ,
   PRAIH_YN_16: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_16' 
    }
    ,
   PRAIH_YN_17: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_17' 
    }
    ,
   PRAIH_YN_18: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_18' 
    }
    ,
   PRAIH_YN_19: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_19' 
    }
    ,
   PRAIH_YN_20: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_20' 
    }
    ,
   PRAIH_YN_21: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_21' 
    }
    ,
   PRAIH_YN_22: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_22' 
    }
    ,
   PRAIH_YN_23: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_23' 
    }
    ,
   PRAIH_YN_24: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_24' 
    }
    ,
   PRAIH_YN_25: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_25' 
    }
    ,
   PRAIH_DATA_21: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_21' 
    }
    ,
   PRAIH_DATA_22: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_22' 
    }
    ,
   PRAIH_DATA_23: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_23' 
    }
    ,
   PRAIH_DATA_24: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_24' 
    }
    ,
   PRAIH_DATA_25: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_25' 
    }
    ,
   PRAIH_DATA_26: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_26' 
    }
    ,
   PRAIH_DATA_27: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_27' 
    }
    ,
   PRAIH_DATA_28: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_28' 
    }
    ,
   PRAIH_DATA_29: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_29' 
    }
    ,
   PRAIH_DATA_30: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_30' 
    }
    ,
   PRAIH_DATA_31: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_31' 
    }
    ,
   PRAIH_DATA_32: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_32' 
    }
    ,
   PRAIH_DATA_33: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_33' 
    }
    ,
   PRAIH_DATA_34: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_34' 
    }
    ,
   PRAIH_DATA_35: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_35' 
    }
    ,
   PRAIH_DATA_36: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_36' 
    }
    ,
   PRAIH_DATA_37: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_37' 
    }
    ,
   PRAIH_DATA_38: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_38' 
    }
    ,
   PRAIH_DATA_39: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_39' 
    }
    ,
   PRAIH_DATA_40: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_40' 
    }
    ,
   PRAIH_CUM_BONUS_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_CUM_BONUS_LC_1' 
    }
    ,
   PRAIH_CUM_BONUS_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_CUM_BONUS_LC_2' 
    }
    ,
   PRAIH_CUM_BONUS_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_CUM_BONUS_LC_3' 
    }
    ,
   PRAIH_SILENT_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_SILENT_YN' 
    }
    ,
   PRAIH_SILENT_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_SILENT_FM_DT' 
    }
    ,
   PRAIH_SILENT_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_SILENT_TO_DT' 
    }
    ,
   PRAIH_SERVICE_TAX_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_SERVICE_TAX_YN' 
    }
    ,
   PRAIH_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRAIH_REC_TYPE' 
    }
    ,
   PRAIH_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_EFF_FM_DT' 
    }
    ,
   PRAIH_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_EFF_TO_DT' 
    }
    ,
   PRAIH_END_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_END_EFF_FM_DT' 
    }
    ,
   PRAIH_CODE_01: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_01' 
    }
    ,
   PRAIH_CODE_02: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_02' 
    }
    ,
   PRAIH_CODE_03: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_03' 
    }
    ,
   PRAIH_CODE_04: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_04' 
    }
    ,
   PRAIH_CODE_05: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_05' 
    }
    ,
   PRAIH_CODE_06: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_06' 
    }
    ,
   PRAIH_CODE_07: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_07' 
    }
    ,
   PRAIH_CODE_08: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_08' 
    }
    ,
   PRAIH_CODE_09: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_09' 
    }
    ,
   PRAIH_CODE_10: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_10' 
    }
    ,
   PRAIH_CODE_11: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_11' 
    }
    ,
   PRAIH_CODE_12: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_12' 
    }
    ,
   PRAIH_CODE_13: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_13' 
    }
    ,
   PRAIH_CODE_14: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_14' 
    }
    ,
   PRAIH_CODE_15: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_15' 
    }
    ,
   PRAIH_CODE_16: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_16' 
    }
    ,
   PRAIH_CODE_17: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_17' 
    }
    ,
   PRAIH_CODE_18: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_18' 
    }
    ,
   PRAIH_CODE_19: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_19' 
    }
    ,
   PRAIH_CODE_20: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_20' 
    }
    ,
   PRAIH_YN_01: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_01' 
    }
    ,
   PRAIH_YN_02: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_02' 
    }
    ,
   PRAIH_YN_03: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_03' 
    }
    ,
   PRAIH_YN_04: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_04' 
    }
    ,
   PRAIH_YN_05: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_05' 
    }
    ,
   PRAIH_YN_06: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_06' 
    }
    ,
   PRAIH_YN_07: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_07' 
    }
    ,
   PRAIH_YN_08: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_08' 
    }
    ,
   PRAIH_YN_09: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_09' 
    }
    ,
   PRAIH_YN_10: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_YN_10' 
    }
    ,
   PRAIH_DATE_01: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_01' 
    }
    ,
   PRAIH_DATE_02: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_02' 
    }
    ,
   PRAIH_DATE_03: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_03' 
    }
    ,
   PRAIH_DATE_04: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_04' 
    }
    ,
   PRAIH_DATE_05: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_05' 
    }
    ,
   PRAIH_DATE_06: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_06' 
    }
    ,
   PRAIH_DATE_07: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_07' 
    }
    ,
   PRAIH_DATE_08: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_08' 
    }
    ,
   PRAIH_DATE_09: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_09' 
    }
    ,
   PRAIH_DATE_10: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_10' 
    }
    ,
   PRAIH_NUM_01: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_01' 
    }
    ,
   PRAIH_NUM_02: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_02' 
    }
    ,
   PRAIH_NUM_03: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_03' 
    }
    ,
   PRAIH_NUM_04: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_04' 
    }
    ,
   PRAIH_NUM_05: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_NUM_05' 
    }
    ,
   PRAIH_DATA_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_01' 
    }
    ,
   PRAIH_DATA_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_02' 
    }
    ,
   PRAIH_DATA_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_03' 
    }
    ,
   PRAIH_DATA_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_04' 
    }
    ,
   PRAIH_DATA_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_05' 
    }
    ,
   PRAIH_DATA_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_06' 
    }
    ,
   PRAIH_DATA_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_07' 
    }
    ,
   PRAIH_DATA_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_08' 
    }
    ,
   PRAIH_DATA_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_09' 
    }
    ,
   PRAIH_DATA_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_10' 
    }
    ,
   PRAIH_DATA_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_11' 
    }
    ,
   PRAIH_DATA_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_12' 
    }
    ,
   PRAIH_DATA_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_13' 
    }
    ,
   PRAIH_DATA_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_14' 
    }
    ,
   PRAIH_DATA_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_15' 
    }
    ,
   PRAIH_DATA_16: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_16' 
    }
    ,
   PRAIH_DATA_17: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_17' 
    }
    ,
   PRAIH_DATA_18: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_18' 
    }
    ,
   PRAIH_DATA_19: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_19' 
    }
    ,
   PRAIH_DATA_20: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_DATA_20' 
    }
    ,
   PRAIH_REMARKS_01: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAIH_REMARKS_01' 
    }
    ,
   PRAIH_REMARKS_02: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAIH_REMARKS_02' 
    }
    ,
   PRAIH_REMARKS_03: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAIH_REMARKS_03' 
    }
    ,
   PRAIH_REMARKS_04: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAIH_REMARKS_04' 
    }
    ,
   PRAIH_REMARKS_05: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAIH_REMARKS_05' 
    }
    ,
   PRAIH_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRAIH_CR_UID' 
    }
    ,
   PRAIH_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRAIH_CR_DT' 
    }
    ,
   PRAIH_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_UPD_UID' 
    }
    ,
   PRAIH_PERIOD_UNIT: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_PERIOD_UNIT' 
    }
    ,
   PRAIH_RISK_ID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_RISK_ID' 
    }
    ,
   PRAIH_PML_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_PML_AMT_LC_1' 
    }
    ,
   PRAIH_PML_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAIH_PML_PERC' 
    }
    ,
   PRAIH_RISK_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAIH_RISK_SR_NO' 
    }
    ,
   PRAIH_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_COMP_CODE' 
    }
    ,
   PRAIH_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_DIVN_CODE' 
    }
    ,
   PRAIH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRAIH_SYS_ID' 
    }
    ,
   PRAIH_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAIH_POL_SYS_ID' 
    }
    ,
   PRAIH_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAIH_END_NO_IDX' 
    }
    ,
   PRAIH_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAIH_END_SR_NO' 
    }
    ,
   PRAIH_PSEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAIH_PSEC_SYS_ID' 
    }
    ,
   PRAIH_RISK_LVL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRAIH_RISK_LVL_NO' 
    }
    ,
   PRAIH_LVL1_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_LVL1_SYS_ID' 
    }
    ,
   PRAIH_LVL1_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_LVL1_SR_NO' 
    }
    ,
   PRAIH_LVL2_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_LVL2_SYS_ID' 
    }
    ,
   PRAIH_LVL2_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_LVL2_SR_NO' 
    }
    ,
   PRAIH_LVL3_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_LVL3_SYS_ID' 
    }
    ,
   PRAIH_LVL3_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_LVL3_SR_NO' 
    }
    ,
   PRAIH_LVL4_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_LVL4_SYS_ID' 
    }
    ,
   PRAIH_LVL4_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_LVL4_SR_NO' 
    }
    ,
   PRAIH_LVL5_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_LVL5_SYS_ID' 
    }
    ,
   PRAIH_LVL5_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_LVL5_SR_NO' 
    }
    ,
   PRAIH_SI_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_SI_CURR_CODE' 
    }
    ,
   PRAIH_PREM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_PREM_CURR_CODE' 
    }
    ,
   PRAIH_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_SI_FC' 
    }
    ,
   PRAIH_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_SI_LC_1' 
    }
    ,
   PRAIH_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_SI_LC_2' 
    }
    ,
   PRAIH_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_SI_LC_3' 
    }
    ,
   PRAIH_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_PREM_FC' 
    }
    ,
   PRAIH_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_PREM_LC_1' 
    }
    ,
   PRAIH_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_PREM_LC_2' 
    }
    ,
   PRAIH_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_PREM_LC_3' 
    }
    ,
   PRAIH_CUM_BONUS_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAIH_CUM_BONUS_PERC' 
    }
    ,
   PRAIH_CUM_BONUS_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_CUM_BONUS_FC' 
    }
    ,
   PRAIH_TESTING_PERIOD_UNIT: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_TESTING_PERIOD_UNIT' 
    }
    ,
   PRAIH_TESTING_PERIOD: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_TESTING_PERIOD' 
    }
    ,
   PRAIH_TESTING_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_TESTING_FM_DT' 
    }
    ,
   PRAIH_TESTING_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_TESTING_TO_DT' 
    }
    ,
   PRAIH_NAJM_STS: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_NAJM_STS' 
    }
    ,
   PRAIH_NAJM_REMARKS: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAIH_NAJM_REMARKS' 
    }
    ,
   PRAIH_COINS_POOL_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_COINS_POOL_CODE' 
    }
    ,
   PRAIH_CERT_REQ_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_CERT_REQ_YN' 
    }
    ,
   PRAIH_CERT_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CERT_TYPE' 
    }
    ,
   PRAIH_CERT_MODE: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_CERT_MODE' 
    }
    ,
   PRAIH_CERT_NO: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PRAIH_CERT_NO' 
    }
    ,
   PRAIH_CERT_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_CERT_FM_DT' 
    }
    ,
   PRAIH_CERT_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_CERT_TO_DT' 
    }
    ,
   PRAIH_DATE_21: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_21' 
    }
    ,
   PRAIH_DATE_22: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_22' 
    }
    ,
   PRAIH_DATE_23: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_23' 
    }
    ,
   PRAIH_DATE_24: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_24' 
    }
    ,
   PRAIH_DATE_25: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_25' 
    }
    ,
   PRAIH_CODE_21: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_21' 
    }
    ,
   PRAIH_CODE_22: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_22' 
    }
    ,
   PRAIH_CODE_23: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_23' 
    }
    ,
   PRAIH_CODE_24: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_24' 
    }
    ,
   PRAIH_CODE_25: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_25' 
    }
    ,
   PRAIH_DATE_11: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_11' 
    }
    ,
   PRAIH_DATE_12: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_12' 
    }
    ,
   PRAIH_DATE_13: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_13' 
    }
    ,
   PRAIH_DATE_14: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_14' 
    }
    ,
   PRAIH_DATE_15: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_15' 
    }
    ,
   PRAIH_DATE_16: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_16' 
    }
    ,
   PRAIH_DATE_17: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_17' 
    }
    ,
   PRAIH_DATE_18: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_18' 
    }
    ,
   PRAIH_DATE_19: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_19' 
    }
    ,
   PRAIH_DATE_20: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_DATE_20' 
    }
    ,
   PRAIH_REMARKS_06: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAIH_REMARKS_06' 
    }
    ,
   PRAIH_REMARKS_07: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAIH_REMARKS_07' 
    }
    ,
   PRAIH_REMARKS_08: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAIH_REMARKS_08' 
    }
    ,
   PRAIH_REMARKS_09: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAIH_REMARKS_09' 
    }
    ,
   PRAIH_REMARKS_10: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PRAIH_REMARKS_10' 
    }
    ,
   PRAIH_ORG_CUM_BONUS_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_CUM_BONUS_FC' 
    }
    ,
   PRAIH_ORG_CUM_BONUS_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_CUM_BONUS_LC_1' 
    }
    ,
   PRAIH_ORG_CUM_BONUS_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_CUM_BONUS_LC_2' 
    }
    ,
   PRAIH_ORG_CUM_BONUS_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_CUM_BONUS_LC_3' 
    }
    ,
   PRAIH_REN_PRAI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_REN_PRAI_SYS_ID' 
    }
    ,
   PRAIH_RISK_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_RISK_CLASS_CODE' 
    }
    ,
   PRAIH_CLM_TOTAL_LOSS_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_CLM_TOTAL_LOSS_YN' 
    }
    ,
   PRAIH_ORG_PML_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_PML_AMT_FC' 
    }
    ,
   PRAIH_ORG_PML_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_PML_AMT_LC_1' 
    }
    ,
   PRAIH_ORG_PML_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_PML_AMT_LC_2' 
    }
    ,
   PRAIH_ORG_PML_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_PML_AMT_LC_3' 
    }
    ,
   PRAIH_ORG_PML_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_PML_PERC' 
    }
    ,
   PRAIH_REN_SR_NO: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAIH_REN_SR_NO' 
    }
    ,
   PRAIH_TPA_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_TPA_CODE' 
    }
    ,
   PRAIH_POL_CLASSIFICATION: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_POL_CLASSIFICATION' 
    }
    ,
   PRAIH_COUNTRY_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_COUNTRY_CODE' 
    }
    ,
   PRAIH_LOCATION_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_LOCATION_CODE' 
    }
    ,
   PRAIH_NO_REN_CLM: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_NO_REN_CLM' 
    }
    ,
   PRAIH_ANNUAL_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ANNUAL_PREM_FC' 
    }
    ,
   PRAIH_ANNUAL_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ANNUAL_PREM_LC_1' 
    }
    ,
   PRAIH_ANNUAL_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ANNUAL_PREM_LC_2' 
    }
    ,
   PRAIH_ANNUAL_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ANNUAL_PREM_LC_3' 
    }
    ,
   PRAIH_CODE_26: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_26' 
    }
    ,
   PRAIH_CODE_27: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_27' 
    }
    ,
   PRAIH_CODE_28: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_28' 
    }
    ,
   PRAIH_CODE_29: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_29' 
    }
    ,
   PRAIH_CODE_30: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_CODE_30' 
    }
    ,
   PRAIH_NCB_YRS: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_NCB_YRS' 
    }
    ,
   PRAIH_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_CNCT_SYS_ID' 
    }
    ,
   PRAIH_RA_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRAIH_RA_APPL_YN' 
    }
    ,
   PRAIH_RISK_REF_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PRAIH_RISK_REF_NO' 
    }
    ,
   PRAIH_IDV_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_IDV_FC' 
    }
    ,
   PRAIH_IDV_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_IDV_LC_1' 
    }
    ,
   PRAIH_IDV_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_IDV_LC_2' 
    }
    ,
   PRAIH_IDV_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_IDV_LC_3' 
    }
    ,
   PRAIH_TOT_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_TOT_SI_FC' 
    }
    ,
   PRAIH_TOT_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_TOT_SI_LC_1' 
    }
    ,
   PRAIH_TOT_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_TOT_SI_LC_2' 
    }
    ,
   PRAIH_TOT_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_TOT_SI_LC_3' 
    }
    ,
   PRAIH_FIRST_LOSS_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRAIH_FIRST_LOSS_PERC' 
    }
    ,
   PRAIH_ORG_TOT_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_TOT_SI_FC' 
    }
    ,
   PRAIH_ORG_TOT_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_TOT_SI_LC_1' 
    }
    ,
   PRAIH_ORG_TOT_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_TOT_SI_LC_2' 
    }
    ,
   PRAIH_ORG_TOT_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_TOT_SI_LC_3' 
    }
    ,
   PRAIH_OUR_SHARE_PERC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_OUR_SHARE_PERC' 
    }
    ,
   PRAIH_OUR_SHARE_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_OUR_SHARE_SI_FC' 
    }
    ,
   PRAIH_OUR_SHARE_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_OUR_SHARE_SI_LC_1' 
    }
    ,
   PRAIH_OUR_SHARE_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_OUR_SHARE_SI_LC_2' 
    }
    ,
   PRAIH_OUR_SHARE_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_OUR_SHARE_SI_LC_3' 
    }
    ,
   PRAIH_OUR_SHARE_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_OUR_SHARE_PREM_FC' 
    }
    ,
   PRAIH_OUR_SHARE_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_OUR_SHARE_PREM_LC_1' 
    }
    ,
   PRAIH_OUR_SHARE_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_OUR_SHARE_PREM_LC_2' 
    }
    ,
   PRAIH_OUR_SHARE_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_OUR_SHARE_PREM_LC_3' 
    }
    ,
   PRAIH_ORG_OUR_SHARE_PERC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_OUR_SHARE_PERC' 
    }
    ,
   PRAIH_ORG_OUR_SHARE_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_OUR_SHARE_SI_FC' 
    }
    ,
   PRAIH_ORG_OUR_SHARE_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_OUR_SHARE_SI_LC_1' 
    }
    ,
   PRAIH_ORG_OUR_SHARE_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_OUR_SHARE_SI_LC_2' 
    }
    ,
   PRAIH_ORG_OUR_SHARE_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_OUR_SHARE_SI_LC_3' 
    }
    ,
   PRAIH_ORG_OUR_SHARE_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_OUR_SHARE_PREM_FC' 
    }
    ,
   PRAIH_ORG_OUR_SHARE_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_OUR_SHARE_PREM_LC_1' 
    }
    ,
   PRAIH_ORG_OUR_SHARE_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_OUR_SHARE_PREM_LC_2' 
    }
    ,
   PRAIH_ORG_OUR_SHARE_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRAIH_ORG_OUR_SHARE_PREM_LC_3' 
    }
    ,
   PRAIH_MAINT_PERIOD_UNIT: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRAIH_MAINT_PERIOD_UNIT' 
    }
    ,
   PRAIH_MAINT_PERIOD: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRAIH_MAINT_PERIOD' 
    }
    ,
   PRAIH_MAINT_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_MAINT_FM_DT' 
    }
    ,
   PRAIH_MAINT_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRAIH_MAINT_TO_DT' 
    }
    
    }, {
        tableName: 'PGITH_POL_RISK_ADDL_INFO',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgithPolRiskAddlInfo;
};