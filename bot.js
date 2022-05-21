const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Intents } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
  partials: ["MESSAGE"],
});
client.commands = new Collection();

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "mod-me";

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

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }

})

// client.on("guildMemberAdd", (message, member) => {
//   console.log("new user found", member);
//   message.channel.send("Welcome!", member.name);
// });

// client.on("");

function modUser(member) {
  member.roles.add("977323882581205053");
}

client.login(process.env.BOT_TOKEN);
