<template>
  <overlay-wrapper
    :header-title="'Select Sleeve'"
    @close-button-clicked="$emit('close')"
  >
    <table>
      <tr>
        <th class="padding" />
        <th class="id">
          SLEEVE ID
        </th>
        <th class="padding" />
      </tr>
      <tr
        v-for="(sleeveId, index) in sleeves"
        :key="index"
        class="data-row"
        @click="itemClicked(sleeveId)"
      >
        <td class="padding" />
        <td class="id">
          <div class="flex">
            <selected-player-icon
              v-if="isStoredInLocalStorage(sleeveId)"
              :label="isStoredInLocalStorage(sleeveId)"
            />
            <div class="text">
              {{ sleeveId }}
            </div>
          </div>
        </td>
        <td class="padding" />
      </tr>
    </table>
  </overlay-wrapper>
</template>

<script>
import OverlayWrapper from './OverlayWrapper';
import SelectedPlayerIcon from '@/components/SelectedPlayerIcon';
import {mapState} from 'vuex';

export default {
  name: 'SelectSleeveOverlay',
  components: {
    OverlayWrapper,
    SelectedPlayerIcon,
  },
  props: {
    playerIndex: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapState(['sleeves']),
  },
  methods: {
    itemClicked(sleeveId) {
      if (!this.isStoredInLocalStorage(sleeveId)) {
        // only if the selected sleeve id is not registed in localStorage
        if (this.playerIndex === 'player1') {
          localStorage.setItem('playerOneSleeveId', sleeveId);
          console.log('set the id to localStorage.playerOneSleeveId', sleeveId);
        } else if (this.playerIndex === 'player2') {
          localStorage.setItem('playerTwoSleeveId', sleeveId);
          console.log('set the id to localStorage.playerTwoSleeveId', sleeveId);
        }
      } else {
        console.error('The selected sleeve is already registered!');
        return;
      }

      // close the overlay
      this.$emit('close');
    },
    isStoredInLocalStorage(sleeveId) {
      if (sleeveId === localStorage.getItem('playerOneSleeveId')) {
        return 'P1';
      } else if (sleeveId === localStorage.getItem('playerTwoSleeveId')) {
        return 'P2';
      } else {
        return null;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
table
  width: 100%
  font-size: 20px
  line-height: 36px

  tr
    height: 91px

    &.data-row td:not(.padding)
      border-top: solid 0.5px #4F88FF
      border-bottom: solid 0.5px #4F88FF

    th, td
      vertical-align: middle
      padding: 0 20px

    th.padding, td.padding
      width: 100px

    th.padding
      border-bottom: solid 0.5px #4F88FF

    th
      color: #4F88FF
      font-family: 'NokiaPureText-Regular'
      font-size: 12px
      letter-spacing: 1.25px

    th.id
      text-align: left

    td.id
      .flex
        display: flex
        flex-direction: row
        align-items: center

        .text
          text-align: left
          font-size: 24px
</style>
