import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, basename, join } from 'path';
import { readdir } from 'fs/promises';
import sequelize from '../config/sequelize.js'; // Sử dụng chung instance này

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

export default db;