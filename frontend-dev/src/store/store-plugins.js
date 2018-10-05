/**
 * logMutation - logger for store mutation
 * @param {!Object} store Vuex's store object
 */
const logMutation = (store) => {
  store.subscribe((mutation, state) => {
    console.log(mutation.type, mutation.payload);
  });
};

/**
 * logAction - logger for store action
 * @param {!Object} store Vuex's store object
 */
const logAction = (store) => {
  store.subscribeAction((action, state) => {
    console.log('[store action] ' + action.type + ' | payload: ',
        action.payload);
  });
};

export default [
  logMutation,
  logAction,
];
