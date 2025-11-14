module.exports = (sequelize, DataTypes) => {
  const PgitPolSection = sequelize.define('PgitPolSection', {
       PSEC_CLASS_CODE: { 
      type: DataTypes.STRING(20), 
      allowNull: true, 
      
      field: 'PSEC_CLASS_CODE' 
    }
    ,
   PSEC_CN_NO: { 
      type: DataTypes.STRING(20), 
      allowNull: true, 
      
      field: 'PSEC_CN_NO' 
    }
    ,
   PSEC_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_PROD_CODE' 
    }
    ,
   PSEC_SRNO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_SRNO' 
    }
    ,
   PSEC_COVER_SMI_RELATION_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSEC_COVER_SMI_RELATION_YN' 
    }
    ,
   PSEC_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_06' 
    }
    ,
   PSEC_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_07' 
    }
    ,
   PSEC_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_08' 
    }
    ,
   PSEC_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_09' 
    }
    ,
   PSEC_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_10' 
    }
    ,
   PSEC_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_11' 
    }
    ,
   PSEC_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_12' 
    }
    ,
   PSEC_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_13' 
    }
    ,
   PSEC_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_14' 
    }
    ,
   PSEC_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_15' 
    }
    ,
   PSEC_OP_MIN_PREM_LC_1: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_OP_MIN_PREM_LC_1' 
    }
    ,
   PSEC_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PSEC_CNCT_SYS_ID' 
    }
    ,
   PSEC_RA_GROUP_ID: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PSEC_RA_GROUP_ID' 
    }
    ,
   PSEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PSEC_SYS_ID' 
    }
    ,
   PSEC_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_POL_SYS_ID' 
    }
    ,
   PSEC_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_END_NO_IDX' 
    }
    ,
   PSEC_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PSEC_END_SR_NO' 
    }
    ,
   PSEC_SEC_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSEC_SEC_CODE' 
    }
    ,
   PSEC_MAND_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PSEC_MAND_YN' 
    }
    ,
   PSEC_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PSEC_REC_TYPE' 
    }
    ,
   PSEC_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_EFF_FM_DT' 
    }
    ,
   PSEC_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_EFF_TO_DT' 
    }
    ,
   PSEC_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PSEC_CR_UID' 
    }
    ,
   PSEC_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PSEC_CR_DT' 
    }
    ,
   PSEC_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_UPD_UID' 
    }
    ,
   PSEC_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PSEC_UPD_DT' 
    }
    ,
   PSEC_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_01' 
    }
    ,
   PSEC_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_02' 
    }
    ,
   PSEC_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_03' 
    }
    ,
   PSEC_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_04' 
    }
    ,
   PSEC_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PSEC_FLEX_05' 
    }
    ,
   PSEC_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_COMP_CODE' 
    }
    ,
   PSEC_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DIVN_CODE' 
    }
    ,
   PSEC_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DEPT_CODE' 
    }
    ,
   PSEC_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PSEC_DS_TYPE' 
    }
    
    }, {
        tableName: 'PGIT_POL_SECTION',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitPolSection;
};