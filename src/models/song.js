"use strict";

const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
	class Song extends Model {
		static associate(models) {
			this.belongsTo(models.Discography, {
				foreignKey: "discography_id",
			});
		}
	}

	Song.init(
		{
			discography_id: {
				type: DataTypes.INTEGER(16),
				allowNull: false,
			},
			title: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			year: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
			},
			disc_number: {
				type: DataTypes.INTEGER(2),
				allowNull: true,
			},
			track_number: {
				type: DataTypes.INTEGER(2),
				allowNull: false,
			},
			track_duration: {
				type: DataTypes.INTEGER(11),
				allowNull: false,
			},
		},
		{
			sequelize: sequelize,
			modelName: "Song",
			tableName: "songs",
			paranoid: true,
			underscored: true,
			timestamps: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
			deletedAt: "deleted_at",
		}
	);

	return Song;
};
