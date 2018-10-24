import mqtt from 'mqtt';
import APP_CONFIG from '@/config/app-config';
import EventBus from '@/event-bus';

const mqttInitAction = {
  /**
   * initMqttClient - initialize mqtt client.
   * Connect to a broker, subscribe to a topic, and attach event listener
   * to some events.
   * Expecting store.state has a variable called 'mqttClient'.
   *
   * @param  {!Object} context Vuex context object
   */
  initMqttClient(context) {
    // connect to test broker
    context.state.mqttClient = mqtt.connect({
      host: APP_CONFIG.MQTT.HOST,
      port: APP_CONFIG.MQTT.PORT,
    });

    // when it's connected to the broker, subscribe to a topic
    context.state.mqttClient.on('connect', () => {
      const topic = APP_CONFIG.MQTT.TOPIC;
      context.state.mqttClient.subscribe(topic);
    });

    // when it receives a message, console log
    context.state.mqttClient.on('message', (topic, payload) => {
      let message = String.fromCharCode.apply(null, payload);
      console.log('received message:', message);

      let messageObj = JSON.parse(message);
      if (!messageObj.type) {
        console.error('The received message doesnt have type!');
      } else {
        // emit the event to vue components subscribing the same event
        EventBus.$emit(messageObj.type);
      }
    });
  },
};

export default mqttInitAction;
