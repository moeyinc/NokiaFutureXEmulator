<!-- =================================================
 Template
================================================== -->
<template>
  <div class="player-network-selection">

    <main-header
      :title="'Future Factory 4.0'"
      :subtitle="'MISSION 1'"
      :has-nav-bar="true"
      :category-name="'BUSINESS'"
      :back-button-label="'End Story'"
      @back-button-clicked="jumpTo('Stories', {transition: 'fade'})"/>

    <div class="wrapper">
      <action-headline>
        <span style="opacity: 0.5">Player Mode ></span> Setting
      </action-headline>
      <action-table
        :items="actionTableItems"
        @clicked="(itemType) => overlay = itemType"/>
    </div>

    <floating-action-button-container
      :action-button-label="'Start Mission'"
      :is-action-button-enabled="readyToStartMission"/>

    <overlay-wrapper
      :header-title="'Select Player'">
    </overlay-wrapper>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from '@/components/MainHeader';
import ActionHeadline from '@/components/ActionHeadline';
import ActionTable from '@/components/ActionTable';
import FloatingActionButtonContainer from
  '@/components/FloatingActionButtonContainer';
import OverlayWrapper from './overlays/OverlayWrapper';

export default {
  name: 'PlayerNetworkSelection',
  components: {
    MainHeader,
    ActionHeadline,
    ActionTable,
    FloatingActionButtonContainer,
    OverlayWrapper,
  },
  data() {
    return {
      actionTableItems: [
        {
          type: 'player',
          name: 'Player 1',
          value: '',
          iconFilename: 'player-icon.png',
          iconFilenameActive: 'player-icon-active.png',
        },
        {
          type: 'network',
          name: 'Network',
          value: 'Optimized',
          iconFilename: 'network-icon.png',
          iconFilenameActive: 'network-icon-active.png',
        },
      ],
      overlay: null,
      readyToStartMission: false,
    };
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.player-network-selection
  .wrapper
    padding: 0 80px
</style>
