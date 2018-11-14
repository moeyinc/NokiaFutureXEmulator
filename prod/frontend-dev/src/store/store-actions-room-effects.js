import axios from 'axios';

const roomEffectsActions = {
  getCurrentVolume(context) {
    return new Promise((resolve, reject) => {
      const url = APP_CONFIG.MOTU.URL + '/' + APP_CONFIG.MOTU.TARGETS[0];
      axios.get(url)
          .then((res) => {
            console.log(res);
            resolve(res);
          })
          .catch((err) => {
            alert('Network error. HTTP request for audio control ' +
              'wasn\'t successful. Please check the network connection ' +
              'and try again.');
            reject(err);
          });
    });
  },
  updateVolume(context, value) {
    return new Promise((resolve, reject) => {
      const url = APP_CONFIG.MOTU.URL;

      let data = {};

      for (let target of APP_CONFIG.MOTU.TARGETS) {
        data[target] = value;
      }

      let message = 'json=' + JSON.stringify(data);
      console.log('message', message);

      axios.post(url, message)
          .then(() => {
            resolve();
          })
          .catch((err) => {
            alert('Network error. HTTP request for audio control ' +
              'wasn\'t successful. Please check the network connection ' +
              'and try again.');
            reject(err);
          });
    });
  },
  getCurrentProjectorState(context) {
    return new Promise((resolve, reject) => {
      // check only the state of the top one
      const id = APP_CONFIG.PROJECTOR.IDS[0];
      const url = APP_CONFIG.PROJECTOR.API.GET_POWER_ONE;
      axios.get(url + '/' + id)
          .then((res) => {
            console.log(res);
            resolve(res.data.state);
          })
          .catch((err) => {
            alert('Network error. HTTP request for projector control ' +
              'wasn\'t successful. Please check the network connection ' +
              'and try again.');
            reject(err);
          });
    });
  },
  turnAllProjectors(context, state) {
    return new Promise((resolve, reject) => {
      const url = APP_CONFIG.PROJECTOR.API.POST_POWER_ALL;
      console.log('turnAllProjectors', url);
      axios.post(url, {state: state})
          .then((res) => {
            console.log(res);
            resolve();
          })
          .catch((err) => {
            alert('Network error. HTTP request for projector control ' +
              'wasn\'t successful. Please check the network connection ' +
              'and try again.');
            reject(err);
          });
    });
  },
};

export default roomEffectsActions;
