const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('newthread')
    .setDescription('Stars a new thread'),
  async execute(interaction) {
    // Get online members
    const fetchedMembers = await interaction.guild.members.fetch({ withPresences: true })
    const totalOnline = fetchedMembers.filter(member => member.presence?.status === 'online');
    const membersOnline = totalOnline.map(member => member)
    const userTags = membersOnline.map(member => member.user)

    // Create new thread
    const thread = await interaction.channel.threads.create({
      name: 'coffee-chat',
      autoArchiveDuration: 'MAX',
      reason: 'For quick coffee chats',
    });

    // Add each online member
    const promises = []
    membersOnline.forEach(member => {
      promises.push(thread.members.add(member.id))
    })
    await Promise.all(promises);

    await interaction.reply(`Created thread '${thread.name}' for ${userTags}`);
  }
} 

