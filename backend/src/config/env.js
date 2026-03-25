require('dotenv').config();

const env = {
  // Application
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT, 10) || 5000,
  BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:5000',

  // Database
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: parseInt(process.env.DB_PORT, 10) || 5432,
  DB_NAME: process.env.DB_NAME || 'sihrd_db',
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || '',

  // JWT
  JWT_SECRET: process.env.JWT_SECRET || 'super_secret_jwt_key_123!@#',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
};

module.exports = env;
