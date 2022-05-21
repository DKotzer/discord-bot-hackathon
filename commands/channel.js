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

module.exports = {
  data: new SlashCommandBuilder()
    .setName("channel")
    .setDescription("Replies with server info!")
    .addIntegerOption((option) =>
      option.setName("amount").setDescription("Number of teams to create")
    ),
  async execute(interaction) {
    let membersList = [];
    let membersListNames = [];

    const amount = interaction.options.getInteger("amount");

    if (amount > 1) {
      let members = await shuffle(interaction.channel.members);
      members.forEach((member, index) => {
        console.log(member.user.username, index);
        membersList.push(member.user);
        membersListNames.push(member.user.username);
      });
      console.log("list", membersList);
      console.log("list", membersListNames);

      console.log("size test", interaction.channel.members.size);

      let teams = [];
      let teamsDisplay = [];

      for (i = 0; i < amount; i++) {
        teams.push([]);
        teamsDisplay.push([]);
      }

      const dynamicIndex = Math.floor(
        interaction.channel.members.size / teams.length
      );
      console.log("dynamic index", dynamicIndex);

      for (i = 0; i < teams.length; i++) {
        console.log(teams[i]);
        teams[i] = membersList.splice(-dynamicIndex);
        teamsDisplay[i] = membersListNames.splice(-dynamicIndex);
      }

      console.log(teams);
      console.log(teamsDisplay);
      let outPutString = "";
      for (i = 0; i < teamsDisplay.length; i++) {
        console.log("working");
        outPutString += `Team ${i + 1}: ${teamsDisplay[i]}\n`;
      }
      console.log(outPutString);
      return interaction.reply(outPutString);
    }
  },
};
