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

    <floating-action-button-container
      :action-button-label="'Update Network'"
      :sub-action-button-label="'Abort Mission'"
      @action-button-clicked="overlay = 'network'"
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
  ],
  data() {
    return {
      overlay: 'calibration',
    };
  },
  methods: {
    abortMission() {
      console.log('abort mission');
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
</style>
