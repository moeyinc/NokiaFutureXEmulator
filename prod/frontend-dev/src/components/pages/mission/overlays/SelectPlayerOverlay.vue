<!-- =================================================
 Template
================================================== -->
<template>
  <overlay-wrapper
    :header-title="'Select Player'"
    @close-button-clicked="$emit('close')">
    <table>
      <tr>
        <th class="padding"></th>
        <th class="name">
          NAME
        </th>
        <th class="security">
          SECURITY
        </th>
        <th class="latency">
          LATENCY
        </th>
        <th class="bandwidth">
          BANDWIDTH
        </th>
        <th class="reliability">
          RELIABILITY
        </th>
        <th class="padding"></th>
      </tr>
      <tr
        v-for="(player, index) in players"
        :key="index"
        class="data-row"
        @click="itemClicked(player)">
        <td class="padding"></td>
        <td class="name">
          {{player.name}}
        </td>
        <td class="security">
          {{player.security.raw}}
        </td>
        <td class="latency">
          {{player.latency.raw}}
        </td>
        <td class="bandwidth">
          {{player.bandwidth.raw}}
        </td>
        <td class="reliability">
          {{player.reliability.raw}}
        </td>
        <td class="padding"></td>
      </tr>
    </table>

  </overlay-wrapper>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import OverlayWrapper from './OverlayWrapper';

export default {
  name: 'SelectPlayerOverlay',
  components: {
    OverlayWrapper,
  },
  props: {
    playerIndex: String,
  },
  data() {
    return {
      players: [
        {
          id: 0,
          name: 'Anonymous',
          security: {
            raw: 'Normal',
            value: 3,
          },
          latency: {
            raw: '50ms',
            value: 3,
          },
          bandwidth: {
            raw: '1000mb/s',
            value: 3,
          },
          reliability: {
            raw: '95%',
            value: 3,
          },
        },
      ],
    };
  },
  methods: {
    itemClicked(player) {
      this.$store.commit('selectPlayer', {
        playerIndex: this.playerIndex,
        player: player,
      });
      this.$emit('close');
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
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

    th.name
      text-align: left

    td.name
      text-align: left
      font-size: 24px
      width: 40%

    td.security, td.latency, td.bandwidth, td.reliability
      text-align: center
</style>
