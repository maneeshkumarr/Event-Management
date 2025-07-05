const { Sequelize } = require('sequelize');
require('dotenv').config(); // ✅ Load .env variables

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS, // or DB_PASSWORD, just make sure name matches your .env
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // optional: prevents console spam
  }
);

module.exports = sequelize;
