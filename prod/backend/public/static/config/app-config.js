var APP_CONFIG = {
  PASSWORD: 'nokia',
  MQTT: {
    HOST: 'mqtt.jonahb.com',
    PORT: 8080,
    TOPIC: 'moey', // 'moey'
  },
  MOTU: {
    URL: 'http://10.12.100.195:1280/0001f2fffe00abd7/datastore',
    TARGETS: [
      "mix/chan/8/matrix/fader",
      "mix/chan/9/matrix/fader",
      "mix/chan/10/matrix/fader",
      "mix/chan/11/matrix/fader",
      "mix/chan/12/matrix/fader",
      "mix/chan/13/matrix/fader",
      "mix/chan/14/matrix/fader",
      "mix/chan/15/matrix/fader",
    ],
  },
};
