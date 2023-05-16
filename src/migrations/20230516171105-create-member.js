"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("members", {
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
			full_name: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			stage_name: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			korean_name: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			japan_name: {
				type: Sequelize.STRING(255),
				allowNull: true,
			},
			profile_pic_url: {
				type: Sequelize.TEXT("long"),
				allowNull: false,
			},
			birth_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			team_position: {
				type: Sequelize.TEXT,
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
		await queryInterface.dropTable("members");
	},
};
