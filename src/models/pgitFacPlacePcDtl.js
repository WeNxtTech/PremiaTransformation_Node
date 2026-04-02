module.exports = (sequelize, DataTypes) => {
  const PgitFacPlacePcDtl = sequelize.define('PgitFacPlacePcDtl', {
       FPPD_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'FPPD_SYS_ID' 
    }
    ,
   FPPD_FPS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FPPD_FPS_SYS_ID' 
    }
    ,
   FPPD_FPS_PLACE_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'FPPD_FPS_PLACE_IDX' 
    }
    ,
   FPPD_PC_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPPD_PC_CODE' 
    }
    ,
   FPPD_FPS_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPPD_FPS_CURR_CODE' 
    }
    ,
   FPPD_SHARE_PERC: { 
      type: DataTypes.DECIMAL(15, 12), 
      allowNull: false, 
      
      field: 'FPPD_SHARE_PERC' 
    }
    ,
   FPPD_PLACE_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_PLACE_SI_FC' 
    }
    ,
   FPPD_PLACE_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_PLACE_SI_LC_1' 
    }
    ,
   FPPD_PLACE_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_PLACE_SI_LC_2' 
    }
    ,
   FPPD_PLACE_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_PLACE_SI_LC_3' 
    }
    ,
   FPPD_PLACE_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_PLACE_PML_FC' 
    }
    ,
   FPPD_PLACE_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_PLACE_PML_LC_1' 
    }
    ,
   FPPD_PLACE_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_PLACE_PML_LC_2' 
    }
    ,
   FPPD_PLACE_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_PLACE_PML_LC_3' 
    }
    ,
   FPPD_AVG_RATE: { 
      type: DataTypes.DECIMAL(22, 8), 
      allowNull: false, 
      
      field: 'FPPD_AVG_RATE' 
    }
    ,
   FPPD_PLACE_RATE: { 
      type: DataTypes.DECIMAL(22, 8), 
      allowNull: false, 
      
      field: 'FPPD_PLACE_RATE' 
    }
    ,
   FPPD_PLACE_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_PLACE_PREM_FC' 
    }
    ,
   FPPD_PLACE_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_PLACE_PREM_LC_1' 
    }
    ,
   FPPD_PLACE_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_PLACE_PREM_LC_2' 
    }
    ,
   FPPD_PLACE_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_PLACE_PREM_LC_3' 
    }
    ,
   FPPD_FAC_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_FAC_PREM_FC' 
    }
    ,
   FPPD_FAC_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_FAC_PREM_LC_1' 
    }
    ,
   FPPD_FAC_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_FAC_PREM_LC_2' 
    }
    ,
   FPPD_FAC_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_FAC_PREM_LC_3' 
    }
    ,
   FPPD_ORG_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'FPPD_ORG_SHARE_PERC' 
    }
    ,
   FPPD_ORG_PLACE_SI_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_PLACE_SI_FC' 
    }
    ,
   FPPD_ORG_PLACE_SI_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_PLACE_SI_LC_1' 
    }
    ,
   FPPD_ORG_PLACE_SI_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_PLACE_SI_LC_2' 
    }
    ,
   FPPD_ORG_PLACE_SI_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_PLACE_SI_LC_3' 
    }
    ,
   FPPD_ORG_PLACE_PML_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_PLACE_PML_FC' 
    }
    ,
   FPPD_ORG_PLACE_PML_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_PLACE_PML_LC_1' 
    }
    ,
   FPPD_ORG_PLACE_PML_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_PLACE_PML_LC_2' 
    }
    ,
   FPPD_ORG_PLACE_PML_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_PLACE_PML_LC_3' 
    }
    ,
   FPPD_ORG_PLACE_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_PLACE_PREM_FC' 
    }
    ,
   FPPD_ORG_PLACE_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_PLACE_PREM_LC_1' 
    }
    ,
   FPPD_ORG_PLACE_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_PLACE_PREM_LC_2' 
    }
    ,
   FPPD_ORG_PLACE_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_PLACE_PREM_LC_3' 
    }
    ,
   FPPD_ORG_FAC_PREM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_FAC_PREM_FC' 
    }
    ,
   FPPD_ORG_FAC_PREM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_FAC_PREM_LC_1' 
    }
    ,
   FPPD_ORG_FAC_PREM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_FAC_PREM_LC_2' 
    }
    ,
   FPPD_ORG_FAC_PREM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'FPPD_ORG_FAC_PREM_LC_3' 
    }
    ,
   FPPD_REC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPPD_REC_TYPE' 
    }
    ,
   FPPD_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPPD_FLEX_01' 
    }
    ,
   FPPD_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPPD_FLEX_02' 
    }
    ,
   FPPD_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPPD_FLEX_03' 
    }
    ,
   FPPD_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPPD_FLEX_04' 
    }
    ,
   FPPD_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'FPPD_FLEX_05' 
    }
    ,
   FPPD_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'FPPD_CR_UID' 
    }
    ,
   FPPD_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'FPPD_CR_DT' 
    }
    ,
   FPPD_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'FPPD_UPD_UID' 
    }
    ,
   FPPD_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'FPPD_UPD_DT' 
    }
    ,
   FPPD_REV_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'FPPD_REV_YN' 
    }
    
    }, {
        tableName: 'PGIT_FAC_PLACE_PC_DTL',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgitFacPlacePcDtl;
};