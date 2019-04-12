const createState = () => ({
  currentPage: 'index',
  mqttClient: null,
  isLoggedIn: false,
  overlay: '',
  stories: [],
  sleeves: [],
  selectedSleeveId: '',
  lastStoryPage: null,
  mqttMessageLog: [],
  alertMessages: [],
  inStoryAREnabled: true,
  inStorySelectedNetwork: '5G',
});

export default createState;
