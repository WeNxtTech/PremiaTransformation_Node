module.exports = (sequelize, DataTypes) => {
  const PcomAppParameter = sequelize.define('PcomAppParameter', {
       PARA_APP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PARA_APP_CODE' 
    }
    ,
   PARA_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PARA_CODE' 
    }
    ,
   PARA_SUB_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PARA_SUB_CODE' 
    }
    ,
   PARA_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PARA_NAME' 
    }
    ,
   PARA_BL_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PARA_BL_NAME' 
    }
    ,
   PARA_VALUE: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PARA_VALUE' 
    }
    ,
   PARA_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PARA_CR_UID' 
    }
    ,
   PARA_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PARA_CR_DT' 
    }
    ,
   PARA_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PARA_UPD_UID' 
    }
    ,
   PARA_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PARA_UPD_DT' 
    }
    ,
   PARA_REMARK: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PARA_REMARK' 
    }
    ,
   PARA_USR_UPD_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PARA_USR_UPD_YN' 
    }
    ,
   PARA_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PARA_FLEX_01' 
    }
    ,
   PARA_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PARA_FLEX_02' 
    }
    ,
   PARA_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PARA_FLEX_03' 
    }
    ,
   PARA_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PARA_FLEX_04' 
    }
    ,
   PARA_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PARA_FLEX_05' 
    }
    ,
   PARA_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PARA_FLEX_06' 
    }
    ,
   PARA_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PARA_FLEX_07' 
    }
    ,
   PARA_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PARA_FLEX_08' 
    }
    ,
   PARA_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PARA_FLEX_09' 
    }
    ,
   PARA_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PARA_FLEX_10' 
    }
    
    }, {
        tableName: 'PCOM_APP_PARAMETER',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PcomAppParameter;
};