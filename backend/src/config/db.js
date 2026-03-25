const { Pool } = require('pg');
const env = require('./env');

const pool = new Pool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  database: env.DB_NAME,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
});

pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('❌ Unexpected PostgreSQL error:', err.message);
  process.exit(1);
});

/**
 * Test the database connection
 */
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log(`✅ Database "${env.DB_NAME}" connection successful`);
    client.release();
  } catch (err) {
    console.error('❌ Failed to connect to database:', err.message);
    process.exit(1);
  }
};

module.exports = { pool, testConnection };
