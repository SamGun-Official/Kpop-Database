"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("discographies", {
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
			title: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			category: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			release_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			year: {
				type: Sequelize.INTEGER(4),
				allowNull: false,
			},
			country_origin: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			publisher: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			total_disc: {
				type: Sequelize.INTEGER(2),
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
		await queryInterface.dropTable("discographies");
	},
};
