module.exports = (sequelize, DataTypes) => {
  const PGIM_LOV_DEFN = sequelize.define("PGIM_LOV_DEFN", {
    PLD_PROG_CODE: { type: DataTypes.STRING, primaryKey: true },
    PLD_BLOCK_NAME: { type: DataTypes.STRING, primaryKey: true },
    PLD_FIELD_NAME: { type: DataTypes.STRING, primaryKey: true },
    
    PLD_LOV_TITLE: DataTypes.STRING,
    PLD_LOV_TITLE_BL: DataTypes.STRING,
    PLD_LOV_SELECT_STMT: DataTypes.TEXT,
    PLD_PARA_COL_1: DataTypes.STRING,
    PLD_PARA_COL_2: DataTypes.STRING,
    PLD_PARA_COL_3: DataTypes.STRING,
    PLD_PARA_COL_4: DataTypes.STRING,
    PLD_PARA_COL_5: DataTypes.STRING,
    PLD_MOD_CODE: DataTypes.STRING
  }, {
    tableName: "PGIM_LOV_DEFN",
    timestamps: false,
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });

  return PGIM_LOV_DEFN;
};
