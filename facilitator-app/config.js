export default {
  PASSWORD: process.env.LOGON_PW,
  MQTT: {
    PROTOCOL: process.env.MQTT_PROTOCOL || 'ws',
    HOST: process.env.MQTT_HOST || '10.12.92.104',
    PORT: process.env.MQTT_PORT,
    TOPIC: process.env.MQTT_TOPIC,
  },
  MOTU: {
    URL: process.env.MOTU_URL || 'http://10.12.92.112:1280/0001f2fffe00abd7/datastore',
    TARGETS: [
      'mix/chan/0/matrix/fader',
      'mix/chan/1/matrix/fader',
      'mix/chan/2/matrix/fader',
      'mix/chan/3/matrix/fader',
      'mix/chan/4/matrix/fader',
      'mix/chan/5/matrix/fader',
      'mix/chan/6/matrix/fader',
      'mix/chan/7/matrix/fader',
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
  EXPERIENCE: {
    API: {
      GET_CONFIG: '/api/experience/config',
      GET_SELECTED_SLEEVE_ID: '/api/experience/selected-sleeve-id',
      POST_SELECTED_SLEEVE_ID: '/api/experience/selected-sleeve-id',
    },
  },
};
