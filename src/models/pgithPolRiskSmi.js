module.exports = (sequelize, DataTypes) => {
  const PgithPolRiskSmi = sequelize.define('PgithPolRiskSmi', {
       PRSH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PRSH_SYS_ID' 
    }
    ,
   PRSH_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRSH_POL_SYS_ID' 
    }
    ,
   PRSH_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRSH_END_NO_IDX' 
    }
    ,
   PRSH_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRSH_END_SR_NO' 
    }
    ,
   PRSH_PSEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRSH_PSEC_SYS_ID' 
    }
    ,
   PRSH_SMI_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRSH_SMI_CODE' 
    }
    ,
   PRSH_LVL1_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRSH_LVL1_SYS_ID' 
    }
    ,
   PRSH_LVL1_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRSH_LVL1_SR_NO' 
    }
    ,
   PRSH_LVL2_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRSH_LVL2_SYS_ID' 
    }
    ,
   PRSH_LVL2_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRSH_LVL2_SR_NO' 
    }
    ,
   PRSH_LVL3_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRSH_LVL3_SYS_ID' 
    }
    ,
   PRSH_LVL3_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRSH_LVL3_SR_NO' 
    }
    ,
   PRSH_LVL4_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRSH_LVL4_SYS_ID' 
    }
    ,
   PRSH_LVL4_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRSH_LVL4_SR_NO' 
    }
    ,
   PRSH_LVL5_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRSH_LVL5_SYS_ID' 
    }
    ,
   PRSH_LVL5_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRSH_LVL5_SR_NO' 
    }
    ,
   PRSH_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_SI_FC' 
    }
    ,
   PRSH_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_SI_LC_1' 
    }
    ,
   PRSH_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_SI_LC_2' 
    }
    ,
   PRSH_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_SI_LC_3' 
    }
    ,
   PRSH_RATE: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRSH_RATE' 
    }
    ,
   PRSH_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_PREM_FC' 
    }
    ,
   PRSH_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_PREM_LC_1' 
    }
    ,
   PRSH_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_PREM_LC_2' 
    }
    ,
   PRSH_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_PREM_LC_3' 
    }
    ,
   PRSH_ORG_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_SI_FC' 
    }
    ,
   PRSH_ORG_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_SI_LC_1' 
    }
    ,
   PRSH_ORG_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_SI_LC_2' 
    }
    ,
   PRSH_ORG_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_SI_LC_3' 
    }
    ,
   PRSH_ORG_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_PREM_FC' 
    }
    ,
   PRSH_ORG_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_PREM_LC_1' 
    }
    ,
   PRSH_ORG_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_PREM_LC_2' 
    }
    ,
   PRSH_ORG_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_PREM_LC_3' 
    }
    ,
   PRSH_ADD_SI_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRSH_ADD_SI_YN' 
    }
    ,
   PRSH_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PRSH_REC_TYPE' 
    }
    ,
   PRSH_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRSH_EFF_FM_DT' 
    }
    ,
   PRSH_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRSH_EFF_TO_DT' 
    }
    ,
   PRSH_AOA_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_AOA_LIMIT_FC' 
    }
    ,
   PRSH_AOA_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_AOA_LIMIT_LC_1' 
    }
    ,
   PRSH_AOA_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_AOA_LIMIT_LC_2' 
    }
    ,
   PRSH_AOA_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_AOA_LIMIT_LC_3' 
    }
    ,
   PRSH_ORG_AOA_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_AOA_LIMIT_FC' 
    }
    ,
   PRSH_ORG_AOA_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_AOA_LIMIT_LC_1' 
    }
    ,
   PRSH_ORG_AOA_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_AOA_LIMIT_LC_2' 
    }
    ,
   PRSH_ORG_AOA_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_AOA_LIMIT_LC_3' 
    }
    ,
   PRSH_RATE_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRSH_RATE_MODIFIED_YN' 
    }
    ,
   PRSH_SI_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRSH_SI_MODIFIED_YN' 
    }
    ,
   PRSH_ORG_AOY_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_AOY_LIMIT_FC' 
    }
    ,
   PRSH_ORG_AOY_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_AOY_LIMIT_LC_1' 
    }
    ,
   PRSH_ORG_AOY_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_AOY_LIMIT_LC_2' 
    }
    ,
   PRSH_ORG_AOY_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_AOY_LIMIT_LC_3' 
    }
    ,
   PRSH_AOY_LIMIT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_AOY_LIMIT_FC' 
    }
    ,
   PRSH_AOY_LIMIT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_AOY_LIMIT_LC_1' 
    }
    ,
   PRSH_AOY_LIMIT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_AOY_LIMIT_LC_2' 
    }
    ,
   PRSH_AOY_LIMIT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_AOY_LIMIT_LC_3' 
    }
    ,
   PRSH_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PRSH_CR_UID' 
    }
    ,
   PRSH_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PRSH_CR_DT' 
    }
    ,
   PRSH_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRSH_UPD_UID' 
    }
    ,
   PRSH_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRSH_UPD_DT' 
    }
    ,
   PRSH_RATE_PER: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRSH_RATE_PER' 
    }
    ,
   PRSH_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRSH_SR_NO' 
    }
    ,
   PRSH_SMI_DESC: { 
      type: DataTypes.STRING(400), 
      allowNull: false, 
      
      field: 'PRSH_SMI_DESC' 
    }
    ,
   PRSH_ATTACH_LVL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRSH_ATTACH_LVL_NO' 
    }
    ,
   PRSH_ATTACH_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PRSH_ATTACH_SR_NO' 
    }
    ,
   PRSH_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRSH_COMP_CODE' 
    }
    ,
   PRSH_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRSH_DIVN_CODE' 
    }
    ,
   PRSH_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRSH_DEPT_CODE' 
    }
    ,
   PRSH_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRSH_DS_TYPE' 
    }
    ,
   PRSH_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PRSH_PROD_CODE' 
    }
    ,
   PRSH_FLEXI_01: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_01' 
    }
    ,
   PRSH_FLEXI_02: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_02' 
    }
    ,
   PRSH_FLEXI_03: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_03' 
    }
    ,
   PRSH_FLEXI_04: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_04' 
    }
    ,
   PRSH_FLEXI_05: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_05' 
    }
    ,
   PRSH_FLEXI_06: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_06' 
    }
    ,
   PRSH_FLEXI_07: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_07' 
    }
    ,
   PRSH_FLEXI_08: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_08' 
    }
    ,
   PRSH_FLEXI_09: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_09' 
    }
    ,
   PRSH_FLEXI_10: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_10' 
    }
    ,
   PRSH_FLEXI_11: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_11' 
    }
    ,
   PRSH_FLEXI_12: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_12' 
    }
    ,
   PRSH_FLEXI_13: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_13' 
    }
    ,
   PRSH_FLEXI_14: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_14' 
    }
    ,
   PRSH_FLEXI_15: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_15' 
    }
    ,
   PRSH_FLEXI_16: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_16' 
    }
    ,
   PRSH_FLEXI_17: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_17' 
    }
    ,
   PRSH_FLEXI_18: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_18' 
    }
    ,
   PRSH_FLEXI_19: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_19' 
    }
    ,
   PRSH_FLEXI_20: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PRSH_FLEXI_20' 
    }
    ,
   PRSH_SILENT_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRSH_SILENT_EFF_FM_DT' 
    }
    ,
   PRSH_SILENT_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PRSH_SILENT_EFF_TO_DT' 
    }
    ,
   PRSH_SILENT_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRSH_SILENT_YN' 
    }
    ,
   PRSH_DFLT_TO_CHILD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRSH_DFLT_TO_CHILD_YN' 
    }
    ,
   PRSH_DECL_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRSH_DECL_APPL_YN' 
    }
    ,
   PRSH_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PRSH_CNCT_SYS_ID' 
    }
    ,
   PRSH_PREM_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRSH_PREM_MODIFIED_YN' 
    }
    ,
   PRSH_IDV_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRSH_IDV_YN' 
    }
    ,
   PRSH_IDV_DEF_REQ_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PRSH_IDV_DEF_REQ_YN' 
    }
    ,
   PRSH_MIN_SI_PERC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_MIN_SI_PERC' 
    }
    ,
   PRSH_MIN_PREM_PERC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_MIN_PREM_PERC' 
    }
    ,
   PRSH_DEPO_PREM_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRSH_DEPO_PREM_PERC' 
    }
    ,
   PRSH_TOT_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_TOT_SI_FC' 
    }
    ,
   PRSH_TOT_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_TOT_SI_LC_1' 
    }
    ,
   PRSH_TOT_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_TOT_SI_LC_2' 
    }
    ,
   PRSH_TOT_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_TOT_SI_LC_3' 
    }
    ,
   PRSH_FIRST_LOSS_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PRSH_FIRST_LOSS_PERC' 
    }
    ,
   PRSH_ORG_TOT_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_TOT_SI_FC' 
    }
    ,
   PRSH_ORG_TOT_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_TOT_SI_LC_1' 
    }
    ,
   PRSH_ORG_TOT_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_TOT_SI_LC_2' 
    }
    ,
   PRSH_ORG_TOT_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PRSH_ORG_TOT_SI_LC_3' 
    }
    
    }, {
        tableName: 'PGITH_POL_RISK_SMI',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgithPolRiskSmi;
};