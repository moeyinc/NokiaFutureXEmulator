<template>
  <ToggleButtonContainer
    :buttons="buttons"
    :button-width="174"
    title="AR Network Visualization"
    class="ar-toggle-button"
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
    on: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      buttons: [
        {
          label: 'ON',
          value: false,
        },
        {
          label: 'OFF',
          value: true,
        },
      ],
    };
  },
  created() {
    if (this.on) {
      this.buttons[0].value = true;
      this.buttons[1].value = false;
    }
  },
  methods: {
    onSelect({button, index}) {
      const targetButton = this.buttons[index];
      if (targetButton.value) return;
      for (const b of this.buttons) {
        b.value = false;
      }

      if (targetButton.label === 'ON') {
        this.$store.dispatch('enableAR')
            .then(() => {
              targetButton.value = true;
              this.$store.commit('updateInStoryAREnabled', true);
            })
            .catch(console.error);
      } else if (targetButton.label === 'OFF') {
        this.$store.dispatch('disableAR')
            .then(() => {
              targetButton.value = true;
              this.$store.commit('updateInStoryAREnabled', false);
            })
            .catch(console.error);
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.ar-toggle-button
  position: absolute
  left: 80px
  bottom: 60px
</style>
