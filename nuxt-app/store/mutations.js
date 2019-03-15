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
  updateLastStoryPage(state, page) {
    state.lastStoryPage = page;
  },
};

export default mutations;
