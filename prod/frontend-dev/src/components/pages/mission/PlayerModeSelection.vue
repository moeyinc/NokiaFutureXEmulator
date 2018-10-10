<!-- =================================================
 Template
================================================== -->
<template>
  <div class="player-mode-selection">

    <main-header
      :title="'Future Factory 4.0'"
      :subtitle="'MISSION 1'"
      :has-nav-bar="true"
      :category-name="'BUSINESS'"
      :back-button-label="'End Story'"
      @back-button-clicked="jumpTo('Stories', {transition: 'fade'})"/>

    <div class="wrapper">
      <action-headline>Player Mode</action-headline>
      <div class="player-mode-button-container">
        <large-select-button
          class="left-button"
          :width="320"
          :height="320"
          :icon-filename="'player-icon.png'"
          :icon-filename-active="'player-icon-active.png'"
          :label="'1 Player Mode'"/>
        <large-select-button
          :width="320"
          :height="320"
          :icon-filename="'autoplay-icon.png'"
          :icon-filename-active="'autoplay-icon-active.png'"
          :label="'Auto Play'"/>
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

export default {
  name: 'PlayerModeSelection',
  components: {
    MainHeader,
    ActionHeadline,
    LargeSelectButton,
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
