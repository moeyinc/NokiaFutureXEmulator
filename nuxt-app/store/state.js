const createState = () => ({
  currentPage: 'index',
  mqttClient: null,
  isLoggedIn: false,
  stories: [],
  lastStoryPage: null,
  // roomEffects: {},
  selectedPlayerMode: null,
  selectedPlayerOne: null,
  selectedPlayerTwo: null,
  selectedNetwork: null,
});

export default createState;
export const strict = false;
