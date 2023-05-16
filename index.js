/* ===== SETUP ===== */
require("dotenv").config();

const database = require("./src/config/connection");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ===== ORM ===== */

/* ===== ROUTES ===== */

/* ===== DEFAULT ===== */
const port = process.env.PORT;
async () => {
	console.log("Connecting...");
	try {
		await database.authenticate();
		app.listen(port, () => {
			console.log(`Connected! Server running on http://localhost:${port}`);
		});
	} catch (error) {
		console.error("Failure database connection: ", error.original);
	}
};

module.exports = app;
