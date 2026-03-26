module.exports = (sequelize, DataTypes) => {
  const PgithPolApplCurr = sequelize.define('PgithPolApplCurr', {
       PACH_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_11' 
    }
    ,
   PACH_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_12' 
    }
    ,
   PACH_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_13' 
    }
    ,
   PACH_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_14' 
    }
    ,
   PACH_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_15' 
    }
    ,
   PACH_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PACH_CNCT_SYS_ID' 
    }
    ,
   PACH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PACH_SYS_ID' 
    }
    ,
   PACH_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PACH_POL_SYS_ID' 
    }
    ,
   PACH_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PACH_END_NO_IDX' 
    }
    ,
   PACH_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PACH_END_SR_NO' 
    }
    ,
   PACH_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PACH_CURR_CODE' 
    }
    ,
   PACH_CURR_RATE_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PACH_CURR_RATE_TYPE' 
    }
    ,
   PACH_CURR_RATE_1: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PACH_CURR_RATE_1' 
    }
    ,
   PACH_CURR_RATE_2: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PACH_CURR_RATE_2' 
    }
    ,
   PACH_CURR_RATE_3: { 
      type: DataTypes.DECIMAL(21, 6), 
      allowNull: false, 
      
      field: 'PACH_CURR_RATE_3' 
    }
    ,
   PACH_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PACH_REC_TYPE' 
    }
    ,
   PACH_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PACH_CR_UID' 
    }
    ,
   PACH_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PACH_CR_DT' 
    }
    ,
   PACH_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PACH_UPD_UID' 
    }
    ,
   PACH_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PACH_UPD_DT' 
    }
    ,
   PACH_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PACH_COMP_CODE' 
    }
    ,
   PACH_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PACH_DIVN_CODE' 
    }
    ,
   PACH_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PACH_DEPT_CODE' 
    }
    ,
   PACH_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PACH_DS_TYPE' 
    }
    ,
   PACH_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PACH_PROD_CODE' 
    }
    ,
   PACH_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_01' 
    }
    ,
   PACH_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_02' 
    }
    ,
   PACH_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_03' 
    }
    ,
   PACH_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_04' 
    }
    ,
   PACH_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_05' 
    }
    ,
   PACH_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_06' 
    }
    ,
   PACH_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_07' 
    }
    ,
   PACH_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_08' 
    }
    ,
   PACH_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_09' 
    }
    ,
   PACH_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PACH_FLEX_10' 
    }
    
    }, {
        tableName: 'PGITH_POL_APPL_CURR',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgithPolApplCurr;
};