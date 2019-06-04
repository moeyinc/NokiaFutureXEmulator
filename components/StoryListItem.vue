<template>
  <div
    :class="['story-list-item', {disabled}]"
    @click="!disabled && $emit('select')"
  >
    <div class="title-box">
      <!-- eslint-disable -->
      <h4 class="story-title">{{ title }}</h4>
      <!-- eslint-enable -->
    </div>
    <img
      class="thumbnail"
      :src="require('@images/' + thumbnailFilename)"
    >
  </div>
</template>

<script>
export default {
  name: 'StoryListItem',
  props: {
    categoryName: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    thumbnailFilename: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@styles/colors'

.story-list-item
  width: 280px
  height: 249px
  position: relative
  .title-box
    height: 140px
    background-color: $primary-color
    padding: 30px
    h4.story-title
      font-size: 36px
      line-height: 40px
      letter-spacing: 0.75px
      white-space: pre-line
  img.thumbnail
    position: absolute
    width: 100%
    left: 0
    bottom: 0
    right: 0
    z-index: 100
  &.disabled
    .title-box
      background-color: $brand-bg-color-dark
      color: $primary-color
</style>
