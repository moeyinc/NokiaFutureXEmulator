<template>
  <div class="sleeve-list">
    <div class="sleeve-list-header">
      <div class="sleeve-id-label">
        SLEEVE ID
      </div>
    </div>
    <SleeveListItem
      v-for="(sleeveId, index) in sleeves"
      :key="index"
      :sleeve-id="sleeveId"
      :highlighted="sleeveId === highlightedSleeveId"
      :selected="sleeveId === selectedSleeveId"
      @row-clicked="onRowClicked(sleeveId)"
      @calibrate="openCalibrationScreen"
    />
  </div>
</template>

<script>
import SleeveListItem from '@comps/SleeveListItem';
import {mapState, mapMutations} from 'vuex';

export default {
  components: {
    SleeveListItem,
  },
  data() {
    return {
      highlightedSleeveId: '',
    };
  },
  computed: {
    ...mapState(['sleeves', 'selectedSleeveId']),
  },
  methods: {
    ...mapMutations(['showOverlay']),
    onRowClicked(sleeveId) {
      this.highlightedSleeveId = sleeveId;
      this.$emit('highlight', sleeveId);
    },
    openCalibrationScreen() {
      const newSleeveId = this.highlightedSleeveId;
      this.$store.dispatch('postSelectedSleeveId', newSleeveId)
          .then(this.$store.dispatch('openCalibrationScreen', newSleeveId))
          .then(() => {
            this.showOverlay('calibration');
            this.highlightedSleeveId = '';
          })
          .catch(console.error);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@styles/colors'

.sleeve-list
  margin-top: 80px
  padding: 0 80px 80px
  .sleeve-list-header
    height: 62px
    width: 100%
    border-bottom: solid 1px $secondary-border-color
    .sleeve-id-label
      width: 90px
      height: 100%
      display: flex
      justify-content: center
      align-items: center
      color: $secondary-color
      font-size: 12px
      letter-spacing: 1.25px
</style>
