import axios from 'axios';
import CONFIG from '@/config';

export default {
  getCurrentVolume(context) {
    return new Promise((resolve, reject) => {
      if (process.env.DISABLE_MOTU_CONTROL) {
        context.commit('addAlertMessage', {
          type: 'error',
          message: 'MOTU control is disabled',
        });
        reject(new Error('MOTU control is disabled'));
        return;
      }

      const url = CONFIG.MOTU.URL + '/' + CONFIG.MOTU.TARGETS[0];
      axios.get(url)
          .then((res) => {
            console.log(res);
            resolve(res);
          })
          .catch((err) => {
            context.commit('addAlertMessage', {
              type: 'error',
              message: 'Coudn\'t get the current audio volume from MOTU',
            });
            reject(err);
          });
    });
  },
  updateVolume(context, value) {
    return new Promise((resolve, reject) => {
      if (process.env.DISABLE_MOTU_CONTROL) {
        context.commit('addAlertMessage', {
          type: 'error',
          message: 'MOTU control is disabled',
        });
        reject(new Error('MOTU control is disabled'));
        return;
      }

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
            context.commit('addAlertMessage', {
              type: 'error',
              message: 'Coudn\'t update the audio volume with MOTU',
            });
            reject(err);
          });
    });
  },
  getCurrentProjectorState(context) {
    return new Promise((resolve, reject) => {
      if (process.env.DISABLE_PROJECTOR_CONTROL) {
        context.commit('addAlertMessage', {
          type: 'error',
          message: 'projector control is disabled',
        });
        reject(new Error('projector control is disabled'));
        return;
      }

      // check only the state of the top one
      const id = CONFIG.PROJECTOR.IDS[0];
      const url = CONFIG.PROJECTOR.API.GET_POWER_ONE;
      axios.get(url + '/' + id)
          .then((res) => {
            console.log(res);
            resolve(res.data.state);
          })
          .catch((err) => {
            context.commit('addAlertMessage', {
              type: 'error',
              message: 'Coudn\'t get the current power state ' +
                'of a projector ' + id,
            });
            reject(err);
          });
    });
  },
  turnAllProjectors(context, state) {
    return new Promise((resolve, reject) => {
      if (process.env.DISABLE_PROJECTOR_CONTROL) {
        context.commit('addAlertMessage', {
          type: 'error',
          message: 'projector control is disabled',
        });
        reject(new Error('projector control is disabled'));
        return;
      }
      const url = CONFIG.PROJECTOR.API.POST_POWER_ALL;
      console.log('turnAllProjectors', url);
      axios.post(url, {state: state})
          .then((res) => {
            console.log(res);
            resolve();
          })
          .catch((err) => {
            context.commit('addAlertMessage', {
              type: 'error',
              message: 'Coudn\'t change the power state of projectors',
            });
            reject(err);
          });
    });
  },
};
