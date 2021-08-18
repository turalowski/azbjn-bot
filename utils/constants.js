const game_rooms = {
  csgo_sohbet: '842733332189282314',
  valorant_sohbet: '842735035915173888',
  rainbow6_sohbet: '842735315499089931',
  rocket_league_sohbet: '842736173381320705',
  diger_oyunlar1: '842738303082299422',
  diger_oyunlar2: '842738487303471106',
  rp_yazili: '835584568509464626',
  lol: '860590264363384843',
};




const chat_available_channels = {
  ...game_rooms,
  sohbet_main: '828776610173026304',
  qeydiyyat: '877342177922007071',
  aramiza_qatilanlar: '828807813526454284',
  aramizdan_ayrilanlar: '828808479534743582',
  yeni_deyisiklikler: '813313643361075251',
  teklifler: '828725847186997298',
  yeti_sohbet: '836745095557677077',
  qaqams_sohbet: '876566214191743048',
  bildirisler: '877365465507307540',
  musiqi_bot1: '828739973015928842',
  core: '812462165470085151',
  oyun: '842923954032607244',
  rollar: '843442306693595178',
  qaydalar: '844891301127782420',
};
const image_available_channels = {
  ...game_rooms,
  shekiller: '812458255330574368',
  one_cixanlar: '842190788485316649',
  yeti_sohbet: '836745095557677077',
  qaqams_sohbet: '876566214191743048',
  bildirisler: '877365465507307540',
  core: '812462165470085151',
  oyun: '842923954032607244',
  qaydalar: '844891301127782420',
};

const url_available_channels = {
  ...game_rooms,
  link: '828731927749591040',
  yeti_sohbet: '836745095557677077',
  qaqams_sohbet: '876566214191743048',
  bildirisler: '877365465507307540',
  shekiller: '812458255330574368',
  core: '812462165470085151',
  musiqi_bot1: '828739973015928842',
  oyun: '842923954032607244',
  qaydalar: '844891301127782420',
};

module.exports = {
  chat_available_channels,
  image_available_channels,
  url_available_channels,
};
