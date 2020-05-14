const mutations = {
  updateCurrentPage(state, page) {
    state.currentPage = page;
  },
  login(state) {
    state.isLoggedIn = true;
  },
  logout(state) {
    state.isLoggedIn = false;
  },
  updateStories(state, stories) {
    state.stories = stories;
  },
  updateSleeves(state, sleeves) {
    state.sleeves = sleeves;
  },
  updateAmbientModules(state, ambientModules) {
    state.ambientModules = ambientModules;
  },
  updateIntroModules(state, introModules) {
    state.introModules = introModules;
  },
  updateSelectedSleeveId(state, selectedSleeveId) {
    state.selectedSleeveId = selectedSleeveId;
  },
  updateLastStoryPage(state, page) {
    state.lastStoryPage = page;
  },
  updateMqttMessageLog(state, message) {
    state.mqttMessageLog.push(message);
  },
  resetStoryTempStates(state) {
    state.inStoryNetworkViz = {wireless: true, wired: true};
    state.inStorySelectedNetworkType = '5g';
    state.inStorySelectedDistributer = 'amazon';
  },
  updateInStoryNetworkViz(state, {key, value}) {
    if (key === 'wireless' || key === 'wired') {
      state.inStoryNetworkViz[key] = value;
    }
  },
  updateInStorySelectedDistributer(state, distributer) {
    state.inStorySelectedDistributer = distributer;
  },
  updateInStorySelectedNetworkType(state, type) {
    state.inStorySelectedNetworkType = type;
  },
  resetSectionTempStates(state) {
    state.inSectionReadyToProceed = false;
    state.inSectionCompletedMission = false;
  },
  updateInSectionReadyToProceed(state, value) {
    state.inSectionReadyToProceed = value;
  },
  updateInSectionCompletedMission(state, value) {
    state.inSectionCompletedMission = value;
  },
  addAlertMessage(state, alertMessage) {
    alertMessage.display = true;
    state.alertMessages.push(alertMessage);
  },
  closeAlertMessage(state, index) {
    state.alertMessages[index].display = false;
  },
  showOverlay(state, overlayName) {
    state.overlay = overlayName;
  },
  hideOverlay(state) {
    state.overlay = '';
  },
  updateSelectedPreshowModuleName(state, name) {
    state.selectedPreshowModuleName = name;
  },
};

export default mutations;
