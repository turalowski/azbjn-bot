require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
bot.login(TOKEN);

const validate = require('./utils/validations');

bot.on('ready', () => {
  bot.user.setStatus('available');
  bot.user.setPresence({
    game: {
      name: 'with depression',
      type: 'STREAMING',
      url: 'https://www.twitch.tv/turalhj',
    },
  });
});

/* Add Istifadeciler Role to New Member */
/* Add log to aramiza-qatilanlar */
bot.on('guildMemberAdd', async member => {
  member
    .addRole(member.guild.roles.find(role => role.name === 'İstifadəçilər'))
    .then(() => {
      member.guild.channels
        .find(channel => channel.id === '828807813526454284')
        .send(`${member.displayName} aramıza qatıldı.`);
    });
});

/* Add log to aramizdan-ayrilanlar */
bot.on('guildMemberRemove', async member => {
  member.guild.channels
    .find(channel => channel.id === '828808479534743582')
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
