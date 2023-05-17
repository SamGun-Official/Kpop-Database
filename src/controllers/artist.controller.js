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
				delete artist.created_at;
				delete artist.updated_at;
				delete artist.deleted_at;
			});

			return res.status(200).send(listArtist);
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 400).send({ message: error.original ? error.original : error.message });
		}
	},
	getBySearch: async function (req, res) {
		try {
			const listArtist = await db.Artist.findAll({
				where: {
					[Op.or]: {
						stage_name: {
							[Op.like]: "%" + req.query.keyword + "%",
						},
						korean_name: {
							[Op.like]: "%" + req.query.keyword + "%",
						},
					},
				},
				raw: true,
			});
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
				delete artist.created_at;
				delete artist.updated_at;
				delete artist.deleted_at;
			});

			return res.status(200).send(listArtist);
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 400).send({ message: error.original ? error.original : error.message });
		}
	},
	addNew: async function (req, res) {
		try {
			// Missing validation
			const newArtist = await db.Artist.create({ ...req.body });

			return res.status(201).send({
				message: "Successfully insert artist data!",
				data: {
					stage_name: newArtist.stage_name,
					korean_name: newArtist.korean_name,
					profile_desc: newArtist.profile_desc,
					debut_year: newArtist.debut_year,
					career_type: newArtist.career_type,
					active_status: newArtist.active_status,
					created_at: newArtist.created_at,
					updated_at: newArtist.updated_at,
					deleted_at: newArtist.deleted_at,
				},
			});
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 500).send({ message: error.original ? error.original : error.message });
		}
	},
	updateExisting: async function (req, res) {
		try {
			const id = req.params.id;
			if (!id) {
				throw {
					request: {
						res: {
							statusCode: 400,
						},
					},
					original: "Param tidak sesuai ketentuan!",
					message: "Param tidak sesuai ketentuan!",
				};
			}

			await db.Artist.update(
				{ ...req.body },
				{
					where: {
						id: {
							[Op.eq]: id,
						},
					},
				}
			);
			const fetchedArtist = await db.Artist.findByPk(id, { raw: true });

			return res.status(200).send({
				message: "Successfully update artist data!",
				data: {
					stage_name: fetchedArtist.stage_name,
					korean_name: fetchedArtist.korean_name,
					profile_desc: fetchedArtist.profile_desc,
					debut_year: fetchedArtist.debut_year,
					career_type: fetchedArtist.career_type,
					active_status: fetchedArtist.active_status,
					created_at: fetchedArtist.created_at,
					updated_at: fetchedArtist.updated_at,
					deleted_at: fetchedArtist.deleted_at,
				},
			});
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 500).send({ message: error.original ? error.original : error.message });
		}
	},
	deleteExisting: async function (req, res) {
		try {
			const id = req.params.id;
			if (!id) {
				throw {
					request: {
						res: {
							statusCode: 400,
						},
					},
					original: "Param tidak sesuai ketentuan!",
					message: "Param tidak sesuai ketentuan!",
				};
			}

			await db.Buku.destroy({
				where: {
					id: {
						[Op.eq]: id,
					},
				},
			});

			return res.status(200).send({
				message: `Successfully delete artist data with id ${id}!`,
			});
		} catch (error) {
			return res.status(error.request ? error.request.res.statusCode : 500).send({ message: error.original ? error.original : error.message });
		}
	},
};
