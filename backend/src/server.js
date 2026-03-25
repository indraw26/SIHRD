const app = require('./app');
const env = require('./config/env');
const { testConnection } = require('./config/db');
const { runMigrations } = require('./db/migrate');

const start = async () => {
  // Validate database connection before starting
  await testConnection();

  // Auto-migrate: create tables that don't exist yet
  await runMigrations();

  app.listen(env.PORT, () => {
    console.log(`🚀 Server running in ${env.NODE_ENV} mode`);
    console.log(`🌐 Backend URL: ${env.BACKEND_URL}`);
  });
};

start();
