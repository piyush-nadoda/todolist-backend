require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    DB_LINK:process.env.DATABASE_URL,
    BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET
}