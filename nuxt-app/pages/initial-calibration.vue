<template>
  <div class="wrapper">
    <h1>Sleeve Calibration</h1>
    <img
      class="howtocalibrate"
      :src="require('@images/how-to-calibrate.png')"
    >
    <sub-action-button
      class="sub-action-button"
      :icon-filename="'calibrate-icon.png'"
      :label="'Calibrate Sleeve'"
    />
    <p class="sleeve-id">
      Sleeve ID: {{ selectedSleeveId }}
    </p>
    <action-button
      class="action-button"
      :label="'Done'"
      :enabled="true"
      :small="true"
      @clicked="calibrate()"
    />
  </div>
</template>

<script>
import SubActionButton from '@comps/SubActionButton';
import ActionButton from '@comps/ActionButton';
import {mapState} from 'vuex';

export default {
  name: 'InitialCalibration',
  layout: 'no-side-menu',
  components: {
    SubActionButton,
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
            // this.$emit('close');
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
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

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
    font-size: 16px
    margin-top: 20px

  .action-button
    position: absolute
    right: 0
    bottom: 60px
</style>
