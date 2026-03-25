const fs   = require('fs');
const path = require('path');
const { pool } = require('../config/db');

const MIGRATIONS_DIR = path.join(__dirname, '..', 'migrations');

function extractTableName(sql) {
  const match = sql.match(/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?["']?(\w+)["']?/i);
  return match ? match[1].toLowerCase() : null;
}

async function tableExists(client, tableName) {
  const { rows } = await client.query(
    `SELECT 1 FROM information_schema.tables
     WHERE table_schema = 'public' AND table_name = $1`,
    [tableName]
  );
  return rows.length > 0;
}

const runMigrations = async () => {
  const client = await pool.connect();

  try {
    const files = fs
      .readdirSync(MIGRATIONS_DIR)
      .filter((f) => f.endsWith('.sql'))
      .sort();

    if (files.length === 0) {
      console.log('ℹ️  No migration files found.');
      return;
    }

    console.log('\n📦 Running migrations...');

    for (const file of files) {
      const sql       = fs.readFileSync(path.join(MIGRATIONS_DIR, file), 'utf8');
      const tableName = extractTableName(sql);

      if (!tableName) {
        console.warn(`⚠️  [${file}] Could not detect table name – skipping.`);
        continue;
      }

      const exists = await tableExists(client, tableName);

      if (exists) {
        console.log(`✅ [${file}] Table "${tableName}" already exists – no migration needed.`);
      } else {
        await client.query(sql);
        console.log(`🚀 [${file}] Table "${tableName}" created successfully.`);
      }
    }

    console.log('✅ Migration check complete.\n');
  } catch (err) {
    console.error('❌ Migration failed:', err.message);
    throw err;
  } finally {
    client.release();
  }
};

module.exports = { runMigrations };
