var APP_CONFIG = {
  PASSWORD: 'nokia',
  MQTT: {
    HOST: '10.12.92.104',
    PORT: 8080,
    TOPIC: 'moey',
  },
  MOTU: {
    URL: 'http://10.12.92.52:1280/0001f2fffe00abd7/datastore',
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
  PROJECTOR: {
    API: {
      GET_POWER_ONE: '/api/projector/power',
      POST_POWER_ALL: '/api/projector/power/all',
      GET_SHUTTER_ONE: '/api/projector/shutter',
      POST_SHUTTER_ALL: '/api/projector/shutter/all',
    },
    IDS: [
      'top',
      'middle',
      'bottom',
      'floor',
      'right',
      'left',
    ],
  },
};
