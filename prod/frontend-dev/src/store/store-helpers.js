import APP_CONFIG from '@/config/app-config';
import MESSAGE_CONFIG from '@/config/message-config';

export const publishMessage = function(mqttClient, message, cb) {
  if (!validateMessage(message)) cb('Message validation failed');

  console.log('publishing a message:', message);
  mqttClient.publish(
      APP_CONFIG.MQTT.TOPIC, JSON.stringify(message),
      {},
      (err) => {
        if (err) cb(err);
        cb(null);
      });
};

/**
 * validateMessage - validate a MQTT message by checking message-config file
 *
 * @param  {Object} _message message object
 * @return {Boolean}
 */
function validateMessage(_message) {
  if (!_message.hasOwnProperty('type')) {
    console.error('The message doesn\'t have type');
    return false;
  }

  for (let m of MESSAGE_CONFIG) {
    if (!m.hasOwnProperty('type')) {
      console.error('message-config contains an object missing type', m);
      return false;
    }

    // check if there's no wrong parameters in the given message
    if (_message.type === m.type) {
      for (let key in _message) {
        // ignore type key
        if (key === 'type') continue;

        // check network values
        if (key === 'network') {
          if (!m.hasOwnProperty('networkParams')) {
            console.error('in message-config, ' +
              'the object doesn\'t contain networkParams', m);
          }
          for (let nKey in _message.network) {
            if (!_message.network.hasOwnProperty(nKey)) continue;
            let p = getParamWithKey(nKey, m.networkParams);
            if (!p) return false;
            if (!isValueValidOption(_message.network[nKey], p)) return false;
            // nKey is valid
          }
        }

        // check other keys
        if (!m.hasOwnProperty('params')) {
          console.error('in message-config, ' +
            'the object doesn\'t contain params', m);
        }
        let p = getParamWithKey(key, m.params);
        if (!p) return false;
        if (!isValueValidOption(_message[key], p)) return false;
        // key is valid
      }
    }
  }

  console.log('The given message is valid!', _message);
  return true;

  /**
   * getParamWithKey - get a param object with the given key
   *
   * @param  {String} key       a key in the message object
   * @param  {type} paramsArray definition array
   * @return {!Object}
   */
  function getParamWithKey(key, paramsArray) {
    if (!Array.isArray(paramsArray)) {
      console.error('The given params is not an array', paramsArray);
      return;
    }
    for (let p of paramsArray) {
      if (p.name === key) return p;
    }
    console.log('The paramsArray doesnt contain the given key', key);
    return;
  }

  /**
   * isValueValidOption - check if the given value is defined as a valid
   * option in given param
   *
   * @param  {Any} value
   * @param  {Object} param
   * @return {Boolean}
   */
  function isValueValidOption(value, param) {
    if (!param.hasOwnProperty('options')) {
      console.error('The given param doesnt have options', param);
      return false;
    }
    if (!Array.isArray(param.options)) {
      console.error('The given param.options is not an array', param);
      return false;
    }

    for (let option of param.options) {
      if (value == option) return true;
    }

    console.log('The given value is not defined in options');
    return false;
  }
}
