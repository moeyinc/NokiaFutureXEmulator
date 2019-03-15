<template>
  <main>
    <h1>MQTT Messaging Test</h1>
    <ConnectionStatusSection
      class="connection-status"
      :mqtt-client="mqttClient"
    />
    <MessageSelectSection
      class="message-select"
      section-title="Select Message Type"
      :options="messageTypes"
      @change="(val) => selectedType = val"
    />
    <MessageSelectSection
      v-for="(param, index) in selectedMessage.params"
      :key="index"
      class="message-select"
      :section-title="`Select Parameter: '${param.name}'`"
      :options="param.options"
      @change="(val) => selectedParameters[param.name] = val"
    />
    <VBtn
      class="publish-button"
      color="#0052FF"
      block
      large
      dark
      @click="publishMessage"
    >
      Publish Message
    </VBtn>
  </main>
</template>

<script>
import ConnectionStatusSection from '@comps/mqtt-test/ConnectionStatusSection';
import MessageSelectSection from '@comps/mqtt-test/MessageSelectSection';
import {mapState} from 'vuex';

export default {
  layout: 'default',
  components: {
    ConnectionStatusSection,
    MessageSelectSection,
  },
  data() {
    return {
      mqttClient: null,
      experienceConfigLoaded: false,
      selectedType: '',
      selectedParameters: {},
    };
  },
  computed: {
    ...mapState(['sleeves']),
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
    publishMessage() {
      const message = {};
      if (!this.selectedType) {
        console.error('No message type');
        return;
      }
      message.type = this.selectedType;

      if (this.selectedParameters) {
        for (const key in this.selectedParameters) {
          if (this.selectedParameters.hasOwnProperty(key)) {
            message[key] = this.selectedParameters[key];
          }
        }
      }

      this.$store.dispatch('publishAnyMessage', message)
          .then(() => {
            console.log('published');
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
  padding: 20px
  font-size: 16px
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
</style>
