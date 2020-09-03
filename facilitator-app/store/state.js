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
  inStoryUIParams: {displaySwayControl: false, swayControl: false},
  inSectionReadyToProceed: false,
  inSectionMissionState: 'not-started',
  selectedPreshowModuleName: '',
  ambientModules: [],
  introModules: [],
});

export default createState;
