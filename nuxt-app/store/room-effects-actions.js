import axios from 'axios';
import CONFIG from '@/config';

export default {
  getCurrentVolume(context) {
    return new Promise((resolve, reject) => {
      const url = CONFIG.MOTU.URL + '/' + CONFIG.MOTU.TARGETS[0];
      axios.get(url)
          .then((res) => {
            console.log(res);
            resolve(res);
          })
          .catch((err) => {
            alert('Network error. Coudn\'t get the current audio volume');
            reject(err);
          });
    });
  },
  updateVolume(context, value) {
    return new Promise((resolve, reject) => {
      const url = CONFIG.MOTU.URL;

      const data = {};

      for (const target of CONFIG.MOTU.TARGETS) {
        data[target] = value;
      }

      const message = 'json=' + JSON.stringify(data);
      console.log('message', message);

      axios.post(url, message)
          .then(() => {
            resolve();
          })
          .catch((err) => {
            alert('Network error. Coudn\'t update the audio volume');
            reject(err);
          });
    });
  },
  getCurrentProjectorState(context) {
    return new Promise((resolve, reject) => {
      // check only the state of the top one
      const id = CONFIG.PROJECTOR.IDS[0];
      const url = CONFIG.PROJECTOR.API.GET_POWER_ONE;
      axios.get(url + '/' + id)
          .then((res) => {
            console.log(res);
            resolve(res.data.state);
          })
          .catch((err) => {
            alert('Network error. Coudn\'t get the current power state ' +
              'of a projector ' + id);
            reject(err);
          });
    });
  },
  turnAllProjectors(context, state) {
    return new Promise((resolve, reject) => {
      const url = CONFIG.PROJECTOR.API.POST_POWER_ALL;
      console.log('turnAllProjectors', url);
      axios.post(url, {state: state})
          .then((res) => {
            console.log(res);
            resolve();
          })
          .catch((err) => {
            alert('Network error. Coudn\'t change the power state of one of ' +
              'the six projectors');
            reject(err);
          });
    });
  },
};
