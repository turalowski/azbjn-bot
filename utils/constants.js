const game_rooms = {
  csgo_sohbet: '842733332189282314',
  valorant_sohbet: '842735035915173888',
  rainbow6_sohbet: '842735315499089931',
  rocket_league_sohbet: '842736173381320705',
  diger_oyunlar1: '842738303082299422',
  diger_oyunlar2: '842738487303471106',
};

const only_chat_channels = {
  sohbet_main: '828776610173026304',
};

const only_image_channels = {
  shekiller: '812458255330574368',
  one_cixanlar: '842190788485316649',
};

const only_url_channels = {
  link: '828731927749591040',
};

const chat_available_channels = {
  ...game_rooms,
  yeti_sohbet: '836745095557677077',
};
const image_available_channels = {
  ...game_rooms,
  yeti_sohbet: '836745095557677077',
};

const url_available_channels = {
  ...game_rooms,
  yeti_sohbet: '836745095557677077',
  shekiller: '812458255330574368',
};

module.exports = {
  only_chat_channels,
  only_image_channels,
  only_url_channels,
  chat_available_channels,
  image_available_channels,
  url_available_channels,
};
