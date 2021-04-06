require('dotenv').config();

const validate = require('./utils/validations');
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
bot.login(TOKEN);


bot.on('guildMemberAdd', member => {
  member.guild.channels.get('aramıza-qatılanlar').send("Welcome"); 
});

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  const { isValid } = validate(msg);

  if (!isValid) {
    msg.delete();
  }
  // if (msg.content === 'ping') {
  //   msg.reply('pong');
  //   msg.channel.send('pong');
  // } else if (msg.content.startsWith('!kick')) {
  //   if (msg.mentions.users.size) {
  //     const taggedUser = msg.mentions.users.first();
  //     msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
  //   } else {
  //     msg.reply('Please tag a valid user!');
  //   }
  // }
});
