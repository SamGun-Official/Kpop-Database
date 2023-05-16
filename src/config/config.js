require("dotenv").config();

module.exports = {
	host: process.env.DB_HOSTNAME,
	database: process.env.DB_DATABASE,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	dialect: process.env.DB_DIALECT,
};
