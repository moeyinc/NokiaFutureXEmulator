<template>
  <div class="sleeve-management page">
    <MainHeader
      :title="'Sleeve Management'"
      :has-nav-bar="false"
    />

    <SummaryBlock
      :summary-text="'Manage which sleeve to use for games in the stories.'"
    />

    <div class="wrapper">
      <ActionTable
        :items="actionTableItems"
        @clicked="(itemType) => overlay = itemType"
      />
    </div>

    <SelectSleeveOverlay
      v-if="overlay === 'player1' || overlay === 'player2'"
      :player-index="overlay"
      @close="overlay = null"
    />
  </div>
</template>

<script>
import MainHeader from '@comps/MainHeader';
import SummaryBlock from '@comps/SummaryBlock';
import ActionTable from '@comps/ActionTable';
import SelectSleeveOverlay from '@comps/overlays/SelectSleeveOverlay';

export default {
  name: 'SleeveManagement',
  layout: 'with-side-menu',
  transition: 'fade',
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
      const items = [];
      const player1 = {
        type: 'player1',
        name: 'Player 1',
        data: {name: localStorage.getItem('playerOneSleeveId')},
        iconFilename: 'player-icon.png',
        iconFilenameActive: 'player-icon-active.png',
      };
      const player2 = {
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

<style lang="stylus" scoped>
.sleeve-management
  .wrapper
    margin-top: 80px
    padding: 0 80px
</style>
