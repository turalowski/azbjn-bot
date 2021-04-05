const {
  image_channels,
  url_channels,
  conversation_channels,
} = require('./constants');
const { isMedia, isCorrectChannel, isUrl } = require('./checks');

const validate = content => {
  let isValid = true;
  /* ONLY SEND MEDIA IN MEDYA CHANNEL */
  if (!isMedia(content) && isCorrectChannel(content, image_channels)) {
    isValid = false;
  }

  /* ONLY SEND URL IN LINK CHANNEL */
  if (!isCorrectChannel(content, url_channels) && isUrl(content)) {
    isValid = false;
  }

  /* UNABLE TO SEND MEDIA AND URL IN CONVERSATION CHANNELS */
  if (
    isCorrectChannel(content, conversation_channels) &&
    (isMedia(content) || isUrl(content))
  ) {
    isValid = false;
  }
  return {
    isValid,
  };
};

module.exports = validate;
