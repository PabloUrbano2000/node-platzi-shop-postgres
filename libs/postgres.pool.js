const { Pool } = require('pg');

const { config } = require('../config/config');

const options = {};

if (config.isProd) {
  options.ssl = {
    rejectUnauthorized: false,
  };
  options.connectionString = config.dbUrl;
} else {
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
  options.connectionString = URI;
}

const pool = new Pool({
  // host: 'localhost',
  // port: 5432,
  // user: 'pablo',
  // password: 'admin123',
  // database: 'my_store',

  ...options,
});

module.exports = pool;
