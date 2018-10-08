<!-- =================================================
 Template
================================================== -->
<template>
  <div id="app">
    <div class="block-container">
      <div class="message-block">
        <h1>SEND A MESSAGE</h1>

        <section>
          <h2>1. Message Type</h2>
          <select
            class="message-type-selection"
            v-model="selectedMessageType">
            <option disabled value="">
              Select One
            </option>
            <option
              v-for="(messageType, index) in messageTypes"
              :value="messageType"
              :key="index">
              {{messageType.type}}
            </option>
          </select>
        </section>

        <section
          v-if="selectedMessageType.params ||
            selectedMessageType.networkParams">
          <h2>2. Message Parameters</h2>
          <div
            v-if="selectedMessageType.params"
            class="message-option-selections-container">
            <div
              v-for="(param, index) in selectedMessageType.params"
              :key="index"
              class="message-option-selection">
              <div class="param-name">
                {{param.name}}:
              </div>
              <select v-model="param.value">
                <option disabled value="">
                  Select Value
                </option>
                <option
                  v-for="(option, index) in param.options"
                  :key="index">
                  {{option}}
                </option>
              </select>
            </div>
          </div>

          <div
            v-if="selectedMessageType.networkParams"
            class="message-option-selections-container">
            <h3>network:</h3>
            <div
              v-for="(param, index) in selectedMessageType.networkParams"
              :key="index"
              class="message-option-selection network">
              <div class="param-name">
                {{param.name}}:
              </div>
              <select v-model="param.value">
                <option disabled value="">
                  Select Value
                </option>
                <option
                  v-for="(option, index) in param.options"
                  :key="index">
                  {{option}}
                </option>
              </select>
            </div>
          </div>
        </section>

        <section v-if="selectedMessageType">
          <button class="publish-button" @click="publishMessage()">
            PUBLISH
          </button>
        </section>
      </div>

      <div class="history-block">
        <h1>MESSAGE HISTORY</h1>
        <ul>
          <li v-for="(message, index) in receivedMessages"
            :key="index">
            {{ message }}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import mqtt from 'mqtt';
import APP_CONFIG from '@/../static/app-config';
import MESSAGE_CONFIG from '@/../static/message-config';

export default {
  name: 'App',
  data() {
    return {
      mqttClient: null,
      selectedMessageType: '',
      receivedMessages: [],
      messageTypes: MESSAGE_CONFIG,
    };
  },
  created: function() {
    this.initializeMqttClient();
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
    publishMessage() {
      const message = {};

      // add type
      message.type = this.selectedMessageType.type;

      // add params
      if (this.selectedMessageType.params) {
        for (let param of this.selectedMessageType.params) {
          message[param.name] = param.value;
        }
      }

      // add network params
      if (this.selectedMessageType.networkParams) {
        message.network = {};
        for (let param of this.selectedMessageType.networkParams) {
          message.network[param.name] = param.value;
        }
      }

      // publish the message
      console.log('publishing a message:', message);
      this.mqttClient.publish(
          APP_CONFIG.MQTT.TOPIC, JSON.stringify(message));
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
  font-family: Helvetica
  height: 100%

  .block-container
    display: flex
    direction: row
    height: 100%

    h1
      font-size: 32px
      margin-bottom: 30px

    .message-block
      width: 50%
      padding: 20px

      h2
        font-size: 18px
        margin-bottom: 15px

      section
        margin-bottom: 30px

      .message-type-selection
        margin-left: 20px

      .message-option-selections-container
        margin-left: 20px
        margin-bottom: 20px

        .message-option-selection
          display: flex
          flex-direction: row

          &.network
            margin-left: 20px

          .param-name
            margin-right: 15px

      button.publish-button
        padding: 15px
        width: 100%
        font-size: 24px
        font-weight: bold
        border-radius: 5px
        background: linear-gradient(whitesmoke, lightgrey)

    .history-block
      width: 50%
      padding: 20px
      border-left: solid 1px
</style>
