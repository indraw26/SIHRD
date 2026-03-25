const app = require('./app');
const env = require('./config/env');
const { testConnection } = require('./config/db');
const { runMigrations } = require('./db/migrate');
const { runSeeders } = require('./db/seed');

const start = async () => {
  await testConnection();

  await runMigrations();
  await runSeeders();

  app.listen(env.PORT, () => {
    console.log(`🚀 Server running in ${env.NODE_ENV} mode`);
    console.log(`🌐 Backend URL: ${env.BACKEND_URL}`);
  });
};

start();
