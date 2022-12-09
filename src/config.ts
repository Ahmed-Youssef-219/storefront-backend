import dotenv from 'dotenv';
dotenv.config();
const {
    PORT,
    DB_SERVER_HOST,
    DB_NAME,
    DB_SERVER_USER,
    DB_SERVER_PASSWORD,
    DB_SERVER_PORT,
} = process.env;

export {
    PORT,
    DB_SERVER_HOST,
    DB_NAME,
    DB_SERVER_USER,
    DB_SERVER_PASSWORD,
    DB_SERVER_PORT,
};
