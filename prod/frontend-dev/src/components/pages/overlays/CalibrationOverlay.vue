<!-- =================================================
 Template
================================================== -->
<template>
  <overlay-wrapper
    :header-title="'Sleeve Calibration'"
    :close-button-disabled="true">

    <div class="wrapper">
      <img
        class="howtocalibrate"
        :src="require('@/assets/images/how-to-calibrate.png')"/>
      <sub-action-button
        class="sub-action-button"
        :iconFilename="'calibrate-icon.png'"
        :label="'Calibrate Sleeve'"/>
      <action-button
        class="action-button"
        :label="'Done'"
        :enabled="true"
        :small="true"
        @clicked="calibrate()"/>
    </div>
  </overlay-wrapper>
</template>

<!-- =================================================
 Script
================================================== -->
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

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.wrapper
  display: flex
  flex-direction: column
  align-items: center

  img.howtocalibrate
    width: 624px
    height: 392px
    margin-left: 200px
    margin-bottom: 40px

  .action-button
    margin-top: 40px
</style>
