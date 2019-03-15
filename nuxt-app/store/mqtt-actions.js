import mqttClient from './mqtt-client';
import CONFIG from '@/config';

export default {
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
        publish(message).then(resolve).catch(reject);
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
      publish(message).then(resolve).catch(reject);
    });
  },
  startStory(context, storyId) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'start-story',
        story: storyId,
      };

      // publish the message
      publish(message).then(resolve).catch(reject);
    });
  },
  endStory(context, storyId) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'end-story',
      };

      // publish the message
      publish(message).then(resolve).catch(reject);
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
      publish(message).then(resolve).catch(reject);
    });
  },
};

/**
 * publish - publish a MQTT message
 *
 * @param  {!Object} message
 * @return {!Promise}
 */
function publish(message) {
  return new Promise((resolve, reject) => {
    mqttClient.publishMessage(message, (err) => {
      if (err) {
        alert('Network error. The MQTT message (' +
        message.type + ') was\'nt published successfully.');
        reject(err);
      }
      resolve();
    });
  });
}
