"use strict";

const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
	class Account extends Model {
		static associate(models) {
			this.hasMany(models.Favourite, {
				foreignKey: "account_id",
			});
		}
	}

	Account.init(
		{
			username: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			full_name: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			birth_date: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			gender: {
				type: DataTypes.ENUM({
					values: ["None", "Other", "Male", "Female"],
				}),
				defaultValue: "None",
				allowNull: false,
			},
		},
		{
			sequelize: sequelize,
			modelName: "Account",
			tableName: "accounts",
			paranoid: true,
			underscored: true,
			timestamps: true,
		}
	);

	return Account;
};
