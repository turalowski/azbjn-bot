const url_validator = require('is-url');

const isMedia = content => content.attachments.size > 0;
const includesText = content => content.content.length > 0;
const isCorrectChannel = (content, channels) =>
  Object.values(channels).includes(content.channel.id);

const isUrl = content => url_validator(content.content);

module.exports = {
  isMedia,
  isUrl,
  includesText,
  isCorrectChannel,
};
