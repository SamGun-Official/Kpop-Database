require("dotenv").config();

const sequelize = require("sequelize");
const connection = new sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
	host: process.env.DB_HOSTNAME,
	port: 3306,
	dialect: process.env.DB_DIALECT,
	timezone: "+07:00",
});

module.exports = connection;
