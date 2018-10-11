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
};

export default mqttPublishActions;
