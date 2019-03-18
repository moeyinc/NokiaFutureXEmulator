import mqtt from 'mqtt';
import EventBus from '@/event-bus';
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
      const host = process.env.MQTT_HOST || CONFIG.MQTT.HOST;
      const port = process.env.MQTT_PORT || CONFIG.MQTT.PORT;
      console.log('connecting to MQTT broker', host);
      // connect to broker
      mqttClient = mqtt.connect({
        host: host,
        port: port,
        qos: 2,
      });

      // when it's connected to the broker, subscribe to a topic and resolve
      mqttClient.on('connect', () => {
        const topic = CONFIG.MQTT.TOPIC;
        mqttClient.subscribe(topic, {
          qos: 2,
        });
        resolve(mqttClient);
      });

      // if there's an error on connecting, reject
      mqttClient.on('error', (err) => {
        reject(err);
      });

      // when it's gone offline
      mqttClient.on('offline', () => {
        console.log('Connection to MQTT broker went offline.');
      });

      // when it receives a message, save the log
      mqttClient.on('message', (topic, payload) => {
        const message = String.fromCharCode.apply(null, payload);
        const messageObj = JSON.parse(message);
        const log = {
          message: messageObj,
          receivedAt: getCurrentTimeString(),
        };
        context.commit('updateMqttMessageLogs', log);
        if (!messageObj.type) {
          console.error('The received message doesnt have type!');
        } else {
          // emit the event to vue components subscribing the same event
          EventBus.$emit(messageObj.type, messageObj);
        }
      });
    });
  },
  publishMessage(message, cb) {
    // publish the message
    console.log('publishing a message:', message);
    mqttClient.publish(
        CONFIG.MQTT.TOPIC, JSON.stringify(message),
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
