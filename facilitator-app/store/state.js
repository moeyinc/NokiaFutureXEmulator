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
  inStoryNetworkViz: {wireless: true, wired: true},
  inStorySelectedDistributer: 'amazon',
  inStorySelectedNetworkType: '5g',
  inSectionReadyToProceed: false,
  inSectionCompletedMission: false,
  selectedPreshowModuleName: '',
  ambientModules: [],
  introModules: [],
});

export default createState;
