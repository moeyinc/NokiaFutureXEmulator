import APP_CONFIG from '@/config/app-config';

/**
 * publishMessage - publish a mqtt message to subscribers.
 * It validates the given message by comparing it with message-config file.
 *
 * @param  {!Object} mqttClient
 * @param  {!Object} message message object to publish
 * @param  {?Function} cb callback function
 */
export const publishMessage = function(mqttClient, message, cb) {
  // publish the message
  console.log('publishing a message:', message);
  mqttClient.publish(
      APP_CONFIG.MQTT.TOPIC, JSON.stringify(message),
      {},
      (err) => {
        if (err) cb(err);
        cb(null);
      });
};
