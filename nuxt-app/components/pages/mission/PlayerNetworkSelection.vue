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
      @back-button-clicked="overlay = 'confirmation'"
    />

    <div class="wrapper">
      <action-headline>
        <span
          style="opacity: 0.5"
          @click="jumpTo('PlayerModeSelection', {transition: 'slide-right'})"
        >
          Player Mode >
        </span>
        Setting
      </action-headline>
      <action-table
        :items="actionTableItems"
        @clicked="(itemType) => overlay = itemType"
      />
    </div>

    <floating-action-button-container>
      <action-button
        :label="'Start Mission'"
        :enabled="readyToStartMission"
        @clicked="startMission()"
      />
    </floating-action-button-container>

    <select-network-overlay
      v-if="overlay === 'network'"
      @close="overlay = null"
    />

    <confirmation-modal-overlay
      v-if="overlay === 'confirmation'"
      :message="'Are you sure to end story?'"
      @close="overlay = null"
      @execute="endStory()"
    />
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
import ActionButton from '@/components/ActionButton';
import SelectPlayerOverlay from '../overlays/SelectPlayerOverlay';
import SelectNetworkOverlay from '../overlays/SelectNetworkOverlay';
import ConfirmationModalOverlay from
  '@/components/pages/overlays/ConfirmationModalOverlay';
import selectedStoryMixin from '@/mixins/selected-story';
import selectedMissionMixin from '@/mixins/selected-mission';
import storyPageMixin from '@/mixins/story-page';

export default {
  name: 'PlayerNetworkSelection',
  components: {
    MainHeader,
    ActionHeadline,
    ActionTable,
    FloatingActionButtonContainer,
    ActionButton,
    SelectPlayerOverlay,
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
      actionTableItems: [],
    };
  },
  computed: {
    readyToStartMission() {
      const selectedPlayerMode = this.$store.state.selectedPlayerMode;
      // let selectedPlayerOne = this.$store.state.selectedPlayerOne;
      // let selectedPlayerTwo = this.$store.state.selectedPlayerTwo;
      const selectedPlayerOne = localStorage.getItem('playerOneSleeveId');
      const selectedPlayerTwo = localStorage.getItem('playerTwoSleeveId');
      const selectedNetwork = this.$store.state.selectedNetwork;
      if (!selectedPlayerMode || !selectedPlayerOne || !selectedNetwork) {
        return false;
      }
      if (selectedPlayerMode === 2 && !selectedPlayerTwo) {
        return false;
      }
      return true;
    },
  },
  watch: {
    overlay(newVal) {
      if (!newVal) {
        this.setActionTableItems();
      }
    },
  },
  created() {
    this.setActionTableItems();
  },
  methods: {
    setActionTableItems() {
      // let selectedPlayerOne = this.$store.state.selectedPlayerOne;
      // let selectedPlayerTwo = this.$store.state.selectedPlayerTwo;

      // get sleeve IDs from localStorage
      let selectedPlayerOne = {
        name: localStorage.getItem('playerOneSleeveId'),
        disabled: true,
      };
      const selectedPlayerTwo = {
        name: localStorage.getItem('playerTwoSleeveId'),
        disabled: true,
      };

      // if mode is autoplay, the player name should be CPU
      const selectedPlayerMode = this.$store.state.selectedPlayerMode;
      if (selectedPlayerMode === 'auto') {
        selectedPlayerOne = {
          name: 'CPU',
          disabled: true,
        };
      }

      // get selected network settings
      const selectedNetwork = this.$store.state.selectedNetwork;

      const items = [];
      const player1 = {
        type: 'player1',
        name: 'Player 1',
        data: selectedPlayerOne,
        iconFilename: 'player-icon.png',
        iconFilenameActive: 'player-icon-active.png',
      };
      const player2 = {
        type: 'player2',
        name: 'Player 2',
        data: selectedPlayerTwo,
        iconFilename: 'player-icon.png',
        iconFilenameActive: 'player-icon-active.png',
      };
      const network = {
        type: 'network',
        name: 'Network',
        data: selectedNetwork,
        iconFilename: 'network-icon.png',
        iconFilenameActive: 'network-icon-active.png',
      };
      items.push(player1);
      if (this.$store.state.selectedPlayerMode === 2) items.push(player2);
      items.push(network);

      this.actionTableItems = items;
    },
    startMission() {
      let calibration = '#calibration';
      if (this.$store.state.selectedPlayerMode === 'auto') calibration = '';

      this.$store.dispatch('startMission', this.missionId)
          .then(() => {
            this.jumpTo('MissionControls', {
              story_id: this.storyId,
              mission_id: this.missionId,
              transition: 'fade',
            }, calibration);
          })
          .catch((err) => {
            alert('There was error on publishing MQTT message', err);
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
.player-network-selection
  .wrapper
    padding: 0 80px
</style>
