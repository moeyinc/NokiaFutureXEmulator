<template>
  <div class="sleeve-management page">
    <PageHeader :title="'Sleeve Management'" />

    <SummaryBlock
      :summary-text="'Manage which sleeve to use for games in the stories.'"
    />

    <SleeveList
      @open-calibration-overlay="openCalibrationOverlay"
    />

    <CalibrationOverlay
      v-if="overlay === 'calibration'"
      @close="closeCalibrationOverlay"
    />
  </div>
</template>

<script>
import PageHeader from '@comps/PageHeader';
import SummaryBlock from '@comps/SummaryBlock';
import SleeveList from '@comps/SleeveList';
import CalibrationOverlay from '@comps/overlays/CalibrationOverlay';

export default {
  name: 'SleeveManagement',
  layout: 'with-side-menu',
  transition: 'fade',
  components: {
    PageHeader,
    SummaryBlock,
    SleeveList,
    CalibrationOverlay,
  },
  data() {
    return {
      overlay: null,
    };
  },
  methods: {
    openCalibrationOverlay() {
      this.overlay = 'calibration';
    },
    closeCalibrationOverlay() {
      this.overlay = null;
    },
  },
};
</script>

<style lang="stylus" scoped>
.sleeve-management
  overflow-y: scroll
  -webkit-overflow-scrolling: touch
  overflow-scrolling: touch
</style>
