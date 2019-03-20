<template>
  <div class="initial-calibration page">
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
      @click="startIntro"
    />
  </div>
</template>

<script>
import ActionButton from '@comps/ActionButton';
import requireLogInMixin from '@/mixins/requireLogIn.js';
import {mapState} from 'vuex';

export default {
  name: 'InitialCalibration',
  layout: 'no-side-menu',
  transition: 'fade',
  components: {
    ActionButton,
  },
  mixins: [
    requireLogInMixin,
  ],
  computed: {
    ...mapState(['selectedSleeveId']),
  },
  created() {
    this.$store.dispatch('getSelectedSleeveId');
  },
  methods: {
    startIntro() {
      this.$store.dispatch('startIntro')
          .then(() => {
            this.$router.push('/intro');
          })
          .catch(console.error);
    },
  },
};
</script>

<style lang="stylus" scoped>
.initial-calibration
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
