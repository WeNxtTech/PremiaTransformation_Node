module.exports = (sequelize, DataTypes) => {
  const PGITPOLINSTCHARGE = sequelize.define('PGITPOLINSTCHARGE', {
       PIC_COMP_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIC_COMP_CODE' 
    }
    ,
   PIC_DEPT_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIC_DEPT_CODE' 
    }
    ,
   PIC_PROD_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIC_PROD_CODE' 
    }
    ,
   PIC_DIVN_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIC_DIVN_CODE' 
    }
    ,
   PIC_DS_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIC_DS_TYPE' 
    }
    ,
   PIC_ORG_TAX_CHRG_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_ORG_TAX_CHRG_LC_1' 
    }
    ,
   PIC_ORG_TAX_CHRG_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_ORG_TAX_CHRG_LC_2' 
    }
    ,
   PIC_REC_TYPE: { 
      type: DataTypes.STRING(1), 
      allowNull: true, 
      
      field: 'PIC_REC_TYPE' 
    }
    ,
   PIC_ORG_TAX_CHRG_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_ORG_TAX_CHRG_LC_3' 
    }
    ,
   PIC_ORG_TAX_CHRG_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_ORG_TAX_CHRG_FC' 
    }
    ,
   PIC_INST_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIC_INST_END_NO_IDX' 
    }
    ,
   PIC_INST_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIC_INST_END_SR_NO' 
    }
    ,
   PIC_FLEX_01: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_01' 
    }
    ,
   PIC_FLEX_02: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_02' 
    }
    ,
   PIC_FLEX_03: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_03' 
    }
    ,
   PIC_FLEX_04: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_04' 
    }
    ,
   PIC_FLEX_05: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_05' 
    }
    ,
   PIC_FLEX_06: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_06' 
    }
    ,
   PIC_FLEX_07: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_07' 
    }
    ,
   PIC_FLEX_08: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_08' 
    }
    ,
   PIC_FLEX_09: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_09' 
    }
    ,
   PIC_FLEX_10: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_10' 
    }
    ,
   PIC_FLEX_11: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_11' 
    }
    ,
   PIC_FLEX_12: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_12' 
    }
    ,
   PIC_FLEX_13: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_13' 
    }
    ,
   PIC_FLEX_14: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_14' 
    }
    ,
   PIC_FLEX_15: { 
      type: DataTypes.STRING(240), 
      allowNull: true, 
      
      field: 'PIC_FLEX_15' 
    }
    ,
   PIC_CNCT_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: true, 
      
      field: 'PIC_CNCT_SYS_ID' 
    }
    ,
   PIC_COLL_CHG_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_COLL_CHG_AMT_FC' 
    }
    ,
   PIC_COLL_CHG_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_COLL_CHG_AMT_LC_1' 
    }
    ,
   PIC_COLL_CHG_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_COLL_CHG_AMT_LC_2' 
    }
    ,
   PIC_COLL_CHG_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_COLL_CHG_AMT_LC_3' 
    }
    ,
   PIC_ORG_COLL_CHG_AMT_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_ORG_COLL_CHG_AMT_FC' 
    }
    ,
   PIC_ORG_COLL_CHG_AMT_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_ORG_COLL_CHG_AMT_LC_1' 
    }
    ,
   PIC_ORG_COLL_CHG_AMT_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_ORG_COLL_CHG_AMT_LC_2' 
    }
    ,
   PIC_ORG_COLL_CHG_AMT_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_ORG_COLL_CHG_AMT_LC_3' 
    }
    ,
   PIC_DN_COLLEC_STS: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIC_DN_COLLEC_STS' 
    }
    ,
   PIC_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
      field: 'PIC_SYS_ID' 
    }
    ,
   PIC_POL_SYS_ID: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PIC_POL_SYS_ID' 
    }
    ,
   PIC_END_NO_IDX: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PIC_END_NO_IDX' 
    }
    ,
   PIC_END_SR_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PIC_END_SR_NO' 
    }
    ,
   PIC_INST_NO: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      
      field: 'PIC_INST_NO' 
    }
    ,
   PIC_PREM_CURR_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIC_PREM_CURR_CODE' 
    }
    ,
   PIC_TAX_CHRG_TYPE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIC_TAX_CHRG_TYPE' 
    }
    ,
   PIC_TAX_CHRG_CODE: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIC_TAX_CHRG_CODE' 
    }
    ,
   PIC_TAX_CHRG_FC: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: false, 
      
      field: 'PIC_TAX_CHRG_FC' 
    }
    ,
   PIC_TAX_CHRG_LC_1: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_TAX_CHRG_LC_1' 
    }
    ,
   PIC_TAX_CHRG_LC_2: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_TAX_CHRG_LC_2' 
    }
    ,
   PIC_TAX_CHRG_LC_3: { 
      type: DataTypes.DECIMAL(20, 3), 
      allowNull: true, 
      
      field: 'PIC_TAX_CHRG_LC_3' 
    }
    ,
   PIC_CR_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: false, 
      
      field: 'PIC_CR_UID' 
    }
    ,
   PIC_CR_DT: { 
      type: DataTypes.DATE, 
      allowNull: false, 
      
      field: 'PIC_CR_DT' 
    }
    ,
   PIC_UPD_UID: { 
      type: DataTypes.STRING(12), 
      allowNull: true, 
      
      field: 'PIC_UPD_UID' 
    }
    ,
   PIC_UPD_DT: { 
      type: DataTypes.DATE, 
      allowNull: true, 
      
      field: 'PIC_UPD_DT' 
    }
    
    }, {
        tableName: 'PGIT_POL_INST_CHARGE',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return PGITPOLINSTCHARGE;
};