// import mqttInitAction from './actions-mqtt-init';
// import mqttPublishActions from './actions-mqtt-publish';
// import roomEffectsActions from './actions-room-effects';
//
// const actions = {};
// Object.assign(actions, mqttInitAction);
// Object.assign(actions, mqttPublishActions);
// Object.assign(actions, roomEffectsActions);
import mqttClient from './mqtt-client';
import APP_CONFIG from '@/config/app-config';

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
      if (password === APP_CONFIG.PASSWORD) {
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
};

export default actions;
