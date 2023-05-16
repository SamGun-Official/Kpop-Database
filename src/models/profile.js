"use strict";

const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
	class Profile extends Model {
		static associate(models) {
			this.belongsTo(models.Artist, {
				foreignKey: "artist_id",
			});
		}
	}

	Profile.init(
		{
			artist_id: {
				type: DataTypes.INTEGER(16),
				allowNull: false,
			},
			profile_pic_url: {
				type: DataTypes.TEXT("long"),
				allowNull: false,
			},
		},
		{
			sequelize: sequelize,
			modelName: "Profile",
			tableName: "profiles",
			paranoid: true,
			underscored: true,
			timestamps: true,
		}
	);

	return Profile;
};
