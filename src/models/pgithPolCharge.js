module.exports = (sequelize, DataTypes) => {
  const PgithPolCharge = sequelize.define('PgithPolCharge', {
       PCHGH_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHGH_DS_TYPE' 
    }
    ,
   PCHGH_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHGH_PROD_CODE' 
    }
    ,
   PCHGH_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHGH_TYPE' 
    }
    ,
   PCHGH_PREM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHGH_PREM_CURR_CODE' 
    }
    ,
   PCHGH_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_01' 
    }
    ,
   PCHGH_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_02' 
    }
    ,
   PCHGH_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_03' 
    }
    ,
   PCHGH_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_04' 
    }
    ,
   PCHGH_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_05' 
    }
    ,
   PCHGH_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_06' 
    }
    ,
   PCHGH_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_07' 
    }
    ,
   PCHGH_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_08' 
    }
    ,
   PCHGH_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_09' 
    }
    ,
   PCHGH_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_10' 
    }
    ,
   PCHGH_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_11' 
    }
    ,
   PCHGH_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_12' 
    }
    ,
   PCHGH_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_13' 
    }
    ,
   PCHGH_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_14' 
    }
    ,
   PCHGH_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PCHGH_FLEX_15' 
    }
    ,
   PCHGH_SEC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHGH_SEC_SYS_ID' 
    }
    ,
   PCHGH_SEC_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHGH_SEC_CODE' 
    }
    ,
   PCHGH_PRAI_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHGH_PRAI_SYS_ID' 
    }
    ,
   PCHGH_RATE_MODIFIABLE_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHGH_RATE_MODIFIABLE_YN' 
    }
    ,
   PCHGH_MAND_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHGH_MAND_YN' 
    }
    ,
   PCHGH_RATE_PER: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: true, 
      
      field: 'PCHGH_RATE_PER' 
    }
    ,
   PCHGH_LEVEL_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHGH_LEVEL_NO' 
    }
    ,
   PCHGH_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PCHGH_CNCT_SYS_ID' 
    }
    ,
   PCHGH_CHARGE_MODIFIED_YN: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PCHGH_CHARGE_MODIFIED_YN' 
    }
    ,
   PCHGH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PCHGH_SYS_ID' 
    }
    ,
   PCHGH_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHGH_POL_SYS_ID' 
    }
    ,
   PCHGH_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHGH_END_NO_IDX' 
    }
    ,
   PCHGH_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHGH_END_SR_NO' 
    }
    ,
   PCHGH_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PCHGH_SR_NO' 
    }
    ,
   PCHGH_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHGH_CODE' 
    }
    ,
   PCHGH_PERC: { 
      type: DataTypes.DECIMAL(20, 5), 
      allowNull: false, 
      
      field: 'PCHGH_PERC' 
    }
    ,
   PCHGH_CHG_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHGH_CHG_FC' 
    }
    ,
   PCHGH_CHG_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHGH_CHG_LC_1' 
    }
    ,
   PCHGH_CHG_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHGH_CHG_LC_2' 
    }
    ,
   PCHGH_CHG_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHGH_CHG_LC_3' 
    }
    ,
   PCHGH_ORG_CHG_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHGH_ORG_CHG_FC' 
    }
    ,
   PCHGH_ORG_CHG_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHGH_ORG_CHG_LC_1' 
    }
    ,
   PCHGH_ORG_CHG_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHGH_ORG_CHG_LC_2' 
    }
    ,
   PCHGH_ORG_CHG_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PCHGH_ORG_CHG_LC_3' 
    }
    ,
   PCHGH_CUST_SHARE_PERC: { 
      type: DataTypes.DECIMAL(8, 5), 
      allowNull: false, 
      
      field: 'PCHGH_CUST_SHARE_PERC' 
    }
    ,
   PCHGH_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: false, 
      
      field: 'PCHGH_REC_TYPE' 
    }
    ,
   PCHGH_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PCHGH_CR_UID' 
    }
    ,
   PCHGH_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PCHGH_CR_DT' 
    }
    ,
   PCHGH_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHGH_UPD_UID' 
    }
    ,
   PCHGH_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PCHGH_UPD_DT' 
    }
    ,
   PCHGH_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHGH_COMP_CODE' 
    }
    ,
   PCHGH_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHGH_DIVN_CODE' 
    }
    ,
   PCHGH_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PCHGH_DEPT_CODE' 
    }
    
    }, {
        tableName: 'PGITH_POL_CHARGE',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgithPolCharge;
};