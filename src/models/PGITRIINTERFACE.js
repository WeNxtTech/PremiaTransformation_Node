module.exports = (sequelize, DataTypes) => {
  const PGITRIINTERFACE = sequelize.define('PGITRIINTERFACE', {
       RI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'RI_SYS_ID' 
    }
    ,
   RI_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RI_COMP_CODE' 
    }
    ,
   RI_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RI_DIVN_CODE' 
    }
    ,
   RI_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RI_DEPT_CODE' 
    }
    ,
   RI_POL_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RI_POL_DS_TYPE' 
    }
    ,
   RI_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RI_PROD_CODE' 
    }
    ,
   RI_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RI_POL_SYS_ID' 
    }
    ,
   RI_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RI_END_NO_IDX' 
    }
    ,
   RI_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'RI_END_SR_NO' 
    }
    ,
   RI_ALLOC_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'RI_ALLOC_IDX' 
    }
    ,
   RI_ALLOC_BASIS: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RI_ALLOC_BASIS' 
    }
    ,
   RI_CEDING_BASIS: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RI_CEDING_BASIS' 
    }
    ,
   RI_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: false, 
      
      field: 'RI_POL_NO' 
    }
    ,
   RI_END_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'RI_END_NO' 
    }
    ,
   RI_POL_BUS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RI_POL_BUS_TYPE' 
    }
    ,
   RI_TXN_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'RI_TXN_DT' 
    }
    ,
   RI_CENT_FAC_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RI_CENT_FAC_YN' 
    }
    ,
   RI_APPR_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RI_APPR_YN' 
    }
    ,
   RI_APPR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RI_APPR_UID' 
    }
    ,
   RI_APPR_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'RI_APPR_DT' 
    }
    ,
   RI_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RI_FLEX_01' 
    }
    ,
   RI_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RI_FLEX_02' 
    }
    ,
   RI_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RI_FLEX_03' 
    }
    ,
   RI_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RI_FLEX_04' 
    }
    ,
   RI_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'RI_FLEX_05' 
    }
    ,
   RI_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'RI_CR_UID' 
    }
    ,
   RI_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'RI_CR_DT' 
    }
    ,
   RI_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RI_UPD_UID' 
    }
    ,
   RI_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'RI_UPD_DT' 
    }
    ,
   RI_BATCH_ID: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'RI_BATCH_ID' 
    }
    ,
   RI_RA_APPL_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RI_RA_APPL_YN' 
    }
    ,
   RI_RA_ALLOC_AT: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RI_RA_ALLOC_AT' 
    }
    ,
   RI_TTY_BUS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RI_TTY_BUS_TYPE' 
    }
    ,
   RI_CONFIRM_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RI_CONFIRM_UID' 
    }
    ,
   RI_CONFIRM_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'RI_CONFIRM_DT' 
    }
    ,
   RI_CONFIRM_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RI_CONFIRM_YN' 
    }
    ,
   RI_DED_INW_COMM: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RI_DED_INW_COMM' 
    }
    ,
   RI_PREM_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'RI_PREM_TYPE' 
    }
    ,
   RI_BORDX_ACNT_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'RI_BORDX_ACNT_DT' 
    }
    ,
   RI_LINK_POL_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'RI_LINK_POL_NO' 
    }
    ,
   RI_UPD_SUMM_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'RI_UPD_SUMM_YN' 
    }
    
    }, {
        tableName: 'PGIT_RI_INTERFACE',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITRIINTERFACE;
};