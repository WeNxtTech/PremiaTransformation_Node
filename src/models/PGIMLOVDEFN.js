module.exports = (sequelize, DataTypes) => {
  const PGIMLOVDEFN = sequelize.define('PGIMLOVDEFN', {
       PLD_PROG_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PLD_PROG_CODE' 
    }
    ,
   PLD_MOD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PLD_MOD_CODE' 
    }
    ,
   PLD_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PLD_PROD_CODE' 
    }
    ,
   PLD_SECTION_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PLD_SECTION_CODE' 
    }
    ,
   PLD_BLOCK_NAME: { 
      type: DataTypes.STRING(30), 
      allowNull: true, 
      
      field: 'PLD_BLOCK_NAME' 
    }
    ,
   PLD_FIELD_NAME: { 
      type: DataTypes.STRING(30), 
      allowNull: true, 
      
      field: 'PLD_FIELD_NAME' 
    }
    ,
   PLD_LOV_TITLE: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PLD_LOV_TITLE' 
    }
    ,
   PLD_LOV_TITLE_BL: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PLD_LOV_TITLE_BL' 
    }
    ,
   PLD_LOV_NO_OF_COLUMN: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PLD_LOV_NO_OF_COLUMN' 
    }
    ,
   PLD_LOV_SELECT_STMT: { 
      type: DataTypes.STRING(4000), 
      allowNull: true, 
      
      field: 'PLD_LOV_SELECT_STMT' 
    }
    ,
   PLD_COLUMN_LENGTH: { 
      type: DataTypes.STRING(100), 
      allowNull: true, 
      
      field: 'PLD_COLUMN_LENGTH' 
    }
    ,
   PLD_COLUMN_HEAD: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PLD_COLUMN_HEAD' 
    }
    ,
   PLD_COLUMN_HEAD_BL: { 
      type: DataTypes.STRING(2000), 
      allowNull: true, 
      
      field: 'PLD_COLUMN_HEAD_BL' 
    }
    ,
   PLD_RETURN_FIELD_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PLD_RETURN_FIELD_NAME' 
    }
    ,
   PLD_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PLD_CR_UID' 
    }
    ,
   PLD_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PLD_CR_DT' 
    }
    ,
   PLD_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PLD_UPD_UID' 
    }
    ,
   PLD_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PLD_UPD_DT' 
    }
    ,
   PLD_PARA_COL_1: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PLD_PARA_COL_1' 
    }
    ,
   PLD_PARA_COL_2: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PLD_PARA_COL_2' 
    }
    ,
   PLD_PARA_COL_3: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PLD_PARA_COL_3' 
    }
    ,
   PLD_PARA_COL_4: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PLD_PARA_COL_4' 
    }
    ,
   PLD_PARA_COL_5: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PLD_PARA_COL_5' 
    }
    ,
   PLD_AUTOQUERY_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PLD_AUTOQUERY_YN' 
    }
    ,
   PLD_LOV_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PLD_LOV_TYPE' 
    }
    ,
   PLD_INITIAL_SORT_COL: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PLD_INITIAL_SORT_COL' 
    }
    ,
   PLD_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PLD_FLEX_01' 
    }
    ,
   PLD_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PLD_FLEX_02' 
    }
    ,
   PLD_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PLD_FLEX_03' 
    }
    ,
   PLD_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PLD_FLEX_04' 
    }
    ,
   PLD_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PLD_FLEX_05' 
    }
    ,
   PLD_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PLD_FLEX_06' 
    }
    ,
   PLD_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PLD_FLEX_07' 
    }
    ,
   PLD_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PLD_FLEX_08' 
    }
    ,
   PLD_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PLD_FLEX_09' 
    }
    ,
   PLD_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PLD_FLEX_10' 
    }
    ,
   PLD_SOFT_SEARCH_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PLD_SOFT_SEARCH_YN' 
    }
    
    }, {
        tableName: 'PGIM_LOV_DEFN',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGIMLOVDEFN;
};