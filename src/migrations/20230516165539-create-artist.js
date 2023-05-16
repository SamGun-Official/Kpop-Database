"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("artists", {
			id: {
				type: Sequelize.INTEGER(16),
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			stage_name: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			korean_name: {
				type: Sequelize.STRING(255),
				allowNull: true,
			},
			profile_desc: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			debut_year: {
				type: Sequelize.INTEGER(4),
				allowNull: false,
			},
			career_type: {
				type: Sequelize.ENUM({
					values: ["Soloist", "Group"],
				}),
				defaultValue: "Group",
				allowNull: false,
			},
			active_status: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
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
		await queryInterface.dropTable("artists");
	},
};
