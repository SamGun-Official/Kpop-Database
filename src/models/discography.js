"use strict";

const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
	class Discography extends Model {
		static associate(models) {
			this.belongsTo(models.Artist, {
				foreignKey: "artist_id",
			});

			this.hasMany(models.Jacket, {
				foreignKey: "discography_id",
			});

			this.hasMany(models.Song, {
				foreignKey: "discography_id",
			});
		}
	}

	Discography.init(
		{
			artist_id: {
				type: DataTypes.INTEGER(16),
				allowNull: false,
			},
			title: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			category: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			release_date: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			year: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
			},
			country_origin: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			publisher: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			total_disc: {
				type: DataTypes.INTEGER(2),
				allowNull: true,
			},
		},
		{
			sequelize: sequelize,
			modelName: "Discography",
			tableName: "discographies",
			paranoid: true,
			underscored: true,
			timestamps: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
			deletedAt: "deleted_at",
		}
	);

	return Discography;
};
