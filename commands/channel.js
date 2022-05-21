const { SlashCommandBuilder } = require("@discordjs/builders");
const moment = require("moment");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("channel")
    .setDescription("Replies with server info!"),
  async execute(interaction) {
    let teamRed = [];
    let teamBlue = [];
    let members = await interaction.channel.members;
    console.log("Team Blue", teamBlue);
    teamBlue.forEach((member, index) => {
      console.log(member.user.username, index);
    });
    console.log("Team Red", teamRed);
    teamRed.forEach((member, index) => {
      console.log(member.user.username, index);
    });
    members.forEach((member, index) => {
      console.log(member.user.username);
      if (teamRed.length === teamBlue.length) {
        teamRed = [...teamRed, member];
      } else {
        teamBlue = [...teamBlue, member];
      }
      console.log(member.user.username, index);
    });
    console.log("red");
    let redString = "Team Red: ";
    teamRed.forEach((member, index) => {
      redString += member.user.username + ", ";
      console.log(member.user.username, index);
    });
    console.log("blue");
    let blueString = "Team Blue: ";
    teamBlue.forEach((member, index) => {
      blueString += member.user.username + ", ";
      console.log(member.user.username, index);
    });
    return interaction.reply(
      `The channel has been split in to two teams: ${redString}. ${blueString}`
    );

    // let generalChannel = interaction.channel.guild.channels.find(
    //   (channel) => channel.name.toLowerCase() === `general`
    // );
    // console.log("general channel test", generalChannel);
    // await interaction.reply(
    //   `Channel name: ${interaction.guild.name}\nTotal members: ${
    //     interaction.guild.memberCount
    //   }\nCreated on: ${moment(interaction.guild.createdAt).format(
    //     "ddd, MMM Do YYYY, h:mm:ss a"
    //   )}`
    // );
  },
};
