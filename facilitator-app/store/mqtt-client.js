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
        const topic = process.env.MQTT_TOPIC || CONFIG.MQTT.TOPIC;
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

          // emit the event to vue components subscribing the same event
          const subscribingTopic = process.env.MQTT_TOPIC || CONFIG.MQTT.TOPIC;
          if (topic === subscribingTopic) {
            EventBus.$emit(messageObj.type, messageObj);
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
    const topic = process.env.MQTT_TOPIC || CONFIG.MQTT.TOPIC;
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
