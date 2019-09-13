<template>
  <div
    :class="[
      'sub-action-button',
      {
        underline, fixed, right, large,
        'yield-to-action-button': yieldToActionButton
      },
    ]"
    :style="additionalStyle"
    @click="$emit('click')"
  >
    <div class="inner">
      <BackIcon
        v-if="back"
        class="icon-left back-icon"
      />
      <h6>{{ label }}</h6>
      <BackIcon
        v-if="forward"
        class="icon-right back-icon forward"
      />
    </div>
  </div>
</template>

<script>
import BackIcon from '@images/arrow-icon.svg';

export default {
  components: {
    BackIcon,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    underline: {
      type: Boolean,
      default: true,
    },
    back: {
      type: Boolean,
      default: false,
    },
    forward: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    yieldToActionButton: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    additionalStyle: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@styles/colors'
@import '~@styles/vue-transitions'

.sub-action-button
  display: inline-block
  font-size: 20px
  letter-spacing: 0.5px
  transition: all duration ease
  &.underline
    padding-bottom: 9px
    border-bottom: solid 0.5px $secondary-border-color
  &.fixed
    position: absolute
    bottom: 60px
    left: 80px
    &.right
      left: auto
      right: 80px
    &.yield-to-action-button
      bottom: 200px
  &.large
    font-size: 30px
    letter-spacing: 0.75px
  .inner
    display: flex
    flex-direction: row
    align-items: center
    .icon-left
      margin-right: 11px
    .icon-right
      margin-left: 11px
    .back-icon
      width: 20px
      height: 18px
      fill: white
      &.forward
        transform-origin: center
        transform: rotate(180deg)
</style>
