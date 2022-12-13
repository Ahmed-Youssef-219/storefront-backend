import { Pool } from 'pg';
import vars from './config';


const dbServer = new Pool({
        host: vars.DB_SERVER_HOST,
        database: vars.DB_NAME,
        user: vars.DB_SERVER_USER,
        password: vars.DB_SERVER_PASSWORD,
        port: parseInt(vars.DB_SERVER_PORT as string),
});

export default dbServer ;

