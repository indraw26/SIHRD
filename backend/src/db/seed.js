const fs   = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { pool } = require('../config/db');

const SEEDERS_DIR = path.join(__dirname, '..', 'seeders');

const runSeeders = async () => {
  const client = await pool.connect();

  try {
    const files = fs
      .readdirSync(SEEDERS_DIR)
      .filter((f) => f.endsWith('.sql'))
      .sort();

    if (files.length === 0) {
      console.log('ℹ️  No seeder files found.');
      return;
    }

    console.log('🌱 Running seeders...');

    for (const file of files) {
      const sql = fs.readFileSync(path.join(SEEDERS_DIR, file), 'utf8');
      await client.query(sql);
      console.log(`✅ [${file}] Seeded successfully.`);
    }

    await seedUsers(client);

    console.log('✅ Seeding complete.\n');
  } catch (err) {
    console.error('❌ Seeder failed:', err.message);
    throw err;
  } finally {
    client.release();
  }
};

const seedUsers = async (client) => {
  const SALT_ROUNDS = 10;

  const users = [
    { username: 'Indra',  email: 'indra@gmail.com', password: 'Admin123', roleName: 'Superadmin' },
    { username: 'admin',  email: 'admin@gmail.com', password: 'Admin123', roleName: 'Admin'      },
    { username: 'staff',  email: 'staff@gmail.com', password: 'Admin123', roleName: 'Staff'      },
  ];

  for (const u of users) {
    const { rows } = await client.query(
      'SELECT id FROM users WHERE email = $1',
      [u.email]
    );

    if (rows.length > 0) {
      continue;
    }

    const roleResult = await client.query(
      'SELECT id FROM roles WHERE name = $1',
      [u.roleName]
    );

    if (roleResult.rows.length === 0) {
      continue;
    }

    const role_id = roleResult.rows[0].id;
    const hashedPassword = await bcrypt.hash(u.password, SALT_ROUNDS);

    await client.query(
      `INSERT INTO users (username, email, password, role_id)
       VALUES ($1, $2, $3, $4)`,
      [u.username, u.email, hashedPassword, role_id]
    );

  }
};

module.exports = { runSeeders };
