"use strict";

const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
	class Jacket extends Model {
		static associate(models) {
			this.belongsTo(models.Discography, {
				foreignKey: "discography_id",
			});
		}
	}

	Jacket.init(
		{
			discography_id: {
				type: DataTypes.INTEGER(16),
				allowNull: false,
			},
			number: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
			},
			pic_url: {
				type: DataTypes.TEXT("long"),
				allowNull: false,
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
		},
		{
			sequelize: sequelize,
			modelName: "Jacket",
			tableName: "jackets",
			paranoid: true,
			underscored: true,
			timestamps: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
			deletedAt: "deleted_at",
		}
	);

	return Jacket;
};
