"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("accounts", {
			id: {
				type: Sequelize.INTEGER(16),
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			username: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			full_name: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			birth_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			gender: {
				type: Sequelize.ENUM({
					values: ["None", "Other", "Male", "Female"],
				}),
				defaultValue: "None",
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
		await queryInterface.dropTable("accounts");
	},
};
