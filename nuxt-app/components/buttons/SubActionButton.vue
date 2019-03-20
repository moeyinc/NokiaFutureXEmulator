<template>
  <div
    :class="['sub-action-button', {hasUnderline: hasUnderline}]"
    @click="$emit('clicked')"
  >
    <div class="inner">
      <img
        v-if="iconFilename"
        :src="require('@/assets/images/' + iconFilename)"
      >
      <h6>{{ label }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubActionButton',
  props: {
    label: {
      type: String,
      default: '',
    },
    iconFilename: {
      type: String,
      default: '',
    },
    hasUnderline: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.sub-action-button
  display: inline-block
  font-size: 24px
  line-height: 52px
  letter-spacing: 0.5px

  &.hasUnderline
    border-bottom: solid 0.5px #5D8CEE

  .inner
    display: flex
    flex-direction: row
    align-items: center

    img
      width: 30px
      height: 30px
      margin-right: 11px
</style>
