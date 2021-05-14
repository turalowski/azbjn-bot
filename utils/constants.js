const game_rooms = {
  csgo_sohbet: '842733332189282314',
  valorant_sohbet: '842735035915173888',
  rainbow6_sohbet: '842735315499089931',
  rocket_league_sohbet: '842736173381320705',
  diger_oyunlar1: '842738303082299422',
  diger_oyunlar2: '842738487303471106',
  rp_yazili: '835584568509464626',
};

const only_chat_channels = {
  sohbet_main: '828776610173026304',
  aramiza_qatilanlar: '828807813526454284',
  aramizdan_ayrilanlar: '828808479534743582',
  yeni_deyisiklikler: '813313643361075251',
  teklifler: '828725847186997298',
};

const only_image_channels = {
  shekiller: '812458255330574368',
  one_cixanlar: '842190788485316649',
  rp_geyim: '837367841040236585',
};

const only_url_channels = {
  link: '828731927749591040',
};

const chat_available_channels = {
  ...game_rooms,
  yeti_sohbet: '836745095557677077',
  yayin_bildiris: '835168742677807184',
  yayin_umumi: '825826298466926654',
  musiqi_bot1: '828739973015928842',
  musiqi_bot2: '828740004766679090'
};
const image_available_channels = {
  ...game_rooms,
  yeti_sohbet: '836745095557677077',
  yayin_bildiris: '835168742677807184',
  yayin_umumi: '825826298466926654',
};

const url_available_channels = {
  ...game_rooms,
  yeti_sohbet: '836745095557677077',
  shekiller: '812458255330574368',
  yayin_bildiris: '835168742677807184',
  yayin_umumi: '825826298466926654',
};

module.exports = {
  only_chat_channels,
  only_image_channels,
  only_url_channels,
  chat_available_channels,
  image_available_channels,
  url_available_channels,
};
