require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
  partials: ["MESSAGE"],
});

const BOT_PREFIX = process.env.BOT_PREFIX;

client.on("ready", () => {
  console.log("The Bot is ready to go!!!!");
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

  if (msg.content.substring(0, BOT_PREFIX.length+1) == BOT_PREFIX+" ") {
    var args = msg.content.substring(BOT_PREFIX.length+1).split(' ');
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
      case 'toggleRole':
        toggleRole(msg, args);
        break;
      case 'migrateRole':
        migrateRole(msg, args);
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

function toggleRole(msg, args) {
  if (args[0]) {
    role = args[0]
  } else {
    msg.channel.send("Please enter a role to toggle.")
    return
  }

  let member = msg.member;

  let roleObj = msg.guild.roles.cache.find(r => r.name === role);

  if (roleObj) {
    if (member.roles.cache.has(roleObj.id)) {
      member.roles.remove(roleObj.id);
      msg.channel.send(`${role} role removed from ${msg.author.username}.`)
    } else {
      member.roles.add(roleObj.id);
      msg.channel.send(`${role} role added to ${msg.author.username}.`)
    }
  } else {
    msg.channel.send("Unable to find specified role within server.")
  }
}

function migrateRole(msg, args) {
  if (args[0]) {
    role1 = args[0]
  } else {
    msg.channel.send("Please enter a role to remove.")
    return
  }

  if (args[1]) {
    role2 = args[1]
  } else {
    msg.channel.send("Please enter a role to add.")
    return
  }

  let member = msg.member;

  let role1Obj = msg.guild.roles.cache.find(r => r.name === role1);
  let role2Obj = msg.guild.roles.cache.find(r => r.name === role2);

  if (role1Obj) {
    if (role2Obj) {
      if (member.roles.cache.has(role1Obj.id)) {
        member.roles.remove(role1Obj.id);
      }
      if (!member.roles.cache.has(role2Obj.id)) {
        member.roles.add(role2Obj.id);
      }
      msg.channel.send(`${msg.author.username} successfully migrated from ${role1} to ${role2}.`)
    } else {
      msg.channel.send(`Unable to find role ${role2} within server.`)
    }
  } else {
    msg.channel.send(`Unable to find role ${role1} within server.`)
  }
}

function reactRole(msg, args) {
  if (args[0]) {
    emoji = args[0]
  } else {
    msg.channel.send("Please enter a valid emoji.")
    return
  }

  if (args[1]) {
    role = args[1]
    roleObj = msg.guild.roles.cache.find(r => r.name === role);
    if (!roleObj) {
      msg.channel.send(`The role "${role}" does not exist in this server.`)
      return
    }
  } else {
    msg.channel.send("Please enter a valid role.")
    return
  }

  msg.channel.send(`React to this message with ${emoji} to gain the role ${role}.`)
  .then(message => {
    message.react(emoji);

    const filter = (reaction, user) => {
      return reaction.emoji.name == emoji && user.id != message.author.id;
    };

    const collector = message.createReactionCollector({ filter, dispose: true });

    collector.on('collect', (reaction, user) => {
      let reactor = msg.guild.members.cache.find(u => u.id === user.id);
      reactor.roles.add(roleObj.id);
    });

    collector.on('remove', (reaction, user) => {
      let reactor = msg.guild.members.cache.find(u => u.id === user.id);
      reactor.roles.remove(roleObj.id);
    });
  })
  .catch(err => {
    console.log(err)
  })
}

client.login(process.env.BOT_TOKEN);
