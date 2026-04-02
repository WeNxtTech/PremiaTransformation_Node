module.exports = (sequelize, DataTypes) => {
  const PgitFacOut = sequelize.define('PgitFacOut', {
       FO_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'FO_SYS_ID' 
    }
    ,
   FO_RI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FO_RI_SYS_ID' 
    }
    ,
   FO_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FO_COMP_CODE' 
    }
    ,
   FO_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FO_DIVN_CODE' 
    }
    ,
   FO_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FO_DEPT_CODE' 
    }
    ,
   FO_POL_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FO_POL_DS_TYPE' 
    }
    ,
   FO_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FO_POL_SYS_ID' 
    }
    ,
   FO_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FO_END_NO_IDX' 
    }
    ,
   FO_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FO_END_SR_NO' 
    }
    ,
   FO_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'FO_POL_NO' 
    }
    ,
   FO_END_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'FO_END_NO' 
    }
    ,
   FO_POL_BUS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FO_POL_BUS_TYPE' 
    }
    ,
   FO_POL_CUST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FO_POL_CUST_CODE' 
    }
    ,
   FO_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FO_PROD_CODE' 
    }
    ,
   FO_POL_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FO_POL_FM_DT' 
    }
    ,
   FO_POL_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FO_POL_TO_DT' 
    }
    ,
   FO_END_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FO_END_FM_DT' 
    }
    ,
   FO_END_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FO_END_TO_DT' 
    }
    ,
   FO_ALLOC_ON: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FO_ALLOC_ON' 
    }
    ,
   FO_FAC_BASIS: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FO_FAC_BASIS' 
    }
    ,
   FO_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FO_REC_TYPE' 
    }
    ,
   FO_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FO_FLEX_01' 
    }
    ,
   FO_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FO_FLEX_02' 
    }
    ,
   FO_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FO_FLEX_03' 
    }
    ,
   FO_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FO_FLEX_04' 
    }
    ,
   FO_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FO_FLEX_05' 
    }
    ,
   FO_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FO_CR_UID' 
    }
    ,
   FO_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'FO_CR_DT' 
    }
    ,
   FO_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FO_UPD_UID' 
    }
    ,
   FO_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FO_UPD_DT' 
    }
    ,
   FO_FAC_XOL_BASIS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FO_FAC_XOL_BASIS' 
    }
    ,
   FO_FAC_XOL_ON: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FO_FAC_XOL_ON' 
    }
    ,
   FO_XOL_EFF_FM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FO_XOL_EFF_FM_DT' 
    }
    ,
   FO_XOL_EFF_TO_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FO_XOL_EFF_TO_DT' 
    }
    ,
   FO_FAC_XOL_ID: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'FO_FAC_XOL_ID' 
    }
    ,
   FO_DFLT_SHARE_PERC: { 
      type: DataTypes.DECIMAL(15, 12), 
      allowNull: true, 
      
      field: 'FO_DFLT_SHARE_PERC' 
    }
    ,
   FO_INST_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FO_INST_YN' 
    }
    ,
   FO_NO_OF_INST: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'FO_NO_OF_INST' 
    }
    ,
   FO_INSTL_METHOD: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FO_INSTL_METHOD' 
    }
    
    }, {
        tableName: 'PGIT_FAC_OUT',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitFacOut;
};