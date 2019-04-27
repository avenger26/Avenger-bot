console.log("hola Putos");
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on ('message',(message) => {
  if (message.content == "!BO2") {
      message.channel.sendMessage('Quien para Black Ops 2? :D');
    }
  });
  bot.login('NTcxNzIzNDE1Njg2MzQ4ODMw.XMR68g.7QNCdxAkfA6P6IED4FK6rluPfSc');
  client.login(process.env.BOT_TOKEN);
