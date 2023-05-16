"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("jackets", {
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
			number: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
			},
			pic_url: {
				type: Sequelize.TEXT("long"),
				allowNull: false,
			},
			description: {
				type: Sequelize.TEXT,
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
		await queryInterface.dropTable("jackets");
	},
};
