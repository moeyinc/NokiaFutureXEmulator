<!-- =================================================
 Template
================================================== -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import mqtt from 'mqtt';
import APP_CONFIG from '@/../static/app-config';

export default {
  name: 'App',
  data() {
    return {
      mqttClient: null,
    };
  },
  created: function() {
    // this.initializeMqttClient();
  },
  methods: {
    initializeMqttClient() {
      // connect to test broker
      this.mqttClient = mqtt.connect({
        host: APP_CONFIG.MQTT.HOST,
        port: APP_CONFIG.MQTT.PORT,
      });

      // when it's connected to the broker, subscribe to a topic
      this.mqttClient.on('connect', () => {
        const topic = APP_CONFIG.MQTT.TOPIC;
        this.mqttClient.subscribe(topic);
      });

      // when it receives a message, print it on the screen
      this.mqttClient.on('message', (topic, payload) => {
        console.log('payload:', payload);
        let message = String.fromCharCode.apply(null, payload);
        this.receivedMessages.push(message);
      });
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus">
@import '../node_modules/reset-css/reset.css'
@import './stylus/reset-additional'
@import './stylus/fonts'
@import './stylus/global-styles'
@import './stylus/vue-transitions'
</style>
