import {publishMessage} from './store-helpers';

const mqttPublishActions = {
  /**
   * login - authenticate the user with a given password
   *
   * @param  {!Object} context Vuex context object
   * @param  {?String} password input string
   * @return {!Promise}
   */
  login(context, password) {
    return new Promise((resolve, reject) => {
      if (password === APP_CONFIG.PASSWORD) {
        context.commit('login');

        // set up a message object to publish
        const message = {
          type: 'login',
        };

        // publish the message
        publishMessage(context.state.mqttClient, message, (err) => {
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
      publishMessage(context.state.mqttClient, message, (err) => {
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
  /**
   * startStory - start a story
   *
   * @param  {!Object} context Vuex context object
   * @param  {!String} mode 'interactive' or 'movie'
   * @param  {!Number} storyId 1, 2, 3
   * @return {!Promise<?Error>}
   */
  startStory(context, {mode, storyId}) {
    return new Promise((resolve, reject) => {
      // determine the message type
      let type;
      if (mode === 'interactive' || mode === 'teaser') {
        type = 'start-story';
      } else if (mode === 'movie') {
        type = 'start-story-prerendered';
      } else {
        console.error('Wrong mode name', mode);
        reject(Error('Wrong mode name'));
      }

      // set up a message object to publish
      const message = {
        type: type,
        story: storyId,
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  /**
   * endStory - end story
   *
   * @param  {!Object} context Vuex context object
   * @return {!Promise}
   */
  endStory(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'end-story',
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  /**
   * pause - pause movie
   *
   * @param  {!Object} context Vuex context object
   * @return {!Promise}
   */
  pause(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'pause',
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  /**
   * play - play movie
   *
   * @param  {!Object} context Vuex context object
   * @return {!Promise}
   */
  play(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'play',
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  /**
   * skip - skip intro movie
   *
   * @param  {!Object} context Vuex context object
   * @return {!Promise}
   */
  skip(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'skip',
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  /**
   * startMission - start a mission
   *
   * @param  {!Object} context Vuex context object
   * @param  {!Number} missionId
   * @return {!Promise<?Error>}
   */
  startMission(context, missionId) {
    return new Promise((resolve, reject) => {
      // set sutoPlay value
      let autoPlay = false;
      if (context.state.selectedPlayerMode === 'auto') {
        autoPlay = true;
      }

      // set numberOfPlayers value
      let numberOfPlayers = 1;
      if (context.state.selectedPlayerMode === 2) {
        numberOfPlayers = 2;
      }

      // set network value
      if (!context.state.selectedNetwork) reject(Error('No network selected'));
      const params = context.state.selectedNetwork.parameters;
      const network = {
        security: params.security.value,
        latency: params.latency.value,
        bandwidth: params.bandwidth.value,
        reliability: params.reliability.value,
      };

      // set up a message object to publish
      const message = {
        type: 'start-mission',
        mission: missionId,
        autoPlay: autoPlay,
        numberOfPlayers: numberOfPlayers,
        playerOneSleeveId: localStorage.getItem('playerOneSleeveId'),
        playerTwoSleeveId: localStorage.getItem('playerTwoSleeveId'),
        network: network,
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  /**
   * calibrate - calibrate sleeves
   *
   * @param  {!Object} context Vuex context object
   * @return {!Promise}
   */
  calibrate(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'calibrate',
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  /**
   * setNetwork - update network
   *
   * @param  {!Object} context Vuex context object
   * @return {!Promise}
   */
  setNetwork(context) {
    return new Promise((resolve, reject) => {
      // set network value
      if (!context.state.selectedNetwork) reject(Error('No network selected'));
      const params = context.state.selectedNetwork.parameters;
      const network = {
        security: params.security.value,
        latency: params.latency.value,
        bandwidth: params.bandwidth.value,
        reliability: params.reliability.value,
      };

      // set up a message object to publish
      const message = {
        type: 'set-network',
        network: network,
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  /**
   * proceed - proceed to next mission
   *
   * @param  {!Object} context Vuex context object
   * @return {!Promise}
   */
  proceed(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'proceed',
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  /**
   * replayMission - replay the same mission
   *
   * @param  {!Object} context Vuex context object
   * @return {!Promise}
   */
  replayMission(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'replay-mission',
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  /**
   * endMission - end mission
   *
   * @param  {!Object} context Vuex context object
   * @return {!Promise}
   */
  endMission(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'end-mission',
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  /**
   * playStoryInterlude - play story interlude
   *
   * @param  {!Object} context Vuex context object
   * @return {!Promise}
   */
  playStoryInterlude(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'play-story-interlude',
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
  /**
   * playStoryOutro - play story outro
   *
   * @param  {!Object} context Vuex context object
   * @return {!Promise}
   */
  playStoryOutro(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'play-story-outro',
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) {
          alert('Network error. The MQTT message (' +
          message.type + ') was\'nt published successfully.');
          reject(err);
        }
        resolve();
      });
    });
  },
};

export default mqttPublishActions;
