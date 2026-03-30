module.exports = (sequelize, DataTypes) => {
  const PgithPolHypothecation = sequelize.define('PgithPolHypothecation', {
       PHPOH_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PHPOH_SYS_ID' 
    }
    ,
   PHPOH_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PHPOH_POL_SYS_ID' 
    }
    ,
   PHPOH_LVL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PHPOH_LVL_SYS_ID' 
    }
    ,
   PHPOH_LVL_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PHPOH_LVL_SR_NO' 
    }
    ,
   PHPOH_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PHPOH_END_NO_IDX' 
    }
    ,
   PHPOH_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PHPOH_END_SR_NO' 
    }
    ,
   PHPOH_CUST_NAME: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPOH_CUST_NAME' 
    }
    ,
   PHPOH_CUST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPOH_CUST_CODE' 
    }
    ,
   PHPOH_HYPO_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPOH_HYPO_TYPE' 
    }
    ,
   PHPOH_BANK_BRANCH: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_BRANCH' 
    }
    ,
   PHPOH_BANK_CONTACT_1: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_CONTACT_1' 
    }
    ,
   PHPOH_BANK_CONTACT_2: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_CONTACT_2' 
    }
    ,
   PHPOH_BANK_PHONE: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_PHONE' 
    }
    ,
   PHPOH_BANK_FAX: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_FAX' 
    }
    ,
   PHPOH_BANK_AREA: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_AREA' 
    }
    ,
   PHPOH_BANK_REGION: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_REGION' 
    }
    ,
   PHPOH_BANK_COUNTRY: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_COUNTRY' 
    }
    ,
   PHPOH_BANK_EMAIL1: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_EMAIL1' 
    }
    ,
   PHPOH_BANK_EMAIL2: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_EMAIL2' 
    }
    ,
   PHPOH_BANK_WEB_SITE: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_WEB_SITE' 
    }
    ,
   PHPOH_BANK_REF_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_REF_NO' 
    }
    ,
   PHPOH_LOAN_EXP_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PHPOH_LOAN_EXP_DT' 
    }
    ,
   PHPOH_BANK_LOAN_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_LOAN_LC_3' 
    }
    ,
   PHPOH_BANK_LOAN_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_LOAN_LC_1' 
    }
    ,
   PHPOH_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_01' 
    }
    ,
   PHPOH_BANK_LOAN_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_LOAN_LC_2' 
    }
    ,
   PHPOH_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_02' 
    }
    ,
   PHPOH_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_03' 
    }
    ,
   PHPOH_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_04' 
    }
    ,
   PHPOH_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_05' 
    }
    ,
   PHPOH_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_06' 
    }
    ,
   PHPOH_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_07' 
    }
    ,
   PHPOH_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_08' 
    }
    ,
   PHPOH_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_09' 
    }
    ,
   PHPOH_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_10' 
    }
    ,
   PHPOH_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PHPOH_REC_TYPE' 
    }
    ,
   PHPOH_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PHPOH_CR_UID' 
    }
    ,
   PHPOH_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PHPOH_CR_DT' 
    }
    ,
   PHPOH_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPOH_UPD_UID' 
    }
    ,
   PHPOH_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PHPOH_UPD_DT' 
    }
    ,
   PHPOH_BANK_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_NAME' 
    }
    ,
   PHPOH_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPOH_COMP_CODE' 
    }
    ,
   PHPOH_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPOH_DIVN_CODE' 
    }
    ,
   PHPOH_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPOH_DEPT_CODE' 
    }
    ,
   PHPOH_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPOH_DS_TYPE' 
    }
    ,
   PHPOH_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPOH_PROD_CODE' 
    }
    ,
   PHPOH_ORG_BANK_LOAN_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PHPOH_ORG_BANK_LOAN_LC_1' 
    }
    ,
   PHPOH_ORG_BANK_LOAN_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PHPOH_ORG_BANK_LOAN_LC_2' 
    }
    ,
   PHPOH_ORG_BANK_LOAN_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PHPOH_ORG_BANK_LOAN_LC_3' 
    }
    ,
   PHPOH_BANK_ADDR_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_ADDR_01' 
    }
    ,
   PHPOH_BANK_ADDR_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_ADDR_02' 
    }
    ,
   PHPOH_BANK_ADDR_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_ADDR_03' 
    }
    ,
   PHPOH_BANK_STATE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_STATE' 
    }
    ,
   PHPOH_BANK_CITY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_CITY' 
    }
    ,
   PHPOH_BANK_PIN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_PIN_CODE' 
    }
    ,
   PHPOH_BANK_PINCODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_PINCODE' 
    }
    ,
   PHPOH_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_11' 
    }
    ,
   PHPOH_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_12' 
    }
    ,
   PHPOH_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_13' 
    }
    ,
   PHPOH_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_14' 
    }
    ,
   PHPOH_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPOH_FLEX_15' 
    }
    ,
   PHPOH_PRS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PHPOH_PRS_SYS_ID' 
    }
    ,
   PHPOH_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PHPOH_CNCT_SYS_ID' 
    }
    ,
   PHPOH_BANK_COUNTY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPOH_BANK_COUNTY' 
    }
    
    }, {
        tableName: 'PGITH_POL_HYPOTHECATION',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PgithPolHypothecation;
};