import mqtt from 'mqtt';
import EventBus from '@/event-bus';
import APP_CONFIG from '@/config/app-config';

let mqttClient;

export default {
  /**
   * init - initialize mqtt client.
   * Connect to a broker, subscribe to a topic, and attach event listeners
   * to some events.
   */
  init() {
    const host = process.env.MQTT_HOST || APP_CONFIG.MQTT.HOST;
    const port = process.env.MQTT_PORT || APP_CONFIG.MQTT.PORT;
    console.log('connecting to MQTT broker', host);
    // connect to broker
    mqttClient = mqtt.connect({
      host: host,
      port: port,
      qos: 2,
    });

    // when it's connected to the broker, subscribe to a topic
    mqttClient.on('connect', () => {
      const topic = APP_CONFIG.MQTT.TOPIC;
      mqttClient.subscribe(topic, {
        qos: 2,
      });
    });

    // when it's gone offline
    mqttClient.on('offline', () => {
      console.log('Connection for MQTT messaging went offline.');
      // alert('Connection for MQTT messaging went offline.');
    });

    // when it receives a message, console log
    mqttClient.on('message', (topic, payload) => {
      const message = String.fromCharCode.apply(null, payload);
      console.log('received message:', message);

      const messageObj = JSON.parse(message);
      if (!messageObj.type) {
        console.error('The received message doesnt have type!');
      } else {
        // emit the event to vue components subscribing the same event
        EventBus.$emit(messageObj.type, messageObj);
      }
    });
  },
  publishMessage(message, cb) {
    // publish the message
    console.log('publishing a message:', message);
    mqttClient.publish(
        APP_CONFIG.MQTT.TOPIC, JSON.stringify(message),
        {},
        (err) => {
          if (err) cb(err);
          cb(null);
        });
  },
};
