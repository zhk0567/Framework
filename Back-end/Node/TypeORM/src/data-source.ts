import 'reflect-metadata';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DataSource } from 'typeorm';

import { Item } from './entity/Item.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const AppDataSource = new DataSource({
  type: 'sqljs',
  autoSave: true,
  location: path.join(__dirname, '..', 'dev.db'),
  entities: [Item],
  synchronize: true,
  logging: false,
});
