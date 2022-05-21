const { SlashCommandBuilder } = require("@discordjs/builders");
const { DiscordAPIError, MessageEmbed, Message } = require("discord.js");
const { min } = require("moment");
const moment = require("moment");

const colors = [
  "#006400",
  "#1E90FF",
  "#DC143C",
  "#FF4500",
  "#663399",
  "#FFFF00",
  "#006400",
  "#1E90FF",
  "#DC143C",
  "#FF4500",
  "#663399",
  "#FFFF00",
  "#006400",
  "#1E90FF",
  "#DC143C",
  "#FF4500",
  "#663399",
  "#FFFF00",
];

const teamNames = [
  "jScript",
  "Python",
  "C++",
  "Rust",
  "React",
  "Django",
  "Vim",
  "Solidity",
];

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
    .setName("group-create")
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
        membersList.push(member.user);
        membersListNames.push(" " + member.user.username);
      });

      let teams = [];
      let teamsDisplay = [];

      for (i = 0; i < amount; i++) {
        teams.push([]);
        teamsDisplay.push([]);
      }

      const dynamicIndex = Math.floor(
        interaction.channel.members.size / teams.length
      );

      for (i = 0; i < teams.length; i++) {
        console.log(teams[i]);
        teams[i] = membersList.splice(-dynamicIndex);
        teamsDisplay[i] = membersListNames.splice(-dynamicIndex);
      }

      // console.log(teams);
      // console.log(teamsDisplay);

      // let outPutString = "";
      //figure out how to push all embeds in one return interaction.reply at end instead of sending them all seperately
      let embeds = [];
      for (i = 0; i < teamsDisplay.length; i++) {
        console.log("team " + i, teams[i]);
        // let numHolder = i + 1;
        const groupEmbed = new MessageEmbed()
          .setColor(colors[i])
          .setTitle("Team " + teamNames[i])
          .setDescription(`${teamsDisplay[i]}`);
        // outPutString += `Team ${i + 1}: ${teamsDisplay[i]}\n`;
        interaction.channel.send({ embeds: [groupEmbed] });
        embeds.push({ embeds: [groupEmbed] });
      }
      // console.log(outPutString);
      // console.log(embeds);
      let endMessage = "Here is your Randomly Generated(soon) groups"
      return interaction.reply(endMessage);
      // return message.channel
      //   .createWebhook("Webhook Name", message.author.displayAvatarURL)
      //   .then((w) =>
      //     w.send({
      //       embeds: [
      //         new Discord.MessageEmbed().setAuthor("Embed 1"),
      //         new Discord.MessageEmbed().setAuthor("Embed 2"),
      //       ],
      //     })
      //   );
    }
  },
};
