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
      @back-button-clicked="jumpTo('Stories', {transition: 'fade'})"/>

    <div class="wrapper">
      <div class="outer-box" @click="overlay='network'">
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
      :action-button-label="'Update Network'"
      :sub-action-button-label="'Abort Mission'"
      :sub-action-button-icon-filename="'arrow-left.png'"
      @action-button-clicked="updateNetwork()"
      @sub-action-button-clicked="abortMission()"/>

    <calibration-overlay
      v-if="overlay === 'calibration'"
      @close="overlay = null">
    </calibration-overlay>

    <select-network-overlay
      v-if="overlay === 'network'"
      @close="overlay = null">
    </select-network-overlay>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from '@/components/MainHeader';
import FloatingActionButtonContainer from
  '@/components/FloatingActionButtonContainer';
import CalibrationOverlay from './overlays/CalibrationOverlay';
import SelectNetworkOverlay from './overlays/SelectNetworkOverlay';
import selectedStoryMixin from '@/mixins/selected-story';
import selectedMissionMixin from '@/mixins/selected-mission';
import storyPageMixin from '@/mixins/story-page';
import EventBus from '@/event-bus';

export default {
  name: 'MissionControls',
  components: {
    MainHeader,
    FloatingActionButtonContainer,
    CalibrationOverlay,
    SelectNetworkOverlay,
  },
  mixins: [
    selectedStoryMixin,
    selectedMissionMixin,
    storyPageMixin,
  ],
  data() {
    return {
      overlay: 'calibration',
    };
  },
  created() {
    EventBus.$on('completed-mission', () => {
      this.jumpTo('PostMission', {
        story_id: this.storyId,
        mission_id: this.missionId,
      });
    });
  },
  destroyed() {
    EventBus.$off('completed-mission');
  },
  computed: {
    selectedNetwork() {
      return this.$store.state.selectedNetwork;
    },
  },
  methods: {
    updateNetwork() {
      this.$store.dispatch('setNetwork')
          .then(() => {
            console.log('network is updated');
          })
          .catch((err) => {
            console.error('There was an error sending an message!', err);
          });
    },
    abortMission() {
      this.$store.dispatch('endMission')
          .then(() => {
            this.jumpTo('PostMission', {
              story_id: this.storyId,
              mission_id: this.missionId,
            });
          })
          .catch((err) => {
            console.error('There was an error sending an message!', err);
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
