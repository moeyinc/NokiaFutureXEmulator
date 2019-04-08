<template>
  <ToggleButtonContainer
    :buttons="buttons"
    :button-width="139"
    title="Network Setting"
    class="network-toggle-button"
    @select="onSelect"
  />
</template>

<script>
import ToggleButtonContainer from './ToggleButtonContainer';

export default {
  components: {
    ToggleButtonContainer,
  },
  props: {
    selectedNetwork: {
      type: String,
      default: '5g',
    },
  },
  data() {
    return {
      buttons: [
        {
          label: '5G',
          networkName: '5g',
          value: true,
        },
        {
          label: 'Wifi',
          networkName: 'wifi',
          value: false,
        },
        {
          label: '4G',
          networkName: '4g',
          value: false,
        },
      ],
    };
  },
  created() {
    if (this.selectedNetwork === 'wifi') {
      this.buttons[0].value = false;
      this.buttons[1].value = true;
      this.buttons[2].value = false;
    } else if (this.selectedNetwork === '4g') {
      this.buttons[0].value = false;
      this.buttons[1].value = false;
      this.buttons[2].value = true;
    }
  },
  methods: {
    onSelect({button, index}) {
      const targetButton = this.buttons[index];
      if (targetButton.value) return;
      for (const b of this.buttons) {
        b.value = false;
      }

      const networkName = targetButton.networkName;
      this.$store.dispatch('setNetwork', networkName)
          .then(() => {
            targetButton.value = true;
            this.$store.commit('updateInStorySelectedNetwork', networkName);
          })
          .catch(console.error);
    },
  },
};
</script>

<style scoped lang="stylus">
.network-toggle-button
  position: absolute
  left: 80px
  bottom: 60px
</style>
