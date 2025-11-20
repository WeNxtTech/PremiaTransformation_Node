module.exports = (sequelize, DataTypes) => {
  const PcomCodes = sequelize.define('PcomCodes', {
       PC_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PC_FLEX_10' 
    }
    ,
   PC_LONG_DESC1: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PC_LONG_DESC1' 
    }
    ,
   PC_LONG_DESC1_BL: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PC_LONG_DESC1_BL' 
    }
    ,
   PC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PC_TYPE' 
    }
    ,
   PC_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PC_CODE' 
    }
    ,
   PC_MC_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PC_MC_CODE' 
    }
    ,
   PC_MAST_DEF_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PC_MAST_DEF_CODE' 
    }
    ,
   PC_DESC: { 
      type: DataTypes.STRING(240), 
      allowNull: false, 
      
      field: 'PC_DESC' 
    }
    ,
   PC_DESC_BL: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PC_DESC_BL' 
    }
    ,
   PC_SHORT_DESC: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PC_SHORT_DESC' 
    }
    ,
   PC_SHORT_DESC_BL: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PC_SHORT_DESC_BL' 
    }
    ,
   PC_LONG_DESC: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PC_LONG_DESC' 
    }
    ,
   PC_LONG_DESC_BL: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PC_LONG_DESC_BL' 
    }
    ,
   PC_CODE_BY_CLASS_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PC_CODE_BY_CLASS_YN' 
    }
    ,
   PC_CLASS_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PC_CLASS_CODE' 
    }
    ,
   PC_VALUE: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PC_VALUE' 
    }
    ,
   PC_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PC_FLEX_01' 
    }
    ,
   PC_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PC_FLEX_02' 
    }
    ,
   PC_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PC_FLEX_03' 
    }
    ,
   PC_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PC_FLEX_04' 
    }
    ,
   PC_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PC_FLEX_05' 
    }
    ,
   PC_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PC_EFF_FM_DT' 
    }
    ,
   PC_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PC_EFF_TO_DT' 
    }
    ,
   PC_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PC_CR_UID' 
    }
    ,
   PC_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PC_CR_DT' 
    }
    ,
   PC_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PC_UPD_UID' 
    }
    ,
   PC_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PC_UPD_DT' 
    }
    ,
   PC_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PC_FLEX_06' 
    }
    ,
   PC_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PC_FLEX_07' 
    }
    ,
   PC_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PC_FLEX_08' 
    }
    ,
   PC_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PC_FLEX_09' 
    }
    
    }, {
        tableName: 'PCOM_CODES',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PcomCodes;
};