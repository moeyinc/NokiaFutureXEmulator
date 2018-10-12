<!-- =================================================
 Template
================================================== -->
<template>
  <div class="player-mode-selection">

    <main-header
      :title="selectedStory.title"
      :subtitle="selectedMission.pageSubtitle"
      :has-nav-bar="true"
      :category-name="selectedStory.category"
      :back-button-label="'End Story'"
      @back-button-clicked="jumpTo('Stories', {transition: 'fade'})"/>

    <div class="wrapper">
      <action-headline>Player Mode</action-headline>
      <div class="player-mode-button-container">
        <large-select-button
          class="left-button"
          :width="selectedMission.hasTwoPlayerMode ? 204 : 320"
          :height="320"
          :icon-filename="'player-icon.png'"
          :icon-filename-active="'player-icon-active.png'"
          :label="'1 Player Mode'"
          @clicked="selectPlayerMode(1)"/>
        <large-select-button
          v-if="selectedMission.hasTwoPlayerMode"
          class="left-button"
          :width="204"
          :height="320"
          :icon-filename="'two-player-icon.png'"
          :icon-filename-active="'two-player-icon-active.png'"
          :label="'2 Player Mode'"
          @clicked="selectPlayerMode(2)"/>
        <large-select-button
          :width="selectedMission.hasTwoPlayerMode ? 204 : 320"
          :height="320"
          :icon-filename="'autoplay-icon.png'"
          :icon-filename-active="'autoplay-icon-active.png'"
          :label="'Auto Play'"
          @clicked="selectPlayerMode('auto')"/>
      </div>
    </div>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from '@/components/MainHeader';
import ActionHeadline from '@/components/ActionHeadline';
import LargeSelectButton from '@/components/LargeSelectButton';
import selectedStoryMixin from '@/mixins/selected-story';
import selectedMissionMixin from '@/mixins/selected-mission';

export default {
  name: 'PlayerModeSelection',
  components: {
    MainHeader,
    ActionHeadline,
    LargeSelectButton,
  },
  mixins: [
    selectedStoryMixin,
    selectedMissionMixin,
  ],
  methods: {
    selectPlayerMode(mode) {
      this.$store.commit('selectPlayerMode', mode);
      this.jumpTo('PlayerNetworkSelection');
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.player-mode-selection
  .wrapper
    padding: 0 80px

    .player-mode-button-container
      display: flex
      flex-direction: row

      .left-button
        margin-right: 36px
</style>
