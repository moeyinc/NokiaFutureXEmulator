<!-- =================================================
 Template
================================================== -->
<template>
  <div class="mission-controls">

    <main-header
      :title="selectedStory.title"
      :subtitle="selectedMission.pageSubtitle"
      :has-nav-bar="true"
      :category-name="selectedStory.category"
      :back-button-label="'End Story'"
      @back-button-clicked="overlay = 'end-story-confirmation'"/>

    <div class="wrapper">
      <div class="outer-box">
        <div class="network-name">
          <div class="label">
            NETWORK
          </div>
          <div class="value">
            {{selectedNetwork.name}}
          </div>
        </div>
        <div class="network-parameter-container">
          <div class="network-parameter">
            <div class="label">
              SECURITY
            </div>
            <div class="value">
              {{selectedNetwork.parameters.security.raw}}
            </div>
          </div>
          <div class="network-parameter">
            <div class="label">
              LATENCY
            </div>
            <div class="value">
              {{selectedNetwork.parameters.latency.raw}}
            </div>
          </div>
          <div class="network-parameter">
            <div class="label">
              BANDWIDTH
            </div>
            <div class="value">
              {{selectedNetwork.parameters.bandwidth.raw}}
            </div>
          </div>
          <div class="network-parameter">
            <div class="label">
              RELIABILITY
            </div>
            <div class="value">
              {{selectedNetwork.parameters.reliability.raw}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <floating-action-button-container
      :justify-content="'space-between'">
      <sub-action-button
        :label="'Exit Mission'"
        :icon-filename="'arrow-right.png'"
        :enabled="true"
        @clicked="overlay = 'exit-mission-confirmation'"/>
      <action-button
        :label="'Update Network'"
        :enabled="true"
        @clicked="overlay='network'"/>
    </floating-action-button-container>

    <calibration-overlay
      v-if="overlay === 'calibration'"
      @close="closeCalibrationOverlay()">
    </calibration-overlay>

    <select-network-overlay
      v-if="overlay === 'network'"
      @close="updateNetwork()">
    </select-network-overlay>

    <confirmation-modal-overlay
      v-if="overlay === 'end-story-confirmation'"
      :message="'Are you sure to end story?'"
      @close="overlay = null"
      @execute="endStory()"/>

    <confirmation-modal-overlay
      v-if="overlay === 'exit-mission-confirmation'"
      :message="'Are you sure to exit mission?'"
      @close="overlay = null"
      @execute="abortMission()"/>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from '@/components/MainHeader';
import FloatingActionButtonContainer from
  '@/components/FloatingActionButtonContainer';
import ActionButton from '@/components/ActionButton';
import SubActionButton from '@/components/SubActionButton';
import CalibrationOverlay from '../overlays/CalibrationOverlay';
import SelectNetworkOverlay from '../overlays/SelectNetworkOverlay';
import ConfirmationModalOverlay from
  '@/components/pages/overlays/ConfirmationModalOverlay';
import selectedStoryMixin from '@/mixins/selected-story';
import selectedMissionMixin from '@/mixins/selected-mission';
import storyPageMixin from '@/mixins/story-page';
import EventBus from '@/event-bus';

export default {
  name: 'MissionControls',
  components: {
    MainHeader,
    FloatingActionButtonContainer,
    ActionButton,
    SubActionButton,
    CalibrationOverlay,
    SelectNetworkOverlay,
    ConfirmationModalOverlay,
  },
  mixins: [
    selectedStoryMixin,
    selectedMissionMixin,
    storyPageMixin,
  ],
  data() {
    return {
      overlay: null,
    };
  },
  created() {
    this.setCalibrationOverlay();
    this.setEventListeners();
  },
  destroyed() {
    this.removeEventListeners();
  },
  computed: {
    selectedNetwork() {
      return this.$store.state.selectedNetwork;
    },
  },
  methods: {
    setCalibrationOverlay() {
      let selectedPlayerMode = this.$store.state.selectedPlayerMode;
      if (selectedPlayerMode === 'auto') {
        this.overlay = null;
      } else {
        console.log('hash', this.$route.hash);
        if (this.$route.hash === '#calibration') {
          this.overlay = 'calibration';
        } else {
          this.overlay = null;
        }
      }
    },
    setEventListeners() {
      EventBus.$on('completed-mission', () => {
        this.jumpTo('PostMission', {
          story_id: this.storyId,
          mission_id: this.missionId,
          transition: 'slide-left',
        });
      });

      EventBus.$on('sleeve-unresponsive', () => {
        alert('Sleeve has not been responding for 5 seconds. ' +
        'Try using other sleeves from "Manage Sleeves tab." ' +
        'and restart the mission.');
      });

      EventBus.$on('sleeve-responsive', () => {
        alert('Sleeve is now responsive!');
      });
    },
    removeEventListeners() {
      EventBus.$off('completed-mission');
      EventBus.$off('sleeve-unresponsive');
      EventBus.$off('sleeve-responsive');
    },
    closeCalibrationOverlay() {
      this.overlay = null;
      this.jumpTo('MissionControls', {
        story_id: this.storyId,
        mission_id: this.missionId,
        transition: 'fade',
      });
    },
    updateNetwork() {
      this.$store.dispatch('setNetwork')
          .then(() => {
            console.log('network is updated');
            this.overlay = null;
          })
          .catch((err) => {
            console.error('There was an error sending an message!', err);
            this.overlay = null;
          });
    },
    abortMission() {
      this.$store.dispatch('endMission')
          .then(() => {
            this.jumpTo('PostMission', {
              story_id: this.storyId,
              mission_id: this.missionId,
              transition: 'slide-left',
            });
          })
          .catch((err) => {
            console.error('There was an error sending an message!', err);
          });
    },
    endStory() {
      this.$store.dispatch('endStory')
          .then(() => {
            this.jumpTo('Stories', {transition: 'fade'});
          })
          .catch((err) => {
            console.error('There was error on sending message', err);
          });
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.mission-controls
  .wrapper
    margin-top: 30px
    padding: 0 80px

    .outer-box
      height: 250px
      border-top: solid 0.5px #4F88FF
      border-bottom: solid 0.5px #4F88FF

    .label
      font-size: 12px
      letter-spacing: 1.25px
      color: #4F88FF
      margin: 20px 0

    .network-name
      .value
        font-size: 36px
        line-height: 48px
        margin-bottom: 40px

    .network-parameter-container
      display: flex
      flex-direction: row
      justify-content: space-between

      .network-parameter
        width: 153px
        border-top: solid 0.5px #4F88FF

        .value
          font-size: 24px
          padding-top: 5px
</style>
