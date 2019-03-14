import mqttClient from './mqtt-client';
import axios from 'axios';
import CONFIG from '@/config';

const actions = {
  /**
   * initMqttClient - initialize mqtt client.
   * Connect to a broker, subscribe to a topic, and attach event listener
   * to some events.
   */
  initMqttClient() {
    mqttClient.init();
  },
  /**
   * login - authenticate the user with a given password
   *
   * @param  {!Object} context Vuex context object
   * @param  {?String} password input string
   * @return {!Promise}
   */
  login(context, password) {
    return new Promise((resolve, reject) => {
      if (password === CONFIG.PASSWORD) {
        context.commit('login');

        // set up a message object to publish
        const message = {
          type: 'login',
        };

        // publish the message
        mqttClient.publishMessage(message, (err) => {
          if (err) {
            alert('Network error. The MQTT message (' +
            message.type + ') was\'nt published successfully.');
            reject(err);
          }
          resolve();
        });
      } else {
        reject(Error('WrongPassword'));
      }
    });
  },
  /**
   * logout - logout from the system
   *
   * @param  {!Object} context Vuex context object
   * @return {!Promise}
   */
  logout(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'logout',
      };

      // publish the message
      mqttClient.publishMessage(message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        context.commit('logout');
        resolve();
      });
    });
  },
  getExperienceConfig({commit}) {
    const url = 'http://localhost:3000/api/experience/config';
    axios.get(url)
        .then((res) => {
          const stories = res.data.stories;
          const sleeves = res.data.sleeves;
          commit('updateStories', stories);
          commit('updateSleeves', sleeves);
        })
        .catch(console.error);
  },
  startStory(context, storyId) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'start-story',
        story: storyId,
      };

      // publish the message
      mqttClient.publishMessage(message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  endStory(context, storyId) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'end-story',
      };

      // publish the message
      mqttClient.publishMessage(message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  gotoSection(context, sectionId) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'goto-section',
        section: sectionId,
      };

      // publish the message
      mqttClient.publishMessage(message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
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

export default actions;
