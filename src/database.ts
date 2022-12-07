import {Pool} from 'pg';
import {DB_SERVER_HOST, DB_NAME, DB_SERVER_USER, DB_SERVER_PASSWORD } from './config';


const pool = new Pool({
    host: DB_SERVER_HOST,
    database: DB_NAME,
    user: DB_SERVER_USER,
    password: DB_SERVER_PASSWORD,
});




