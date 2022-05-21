const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Intents } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
  partials: ["MESSAGE"],
  disableEveryone: false,
});
client.commands = new Collection();

const BOT_PREFIX = process.env.BOT_PREFIX;

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

client.on("messageDelete", (msg) => {
  msg.channel.send("👀");
});

client.on("messageCreate", (msg) => {
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

  if (msg.content.substring(0, BOT_PREFIX.length + 1) == BOT_PREFIX + " ") {
    var args = msg.content.substring(BOT_PREFIX.length + 1).split(" ");
    var cmd = args[0];
    args = args.splice(1);

    switch (cmd) {
      case "help":
        msg.channel.send("🦸‍♂️ Help is on the way!");
        break;
      case "coffee":
        msg.channel.send("☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️");
        break;
      // !ping
      case 'ping':
        if (args.length < 1) {
          msg.channel.send('pong!')
        } else {
          pingUser(msg, args);
        }
        break;
      case "toggle_role":
        toggleRole(msg, args);
        break;
      case "migrate_role":
        migrateRole(msg, args);
        break;
      case "create_role":
        createRole(msg,args);
        break;
      case "react_role":
        reactRole(msg, args);
        break;
    }
  }
});

// client.on("guildMemberAdd", (message, member) => {
//   console.log("new user found", member);
//   message.channel.send("Welcome!", member.name);
// });

// client.on("");

function toggleRole(msg, args) {
  args = args.join(" ").split(" && ")
  args.forEach(a=>{
    if (a) {
      role = a;
    } else {
      msg.channel.send("Please enter a role to toggle.");
      return;
    }
  
    let member = msg.member;
  
    let roleObj = msg.guild.roles.cache.find((r) => r.name === role);
  
    if (roleObj) {
      if (member.roles.cache.has(roleObj.id)) {
        member.roles.remove(roleObj.id);
        msg.channel.send(`${role} role removed from ${msg.author.username}.`);
      } else {
        member.roles.add(roleObj.id);
        msg.channel.send(`${role} role added to ${msg.author.username}.`);
      }
    } else {
      msg.channel.send("Unable to find specified role within server.");
    }

  })
}

function migrateRole(msg, args) {
  args = args.join(" ").split(" -> ")
  if (args[0]) {
    role1 = args[0];
  } else {
    msg.channel.send("Please enter a role to remove.");
    return;
  }

  if (args[1]) {
    role2 = args[1];
  } else {
    msg.channel.send("Please enter a role to add.");
    return;
  }

  let member = msg.member;

  let role1Obj = msg.guild.roles.cache.find((r) => r.name === role1);
  let role2Obj = msg.guild.roles.cache.find((r) => r.name === role2);

  if (role1Obj) {
    if (role2Obj) {
      if (member.roles.cache.has(role1Obj.id)) {
        member.roles.remove(role1Obj.id);
      }
      if (!member.roles.cache.has(role2Obj.id)) {
        member.roles.add(role2Obj.id);
      }
      msg.channel.send(
        `${msg.author.username} successfully migrated from ${role1} to ${role2}.`
      );
    } else {
      msg.channel.send(`Unable to find role ${role2} within server.`);
    }
  } else {
    msg.channel.send(`Unable to find role ${role1} within server.`);
  }
}

function createRole(msg, args) {
  let color = args.pop()
  let roleName = args.join(" ")

  //create role
  msg.guild.roles.create({
    name: roleName,
    color: color.toUpperCase(),
  })
  .then(role=>{
    msg.channel.send(`Role ${role} successfully created!`);
  })
  .catch(err=>{
      console.log(err),
      msg.channel.send(`Error creating role.`)
  });
}

function reactRole(msg, args) {
  if (args[args.length-1].match(/\p{Emoji}/u)) {
    emoji = args.pop()
  } else {
    msg.channel.send("Please enter a valid emoji as the final argument.");
    return
  }

  if (args.length > 0) {
    roleName = args.join(" ")
  }

  if (roleName) {
    role = roleName;
    roleObj = msg.guild.roles.cache.find((r) => r.name === role);
    if (!roleObj) {
      msg.channel.send(`The role "${role}" does not exist in this server.`);
      return;
    }
  } else {
    msg.channel.send("Please enter a valid role.");
    return;
  }

  msg.channel
    .send(`React to this message with ${emoji} to gain the role ${roleObj}.`)
    .then((message) => {
      message.react(emoji);

      const filter = (reaction, user) => {
        return reaction.emoji.name == emoji && user.id != message.author.id;
      };

      const collector = message.createReactionCollector({
        filter,
        dispose: true,
      });

      collector.on("collect", (reaction, user) => {
        let reactor = msg.guild.members.cache.find((u) => u.id === user.id);
        reactor.roles.add(roleObj.id);
      });

      collector.on("remove", (reaction, user) => {
        let reactor = msg.guild.members.cache.find((u) => u.id === user.id);
        reactor.roles.remove(roleObj.id);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function pingUser(msg, args) {
  let input = args.join(" ")
  let pingArgs = input.split(", ")
  let userIDs = pingArgs.map(p=>{
    //check for users
    if (p.toLowerCase()=="me") {
      return msg.guild.members.cache.find(u => u.user.username.toLowerCase() === msg.author.username.toLowerCase(0))
    } else if (p.toLowerCase()=="everyone") {
      return msg.guild.roles.cache.find(r => r.name.toLowerCase() === "@everyone")
    } else {
      let id = msg.guild.members.cache.find(u => u.user.username.toLowerCase() === p.toLowerCase())
      if (typeof id == 'undefined') {
        //check for roles
        return msg.guild.roles.cache.find(r => r.name.toLowerCase() === p.toLowerCase())
      } else {
        return id
      }
    }
  })
  //filter out duplicates
  userIDs = userIDs.filter((v, i, self) => {
    return self.indexOf(v) === i;
  })

  let pingMsg = `You have successfully pinged`

  if (userIDs) {
    for (i in userIDs) {
      let id = userIDs[i]
      if (typeof id != 'undefined') {
        pingMsg+=` ${id}`
      } else {
        msg.channel.send(`User/role ${pingArgs[i]} not found.`)
      }
    }
    if (pingMsg != `You have successfully pinged`) {
      msg.channel.send(pingMsg)
    } else {
      msg.channel.send('Please specify a valid user or role to ping.')
    }
  } else {
    msg.channel.send('Unable to find specified user/role.')
  }
}

client.login(process.env.BOT_TOKEN);
