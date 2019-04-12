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
    state.inStoryAREnabled = true;
    state.inStorySelectedNetwork = '5G';
  },
  updateInStoryAREnabled(state, value) {
    state.inStoryAREnabled = value;
  },
  updateInStorySelectedNetwork(state, networkName) {
    state.inStorySelectedNetwork = networkName;
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
};

export default mutations;
