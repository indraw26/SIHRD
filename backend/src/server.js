const app = require('./app');
const env = require('./config/env');
const { testConnection } = require('./config/db');

const start = async () => {
  // Validate database connection before starting
  await testConnection();

  app.listen(env.PORT, () => {
    console.log(`🚀 Server running in ${env.NODE_ENV} mode`);
    console.log(`🌐 Backend URL: ${env.BACKEND_URL}`);
  });
};

start();
