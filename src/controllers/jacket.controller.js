const db = require("../models/index");
const { Op } = require("sequelize");

module.exports = {
	getByDiscography: async function (req, res) {
		try {
			const discography_id = req.params.discography_id;
			const listJacket = await db.Jacket.findAll({
				where: {
					discography_id: {
						[Op.eq]: discography_id,
					},
				},
				raw: true,
			});
			if (listJacket.length <= 0) {
				throw {
					request: {
						res: {
							statusCode: 404,
						},
					},
					original: "No album art was found!",
					message: "No album art was found!",
				};
			}

			listJacket.forEach((jacket) => {
				delete jacket.created_at;
				delete jacket.updated_at;
				delete jacket.deleted_at;
			});

			return res.status(200).send(listJacket);
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 400).send({ message: error.original ? error.original : error.message });
		}
	},
};
