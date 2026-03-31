module.exports = (sequelize, DataTypes) => {
  const PgithPolInstPrem = sequelize.define('PgithPolInstPrem', {
       PIPH_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_15' 
    }
    ,
   PIPH_END_INST_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PIPH_END_INST_PERC' 
    }
    ,
   PIPH_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIPH_CNCT_SYS_ID' 
    }
    ,
   PIPH_INW_COIN_COMM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INW_COIN_COMM_FC' 
    }
    ,
   PIPH_INW_COIN_COMM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INW_COIN_COMM_LC_1' 
    }
    ,
   PIPH_INW_COIN_COMM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INW_COIN_COMM_LC_2' 
    }
    ,
   PIPH_INW_COIN_COMM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INW_COIN_COMM_LC_3' 
    }
    ,
   PIPH_ORG_INW_COIN_COMM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INW_COIN_COMM_FC' 
    }
    ,
   PIPH_ORG_INW_COIN_COMM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INW_COIN_COMM_LC_1' 
    }
    ,
   PIPH_ORG_INW_COIN_COMM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INW_COIN_COMM_LC_2' 
    }
    ,
   PIPH_ORG_INW_COIN_COMM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INW_COIN_COMM_LC_3' 
    }
    ,
   PIPH_RI_INST_LOAD_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_RI_INST_LOAD_FC' 
    }
    ,
   PIPH_RI_INST_LOAD_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_RI_INST_LOAD_LC_1' 
    }
    ,
   PIPH_RI_INST_LOAD_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_RI_INST_LOAD_LC_2' 
    }
    ,
   PIPH_RI_INST_LOAD_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_RI_INST_LOAD_LC_3' 
    }
    ,
   PIPH_RI_INST_DISC_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_RI_INST_DISC_FC' 
    }
    ,
   PIPH_RI_INST_DISC_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_RI_INST_DISC_LC_1' 
    }
    ,
   PIPH_RI_INST_DISC_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_RI_INST_DISC_LC_2' 
    }
    ,
   PIPH_RI_INST_DISC_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_RI_INST_DISC_LC_3' 
    }
    ,
   PIPH_ORG_RI_INST_DISC_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_RI_INST_DISC_FC' 
    }
    ,
   PIPH_ORG_RI_INST_DISC_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_RI_INST_DISC_LC_1' 
    }
    ,
   PIPH_ORG_RI_INST_DISC_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_RI_INST_DISC_LC_2' 
    }
    ,
   PIPH_ORG_RI_INST_DISC_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_RI_INST_DISC_LC_3' 
    }
    ,
   PIPH_ORG_RI_INST_LOAD_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_RI_INST_LOAD_FC' 
    }
    ,
   PIPH_ORG_RI_INST_LOAD_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_RI_INST_LOAD_LC_1' 
    }
    ,
   PIPH_ORG_RI_INST_LOAD_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_RI_INST_LOAD_LC_2' 
    }
    ,
   PIPH_ORG_RI_INST_LOAD_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_RI_INST_LOAD_LC_3' 
    }
    ,
   PIPH_INST_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIPH_INST_TYPE' 
    }
    ,
   PIPH_FC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIPH_FC_SYS_ID' 
    }
    ,
   PIPH_INST_WARR_DAYS: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIPH_INST_WARR_DAYS' 
    }
    ,
   PIPH_INST_WARR_DUE_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIPH_INST_WARR_DUE_DT' 
    }
    ,
   PIPH_FO_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIPH_FO_SYS_ID' 
    }
    ,
   PIPH_FPS_PLACE_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIPH_FPS_PLACE_IDX' 
    }
    ,
   PIPH_AGENCY_COMM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_AGENCY_COMM_FC' 
    }
    ,
   PIPH_AGENCY_COMM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_AGENCY_COMM_LC_1' 
    }
    ,
   PIPH_AGENCY_COMM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_AGENCY_COMM_LC_2' 
    }
    ,
   PIPH_AGENCY_COMM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_AGENCY_COMM_LC_3' 
    }
    ,
   PIPH_PCL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIPH_PCL_SYS_ID' 
    }
    ,
   PIPH_COLLEC_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIPH_COLLEC_DT' 
    }
    ,
   PIPH_BG_MODE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIPH_BG_MODE_YN' 
    }
    ,
   PIPH_COLLEC_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIPH_COLLEC_STS' 
    }
    ,
   PIPH_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIPH_CR_UID' 
    }
    ,
   PIPH_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PIPH_CR_DT' 
    }
    ,
   PIPH_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIPH_UPD_UID' 
    }
    ,
   PIPH_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIPH_UPD_DT' 
    }
    ,
   PIPH_INST_PREM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIPH_INST_PREM_CURR_CODE' 
    }
    ,
   PIPH_INST_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'PIPH_INST_PREM_FC' 
    }
    ,
   PIPH_INST_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INST_PREM_LC_1' 
    }
    ,
   PIPH_INST_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INST_PREM_LC_2' 
    }
    ,
   PIPH_INST_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INST_PREM_LC_3' 
    }
    ,
   PIPH_INST_LOAD_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INST_LOAD_FC' 
    }
    ,
   PIPH_INST_LOAD_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INST_LOAD_LC_1' 
    }
    ,
   PIPH_INST_LOAD_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INST_LOAD_LC_2' 
    }
    ,
   PIPH_INST_LOAD_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INST_LOAD_LC_3' 
    }
    ,
   PIPH_INST_DISC_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INST_DISC_FC' 
    }
    ,
   PIPH_INST_DISC_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INST_DISC_LC_1' 
    }
    ,
   PIPH_INST_DISC_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INST_DISC_LC_2' 
    }
    ,
   PIPH_INST_DISC_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_INST_DISC_LC_3' 
    }
    ,
   PIPH_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIPH_COMP_CODE' 
    }
    ,
   PIPH_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIPH_DEPT_CODE' 
    }
    ,
   PIPH_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIPH_DIVN_CODE' 
    }
    ,
   PIPH_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIPH_PROD_CODE' 
    }
    ,
   PIPH_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIPH_DS_TYPE' 
    }
    ,
   PIPH_COLLECTED_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_COLLECTED_AMT_FC' 
    }
    ,
   PIPH_COLLECTED_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_COLLECTED_AMT_LC_1' 
    }
    ,
   PIPH_COLLECTED_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_COLLECTED_AMT_LC_2' 
    }
    ,
   PIPH_COLLECTED_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_COLLECTED_AMT_LC_3' 
    }
    ,
   PIPH_PREM_REALISED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIPH_PREM_REALISED_YN' 
    }
    ,
   PIPH_ORG_COLLECTED_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_COLLECTED_AMT_FC' 
    }
    ,
   PIPH_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIPH_REC_TYPE' 
    }
    ,
   PIPH_ORG_COLLECTED_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_COLLECTED_AMT_LC_1' 
    }
    ,
   PIPH_ORG_COLLECTED_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_COLLECTED_AMT_LC_2' 
    }
    ,
   PIPH_ORG_COLLECTED_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_COLLECTED_AMT_LC_3' 
    }
    ,
   PIPH_ORG_INST_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INST_PREM_FC' 
    }
    ,
   PIPH_ORG_INST_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INST_PREM_LC_1' 
    }
    ,
   PIPH_ORG_INST_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INST_PREM_LC_2' 
    }
    ,
   PIPH_ORG_INST_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INST_PREM_LC_3' 
    }
    ,
   PIPH_ORG_INST_DISC_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INST_DISC_FC' 
    }
    ,
   PIPH_ORG_INST_DISC_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INST_DISC_LC_1' 
    }
    ,
   PIPH_ORG_INST_DISC_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INST_DISC_LC_2' 
    }
    ,
   PIPH_ORG_INST_DISC_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INST_DISC_LC_3' 
    }
    ,
   PIPH_ORG_INST_LOAD_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INST_LOAD_FC' 
    }
    ,
   PIPH_ORG_INST_LOAD_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INST_LOAD_LC_1' 
    }
    ,
   PIPH_ORG_INST_LOAD_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INST_LOAD_LC_2' 
    }
    ,
   PIPH_ORG_INST_LOAD_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_INST_LOAD_LC_3' 
    }
    ,
   PIPH_ORG_COMM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_COMM_FC' 
    }
    ,
   PIPH_ORG_COMM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_COMM_LC_1' 
    }
    ,
   PIPH_ORG_COMM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_COMM_LC_2' 
    }
    ,
   PIPH_ORG_COMM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_ORG_COMM_LC_3' 
    }
    ,
   PIPH_PREM_REALISED_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIPH_PREM_REALISED_DT' 
    }
    ,
   PIPH_INST_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIPH_INST_END_NO_IDX' 
    }
    ,
   PIPH_AGENCY_COMM_CURR: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIPH_AGENCY_COMM_CURR' 
    }
    ,
   PIPH_DIFF_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_DIFF_AMT_FC' 
    }
    ,
   PIPH_DIFF_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_DIFF_AMT_LC_1' 
    }
    ,
   PIPH_DIFF_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_DIFF_AMT_LC_2' 
    }
    ,
   PIPH_DIFF_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_DIFF_AMT_LC_3' 
    }
    ,
   PIPH_INST_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIPH_INST_END_SR_NO' 
    }
    ,
   PIPH_DN_COLLEC_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIPH_DN_COLLEC_STS' 
    }
    ,
   PIPH_DN_COLLEC_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIPH_DN_COLLEC_DT' 
    }
    ,
   PIPH_DN_COLLECTED_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_DN_COLLECTED_AMT_FC' 
    }
    ,
   PIPH_DN_COLLECTED_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_DN_COLLECTED_AMT_LC_1' 
    }
    ,
   PIPH_DN_COLLECTED_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_DN_COLLECTED_AMT_LC_2' 
    }
    ,
   PIPH_DN_COLLECTED_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_DN_COLLECTED_AMT_LC_3' 
    }
    ,
   PIPH_DN_DIFF_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_DN_DIFF_AMT_FC' 
    }
    ,
   PIPH_DN_DIFF_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_DN_DIFF_AMT_LC_1' 
    }
    ,
   PIPH_DN_DIFF_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_DN_DIFF_AMT_LC_2' 
    }
    ,
   PIPH_DN_DIFF_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIPH_DN_DIFF_AMT_LC_3' 
    }
    ,
   PIPH_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_01' 
    }
    ,
   PIPH_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_02' 
    }
    ,
   PIPH_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_03' 
    }
    ,
   PIPH_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_04' 
    }
    ,
   PIPH_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_05' 
    }
    ,
   PIPH_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_06' 
    }
    ,
   PIPH_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_07' 
    }
    ,
   PIPH_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_08' 
    }
    ,
   PIPH_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_09' 
    }
    ,
   PIPH_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_10' 
    }
    ,
   PIPH_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_11' 
    }
    ,
   PIPH_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_12' 
    }
    ,
   PIPH_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_13' 
    }
    ,
   PIPH_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_FLEX_14' 
    }
    ,
   PIPH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PIPH_SYS_ID' 
    }
    ,
   PIPH_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIPH_POL_SYS_ID' 
    }
    ,
   PIPH_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIPH_END_NO_IDX' 
    }
    ,
   PIPH_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIPH_END_SR_NO' 
    }
    ,
   PIPH_INST_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIPH_INST_NO' 
    }
    ,
   PIPH_INST_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIPH_INST_DT' 
    }
    ,
   PIPH_INST_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PIPH_INST_PERC' 
    }
    ,
   PIPH_REMARKS: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIPH_REMARKS' 
    }
    
    }, {
        tableName: 'PGITH_POL_INST_PREM',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgithPolInstPrem;
};