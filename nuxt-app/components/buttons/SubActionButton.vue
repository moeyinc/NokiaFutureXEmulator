<template>
  <div
    :class="['sub-action-button', {underline, fixed}]"
    @click="$emit('click')"
  >
    <div class="inner">
      <BackIcon
        v-if="back"
        class="icon back-icon"
      />
      <h6>{{ label }}</h6>
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
    fixed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@styles/colors'

.sub-action-button
  display: inline-block
  font-size: 24px
  letter-spacing: 0.5px
  &.underline
    padding-bottom: 9px
    border-bottom: solid 0.5px $secondary-border-color
  &.fixed
    position: absolute
    bottom: 60px
    left: 80px
  .inner
    display: flex
    flex-direction: row
    align-items: center
    h6
      font-size: 20px
    .icon
      margin-right: 11px
    .back-icon
      width: 20px
      height: 18px
</style>
