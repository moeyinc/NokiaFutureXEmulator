const mutations = {
  selectStory(state, payload) {
    state.selectedStoryId = payload;
  },
  nextSection(state) {
    state.currentSectionIndex++;
  },
  replayMission(state) {
  },
};

export default mutations;
