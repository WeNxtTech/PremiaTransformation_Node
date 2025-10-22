module.exports = (sequelize, DataTypes) => {
  const ${pascalCase} = sequelize.define('${pascalCase}', {
    ${modelFields}
    }, {
        tableName: '${tableName}',
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    });
    return ${pascalCase};
};