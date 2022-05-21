require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
  partials: ["MESSAGE"],
});

const BOT_PREFIX = "?c ";

client.on("ready", () => {
  console.log("CoffeeBot is ready to go!!!!");
});

client.on("messageDelete", (msg) => {
  msg.channel.send("👀");
});

client.on("message", (msg) => {
  // console.log(msg);
  console.log(msg.author.username);
  if (msg.content.toLowerCase().includes("jon")) {
    msg.react("❤️");
  }
  if (msg.content.toLowerCase().includes("camiel")) {
    msg.react("🏅");
  }
  if (msg.content.toLowerCase().includes("dylan")) {
    msg.react("🤖");
  }

  if (msg.content.substring(0, BOT_PREFIX.length) == BOT_PREFIX) {
    var args = msg.content.substring(BOT_PREFIX.length).split(' ');
    var cmd = args[0];
    args = args.splice(1);

    switch(cmd) {
      case 'help':
        msg.channel.send("🦸‍♂️ Help is on the way!");
        break;
      case 'coffee':
        msg.channel.send("☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️");
        break;
      // !ping
      case 'ping':
        msg.channel.send("pong!");
        break;
      case 'addRole':
        modUser(msg.member);
        break;
      case 'reactRole':
        reactRole(msg, args);
        break;
  }
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (commandName === 'server') {
    await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
  } else if (commandName === 'user') {
    await interaction.reply('User info.');
  } else if (commandName === 'test') {
    await interaction.reply('this was a test')
  }
})

// client.on("guildMemberAdd", (message, member) => {
//   console.log("new user found", member);
//   message.channel.send("Welcome!", member.name);
// });

// client.on("");

function modUser(member) {
  if (member.roles.cache.has("977323882581205053")) {
    member.roles.remove("977323882581205053");
  } else {
    member.roles.add("977323882581205053");
  }
}

function reactRole(msg, args) {
  if (args[0]) {
    emoji = args[0]
  } else {
    msg.channel.send("Please enter a valid emoji")
    return
  }

  if (args[1]) {
    role = args[1]
  } else {
    msg.channel.send("Please enter a valid role")
    return
  }

  msg.channel.send(`React to this message with ${emoji} to gain the role ${role}`)

}

client.login(process.env.BOT_TOKEN);
