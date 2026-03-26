module.exports = (sequelize, DataTypes) => {
  const PgithPolDeductible = sequelize.define('PgithPolDeductible', {
       PCDH_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_09' 
    }
    ,
   PCDH_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_10' 
    }
    ,
   PCDH_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_11' 
    }
    ,
   PCDH_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_12' 
    }
    ,
   PCDH_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_13' 
    }
    ,
   PCDH_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_14' 
    }
    ,
   PCDH_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_15' 
    }
    ,
   PCDH_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_CNCT_SYS_ID' 
    }
    ,
   PCDH_BRH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_BRH_SYS_ID' 
    }
    ,
   PCDH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
      allowNull: false, 
      
      field: 'PCDH_SYS_ID' 
    }
    ,
   PCDH_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCDH_POL_SYS_ID' 
    }
    ,
   PCDH_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCDH_END_NO_IDX' 
    }
    ,
   PCDH_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCDH_END_SR_NO' 
    }
    ,
   PCDH_PSEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_PSEC_SYS_ID' 
    }
    ,
   PCDH_PRC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_PRC_SYS_ID' 
    }
    ,
   PCDH_PRS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_PRS_SYS_ID' 
    }
    ,
   PCDH_LVL1_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_LVL1_SYS_ID' 
    }
    ,
   PCDH_LVL1_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_LVL1_SR_NO' 
    }
    ,
   PCDH_LVL2_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_LVL2_SYS_ID' 
    }
    ,
   PCDH_LVL2_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_LVL2_SR_NO' 
    }
    ,
   PCDH_LVL3_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_LVL3_SYS_ID' 
    }
    ,
   PCDH_LVL3_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_LVL3_SR_NO' 
    }
    ,
   PCDH_LVL4_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_LVL4_SYS_ID' 
    }
    ,
   PCDH_LVL4_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_LVL4_SR_NO' 
    }
    ,
   PCDH_LVL5_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_LVL5_SYS_ID' 
    }
    ,
   PCDH_LVL5_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_LVL5_SR_NO' 
    }
    ,
   PCDH_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCDH_CODE' 
    }
    ,
   PCDH_DESC: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PCDH_DESC' 
    }
    ,
   PCDH_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCDH_TYPE' 
    }
    ,
   PCDH_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCDH_PERC' 
    }
    ,
   PCDH_VALUE_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCDH_VALUE_FC' 
    }
    ,
   PCDH_VALUE_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCDH_VALUE_LC_1' 
    }
    ,
   PCDH_VALUE_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCDH_VALUE_LC_2' 
    }
    ,
   PCDH_VALUE_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCDH_VALUE_LC_3' 
    }
    ,
   PCDH_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCDH_REC_TYPE' 
    }
    ,
   PCDH_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCDH_CR_UID' 
    }
    ,
   PCDH_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCDH_CR_DT' 
    }
    ,
   PCDH_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCDH_UPD_UID' 
    }
    ,
   PCDH_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCDH_UPD_DT' 
    }
    ,
   PCDH_ATTACH_LVL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_ATTACH_LVL_NO' 
    }
    ,
   PCDH_ATTACH_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCDH_ATTACH_SR_NO' 
    }
    ,
   PCDH_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCDH_COMP_CODE' 
    }
    ,
   PCDH_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCDH_DIVN_CODE' 
    }
    ,
   PCDH_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCDH_DEPT_CODE' 
    }
    ,
   PCDH_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCDH_DS_TYPE' 
    }
    ,
   PCDH_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCDH_PROD_CODE' 
    }
    ,
   PCDH_ORG_VALUE_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCDH_ORG_VALUE_FC' 
    }
    ,
   PCDH_ORG_VALUE_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCDH_ORG_VALUE_LC_1' 
    }
    ,
   PCDH_ORG_VALUE_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCDH_ORG_VALUE_LC_2' 
    }
    ,
   PCDH_ORG_VALUE_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCDH_ORG_VALUE_LC_3' 
    }
    ,
   PCDH_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_01' 
    }
    ,
   PCDH_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_02' 
    }
    ,
   PCDH_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_03' 
    }
    ,
   PCDH_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_04' 
    }
    ,
   PCDH_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_05' 
    }
    ,
   PCDH_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_06' 
    }
    ,
   PCDH_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_07' 
    }
    ,
   PCDH_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCDH_FLEX_08' 
    }
    
    }, {
        tableName: 'PGITH_POL_DEDUCTIBLE',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgithPolDeductible;
};