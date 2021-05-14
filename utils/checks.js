const url_validator = require('is-url');
const regex = new RegExp(
  '([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?'
);
const isMedia = content => content.attachments.size > 0;
const includesText = content => content.content.length > 0;
const isCorrectChannel = (content, channels) =>
  Object.values(channels).includes(content.channel.id);

const isUrl = content => regex.test(content.content);

module.exports = {
  isMedia,
  isUrl,
  includesText,
  isCorrectChannel,
};
