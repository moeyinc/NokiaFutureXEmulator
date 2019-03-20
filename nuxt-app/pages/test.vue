<template>
  <main>
    <h1>MQTT Messaging Test</h1>
    <ConnectionStatusSection
      class="connection-status"
      :mqtt-client="mqttClient"
    />
    <MessageSelectSection
      class="message-select"
      section-title="Select Sender"
      :value="selectedSender"
      :options="messageSenders"
      @change="(val) => updateSelectedSender(val)"
    />
    <MessageSelectSection
      v-show="selectedSender"
      class="message-select"
      section-title="Select Message Type"
      :value="selectedType"
      :options="messageTypes"
      @change="(val) => {updateSelectedType(val) && resetSelectedParameters()}"
    />
    <MessageSelectSection
      v-for="(param, index) in selectedMessage.params"
      :key="index"
      class="message-select"
      :section-title="`Select Parameter: '${param.name}'`"
      :value="selectedParameters[param.name]"
      :options="param.options"
      @change="(val) => updateSelectedParameters(param.name, val)"
    />
    <VBtn
      v-show="readyToPublish"
      class="publish-button"
      color="#0052FF"
      block
      large
      dark
      @click="publishMessage"
    >
      Publish Message
    </VBtn>
    <VDivider
      v-show="mqttMessageLogs.length > 0"
      class="divider"
    />
    <MessageLogSection
      v-show="mqttMessageLogs.length > 0"
      :message-logs="mqttMessageLogs"
    />
  </main>
</template>

<script>
import ConnectionStatusSection from '@comps/mqtt-test/ConnectionStatusSection';
import MessageSelectSection from '@comps/mqtt-test/MessageSelectSection';
import MessageLogSection from '@comps/mqtt-test/MessageLogSection';
import {mapState} from 'vuex';

export default {
  layout: 'scrollable',
  components: {
    ConnectionStatusSection,
    MessageSelectSection,
    MessageLogSection,
  },
  data() {
    return {
      mqttClient: null,
      experienceConfigLoaded: false,
      selectedSender: '',
      selectedType: '',
      selectedParameters: {},
      readyToPublish: false,
    };
  },
  computed: {
    ...mapState(['sleeves', 'mqttMessageLogs']),
    messageSenders() {
      return [
        'facilitator',
        'unity',
        'touchdesigner',
      ];
    },
    messageTypes() {
      const types = [];
      for (const m of this.messages) {
        const type = m.type;
        if (!type) return [];
        types.push(type);
      }
      return types;
    },
    selectedMessage() {
      let message = {};
      for (const m of this.messages) {
        const type = m.type;
        if (!type || !this.selectedType) return {};
        if (type === this.selectedType) message = m;
      }
      return message;
    },
    messages() {
      return [
        {
          type: 'login',
          params: [
            {
              name: 'sleeve',
              options: this.sleeves,
            },
          ],
        },
        {
          type: 'logout',
        },
        {
          type: 'start-intro',
        },
        {
          type: 'skip-intro',
        },
        {
          type: 'completed-intro',
        },
        {
          type: 'start-story',
          params: [
            {
              name: 'story',
              options: [1],
            },
          ],
        },
        {
          type: 'end-story',
        },
        {
          type: 'completed-story',
        },
        {
          type: 'goto-section',
          params: [
            {
              name: 'section',
              options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            },
          ],
        },
        {
          type: 'start-calibration',
          params: [
            {
              name: 'sleeve',
              options: this.sleeves,
            },
          ],
        },
        {
          type: 'end-calibration',
        },
        {
          type: 'calibrate',
        },
        {
          type: 'enable-ar',
          params: [
            {
              name: 'layer',
              options: ['null', 'network', 'energy', 'speed'],
            },
          ],
        },
        {
          type: 'disable-ar',
          params: [
            {
              name: 'layer',
              options: ['null', 'network', 'energy', 'speed'],
            },
          ],
        },
        {
          type: 'ready-to-proceed',
        },
        {
          type: 'ready-to-replay',
        },
        {
          type: 'replay',
        },
        {
          type: 'set-network',
          params: [
            {
              name: 'network',
              options: ['wifi', '4g', '5g'],
            },
          ],
        },
        {
          type: 'ping',
        },
        {
          type: 'ping-back',
        },
      ];
    },
  },
  created() {
    this.initMqttClient();
    this.getExperienceConfig();
  },
  methods: {
    initMqttClient() {
      this.$store.dispatch('initMqttClient')
          .then((mqttClient) => {
            this.mqttClient = mqttClient;
          })
          .catch((err) => {
            console.error('mqtt connection error', err);
          });
    },
    getExperienceConfig() {
      this.$store.dispatch('getExperienceConfig')
          .then(() => {
            this.experienceConfigLoaded = true;
          })
          .catch(console.error);
    },
    updateSelectedSender(val) {
      this.selectedSender = val;
    },
    updateSelectedType(val) {
      this.selectedType = val;
      this.updateReadyToPublish();
    },
    updateSelectedParameters(key, val) {
      this.selectedParameters[key] = val;
      this.updateReadyToPublish();
    },
    resetSelectedSender() {
      this.selectedSender = '';
    },
    resetSelectedType() {
      this.selectedType = '';
    },
    resetSelectedParameters() {
      console.log('reset selected parameters');
      this.selectedParameters = {};
    },
    updateReadyToPublish() {
      if (Object.keys(this.selectedMessage).length === 0) {
        // no message is selected
        this.readyToPublish = false;
        return;
      } else if (!this.selectedMessage.params) {
        // message is selected and it doesn't require any paramters
        this.readyToPublish = true;
        return;
      }

      // else if message is selected and it requires some paramters,
      // check if the selectedParameters has all the required parameters
      for (const p of this.selectedMessage.params) {
        if (this.selectedParameters[p.name] === undefined) {
          this.readyToPublish = false;
          return;
        }
      }
      this.readyToPublish = true;
    },
    publishMessage() {
      // preparing the message object to send
      const message = {};
      if (!this.selectedSender) {
        console.error('No message sender');
        return;
      }
      if (!this.selectedType) {
        console.error('No message type');
        return;
      }
      message.type = this.selectedType;

      // set all the parameters into the message object
      if (this.selectedParameters) {
        for (const key in this.selectedParameters) {
          if (this.selectedParameters.hasOwnProperty(key)) {
            message[key] = this.selectedParameters[key];
          }
        }
      }

      // publish the message
      this.$store.dispatch('publishAnyMessage', {
        message: message,
        sender: this.selectedSender,
      })
          .then(() => {
            this.resetSelectedSender();
            this.resetSelectedType();
            this.resetSelectedParameters();
            this.updateReadyToPublish();
          })
          .catch(console.error);
    },
  },
};
</script>

<style scoped lang="stylus">
$mobile-max = 768px

main
  color: black
  max-width: $mobile-max
  margin: 0 auto
  padding: 40px 20px 150px
  font-size: 16px
  // overflow-y: scroll
  // -webkit-overflow-scrolling: touch
  // overflow-scrolling: touch
  h1
    font-size: 28px
    font-family: 'NokiaPureHeadline_Bold'
    margin-bottom: 50px
  .connection-status
    margin-bottom: 40px
  .message-select
    margin-bottom: 40px
  .publish-button
    font-family: 'NokiaPureHeadline_Bold'
  .divider
    margin: 40px 0
</style>
