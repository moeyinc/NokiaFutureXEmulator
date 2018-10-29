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
      @back-button-clicked="overlay = 'confirmation'"/>

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
          :label="'2 Player Mode'"/>
          <!-- @clicked="selectPlayerMode(2)" -->
        <large-select-button
          :width="selectedMission.hasTwoPlayerMode ? 204 : 320"
          :height="320"
          :icon-filename="'autoplay-icon.png'"
          :icon-filename-active="'autoplay-icon-active.png'"
          :label="'Auto Play'"/>
          <!-- @clicked="selectPlayerMode('auto')" -->
      </div>
    </div>

    <confirmation-modal-overlay
      v-if="overlay === 'confirmation'"
      :message="'Are you sure to end story?'"
      @close="overlay = null"
      @execute="endStory()"/>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from '@/components/MainHeader';
import ActionHeadline from '@/components/ActionHeadline';
import LargeSelectButton from '@/components/LargeSelectButton';
import ConfirmationModalOverlay from
  '@/components/pages/overlays/ConfirmationModalOverlay';
import selectedStoryMixin from '@/mixins/selected-story';
import selectedMissionMixin from '@/mixins/selected-mission';
import storyPageMixin from '@/mixins/story-page';

export default {
  name: 'PlayerModeSelection',
  components: {
    MainHeader,
    ActionHeadline,
    LargeSelectButton,
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
  methods: {
    selectPlayerMode(mode) {
      this.$store.commit('selectPlayerMode', mode);
      this.jumpTo('PlayerNetworkSelection', {
        story_id: this.storyId,
        mission_id: this.missionId,
        transition: 'slide-left',
      });
    },
    endStory() {
      this.$store.dispatch('endStory')
          .then(() => {
            this.jumpTo('Stories', {transition: 'fade'});
          })
          .catch(() => {
            console.error('There was error on sending message');
          });
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
