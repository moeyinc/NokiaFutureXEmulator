<template>
  <transition :name="'fade'">
    <div :class="['overlay-wrapper', {scrollable}]">
      <slot />
      <CloseIcon
        v-if="!closeButtonDisabled"
        class="close-icon"
        @click="$emit('close-button-clicked')"
      />
    </div>
  </transition>
</template>

<script>
import CloseIcon from '@images/close-icon.svg';

export default {
  components: {
    CloseIcon,
  },
  props: {
    scrollable: {
      type: Boolean,
      default: false,
    },
    closeButtonDisabled: {
      type: Boolean,
      default: false,
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
  z-index: 9999
  width: 100%
  height: 100%
  background-color: rgba(1, 12, 66, .85)
  -webkit-transform: translate3d(0,0,0);
  &.scrollable
    overflow: scroll
    -webkit-overflow-scrolling: touch
    overflow-scrolling: touch
  .close-icon
    position: absolute
    top: 60px
    right: 60px
    width: 43px
    height: 43px
    fill: white
</style>
