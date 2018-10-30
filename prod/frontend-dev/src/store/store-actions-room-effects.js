import axios from 'axios';

const roomEffectsActions = {
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
            reject(err);
          });
    });
  },
};

export default roomEffectsActions;
