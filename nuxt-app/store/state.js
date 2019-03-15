const createState = () => ({
  currentPage: 'index',
  mqttClient: null,
  isLoggedIn: false,
  stories: [],
  sleeves: [],
  lastStoryPage: null,
  mqttMessageLogs: [],
});

export default createState;
