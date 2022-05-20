require("dotenv").config();
const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
let prompt = "Holder";
client.on("message", function (message) {
  if (message.author.bot) return;
  (async () => {
    const gptResponse = await openai.complete({
      engine: "text-davinci-002",
      prompt: message.content,
      temperature: 0.8,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    message.reply(`${gptResponse.data.choices[0].text}`);
    prompt += `${gptResponse.data.choices[0].text}\n`;
  })();
});

client.login(process.env.BOT_TOKEN);

// const Discord = require("discord.js");
// const client = new Discord.Client({
//   intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
//   partials: ["MESSAGE"],
// });

// const BOT_PREFIX = "!";
// const MOD_ME_COMMAND = "mod-me";

// client.on("ready", () => {
//   console.log("Our bot is ready to go!!!!");
// });

// client.on("messageDelete", (msg) => {
//   msg.channel.send("Stop deleting messages");
// });

// client.on("message", (msg) => {
//   if (msg.content == "Jon") {
//     msg.react("❤️");
//   }

//   if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
//     modUser(msg.member);
//   }
// });
// client.on("message", (msg) => {
//   if (msg.content == "Camiel") {
//     msg.react("❤️");
//   }

//   if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
//     modUser(msg.member);
//   }
// });

// client.on("message", (msg) => {
//   if (msg.content == "Dylan") {
//     msg.react("❤️");
//   }

//   if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
//     modUser(msg.member);
//   }
// });

// client.on('')

// function modUser(member) {
//   member.roles.add("783084095223234590");
// }

// client.login(process.env.BOT_TOKEN);
