import APP_CONFIG from '@/config/app-config';
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
          if (err) reject(err);
          resolve();
        });
      } else {
        console.log('Wrong password!');
        reject();
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
        if (err) reject(err);
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
      if (mode === 'interactive') {
        type = 'start-story';
      } else if (mode === 'movie') {
        type = 'start-story-prerendered';
      } else {
        console.error('Wrong mode name', mode);
        reject('Wrong mode name');
      }

      // set up a message object to publish
      const message = {
        type: type,
        story: storyId,
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) reject(err);
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
      if (!context.state.selectedNetwork) reject('No network selected');
      let params = context.state.selectedNetwork.parameters;
      let network = {
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
        network: network,
      };

      // publish the message
      publishMessage(context.state.mqttClient, message, (err) => {
        if (err) reject(err);
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
        if (err) reject(err);
        resolve();
      });
    });
  },
};

export default mqttPublishActions;
