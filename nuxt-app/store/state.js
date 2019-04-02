const createState = () => ({
  currentPage: 'index',
  mqttClient: null,
  isLoggedIn: false,
  stories: [],
  sleeves: [],
  selectedSleeveId: '',
  lastStoryPage: null,
  mqttMessageLog: [],
  alertMessages: [],
  inStoryAREnabled: false,
  inStorySelectedNetwork: '5G',
});

export default createState;
