require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
  partials: ["MESSAGE"],
});

const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "mod-me";

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!");
});

client.on("messageDelete", (msg) => {
  msg.channel.send("Stop deleting messages");
});

client.on("message", (msg) => {
  console.log(msg.author.username);
  if (msg.content == "Jon") {
    msg.react("❤️");
  }
  if (msg.content == "Camiel") {
    msg.react("❤️");
  }
  if (msg.content == "Dylan") {
    msg.react("❤️");
  }
  if (msg.content.includes("test")) {
    msg.channel.send("stop doing that");
  }

  if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member);
  }
});

// client.on("guildMemberAdd", (message, member) => {
//   console.log("new user found", member);
//   message.channel.send("Welcome!", member.name);
// });

// client.on("");

function modUser(member) {
  member.roles.add("977323882581205053");
}
test = {
  name: "bob",
};
client.login(process.env.BOT_TOKEN);
client.emit("guildMemberAdd");
