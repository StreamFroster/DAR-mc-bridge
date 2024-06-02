const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('online')
		.setDescription('List the current users that are online on the server.'),
	async execute(interaction) {
		await interaction.reply('Current users that are online: ');
	},
};
