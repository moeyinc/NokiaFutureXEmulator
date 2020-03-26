import mqtt from 'mqtt';
import CONFIG from '@/config';

let mqttClient;

export default {
  /**
   * init - initialize mqtt client.
   * Connect to a broker, subscribe to a topic, and attach event listeners
   * to some events.
   *
   * @param {!Object} context Vuex context object
   * @return {!Promise}
   */
  init(context) {
    return new Promise((resolve, reject) => {
      const protocol = CONFIG.MQTT.PROTOCOL;
      const host = CONFIG.MQTT.HOST;
      const port = CONFIG.MQTT.PORT;
      const url = port ? (protocol + '://' + host + ':' + port) : (protocol + '://' + host);
      console.log('connecting to MQTT broker', url);

      // connect to broker
      mqttClient = mqtt.connect(url);

      // when it's connected to the broker, subscribe to a topic and resolve
      mqttClient.on('connect', () => {
        const topic = CONFIG.MQTT.TOPIC;
        console.log('subscribing to a topic', topic);
        mqttClient.subscribe(topic, {
          qos: 2,
        });
        resolve(mqttClient);
      });

      // if there's an error on connecting, reject
      mqttClient.on('error', (err) => {
        context.commit('addAlertMessage', {
          type: 'error',
          message: 'Couldn\'t get connected to MQTT broker',
        });
        reject(err);
      });

      // when it's gone offline
      mqttClient.on('offline', () => {
        // context.commit('addAlertMessage', {
        //   type: 'warning',
        //   message: 'Disconnected from MQTT broker',
        // });
        console.log('Connection to MQTT broker went offline.');
      });

      // when it receives a message, save the log
      mqttClient.on('message', (topic, payload) => {
        const message = String.fromCharCode.apply(null, payload);
        const messageObj = JSON.parse(message);
        context.commit('updateMqttMessageLog', {
          topic: topic,
          message: messageObj,
          receivedAt: getCurrentTimeString(),
        });
        if (!messageObj.type) {
          console.error('The received message doesnt have type!');
        } else {
          if (messageObj.type === 'ping') context.dispatch('pingBack');

          // update store.state when you receive specific messages
          const subscribingTopic = CONFIG.MQTT.TOPIC;
          if (topic === subscribingTopic) {
            switch (messageObj.type) {
              case 'ready-to-proceed':
                context.commit('updateInSectionReadyToProceed', true);
                break;
              case 'completed-mission':
                context.commit('updateInSectionCompletedMission', true);
                break;
            }
          } else {
            console.log('Ignored a message received in different topic', topic);
          }
        }
      });
    });
  },
  publishMessage(message, cb) {
    // publish the message
    console.log('publishing a message:', message);
    const topic = CONFIG.MQTT.TOPIC;
    mqttClient.publish(
        topic, JSON.stringify(message),
        {},
        (err) => {
          if (err) cb(err);
          cb(null);
        });
  },
};

/**
 * getCurrentTimeString - get current time in string
 *
 * @return {!String} HH:MM:SS
 */
function getCurrentTimeString() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;

  return hours + ':' + minutes + ':' + seconds;
}
