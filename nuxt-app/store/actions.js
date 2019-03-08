import mqttInitAction from './actions-mqtt-init';
import mqttPublishActions from './actions-mqtt-publish';
import roomEffectsActions from './actions-room-effects';

const actions = {};
Object.assign(actions, mqttInitAction);
Object.assign(actions, mqttPublishActions);
Object.assign(actions, roomEffectsActions);

export default actions;
