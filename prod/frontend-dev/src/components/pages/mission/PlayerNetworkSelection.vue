<!-- =================================================
 Template
================================================== -->
<template>
  <div class="player-network-selection">

    <main-header
      :title="selectedStory.title"
      :subtitle="selectedMission.pageSubtitle"
      :has-nav-bar="true"
      :category-name="selectedStory.category"
      :back-button-label="'End Story'"
      @back-button-clicked="jumpTo('Stories', {transition: 'fade'})"/>

    <div class="wrapper">
      <action-headline>
        <span
          style="opacity: 0.5"
          @click="jumpTo('PlayerModeSelection', {transition: 'fade'})">
          Player Mode >
        </span>
        Setting
      </action-headline>
      <action-table
        :items="actionTableItems"
        @clicked="(itemType) => overlay = itemType"/>
    </div>

    <floating-action-button-container
      :action-button-label="'Start Mission'"
      :is-action-button-enabled="readyToStartMission"/>

    <select-player-overlay
      v-if="overlay === 'player1' || overlay === 'player2'"
      :player-index="overlay"
      @close="overlay = false">
    </select-player-overlay>

    <select-network-overlay
      v-if="overlay === 'network'"
      @close="overlay = false">
    </select-network-overlay>

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
import SelectPlayerOverlay from './overlays/SelectPlayerOverlay';
import SelectNetworkOverlay from './overlays/SelectNetworkOverlay';
import selectedStoryMixin from '@/mixins/selected-story';
import selectedMissionMixin from '@/mixins/selected-mission';

export default {
  name: 'PlayerNetworkSelection',
  components: {
    MainHeader,
    ActionHeadline,
    ActionTable,
    FloatingActionButtonContainer,
    SelectPlayerOverlay,
    SelectNetworkOverlay,
  },
  data() {
    return {
      overlay: null,
      readyToStartMission: false,
    };
  },
  mixins: [
    selectedStoryMixin,
    selectedMissionMixin,
  ],
  computed: {
    actionTableItems() {
      let selectedPlayerOne = this.$store.state.selectedPlayerOne;
      let selectedPlayerTwo = this.$store.state.selectedPlayerTwo;
      let selectedNetwork = this.$store.state.selectedNetwork;

      let items = [];
      let player1 = {
        type: 'player1',
        name: 'Player 1',
        data: selectedPlayerOne,
        iconFilename: 'player-icon.png',
        iconFilenameActive: 'player-icon-active.png',
      };
      let player2 = {
        type: 'player2',
        name: 'Player 2',
        data: selectedPlayerTwo,
        iconFilename: 'player-icon.png',
        iconFilenameActive: 'player-icon-active.png',
      };
      let network = {
        type: 'network',
        name: 'Network',
        data: selectedNetwork,
        iconFilename: 'network-icon.png',
        iconFilenameActive: 'network-icon-active.png',
      };
      items.push(player1);
      if (this.$store.state.selectedPlayerMode === 2) items.push(player2);
      items.push(network);

      return items;
    },
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
