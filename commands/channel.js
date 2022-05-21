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
    const amount = interaction.options.getInteger("amount");

    if (amount > 1) {
      let members = await shuffle(interaction.channel.members);

      console.log("size test", interaction.channel.members.size);

      let teams = [];
      let makeTeams = amount;
      for (i = 0; i < makeTeams; i++) {
        num = i + 1;
        key = "Team " + num;
        obj = {};
        obj[key] = [];
        teams.push(obj);
        // teams[i] = { obj[key] = [] };
      }
      
      const dynamicIndex = Math.ceil(
        interaction.channel.members.size / teams.length
      );
      console.log("dynamic index", dynamicIndex);
      console.log(teams);

      for (i = 0; i < teams.length; i++) {
        // num = i + 1;
        // key = "Team " + num;
        holder = Object.keys(members).forEach(
          (teams[key] = () => console.log(teams[key]))
        );
      }
      console.log(teams);
    }
  },
};
