const envConfig = require('./env.config');

module.exports = {
  username: envConfig.db.username,
  password: envConfig.db.password,
  database: envConfig.db.database,
  host: envConfig.db.host,
  dialect: 'postgres',
};
