import { DataSource } from 'typeorm';
import { Car } from '../entity/Car';

const { DB_USER, DB_PASS, DB_NAME, DB_HOST, DB_PORT } = process.env;

const ormConfig: DataSource = new DataSource({
    type: 'mysql',
    host: DB_HOST,
    port: parseInt(DB_PORT, 10),
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASS,
    synchronize: true,
    entities: [
      Car
    ],
    migrations: [
        'src/migration/*.ts'
    ],
    subscribers: []
});

export default ormConfig;