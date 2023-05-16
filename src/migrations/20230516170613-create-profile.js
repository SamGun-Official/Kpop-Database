"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("profiles", {
			id: {
				type: Sequelize.INTEGER(16),
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			artist_id: {
				type: Sequelize.INTEGER(16),
				allowNull: false,
			},
			profile_pic_url: {
				type: Sequelize.TEXT("long"),
				allowNull: false,
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
		await queryInterface.dropTable("profiles");
	},
};
