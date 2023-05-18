const db = require("../models/index");
const { Op } = require("sequelize");

module.exports = {
	getByDiscography: async function (req, res) {
		try {
			const discography_id = req.params.discography_id;
			const listSong = await db.Song.findAll({
				where: {
					discography_id: {
						[Op.eq]: discography_id,
					},
				},
				raw: true,
			});
			if (listSong.length <= 0) {
				throw {
					request: {
						res: {
							statusCode: 404,
						},
					},
					original: "No song was found!",
					message: "No song was found!",
				};
			}

			listSong.forEach((song) => {
				delete song.created_at;
				delete song.updated_at;
				delete song.deleted_at;
			});

			return res.status(200).send(listSong);
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 400).send({ message: error.original ? error.original : error.message });
		}
	},
	getBySearch: async function (req, res) {
		try {
			const listSong = await db.Song.findAll({
				where: {
					title: {
						[Op.substring]: req.query.keyword,
					},
				},
				raw: true,
			});
			if (listSong.length <= 0) {
				throw {
					request: {
						res: {
							statusCode: 404,
						},
					},
					original: "No song was found!",
					message: "No song was found!",
				};
			}

			listSong.forEach((song) => {
				delete song.created_at;
				delete song.updated_at;
				delete song.deleted_at;
			});

			return res.status(200).send(listSong);
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 400).send({ message: error.original ? error.original : error.message });
		}
	},
};
