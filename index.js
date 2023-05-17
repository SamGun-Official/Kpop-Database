/* ===== SETUP ===== */
require("dotenv").config();

const database = require("./src/config/connection");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ===== ORM ===== */
const Artist = require("./src/models/artist")(database);
const Profile = require("./src/models/profile")(database);
const Member = require("./src/models/member")(database);
const Discography = require("./src/models/discography")(database);
const Song = require("./src/models/song")(database);
const Jacket = require("./src/models/jacket")(database);
const Account = require("./src/models/account")(database);
const Favourite = require("./src/models/favourite")(database);

Artist.associate({ Profile, Member, Discography });
Profile.associate({ Artist });
Member.associate({ Artist });
Discography.associate({ Artist, Jacket, Song });
Song.associate({ Discography });
Jacket.associate({ Discography });
Account.associate({ Favourite });
Favourite.associate({ Account });

const { artistSeeder } = require("./src/seeders");

/* ===== ROUTES ===== */
const artistRouter = require("./src/routes/artist.routes");

app.use("/api/artists", artistRouter);

/* ===== DEFAULT ===== */
const port = process.env.PORT;
(async () => {
	console.log("Connecting...");
	try {
		await database.authenticate();
		app.listen(port, () => {
			console.log(`Connected! Server running on http://localhost:${port}`);
		});
	} catch (error) {
		console.error("Failure database connection: ", error.original);
	}
})();

module.exports = app;
