var MESSAGE_CONFIG = [
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
        options: ['D0L5', 'D0R5', 'FAKE'],
        value: 'D0L5',
      },
      {
        name: 'playerTwoSleeveId',
        options: ['D0L5', 'D0R5', 'FAKE'],
        value: 'D0R5',
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
];
