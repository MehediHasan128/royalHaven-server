import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join(process.cwd(), '.env')});

export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    bcrypt_saltround: process.env.BCRYPT_SALTROUND,
    admin_password: process.env.ADMIN_PASSWORD,
    jwt_access_secret_token: process.env.JWT_ACCESS_SECRET_TOKEN,
    jwt_access_expire_in: process.env.JWT_ACCESS_EXPIRE_IN,
    jwt_refresh_secret_token: process.env.JWT_REFRESH_SECRET_TOKEN,
    jwt_refresh_expire_in: process.env.JWT_REFRESH_EXPIRE_IN,
}