"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("favourites", {
			id: {
				type: Sequelize.INTEGER(16),
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			account_id: {
				type: Sequelize.INTEGER(16),
				allowNull: false,
			},
			artist_id: {
				type: Sequelize.INTEGER(16),
				allowNull: true,
			},
			discography_id: {
				type: Sequelize.INTEGER(16),
				allowNull: true,
			},
			song_id: {
				type: Sequelize.INTEGER(16),
				allowNull: true,
			},
			created_at: {
				type: Sequelize.DATE,
				defaultValue: null,
				allowNull: true,
			},
			updated_at: {
				type: Sequelize.DATE,
				defaultValue: null,
				allowNull: true,
			},
			deleted_at: {
				type: Sequelize.DATE,
				defaultValue: null,
				allowNull: true,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("favourites");
	},
};
