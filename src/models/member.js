"use strict";

const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
	class Member extends Model {
		static associate(models) {
			this.belongsTo(models.Artist, {
				foreignKey: "artist_id",
			});
		}
	}

	Member.init(
		{
			artist_id: {
				type: DataTypes.INTEGER(16),
				allowNull: false,
			},
			full_name: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			stage_name: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			korean_name: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			japan_name: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			profile_pic_url: {
				type: DataTypes.TEXT("long"),
				allowNull: false,
			},
			birth_date: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			team_position: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{
			sequelize: sequelize,
			modelName: "Member",
			tableName: "members",
			paranoid: true,
			underscored: true,
			timestamps: true,
			createdAt: "created_at",
			updatedAt: "updated_at",
			deletedAt: "deleted_at",
		}
	);

	return Member;
};
