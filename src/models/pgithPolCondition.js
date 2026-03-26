module.exports = (sequelize, DataTypes) => {
  const PgithPolCondition = sequelize.define('PgithPolCondition', {
       PCONH_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCONH_SR_NO' 
    }
    ,
   PCONH_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCONH_CODE' 
    }
    ,
   PCONH_DESC: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PCONH_DESC' 
    }
    ,
   PCONH_LONG_DESC: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCONH_LONG_DESC' 
    }
    ,
   PCONH_VALUE: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PCONH_VALUE' 
    }
    ,
   PCONH_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCONH_REC_TYPE' 
    }
    ,
   PCONH_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCONH_CR_UID' 
    }
    ,
   PCONH_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCONH_CR_DT' 
    }
    ,
   PCONH_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCONH_UPD_UID' 
    }
    ,
   PCONH_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCONH_UPD_DT' 
    }
    ,
   PCONH_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCONH_COMP_CODE' 
    }
    ,
   PCONH_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCONH_DIVN_CODE' 
    }
    ,
   PCONH_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCONH_DEPT_CODE' 
    }
    ,
   PCONH_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCONH_DS_TYPE' 
    }
    ,
   PCONH_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCONH_PROD_CODE' 
    }
    ,
   PCONH_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_01' 
    }
    ,
   PCONH_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_02' 
    }
    ,
   PCONH_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_03' 
    }
    ,
   PCONH_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_04' 
    }
    ,
   PCONH_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_05' 
    }
    ,
   PCONH_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_06' 
    }
    ,
   PCONH_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_07' 
    }
    ,
   PCONH_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_08' 
    }
    ,
   PCONH_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_09' 
    }
    ,
   PCONH_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_10' 
    }
    ,
   PCONH_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_11' 
    }
    ,
   PCONH_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_12' 
    }
    ,
   PCONH_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_13' 
    }
    ,
   PCONH_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_14' 
    }
    ,
   PCONH_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCONH_FLEX_15' 
    }
    ,
   PCONH_PSEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_PSEC_SYS_ID' 
    }
    ,
   PCONH_PRC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_PRC_SYS_ID' 
    }
    ,
   PCONH_PRS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_PRS_SYS_ID' 
    }
    ,
   PCONH_LVL1_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_LVL1_SYS_ID' 
    }
    ,
   PCONH_LVL1_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_LVL1_SR_NO' 
    }
    ,
   PCONH_LVL2_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_LVL2_SYS_ID' 
    }
    ,
   PCONH_LVL2_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_LVL2_SR_NO' 
    }
    ,
   PCONH_LVL3_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_LVL3_SYS_ID' 
    }
    ,
   PCONH_LVL3_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_LVL3_SR_NO' 
    }
    ,
   PCONH_LVL4_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_LVL4_SYS_ID' 
    }
    ,
   PCONH_LVL4_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_LVL4_SR_NO' 
    }
    ,
   PCONH_LVL5_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_LVL5_SYS_ID' 
    }
    ,
   PCONH_LVL5_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_LVL5_SR_NO' 
    }
    ,
   PCONH_PCD_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_PCD_SYS_ID' 
    }
    ,
   PCONH_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCONH_TYPE' 
    }
    ,
   PCONH_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_CNCT_SYS_ID' 
    }
    ,
   PCONH_LONG_DESC1: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCONH_LONG_DESC1' 
    }
    ,
   PCONH_LONG_DESC2: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PCONH_LONG_DESC2' 
    }
    ,
   PCONH_BRH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCONH_BRH_SYS_ID' 
    }
    ,
   PCONH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCONH_SYS_ID' 
    }
    ,
   PCONH_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCONH_POL_SYS_ID' 
    }
    ,
   PCONH_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCONH_END_NO_IDX' 
    }
    ,
   PCONH_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCONH_END_SR_NO' 
    }
    
    }, {
        tableName: 'PGITH_POL_CONDITION',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgithPolCondition;
};