<template>
  <transition :name="'fade'">
    <div
      class="overlay-wrapper"
      :style="{backgroundColor: backgroundColorWithOpacity}"
    >
      <div class="overlay-header">
        <div class="my-title">
          <h1>{{ headerTitle }}</h1>
        </div>
        <IconButton
          v-if="!closeButtonDisabled"
          :filename="'close-icon.png'"
          :filename-active="'close-icon-active.png'"
          @clicked="$emit('close-button-clicked')"
        />
      </div>
      <slot />
    </div>
  </transition>
</template>

<script>
import IconButton from '@comps/IconButton';
const color = require('color');

export default {
  name: 'OverlayWrapper',
  components: {
    IconButton,
  },
  props: {
    headerTitle: {
      type: String,
      default: '',
    },
    closeButtonDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    backgroundColorWithOpacity() {
      return color('#010C42').alpha(0.85).rgb().string();
    },
  },
};
</script>

<style lang="stylus" scoped>
.overlay-wrapper
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 1000
  height: 100%
  .overlay-header
    padding: 59px 80px 40px 80px
    position: relative
    .my-title
      padding-top: 17px
      white-space: nowrap
      h1
        font-size: 40px
        line-height: 52px
    img
      position: absolute
      top: 60px
      right: 60px
      width: 43px
      height: 43px
</style>
