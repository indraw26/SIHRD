import { pool } from '../config/db';
import fs from 'fs';
import path from 'path';

const runMigrations = async () => {
  const client = await pool.connect();
  console.log('🔄 Starting database migrations...');

  try {
    await client.query('BEGIN');

    const migrationsDir = __dirname;
    const files = fs.readdirSync(migrationsDir)
      .filter(f => f.endsWith('.sql'))
      .sort(); // 001_, 002_, etc.

    for (const file of files) {
      console.log(`Executing migration: ${file}`);
      const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
      await client.query(sql);
    }

    await client.query('COMMIT');
    console.log('✅ All migrations executed successfully.');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    client.release();
    pool.end();
  }
};

runMigrations();
