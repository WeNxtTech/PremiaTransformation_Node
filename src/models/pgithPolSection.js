module.exports = (sequelize, DataTypes) => {
  const PgithPolSection = sequelize.define('PgithPolSection', {
       PSECH_CN_NO: { 
      type: DataTypes.STRING(20), 
      allowNull: true, 
      
      field: 'PSECH_CN_NO' 
    }
    ,
   PSECH_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_02' 
    }
    ,
   PSECH_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_03' 
    }
    ,
   PSECH_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_04' 
    }
    ,
   PSECH_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_05' 
    }
    ,
   PSECH_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSECH_COMP_CODE' 
    }
    ,
   PSECH_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSECH_DIVN_CODE' 
    }
    ,
   PSECH_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSECH_DEPT_CODE' 
    }
    ,
   PSECH_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSECH_DS_TYPE' 
    }
    ,
   PSECH_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSECH_PROD_CODE' 
    }
    ,
   PSECH_MAND_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSECH_MAND_YN' 
    }
    ,
   PSECH_SRNO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSECH_SRNO' 
    }
    ,
   PSECH_COVER_SMI_RELATION_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSECH_COVER_SMI_RELATION_YN' 
    }
    ,
   PSECH_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_06' 
    }
    ,
   PSECH_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_07' 
    }
    ,
   PSECH_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_08' 
    }
    ,
   PSECH_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_09' 
    }
    ,
   PSECH_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_10' 
    }
    ,
   PSECH_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_11' 
    }
    ,
   PSECH_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_12' 
    }
    ,
   PSECH_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_13' 
    }
    ,
   PSECH_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_14' 
    }
    ,
   PSECH_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_15' 
    }
    ,
   PSECH_OP_MIN_PREM_LC_1: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSECH_OP_MIN_PREM_LC_1' 
    }
    ,
   PSECH_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSECH_CNCT_SYS_ID' 
    }
    ,
   PSECH_RA_GROUP_ID: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PSECH_RA_GROUP_ID' 
    }
    ,
   PSECH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSECH_SYS_ID' 
    }
    ,
   PSECH_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
       primaryKey: true,
      autoIncrement: true,
      allowNull: false, 
      
      field: 'PSECH_POL_SYS_ID' 
    }
    ,
   PSECH_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSECH_END_NO_IDX' 
    }
    ,
   PSECH_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSECH_END_SR_NO' 
    }
    ,
   PSECH_SEC_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSECH_SEC_CODE' 
    }
    ,
   PSECH_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PSECH_REC_TYPE' 
    }
    ,
   PSECH_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSECH_EFF_FM_DT' 
    }
    ,
   PSECH_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSECH_EFF_TO_DT' 
    }
    ,
   PSECH_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSECH_CR_UID' 
    }
    ,
   PSECH_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PSECH_CR_DT' 
    }
    ,
   PSECH_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSECH_UPD_UID' 
    }
    ,
   PSECH_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSECH_UPD_DT' 
    }
    ,
   PSECH_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSECH_FLEX_01' 
    }
    
    }, {
        tableName: 'PGITH_POL_SECTION',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgithPolSection;
};