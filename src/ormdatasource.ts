import { DataSource } from 'typeorm';
import ormconfig from './ormconfig';

const dataSource = new DataSource(ormconfig);

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default dataSource;
