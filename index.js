require('dotenv').config();

const validate = require('./utils/validations');
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
bot.login(TOKEN);

bot.on('guildMemberAdd', async member => {
  member
    .addRole(member.guild.roles.find(role => role.name === 'İstifadəçilər'))
    .then(() => {
      member.guild.channels
        .find(channel => channel.name === 'aramıza-qatılanlar')
        .send(`${member.displayName} aramıza qatıldı.`);
    });
});

bot.on('guildMemberRemove', async member => {
  member.guild.channels
    .find(channel => channel.name === 'aramızdan-ayrılanlar')
    .send(`${member.displayName} aramızdan ayrıldı.`);
});

bot.on('message', async msg => {
  if (msg) {
    const { isValid } = validate(msg);
    if (!isValid) {
      msg
        .delete()
        .then(() => {})
        .catch(() => {});
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
  }
});
