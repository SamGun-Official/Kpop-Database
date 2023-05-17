const db = require("../models/index");
const { Op } = require("sequelize");

module.exports = {
	getAll: async function (req, res) {
		try {
			const listArtist = await db.Artist.findAll({ raw: true });
			if (listArtist.length <= 0) {
				throw {
					request: {
						res: {
							statusCode: 404,
						},
					},
					original: "No artist was found!",
					message: "No artist was found!",
				};
			}

			listArtist.forEach((artist) => {
				delete artist.createdAt;
				delete artist.updatedAt;
				delete artist.deletedAt;
			});

			return res.status(200).send(listArtist);
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 400).send({ message: error.original ? error.original : error.message });
		}
	},
	getBySearch: async function (req, res) {
		try {
			const artist = await db.Artist.findOne(
				{
					where: {
						[Op.or]: {
							stage_name: {
								[Op.eq]: req.query.keyword,
							},
							korean_name: {
								[Op.eq]: req.query.keyword,
							},
						},
					},
				},
				{
					raw: true,
				}
			);
			if (!artist) {
				throw {
					request: {
						res: {
							statusCode: 404,
						},
					},
					original: "No artist was found!",
					message: "No artist was found!",
				};
			}

			delete artist.createdAt;
			delete artist.updatedAt;
			delete artist.deletedAt;

			return res.status(200).send(artist);
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 400).send({ message: error.original ? error.original : error.message });
		}
	},
};
