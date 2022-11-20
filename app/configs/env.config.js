require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    db: {
      host: process.env.DB_DEVELOPMENT_HOST,
      username: process.env.DB_DEVELOPMENT_USERNAME,
      password: process.env.DB_DEVELOPMENT_PASSWORD,
      database: process.env.DB_DEVELOPMENT_DATABASE,
    },
  },
  staging: {
    db: {
      host: process.env.DB_STAGING_HOST,
      username: process.env.DB_STAGING_USERNAME,
      password: process.env.DB_STAGING_PASSWORD,
      database: process.env.DB_STAGING_DATABASE,
    },
  },
  production: {
    db: {
      host: process.env.DB_PRODUCTION_HOST,
      username: process.env.DB_PRODUCTION_USERNAME,
      password: process.env.DB_PRODUCTION_PASSWORD,
      database: process.env.DB_PRODUCTION_DATABASE,
    },
  },
};

module.exports = config[env];
