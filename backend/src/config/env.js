require('dotenv').config();

const env = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT, 10),
  BACKEND_URL: process.env.BACKEND_URL,

  DB_HOST: process.env.DB_HOST,
  DB_PORT: parseInt(process.env.DB_PORT, 10),
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,

  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
};

module.exports = env;
