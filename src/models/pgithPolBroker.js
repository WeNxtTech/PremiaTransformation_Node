module.exports = (sequelize, DataTypes) => {
  const PgithPolBroker = sequelize.define('PgithPolBroker', {
       PBRKH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
       primaryKey: true,
      autoIncrement: true,
      
      field: 'PBRKH_SYS_ID' 
    }
    ,
   PBRKH_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRKH_POL_SYS_ID' 
    }
    ,
   PBRKH_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PBRKH_END_SR_NO' 
    }
    ,
   PBRKH_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRKH_END_NO_IDX' 
    }
    ,
   PBRKH_PSEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRKH_PSEC_SYS_ID' 
    }
    ,
   PBRKH_BRK_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRKH_BRK_CODE' 
    }
    ,
   PBRKH_CALC_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRKH_CALC_TYPE' 
    }
    ,
   PBRKH_COMM_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRKH_COMM_CODE' 
    }
    ,
   PBRKH_COMM_DESC: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_COMM_DESC' 
    }
    ,
   PBRKH_COMM_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'PBRKH_COMM_PERC' 
    }
    ,
   PBRKH_COMM_CURR: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRKH_COMM_CURR' 
    }
    ,
   PBRKH_COMM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRKH_COMM_FC' 
    }
    ,
   PBRKH_COMM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRKH_COMM_LC_1' 
    }
    ,
   PBRKH_COMM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRKH_COMM_LC_2' 
    }
    ,
   PBRKH_COMM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRKH_COMM_LC_3' 
    }
    ,
   PBRKH_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PBRKH_REC_TYPE' 
    }
    ,
   PBRKH_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PBRKH_CR_UID' 
    }
    ,
   PBRKH_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PBRKH_CR_DT' 
    }
    ,
   PBRKH_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRKH_UPD_UID' 
    }
    ,
   PBRKH_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PBRKH_UPD_DT' 
    }
    ,
   PBRKH_ORG_COMM_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRKH_ORG_COMM_FC' 
    }
    ,
   PBRKH_ORG_COMM_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRKH_ORG_COMM_LC_1' 
    }
    ,
   PBRKH_ORG_COMM_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRKH_ORG_COMM_LC_2' 
    }
    ,
   PBRKH_ORG_COMM_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PBRKH_ORG_COMM_LC_3' 
    }
    ,
   PBRKH_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRKH_COMP_CODE' 
    }
    ,
   PBRKH_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRKH_DIVN_CODE' 
    }
    ,
   PBRKH_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRKH_DEPT_CODE' 
    }
    ,
   PBRKH_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRKH_DS_TYPE' 
    }
    ,
   PBRKH_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRKH_PROD_CODE' 
    }
    ,
   PBRKH_COMM_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRKH_COMM_TYPE' 
    }
    ,
   PBRKH_CVR_IND_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRKH_CVR_IND_CODE' 
    }
    ,
   PBRKH_MAX_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRKH_MAX_PERC' 
    }
    ,
   PBRKH_MIN_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRKH_MIN_PERC' 
    }
    ,
   PBRKH_EDITABLE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRKH_EDITABLE_YN' 
    }
    ,
   PBRKH_CMNR_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRKH_CMNR_SYS_ID' 
    }
    ,
   PBRKH_ORG_COMM_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PBRKH_ORG_COMM_PERC' 
    }
    ,
   PBRKH_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_01' 
    }
    ,
   PBRKH_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_02' 
    }
    ,
   PBRKH_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_03' 
    }
    ,
   PBRKH_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_04' 
    }
    ,
   PBRKH_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_05' 
    }
    ,
   PBRKH_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_06' 
    }
    ,
   PBRKH_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_07' 
    }
    ,
   PBRKH_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_08' 
    }
    ,
   PBRKH_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_09' 
    }
    ,
   PBRKH_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_10' 
    }
    ,
   PBRKH_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_11' 
    }
    ,
   PBRKH_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_12' 
    }
    ,
   PBRKH_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_13' 
    }
    ,
   PBRKH_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_14' 
    }
    ,
   PBRKH_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PBRKH_FLEX_15' 
    }
    ,
   PBRKH_COUNTRY_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRKH_COUNTRY_CODE' 
    }
    ,
   PBRKH_LOCATION_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRKH_LOCATION_CODE' 
    }
    ,
   PBRKH_RISK_SEL_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PBRKH_RISK_SEL_TYPE' 
    }
    ,
   PBRKH_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PBRKH_CNCT_SYS_ID' 
    }
    ,
   PBRKH_COMM_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRKH_COMM_MODIFIED_YN' 
    }
    ,
   PBRKH_UPD_SUMM_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PBRKH_UPD_SUMM_YN' 
    }
    
    }, {
        tableName: 'PGITH_POL_BROKER',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgithPolBroker;
};