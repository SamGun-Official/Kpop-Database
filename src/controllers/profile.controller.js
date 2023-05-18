const db = require("../models/index");
const { Op } = require("sequelize");

module.exports = {
	getByArtist: async function (req, res) {
		try {
			const artist_id = req.params.artist_id;
			const listProfile = await db.Profile.findAll({
				where: {
					artist_id: {
						[Op.eq]: artist_id,
					},
				},
				raw: true,
			});
			if (listProfile.length <= 0) {
				throw {
					request: {
						res: {
							statusCode: 404,
						},
					},
					original: "No profile was found!",
					message: "No profile was found!",
				};
			}

			listProfile.forEach((profile) => {
				delete profile.created_at;
				delete profile.updated_at;
				delete profile.deleted_at;
			});

			return res.status(200).send(listProfile);
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 400).send({ message: error.original ? error.original : error.message });
		}
	},
	getOnlyFirst: async function (req, res) {
		try {
			const artist_id = req.params.artist_id;
			const listProfile = await db.Profile.findAll({
				where: {
					artist_id: {
						[Op.eq]: artist_id,
					},
				},
				order: [["id", "ASC"]],
				raw: true,
			});
			if (listProfile.length <= 0) {
				throw {
					request: {
						res: {
							statusCode: 404,
						},
					},
					original: "No profile was found!",
					message: "No profile was found!",
				};
			}

			listProfile.forEach((profile) => {
				delete profile.created_at;
				delete profile.updated_at;
				delete profile.deleted_at;
			});

			return res.status(200).send(listProfile[0]);
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 400).send({ message: error.original ? error.original : error.message });
		}
	},
};
