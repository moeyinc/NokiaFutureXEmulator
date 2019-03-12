import mqttClient from './mqtt-client';

const mqttInitAction = {
  /**
   * initMqttClient - initialize mqtt client.
   * Connect to a broker, subscribe to a topic, and attach event listener
   * to some events.
   */
  initMqttClient() {
    mqttClient.init();
  },
};

export default mqttInitAction;
