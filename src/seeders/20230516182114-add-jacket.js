"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"jackets",
			[
				{
					id: 1,
					discography_id: 1,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b2738c4a282e84a53c1c8acf129a",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 2,
					discography_id: 2,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b2739d750d969d227e6506a2c176",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 3,
					discography_id: 3,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b273d2ef237da7f94762997c2083",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 4,
					discography_id: 4,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b27396f409e230a8f42400c901f1",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 5,
					discography_id: 5,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b273c3040848e6ef0e132c5c8340",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 6,
					discography_id: 6,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b27359f57a5ca507a3d3fed81ea6",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 7,
					discography_id: 7,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b273d8cc2281fcd4519ca020926b",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 8,
					discography_id: 8,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b273b3be3b970fc89a02f301c9da",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 9,
					discography_id: 9,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b27304878afb19613a94d37b29ce",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 10,
					discography_id: 10,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b273d70036292d54f29e8b68ec01",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 11,
					discography_id: 11,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 12,
					discography_id: 12,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b2732e31a8a740f621473d21dc75",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 13,
					discography_id: 13,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b27319224fae0aa53341020f5b12",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 14,
					discography_id: 14,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b273f425b2269d04150547d76377",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 15,
					discography_id: 15,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b273d5db2e57a278b11e009b5cc6",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 16,
					discography_id: 16,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b273204170c6b0db3a42030c5f75",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 17,
					discography_id: 17,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b27325ef3cec1eceefd4db2f91c8",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 18,
					discography_id: 18,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b2739254f2d47aa762c033f2682e",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 19,
					discography_id: 19,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b2739030184114911536d5f77555",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 20,
					discography_id: 20,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b273a991995542d50a691b9ae5be",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 21,
					discography_id: 21,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b273d71fd77b89d08bc1bda219c7",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 22,
					discography_id: 22,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b2732fda07910d40ee81e620fe3f",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 23,
					discography_id: 23,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b2734ed058b71650a6ca2c04adff",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 24,
					discography_id: 24,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b2730d378c4756c4fc34b7d3eeaf",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 25,
					discography_id: 25,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b2739eb85e8740ba9e4d4cc5e64d",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 26,
					discography_id: 26,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b273e61bca92e4a64e50ee44a009",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 27,
					discography_id: 27,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b2733a3519a856ecde919a54e428",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 28,
					discography_id: 28,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b273e9cd59d664f597061a513038",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 29,
					discography_id: 29,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b2738d64ee7e356e13a96062bd0b",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
				{
					id: 30,
					discography_id: 30,
					number: 1,
					pic_url: "https://i.scdn.co/image/ab67616d0000b2730f1afd412fe1e243e11363db",
					description: null,
					created_at: new Date(),
					updated_at: new Date(),
					deleted_at: null,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("jackets", null, {});
	},
};
