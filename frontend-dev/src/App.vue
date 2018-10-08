<!-- =================================================
 Template
================================================== -->
<template>
  <div id="app">
    <div class="button-container">
      <div class="row">
        <button @click="login()">
          Login
        </button>
        <button @click="logout()">
          Logout
        </button>
      </div>
      <div class="row">
        <button @click="startStory()">
          Start Story
        </button>
        <button @click="endStory()">
          End Story
        </button>
      </div>
      <div class="row">
        <button @click="startMission(false)">
          Start Mission
        </button>
        <button @click="startMission(true)">
          Start Mission Autoplay
        </button>
        <button @click="endMission()">
          End Mission
        </button>
      </div>
      <div class="row">
        <button @click="calibrate()">
          Calibrate
        </button>
        <button @click="endCalibration()">
          End Calibration
        </button>
      </div>
      <div class="row">
        <button @click="setNetwork()">
          Set Network
        </button>
      </div>
      <div class="row">
        <button @click="playStoryOutro()">
          Play Story Outro
        </button>
      </div>
    </div>
    <hr/>
    <div>
      <ul>
        <li v-for="(message, index) in receivedMessages"
          :key="index">
          {{ message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import APP_CONFIG from '@/../static/app-config';
import mqtt from 'mqtt';

export default {
  name: 'App',
  data() {
    return {
      mqttClient: null,
      messageToSend: '',
      receivedMessages: [],
    };
  },
  created: function() {
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
  methods: {
    login: function() {
      const message = {
        type: 'login',
      };
      console.log('publishing a message', message);
      this.mqttClient.publish(APP_CONFIG.MQTT.TOPIC, JSON.stringify(message));
    },
    logout: function() {
      const message = {
        type: 'logout',
      };
      console.log('publishing a message', message);
      this.mqttClient.publish(APP_CONFIG.MQTT.TOPIC, JSON.stringify(message));
    },
    startStory: function() {
      const message = {
        type: 'start-story',
        story: 1,
      };
      console.log('publishing a message', message);
      this.mqttClient.publish(APP_CONFIG.MQTT.TOPIC, JSON.stringify(message));
    },
    endStory: function() {
      const message = {
        type: 'end-story',
      };
      console.log('publishing a message', message);
      this.mqttClient.publish(APP_CONFIG.MQTT.TOPIC, JSON.stringify(message));
    },
    calibrate: function() {
      const message = {
        type: 'calibrate',
      };
      console.log('publishing a message', message);
      this.mqttClient.publish(APP_CONFIG.MQTT.TOPIC, JSON.stringify(message));
    },
    endCalibration: function() {
      const message = {
        type: 'end-calibration',
      };
      console.log('publishing a message', message);
      this.mqttClient.publish(APP_CONFIG.MQTT.TOPIC, JSON.stringify(message));
    },
    startMission: function(isAutoplay) {
      const message = {
        type: 'start-mission',
        mission: 1,
        autoPlay: isAutoplay,
        numberOfPlayers: 1,
        network: {
          bandwidth: 5,
          latency: 5,
          reliability: 5,
          security: 5,
        },
      };
      console.log('publishing a message', message);
      this.mqttClient.publish(APP_CONFIG.MQTT.TOPIC, JSON.stringify(message));
    },
    setNetwork: function() {
      const message = {
        type: 'set-network',
        network: {
          bandwidth: 1,
          latency: 1,
          reliability: 1,
          security: 1,
        },
      };
      console.log('publishing a message', message);
      this.mqttClient.publish(APP_CONFIG.MQTT.TOPIC, JSON.stringify(message));
    },
    endMission: function() {
      const message = {
        type: 'end-mission',
      };
      console.log('publishing a message', message);
      this.mqttClient.publish(APP_CONFIG.MQTT.TOPIC, JSON.stringify(message));
    },
    playStoryOutro: function() {
      const message = {
        type: 'play-story-outro',
      };
      console.log('publishing a message', message);
      this.mqttClient.publish(APP_CONFIG.MQTT.TOPIC, JSON.stringify(message));
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

#app
  padding: 20px

  .button-container
    margin-bottom: 30px

  .row
    display: flex
    flex-direction: row
    margin-bottom: 10px

    button
      margin-right: 15px
      padding: 15px
      font-weight: bold
</style>
