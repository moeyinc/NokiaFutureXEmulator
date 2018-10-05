// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import _store from './store/store';
import mixin from '@/mixins/global';

// set global mixin
Vue.mixin(mixin);

// use vuex
Vue.use(Vuex);
const store = new Vuex.Store(_store);

// disable production tip
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
});
