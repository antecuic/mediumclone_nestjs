import { DataSource, DataSourceOptions } from 'typeorm';
import ormconfig from './orm.config';

const ormseedconfig: DataSourceOptions = {
  ...ormconfig,
  migrations: ['src/seeds/*.ts'],
};

const seedDataSource = new DataSource(ormseedconfig);

export default seedDataSource;
