import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, basename, join } from 'path';
import { readdir, readFile } from 'fs/promises';
import { Sequelize, DataTypes } from 'sequelize';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const env = process.env.NODE_ENV || 'development';

// Load config.json using fs/promises
const configPath = join(__dirname, '../config/config.json');
const configFile = await readFile(configPath, 'utf-8');
const config = JSON.parse(configFile);

const sequelizeConfig = config[env];
let sequelize;
if (sequelizeConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[sequelizeConfig.use_env_variable], sequelizeConfig);
} else {
  sequelize = new Sequelize(
    sequelizeConfig.database,
    sequelizeConfig.username,
    sequelizeConfig.password,
    sequelizeConfig
  );
}

const db = {};

const modelFiles = await readdir(__dirname);
const filteredFiles = modelFiles.filter(
  (file) =>
    file.indexOf('.') !== 0 &&
    file !== basename(__filename) &&
    file.endsWith('.js') &&
    !file.includes('.test.js')
);

for (const file of filteredFiles) {
  const filePath = pathToFileURL(join(__dirname, file)).href;
  const modelModule = await import(filePath);
  const model = modelModule.default;
  db[model.name] = model;
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;