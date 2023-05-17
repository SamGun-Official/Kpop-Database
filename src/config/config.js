require("dotenv").config();

module.exports = {
	host: process.env.DB_HOSTNAME,
	database: process.env.DB_DATABASE,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	dialect: process.env.DB_DIALECT,
	dialectOptions: {
		timezone: process.env.DB_TIMEZONE,
	},
	define: {
		charset: "utf8mb4",
		collate: "utf8mb4_general_ci",
	},
	timezone: process.env.DB_TIMEZONE,
};
