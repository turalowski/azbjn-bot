const {
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
      ...image_available_channels,
    })
  ) {
    isValid = false;
  } else if (
    isUrl(content) &&
    !isCorrectChannel(content, {
      ...url_available_channels,
    })
  ) {
    isValid = false;
  }

  return {
    isValid,
  };
};

module.exports = validate;
