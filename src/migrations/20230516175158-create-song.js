"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("songs", {
			id: {
				type: Sequelize.INTEGER(16),
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			discography_id: {
				type: Sequelize.INTEGER(16),
				allowNull: false,
			},
			title: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			year: {
				type: Sequelize.INTEGER(4),
				allowNull: false,
			},
			disc_number: {
				type: Sequelize.INTEGER(2),
				allowNull: true,
			},
			track_number: {
				type: Sequelize.INTEGER(2),
				allowNull: false,
			},
			track_duration: {
				type: Sequelize.INTEGER(11),
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
		await queryInterface.dropTable("songs");
	},
};
