module.exports = (sequelize, DataTypes) => {
  const PGITPOLHYPOTHECATION = sequelize.define('PGITPOLHYPOTHECATION', {
       PHPO_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PHPO_SYS_ID' 
    }
    ,
   PHPO_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PHPO_POL_SYS_ID' 
    }
    ,
   PHPO_LVL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PHPO_LVL_SYS_ID' 
    }
    ,
   PHPO_LVL_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PHPO_LVL_SR_NO' 
    }
    ,
   PHPO_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PHPO_END_NO_IDX' 
    }
    ,
   PHPO_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PHPO_END_SR_NO' 
    }
    ,
   PHPO_CUST_NAME: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPO_CUST_NAME' 
    }
    ,
   PHPO_CUST_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPO_CUST_CODE' 
    }
    ,
   PHPO_HYPO_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPO_HYPO_TYPE' 
    }
    ,
   PHPO_BANK_BRANCH: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_BANK_BRANCH' 
    }
    ,
   PHPO_BANK_CONTACT_1: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPO_BANK_CONTACT_1' 
    }
    ,
   PHPO_BANK_CONTACT_2: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPO_BANK_CONTACT_2' 
    }
    ,
   PHPO_BANK_PHONE: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPO_BANK_PHONE' 
    }
    ,
   PHPO_BANK_FAX: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPO_BANK_FAX' 
    }
    ,
   PHPO_BANK_AREA: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPO_BANK_AREA' 
    }
    ,
   PHPO_BANK_REGION: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPO_BANK_REGION' 
    }
    ,
   PHPO_BANK_COUNTRY: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPO_BANK_COUNTRY' 
    }
    ,
   PHPO_BANK_EMAIL1: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPO_BANK_EMAIL1' 
    }
    ,
   PHPO_BANK_EMAIL2: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPO_BANK_EMAIL2' 
    }
    ,
   PHPO_BANK_WEB_SITE: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPO_BANK_WEB_SITE' 
    }
    ,
   PHPO_BANK_REF_NO: { 
      type: DataTypes.STRING(60), 
      allowNull: true, 
      
      field: 'PHPO_BANK_REF_NO' 
    }
    ,
   PHPO_LOAN_EXP_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PHPO_LOAN_EXP_DT' 
    }
    ,
   PHPO_BANK_LOAN_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PHPO_BANK_LOAN_LC_3' 
    }
    ,
   PHPO_BANK_LOAN_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PHPO_BANK_LOAN_LC_1' 
    }
    ,
   PHPO_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_01' 
    }
    ,
   PHPO_BANK_LOAN_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PHPO_BANK_LOAN_LC_2' 
    }
    ,
   PHPO_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_02' 
    }
    ,
   PHPO_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_03' 
    }
    ,
   PHPO_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_04' 
    }
    ,
   PHPO_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_05' 
    }
    ,
   PHPO_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_06' 
    }
    ,
   PHPO_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_07' 
    }
    ,
   PHPO_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_08' 
    }
    ,
   PHPO_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_09' 
    }
    ,
   PHPO_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_10' 
    }
    ,
   PHPO_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PHPO_REC_TYPE' 
    }
    ,
   PHPO_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PHPO_CR_UID' 
    }
    ,
   PHPO_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PHPO_CR_DT' 
    }
    ,
   PHPO_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPO_UPD_UID' 
    }
    ,
   PHPO_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PHPO_UPD_DT' 
    }
    ,
   PHPO_BANK_NAME: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_BANK_NAME' 
    }
    ,
   PHPO_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPO_COMP_CODE' 
    }
    ,
   PHPO_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPO_DIVN_CODE' 
    }
    ,
   PHPO_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPO_DEPT_CODE' 
    }
    ,
   PHPO_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPO_DS_TYPE' 
    }
    ,
   PHPO_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPO_PROD_CODE' 
    }
    ,
   PHPO_ORG_BANK_LOAN_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PHPO_ORG_BANK_LOAN_LC_1' 
    }
    ,
   PHPO_ORG_BANK_LOAN_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PHPO_ORG_BANK_LOAN_LC_2' 
    }
    ,
   PHPO_ORG_BANK_LOAN_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PHPO_ORG_BANK_LOAN_LC_3' 
    }
    ,
   PHPO_BANK_ADDR_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_BANK_ADDR_02' 
    }
    ,
   PHPO_BANK_ADDR_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_BANK_ADDR_03' 
    }
    ,
   PHPO_BANK_STATE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPO_BANK_STATE' 
    }
    ,
   PHPO_BANK_CITY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPO_BANK_CITY' 
    }
    ,
   PHPO_BANK_PIN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPO_BANK_PIN_CODE' 
    }
    ,
   PHPO_BANK_ADDR_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_BANK_ADDR_01' 
    }
    ,
   PHPO_BANK_PINCODE: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPO_BANK_PINCODE' 
    }
    ,
   PHPO_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_11' 
    }
    ,
   PHPO_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_12' 
    }
    ,
   PHPO_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_13' 
    }
    ,
   PHPO_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_14' 
    }
    ,
   PHPO_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PHPO_FLEX_15' 
    }
    ,
   PHPO_PRS_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PHPO_PRS_SYS_ID' 
    }
    ,
   PHPO_BANK_COUNTY: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PHPO_BANK_COUNTY' 
    }
    ,
   PHPO_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PHPO_CNCT_SYS_ID' 
    }
    
    }, {
        tableName: 'PGIT_POL_HYPOTHECATION',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITPOLHYPOTHECATION;
};