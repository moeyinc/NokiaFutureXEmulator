<!-- =================================================
 Template
================================================== -->
<template>
  <div class="post-mission">

    <main-header
      :title="selectedStory.title"
      :subtitle="selectedMission.pageSubtitle"
      :has-nav-bar="true"
      :category-name="selectedStory.category"
      :back-button-label="'End Story'"
      @back-button-clicked="jumpTo('Stories', {transition: 'fade'})"/>

    <div class="wrapper">
      <action-headline>Continue Mission or Proceed Story?</action-headline>
      <div class="post-mission-button-container">
        <large-select-button
          v-if="selectedMission.replayable"
          class="left-button"
          :width="320"
          :height="320"
          :icon-filename="'replay-icon.png'"
          :icon-filename-active="'replay-icon-active.png'"
          :label="'Play Mission Again'"
          @clicked="replayMission()"/>
        <large-select-button
          :width="320"
          :height="320"
          :icon-filename="'proceed-icon.png'"
          :icon-filename-active="'proceed-icon-active.png'"
          :label="'Proceed to Next'"
          @clicked="proceedToNext()"/>
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
  name: 'MissionControls',
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
    abortMission() {
      console.log('abort mission');
    },
    replayMission() {
      console.log('replay mission');
    },
    proceedToNext() {
      console.log('proceed to next');
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.post-mission
  .wrapper
    padding: 0 80px

    .post-mission-button-container
      display: flex
      flex-direction: row

      .left-button
        margin-right: 36px
</style>
