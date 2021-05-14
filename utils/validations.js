const {
  only_chat_channels,
  only_image_channels,
  only_url_channels,
  image_available_channels,
  url_available_channels,
  chat_available_channels,
} = require('./constants');
const { isMedia, isCorrectChannel, isUrl } = require('./checks');

const validate = content => {
  let isValid = true;
  /* ONLY SEND MEDIA IN MEDYA CHANNEL */
  if (
    isMedia(content) &&
    !isCorrectChannel(content, {
      ...only_image_channels,
      ...image_available_channels,
    })
  ) {
    isValid = false;
  }

  /* SEND URL IN URL AVAILABLE CHANNELS */
  if (
    isUrl(content) &&
    !isCorrectChannel(content, {
      ...only_url_channels,
      ...url_available_channels,
    })
  ) {
    isValid = false;
  }

  if (
    !isUrl(content) &&
    !isMedia(content) &&
    !isCorrectChannel(content, {
      ...only_chat_channels,
      ...chat_available_channels,
    })
  ) {
    isValid = false;
  }

  return {
    isValid,
  };
};

module.exports = validate;
