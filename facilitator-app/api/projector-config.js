require('dotenv').config();

module.exports = {
  DISABLED: process.env.DISABLE_PROJECTOR_CONTROL,
  TARGETS: {
    'top': {
      URL: process.env.PROJECTOR_TOP_URL || '10.12.92.60', // '10.12.100.104'
      PORT: '4352',
      PASSWORD: '@Panasonic',
    },
    'middle': {
      URL: process.env.PROJECTOR_MIDDLE_URL || '10.12.92.61', // '10.12.100.120'
      PORT: '4352',
      PASSWORD: '@Panasonic',
    },
    'bottom': {
      URL: process.env.PROJECTOR_BOTTOM_URL || '10.12.92.62', // '10.12.100.129'
      PORT: '4352',
      PASSWORD: '@Panasonic',
    },
    'floor': {
      URL: process.env.PROJECTOR_FLOOR_URL || '10.12.92.63', // '10.12.100.130'
      PORT: '4352',
      PASSWORD: '@Panasonic',
    },
    'right': {
      URL: process.env.PROJECTOR_RIGHT_URL || '10.12.92.64', // '10.12.100.248'
      PORT: '4352',
      PASSWORD: '@Panasonic',
    },
    'left': {
      URL: process.env.PROJECTOR_LEFT_URL || '10.12.92.65', // '10.12.100.245'
      PORT: '4352',
      PASSWORD: '@Panasonic',
    },
  },
};
