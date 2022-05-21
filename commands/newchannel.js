const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('newchannel')
  .setDescription('adds a new channel'),
  async execute(interaction) {
    await interaction.guild.channels.create('new-general', { reason: 'Needed a cool new channel' })
    await interaction.reply('new-general channel created')
  }
}