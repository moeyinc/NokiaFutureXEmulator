import mqttInitAction from './store-actions-mqtt-init';
import mqttPublishActions from './store-actions-mqtt-publish';

let actions = {};
Object.assign(actions, mqttInitAction);
Object.assign(actions, mqttPublishActions);

export default actions;
