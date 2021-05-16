require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
bot.login(TOKEN);

const reaction_messages = {
  cs_go: '843471254798991397',
  valorant: '843471368347058176',
  gta: '843471450887421992',
  rocket_league: '843471554889515028',
  rainbow_six_siege: '843471648443072572',
  diger_oyunlar: '843471818094411776',
};

const roles = {
  cs_go: '843441610519216139',
  valorant: '835996317792337960',
  gta: '835582651171733525',
  rocket_league: '832737638468681779',
  rainbow_six_siege: '843470778724253705',
  diger_oyunlar: '843470734125826048',
};
const validate = require('./utils/validations');

bot.on('ready', async () => {
  bot.user.setStatus('available');
  bot.user.setPresence({
    game: {
      name: 'with depression',
      type: 'STREAMING',
      url: 'https://www.twitch.tv/turalhj',
    },
  });
  bot.channels.cache.get('843442306693595178').messages.fetch({ limit: 50 });
});

bot.on('messageReactionAdd', async (reaction, user) => {
  if (Object.values(reaction_messages).includes(reaction.message.id)) {
    if (reaction.emoji.name !== '✅') {
      return reaction.remove();
    }
    const { guild } = reaction.message;
    const member = guild.members.cache.find(member => member.id === user.id);

    Object.keys(reaction_messages).forEach(game_name => {
      if (reaction.message.id === reaction_messages[game_name]) {
        const role = guild.roles.cache.find(
          ({ id }) => id === roles[game_name]
        );
        member.roles.add(role);
      }
    });
  }
});
bot.on('messageReactionRemove', async (reaction, user) => {
  if (Object.values(reaction_messages).includes(reaction.message.id)) {
    if (reaction.emoji.name === '✅') {
      const { guild } = reaction.message;
      const member = guild.members.cache.find(member => member.id === user.id);

      Object.keys(reaction_messages).forEach(game_name => {
        if (reaction.message.id === reaction_messages[game_name]) {
          const role = guild.roles.cache.find(
            ({ id }) => id === roles[game_name]
          );
          member.roles.remove(role);
        }
      });
    }
  }
});

/* Add Istifadeciler Role to New Member */
/* Add log to aramiza-qatilanlar */
bot.on('guildMemberAdd', async member => {
  member.roles
    .add(member.guild.roles.cache.find(({ id }) => id === '812460693671772168'))
    .then(() => {
      member.guild.channels.cache
        .find(channel => channel.id === '828807813526454284')
        .send(`${member.displayName} aramıza qatıldı.`);
    });
});

/* Add log to aramizdan-ayrilanlar */
bot.on('guildMemberRemove', async member => {
  member.guild.channels.cache
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
  }
});
