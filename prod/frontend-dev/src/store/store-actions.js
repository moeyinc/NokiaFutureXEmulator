import mqttInitAction from './store-actions-mqtt-init';
import mqttPublishActions from './store-actions-mqtt-publish';
import roomEffectsActions from './store-actions-room-effects';

let actions = {};
Object.assign(actions, mqttInitAction);
Object.assign(actions, mqttPublishActions);
Object.assign(actions, roomEffectsActions);

export default actions;
