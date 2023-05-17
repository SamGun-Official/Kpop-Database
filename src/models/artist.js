"use strict";

const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
	class Artist extends Model {
		static associate(models) {
			this.hasMany(models.Profile, {
				foreignKey: "artist_id",
			});

			this.hasMany(models.Member, {
				foreignKey: "artist_id",
			});

			this.hasMany(models.Discography, {
				foreignKey: "artist_id",
			});
		}
	}

	Artist.init(
		{
			stage_name: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			korean_name: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			profile_desc: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			debut_year: {
				type: DataTypes.INTEGER(4),
				allowNull: false,
			},
			career_type: {
				type: DataTypes.ENUM({
					values: ["Soloist", "Group"],
				}),
				defaultValue: "Group",
				allowNull: false,
			},
			active_status: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
				allowNull: false,
			},
		},
		{
			sequelize: sequelize,
			modelName: "Artist",
			tableName: "artists",
			paranoid: true,
			underscored: true,
			timestamps: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
			deletedAt: "deleted_at",
		}
	);

	return Artist;
};
