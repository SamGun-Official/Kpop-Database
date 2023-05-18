const db = require("../models/index");
const { Op } = require("sequelize");

module.exports = {
	getByArtist: async function (req, res) {
		try {
			const artist_id = req.params.artist_id;
			const listDiscography = await db.Discography.findAll({
				where: {
					artist_id: {
						[Op.eq]: artist_id,
					},
				},
				raw: true,
			});
			if (listDiscography.length <= 0) {
				throw {
					request: {
						res: {
							statusCode: 404,
						},
					},
					original: "No discography was found!",
					message: "No discography was found!",
				};
			}

			listDiscography.forEach((discography) => {
				delete discography.created_at;
				delete discography.updated_at;
				delete discography.deleted_at;
			});

			return res.status(200).send(listDiscography);
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 400).send({ message: error.original ? error.original : error.message });
		}
	},
	getBySearch: async function (req, res) {
		try {
			const listDiscography = await db.Discography.findAll({
				where: {
					title: {
						[Op.substring]: req.query.keyword,
					},
				},
				raw: true,
			});
			if (listDiscography.length <= 0) {
				throw {
					request: {
						res: {
							statusCode: 404,
						},
					},
					original: "No discography was found!",
					message: "No discography was found!",
				};
			}

			listDiscography.forEach((discography) => {
				delete discography.created_at;
				delete discography.updated_at;
				delete discography.deleted_at;
			});

			return res.status(200).send(listDiscography);
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 400).send({ message: error.original ? error.original : error.message });
		}
	},
};
