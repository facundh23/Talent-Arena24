import { Sequelize } from 'sequelize';
import device from './models/device.model';
import tracking from './models/tracking.model';

const { DB_USER, DB_NAME, DB_PASSWORD, DB_PORT, DB_HOST } = process.env;
console.log({ DB_USER, DB_NAME, DB_PASSWORD, DB_PORT, DB_HOST})
const sequelize = new Sequelize({
  database: DB_NAME,
  host: DB_HOST,
  password: DB_PASSWORD,
  port: Number(DB_PORT),
  username: DB_USER,
  dialect: 'mysql',
  logQueryParameters: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  device: device(sequelize),
  tracking: tracking(sequelize),
};

export default db;
