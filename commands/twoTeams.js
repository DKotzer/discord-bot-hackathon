const { SlashCommandBuilder } = require("@discordjs/builders");
const moment = require("moment");

function shuffle(arr) {
  var j, x, index;
  for (index = arr.length - 1; index > 0; index--) {
    j = Math.floor(Math.random() * (index + 1));
    x = arr[index];
    arr[index] = arr[j];
    arr[j] = x;
  }
  return arr;
}

function ObjectLength(object) {
  var length = 0;
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      ++length;
    }
  }
  return length;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("two-teams")
    .setDescription("Replies with server info!"),

  async execute(interaction) {
    let members = await shuffle(interaction.channel.members);
    let teamRed = [];
    let teamBlue = [];

    console.log("Team Blue", teamBlue);
    teamBlue.forEach((member, index) => {
      console.log(member.user.username, index);
    });
    console.log("Team Red", teamRed);
    teamRed.forEach((member, index) => {
      console.log(member.user.username, index);
    });
    members.forEach((member, index) => {
      // console.log(member.user.username);
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
  },
};
