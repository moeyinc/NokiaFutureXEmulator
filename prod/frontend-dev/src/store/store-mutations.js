const mutations = {
  login(state) {
    state.loggedIn = true;
  },
  selectPlayerMode(state, mode) {
    state.selectedPlayerMode = mode;
  },
  selectPlayer(state, playerIndex, player) {
    if (playerIndex === 'player1') state.selectedPlayerOne = player;
    else if (playerIndex === 'player2') state.selectedPlayerTwo = player;
  },
};

export default mutations;
