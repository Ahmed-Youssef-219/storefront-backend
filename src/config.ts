import dotenv from 'dotenv';
dotenv.config();
const {
    PORT,
    DB_SERVER_HOST,
    DB_NAME_DEV,
    DB_SERVER_USER,
    DB_SERVER_PASSWORD,
    DB_SERVER_PORT,
    PEPPER,
    SALT,
    TOKEN_SECRET,
    NODE_ENV,
    DB_NAME_TEST
} = process.env;

export default {
    PORT,
    DB_SERVER_HOST,
    DB_SERVER_USER,
    DB_SERVER_PASSWORD,
    DB_SERVER_PORT,
    PEPPER,
    SALT,
    TOKEN_SECRET,
    NODE_ENV,
    DB_NAME: NODE_ENV == "dev" ? DB_NAME_DEV : DB_NAME_TEST
};
