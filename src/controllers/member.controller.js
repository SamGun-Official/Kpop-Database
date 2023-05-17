const db = require("../models/index");
const { Op } = require("sequelize");

module.exports = {
	getByArtist: async function (req, res) {
		try {
			const artist_id = req.params.artist_id;
			const listMember = await db.Member.findAll({
				where: {
					artist_id: {
						[Op.eq]: artist_id,
					},
				},
				raw: true,
			});
			if (listMember.length <= 0) {
				throw {
					request: {
						res: {
							statusCode: 404,
						},
					},
					original: "No member was found!",
					message: "No member was found!",
				};
			}

			listMember.forEach((member) => {
				delete member.created_at;
				delete member.updated_at;
				delete member.deleted_at;
			});

			return res.status(200).send(listMember);
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 400).send({ message: error.original ? error.original : error.message });
		}
	},
};
