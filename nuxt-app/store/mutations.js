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
  // page: {name, story_id, mission_id}
  updateLastStoryPage(state, page) {
    state.lastStoryPage = page;
  },
  // mode: 1 or 2 or 'auto'
  selectPlayerMode(state, mode) {
    state.selectedPlayerMode = mode;
  },
  // playerIndex: 'player1' or 'player2'
  selectPlayer(state, {playerIndex, player}) {
    if (playerIndex === 'player1') state.selectedPlayerOne = player;
    else if (playerIndex === 'player2') state.selectedPlayerTwo = player;
  },
  selectNetwork(state, network) {
    state.selectedNetwork = network;
  },
};

export default mutations;
