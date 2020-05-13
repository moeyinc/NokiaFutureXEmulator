<template>
  <div class="network-visualization-controller">
    <h6 class="label">
      Network Visualization Toggle
    </h6>
    <div class="button-container">
      <WideButton
        v-if="hasWirelessButton"
        label="Wireless"
        :value="inStoryNetworkViz['wireless']"
        @click="onClick('wireless')"
      />
      <WideButton
        v-if="hasWiredButton"
        label="Wired"
        :value="inStoryNetworkViz['wired']"
        @click="onClick('wired')"
      />
    </div>
  </div>
</template>

<script>
import WideButton from './WideButton';
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
  components: {
    WideButton,
  },
  props: {
    hasWireless: {
      type: Boolean,
      default: true,
    },
    hasWirelessButton: {
      type: Boolean,
      default: true,
    },
    hasWiredButton: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapState(['inStoryNetworkViz']),
  },
  methods: {
    ...mapMutations(['updateInStoryNetworkViz']),
    ...mapActions(['updateUI']),
    onClick(key) {
      this.updateUI({key, value: !this.inStoryNetworkViz[key]})
          .then(() => {
            this.updateInStoryNetworkViz({
              key,
              value: !this.inStoryNetworkViz[key],
            });
          })
          .catch(console.error);
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.network-visualization-controller
  position: absolute
  left: 80px
  bottom: 60px
  h6.label
    color: $secondary-color
    font-size: 20px
    line-height: 30px
    margin-bottom: 13px
  .button-container
    display: flex
</style>
