<template>
  <overlay-wrapper
    :header-title="'Sleeve Calibration'"
    :close-button-disabled="true"
  >
    <div class="wrapper">
      <img
        class="howtocalibrate"
        :src="require('@/assets/images/how-to-calibrate.png')"
      >
      <sub-action-button
        class="sub-action-button"
        :icon-filename="'calibrate-icon.png'"
        :label="'Calibrate Sleeve'"
      />
      <action-button
        class="action-button"
        :label="'Done'"
        :enabled="true"
        :small="true"
        @clicked="calibrate()"
      />
    </div>
  </overlay-wrapper>
</template>

<script>
import OverlayWrapper from './OverlayWrapper';
import SubActionButton from '@/components/SubActionButton';
import ActionButton from '@/components/ActionButton';

export default {
  name: 'Calibration',
  components: {
    OverlayWrapper,
    SubActionButton,
    ActionButton,
  },
  methods: {
    calibrate() {
      this.$store.dispatch('calibrate')
          .then(() => {
            this.$emit('close');
          })
          .catch(() => {
            console.error('There was an error sending a message');
          });
    },
  },
};
</script>

<style lang="stylus" scoped>
.wrapper
  display: flex
  flex-direction: column
  align-items: center

  img.howtocalibrate
    width: 550px
    height: 523.31px
    margin-top: -80px
    margin-left: -15px
    margin-bottom: -40px

  .action-button
    margin-top: 70px
</style>
