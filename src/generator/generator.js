// generator.js
const fs = require('fs');
const path = require('path');
const envPath = path.join(__dirname, '../../.env');
require('dotenv').config({ path: envPath });
const readline = require('readline');
const { Sequelize, DataTypes } = require('sequelize');
require('oracledb');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Template loading function
const loadTemplate = (templateName, variables) => {
  const templatePath = path.join(__dirname, 'templates', `${templateName}.template.js`);
  let templateContent = fs.readFileSync(templatePath, 'utf8');
  
  // Replace variables in template
  Object.keys(variables).forEach(key => {
    const regex = new RegExp(`\\$\\{${key}\\}`, 'g');
    templateContent = templateContent.replace(regex, variables[key]);
  });
  
  return templateContent;
};

rl.question('Enter table name: ', async (tableName) => {
  rl.close();

  // Convert table name to camelCase for filenames
  const camelCase = tableName.split('_').map((w, i) => i === 0 ? w : w[0].toUpperCase() + w.slice(1)).join('');
  const pascalCase = tableName.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join('');

  // Connect to DB
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 1521,
      dialect: 'oracle',
      logging: false,
      dialectOptions: {
        connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SERVICE_NAME}`,
      },
    }
  );

  try {
    await sequelize.authenticate();
    console.log('Database connected...');
  } catch (err) {
    console.error('DB connection failed:', err);
    process.exit(1);
  }

  // Fetch table metadata
  const columns = await sequelize.query(
    `SELECT COLUMN_NAME, DATA_TYPE, DATA_LENGTH, DATA_PRECISION, DATA_SCALE, NULLABLE 
     FROM ALL_TAB_COLUMNS 
     WHERE TABLE_NAME = :table`,
    { replacements: { table: tableName.toUpperCase() }, type: Sequelize.QueryTypes.SELECT }
  );
  const pkColumn = await sequelize.query(
    `SELECT cols.COLUMN_NAME
    FROM ALL_CONSTRAINTS cons, ALL_CONS_COLUMNS cols
    WHERE cons.CONSTRAINT_TYPE = 'P'
      AND cons.CONSTRAINT_NAME = cols.CONSTRAINT_NAME
      AND cons.TABLE_NAME = :table`,
    { replacements: { table: tableName.toUpperCase() }, type: Sequelize.QueryTypes.SELECT }
  );

  const primaryKey = pkColumn.length ? pkColumn[0].COLUMN_NAME.toLowerCase() : 'id';

  if (!columns.length) {
    console.error('No columns found for table', tableName);
    process.exit(1);
  }

  // Generate model fields
  const modelFields = columns.map(col => {
    let typeMapping;
    switch(col.DATA_TYPE) {
      case 'VARCHAR2':
      case 'NVARCHAR2':
        typeMapping = `DataTypes.STRING(${col.DATA_LENGTH})`;
        break;
      case 'NUMBER':
        typeMapping = col.DATA_SCALE > 0 ? `DataTypes.DECIMAL(${col.DATA_PRECISION || 10}, ${col.DATA_SCALE})` : `DataTypes.INTEGER`;
        break;
      case 'DATE':
        typeMapping = `DataTypes.DATE`;
        break;
      default:
        typeMapping = 'DataTypes.STRING';
    }
    return `   ${col.COLUMN_NAME.toLowerCase()}: { 
      type: ${typeMapping}, 
      allowNull: ${col.NULLABLE === 'Y'}, 
      ${col.COLUMN_NAME.toLowerCase() === primaryKey ? 'primaryKey: true,\n      autoIncrement: true,' : ''}
      field: '${col.COLUMN_NAME}' 
    }
    `;
  }).join(',\n');

  // Template variables
  const templateVars = {
    tableName: tableName.toUpperCase(),
    pascalCase,
    camelCase,
    modelFields,
    primaryKey
  };

  // Generate files from templates
  const modelContent = loadTemplate('model', templateVars);
  const serviceContent = loadTemplate('service', templateVars);
  const controllerContent = loadTemplate('controller', templateVars);
  const routeContent = loadTemplate('route', templateVars);

  // Save files
  const projectRoot = path.resolve(__dirname, '..');

  const paths = {
    model: path.join(projectRoot, 'models', `${camelCase}.js`),
    service: path.join(projectRoot, 'services', `${camelCase}Service.js`),
    controller: path.join(projectRoot, 'controllers', `${camelCase}Controller.js`),
    route: path.join(projectRoot, 'routes', `${camelCase}.js`),
  };

  fs.writeFileSync(paths.model, modelContent);
  fs.writeFileSync(paths.service, serviceContent);
  fs.writeFileSync(paths.controller, controllerContent);
  fs.writeFileSync(paths.route, routeContent);

  // Auto-add route to src/routes/index.js
  const indexPath = path.join(projectRoot, 'routes', 'index.js');
  let indexContent = '';
  if (fs.existsSync(indexPath)) {
    indexContent = fs.readFileSync(indexPath, 'utf-8');
  } else {
    // create a basic index.js if it doesn't exist
    indexContent = loadTemplate('index-route', templateVars);
  }

  const importLine = `const ${camelCase}Router = require('./${camelCase}');`;
  const useLine = `router.use('/${camelCase}', ${camelCase}Router);`;

  if (!indexContent.includes(importLine)) {
    // Insert import at the top after other imports
    indexContent = indexContent.replace(/(const router = express\.Router\(\);)/, `${importLine}\n$1`);
    // Insert router.use before module.exports
    indexContent = indexContent.replace(/(module\.exports = router;)/, `${useLine}\n$1`);
    fs.writeFileSync(indexPath, indexContent);
    console.log(`Route auto-added to src/routes/index.js`);
  } else {
    console.log(`Route already exists in src/routes/index.js`);
  }

  console.log('Files generated successfully:');
  console.log(paths);
  process.exit(0);
});