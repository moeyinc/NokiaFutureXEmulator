<template>
  <OverlayWrapper close-button-disabled>
    <div class="wrapper">
      <h1>Sleeve Calibration</h1>
      <img
        class="howtocalibrate"
        :src="require('@images/how-to-calibrate.png')"
      >
      <p class="sleeve-id">
        Sleeve ID: {{ selectedSleeveId }}
      </p>
      <ActionButton
        fixed
        label="Calibrate"
        @click="calibrate"
      />
    </div>
  </OverlayWrapper>
</template>

<script>
import OverlayWrapper from './OverlayWrapper';
import ActionButton from '@comps/buttons/ActionButton';
import {mapState} from 'vuex';

export default {
  name: 'Calibration',
  components: {
    OverlayWrapper,
    ActionButton,
  },
  computed: {
    ...mapState(['selectedSleeveId']),
  },
  created() {
    this.$store.dispatch('getSelectedSleeveId');
  },
  methods: {
    calibrate() {
      this.$store.dispatch('calibrate')
          .then(() => {
            this.$emit('close');
          })
          .catch(console.error);
    },
  },
};
</script>

<style lang="stylus" scoped>
.wrapper
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  height: 100%

  h1
    font-size: 40px
    line-height: 52px
    white-space: nowrap

  img.howtocalibrate
    width: 550px
    height: 523.31px
    margin-top: -15px
    margin-left: -15px
    margin-bottom: -15px

  p.sleeve-id
    height: 30px
    width: 180px
    font-size: 16px
    margin-top: 10px
    background-color: rgba(255, 255, 255, .2)
    display: flex
    justify-content: center
    align-items: center
    border-radius: 15px
    margin-bottom: 30px
</style>
