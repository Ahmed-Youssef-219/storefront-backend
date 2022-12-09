import { Pool } from 'pg';
import {
    DB_SERVER_HOST,
    DB_NAME,
    DB_SERVER_USER,
    DB_SERVER_PASSWORD,
    DB_SERVER_PORT
} from './config';

const dbServer = new Pool({
    host: DB_SERVER_HOST,
    database: DB_NAME,
    user: DB_SERVER_USER,
    password: DB_SERVER_PASSWORD,
    port: parseInt(DB_SERVER_PORT as string),
});
export default dbServer;
