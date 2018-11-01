export default {
  facilitatorToGame: [
    {
      type: 'login',
    },
    {
      type: 'logout',
    },
    {
      type: 'start-story',
      params: [
        {
          name: 'story',
          options: [1, 2, 3],
          value: 1,
        },
      ],
    },
    {
      type: 'start-story-prerendered',
      params: [
        {
          name: 'story',
          options: [1, 2, 3],
          value: 1,
        },
      ],
    },
    {
      type: 'play',
    },
    {
      type: 'skip',
    },
    {
      type: 'pause',
    },
    {
      type: 'end-story',
    },
    {
      type: 'start-mission',
      params: [
        {
          name: 'mission',
          options: [1, 2],
          value: 1,
        },
        {
          name: 'autoPlay',
          options: [true, false],
          value: false,
        },
        {
          name: 'numberOfPlayers',
          options: [1, 2],
          value: 1,
        },
        {
          name: 'playerOneSleeveId',
          options: ['NSB23', 'NSB28', 'NSB29'],
          value: 'NSB23',
        },
        {
          name: 'playerTwoSleeveId',
          options: ['NSB23', 'NSB28', 'NSB29'],
          value: 'NSB29',
        },
      ],
      networkParams: [
        {
          name: 'latency',
          options: [0, 1, 2, 3, 4, 5],
          value: 5,
        },
        {
          name: 'bandwidth',
          options: [0, 1, 2, 3, 4, 5],
          value: 5,
        },
        {
          name: 'reliability',
          options: [0, 1, 2, 3, 4, 5],
          value: 5,
        },
        {
          name: 'security',
          options: [0, 1, 2, 3, 4, 5],
          value: 5,
        },
      ],
    },
    {
      type: 'replay-mission',
    },
    {
      type: 'proceed',
    },
    {
      type: 'end-mission',
    },
    {
      type: 'calibrate',
    },
    {
      type: 'end-calibration',
    },
    {
      type: 'set-network',
      networkParams: [
        {
          name: 'latency',
          options: [0, 1, 2, 3, 4, 5],
          value: 5,
        },
        {
          name: 'bandwidth',
          options: [0, 1, 2, 3, 4, 5],
          value: 5,
        },
        {
          name: 'reliability',
          options: [0, 1, 2, 3, 4, 5],
          value: 5,
        },
        {
          name: 'security',
          options: [0, 1, 2, 3, 4, 5],
          value: 5,
        },
      ],
    },
    {
      type: 'play-story-outro',
    },
  ],
  gameToFacilitator: [
    {
      type: 'completed-story-intro',
    },
    {
      type: 'completed-story',
    },
    {
      type: 'completed-mission',
    },
    {
      type: 'completed-story-interlude',
    },
  ],
};
