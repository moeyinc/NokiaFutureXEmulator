<!-- =================================================
 Template
================================================== -->
<template>
  <overlay-wrapper
    :header-title="'Select Network'"
    @close-button-clicked="$emit('close')">

    <div class="network-option-button-container">
      <network-option-button
        v-for="(networkOption, index) in networkOptions"
        :key="index"
        :name="networkOption.name"
        :category="networkOption.category"
        :security="networkOption.parameters.security.raw"
        :latency="networkOption.parameters.latency.raw"
        :bandwidth="networkOption.parameters.bandwidth.raw"
        :reliability="networkOption.parameters.reliability.raw"
        :is-selected="networkOption.name === selectedNetworkName"
        @clicked="itemClicked(networkOption)"/>
    </div>

  </overlay-wrapper>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import OverlayWrapper from './OverlayWrapper';
import NetworkOptionButton from '@/components/NetworkOptionButton';

export default {
  name: 'SelectNetworkOverlay',
  components: {
    OverlayWrapper,
    NetworkOptionButton,
  },
  computed: {
    networkOptions() {
      let selectedPlayerOne = this.$store.state.selectedPlayerOne;
      let selectedPlayerTwo = this.$store.state.selectedPlayerTwo;

      let optimized = {
        name: 'Optimized Network',
        category: 'BEST',
        parameters: {
          security: {
            raw: 'High',
            value: 5,
          },
          latency: {
            raw: '0ms',
            value: 5,
          },
          bandwidth: {
            raw: '1000mb/s',
            value: 5,
          },
          reliability: {
            raw: '99.9%',
            value: 5,
          },
        },
      };

      let player1 = {
        name: 'Player 1\'s Parameters',
        category: 'GOOD',
        parameters: selectedPlayerOne,
      };

      let player2 = {
        name: 'Player 2\'s Parameters',
        category: 'GOOD',
        parameters: selectedPlayerTwo,
      };

      let notOptimized = {
        name: 'Not Optimized Network',
        category: 'BAD',
        parameters: {
          security: {
            raw: 'Low',
            value: 0,
          },
          latency: {
            raw: '100ms',
            value: 0,
          },
          bandwidth: {
            raw: '1mb/s',
            value: 0,
          },
          reliability: {
            raw: '90.0%',
            value: 0,
          },
        },
      };

      let items = [];
      items.push(optimized);
      if (selectedPlayerOne) items.push(player1);
      if (selectedPlayerTwo) items.push(player2);
      items.push(notOptimized);

      return items;
    },
    selectedNetworkName() {
      let selectedNetwork = this.$store.state.selectedNetwork;
      if (!selectedNetwork) return '';
      return selectedNetwork.name;
    },
  },
  methods: {
    itemClicked(networkOption) {
      this.$store.commit('selectNetwork', networkOption);
      this.$emit('close');
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.network-option-button-container
  display: flex
  flex-direction: row
  justify-content: center

  >*
    margin-right: 30px

    &:last-child
      margin-right: 0
</style>
