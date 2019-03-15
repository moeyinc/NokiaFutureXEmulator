import mqttActions from './mqtt-actions';
import roomEffectsActions from './room-effects-actions';
import experienceActions from './experience-actions';

const actions = {};
Object.assign(actions, mqttActions);
Object.assign(actions, roomEffectsActions);
Object.assign(actions, experienceActions);

export default actions;
