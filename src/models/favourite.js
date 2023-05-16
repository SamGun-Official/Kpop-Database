"use strict";

const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
	class Favourite extends Model {
		static associate(models) {
			this.belongsTo(models.Account, {
				foreignKey: "account_id",
			});
		}
	}

	Favourite.init(
		{
			account_id: {
				type: DataTypes.INTEGER(16),
				allowNull: false,
			},
			artist_id: {
				type: DataTypes.INTEGER(16),
				allowNull: true,
			},
			discography_id: {
				type: DataTypes.INTEGER(16),
				allowNull: true,
			},
			song_id: {
				type: DataTypes.INTEGER(16),
				allowNull: true,
			},
		},
		{
			sequelize: sequelize,
			modelName: "Favourite",
			tableName: "favourites",
			paranoid: true,
			underscored: true,
			timestamps: true,
		}
	);

	return Favourite;
};
