<!-- =================================================
 Template
================================================== -->
<template>
  <div class="sleeve-management">
    <main-header
      :title="'Sleeve Management'"
      :has-nav-bar="false"/>

    <summary-block>
      Setting description comes here. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.
    </summary-block>

    <div class="wrapper">
      <action-table
        :items="actionTableItems"
        @clicked="(itemType) => overlay = itemType"/>
    </div>

    <select-sleeve-overlay
      v-if="overlay === 'player1' || overlay === 'player2'"
      :player-index="overlay"
      @close="overlay = null">
    </select-sleeve-overlay>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from '@/components/MainHeader';
import SummaryBlock from '@/components/SummaryBlock';
import ActionTable from '@/components/ActionTable';
import SelectSleeveOverlay from './mission/overlays/SelectSleeveOverlay';

export default {
  name: 'SleeveManagement',
  components: {
    MainHeader,
    SummaryBlock,
    ActionTable,
    SelectSleeveOverlay,
  },
  data() {
    return {
      overlay: null,
      actionTableItems: [],
    };
  },
  created() {
    this.setActionTableItems();
  },
  watch: {
    overlay(newVal) {
      if (!newVal) {
        this.setActionTableItems();
      }
    },
  },
  methods: {
    setActionTableItems() {
      let items = [];
      let player1 = {
        type: 'player1',
        name: 'Player 1',
        data: {name: localStorage.getItem('playerOneSleeveId')},
        iconFilename: 'player-icon.png',
        iconFilenameActive: 'player-icon-active.png',
      };
      let player2 = {
        type: 'player2',
        name: 'Player 2',
        data: {name: localStorage.getItem('playerTwoSleeveId')},
        iconFilename: 'player-icon.png',
        iconFilenameActive: 'player-icon-active.png',
      };

      items.push(player1);
      items.push(player2);

      this.actionTableItems = items;
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.sleeve-management
  .wrapper
    margin-top: 80px
    padding: 0 80px
</style>
