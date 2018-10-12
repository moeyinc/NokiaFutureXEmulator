const mutations = {
  login(state) {
    state.loggedIn = true;
  },
  selectPlayerMode(state, mode) {
    state.selectedPlayerMode = mode;
  },
};

export default mutations;
