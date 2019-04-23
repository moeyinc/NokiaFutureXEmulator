import mqttClient from './mqtt-client';
import CONFIG from '@/config';

export default {
  /**
   * initMqttClient - initialize mqtt client.
   * Connect to a broker, subscribe to a topic, and attach event listener
   * to some events.
   *
   * @param {!Object} context Vuexv context object
   * @return {!Promise}
   */
  initMqttClient(context) {
    return mqttClient.init(context);
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
        publish(context, message).then(resolve).catch(reject);
      } else {
        context.commit('addAlertMessage', {
          type: 'error',
          message: 'Wrong password: ' + password,
        });
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
      publish(context, message).then(resolve).catch(reject);
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
      publish(context, message).then(resolve).catch(reject);
    });
  },
  endStory(context, storyId) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'end-story',
      };

      // publish the message
      publish(context, message).then(resolve).catch(reject);
    });
  },
  openCalibrationScreen(context, sleeveId) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'open-calibration-screen',
        sleeve: sleeveId,
      };

      // publish the message
      publish(context, message).then(resolve).catch(reject);
    });
  },
  calibrate(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'calibrate',
      };

      // publish the message
      publish(context, message).then(resolve).catch(reject);
    });
  },
  startIntro(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'start-intro',
      };

      // publish the message
      publish(context, message).then(resolve).catch(reject);
    });
  },
  skipIntro(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'skip-intro',
      };

      // publish the message
      publish(context, message).then(resolve).catch(reject);
    });
  },
  gotoSection(context, {sectionId, storyId}) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'goto-section',
        section: sectionId,
        story: storyId,
        sleeve: context.state.selectedSleeveId,
      };

      // publish the message
      publish(context, message).then(resolve).catch(reject);
    });
  },
  enableAR(context, layer) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'enable-ar',
      };
      if (layer) message.layer = layer;

      // publish the message
      publish(context, message).then(resolve).catch(reject);
    });
  },
  disableAR(context, layer) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'disable-ar',
      };
      if (layer) message.layer = layer;

      // publish the message
      publish(context, message).then(resolve).catch(reject);
    });
  },
  setNetwork(context, networkName) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'set-network',
        network: networkName,
      };

      // publish the message
      publish(context, message).then(resolve).catch(reject);
    });
  },
  autoplay(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'autoplay',
      };

      // publish the message
      publish(context, message).then(resolve).catch(reject);
    });
  },
  replay(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'replay',
      };

      // publish the message
      publish(context, message).then(resolve).catch(reject);
    });
  },
  accept(context) {
    return new Promise((resolve, reject) => {
      // set up a message object to publish
      const message = {
        type: 'accept',
      };

      // publish the message
      publish(context, message).then(resolve).catch(reject);
    });
  },
  pingBack(context) {
    return new Promise((resolve, reject) => {
      const message = {
        type: 'ping-back',
      };

      // publish the message
      publish(context, message).then(resolve).catch(reject);
    });
  },
  publishAnyMessage(context, {message, sender}) {
    return new Promise((resolve, reject) => {
      // publish the message
      publish(context, message, sender).then(resolve).catch(reject);
    });
  },
};

/**
 * publish - publish a MQTT message
 *
 * @param  {!Object} context
 * @param  {!Object} message
 * @param  {?String} sender tag
 * @return {!Promise}
 */
function publish(context, message, sender) {
  return new Promise((resolve, reject) => {
    message.sender = sender || 'facilitator';
    mqttClient.publishMessage(message, (err) => {
      if (err) {
        context.commit('addAlertMessage', {
          type: 'error',
          message: 'Unable to send MQTT message (type: ' +
            message.type + ')',
        });
        reject(err);
      }
      resolve();
    });
  });
}
