<template>
  <div
    :class="['story-list-item', {disabled}]"
    @click="!disabled && $emit('select')"
  >
    <div class="title-box">
      <div class="category-name">
        <h6>{{ categoryName }}</h6>
        <hr class="underline">
      </div>
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
  width: 316px
  height: 309px
  position: relative
  .title-box
    height: 200px
    background-color: $primary-color
    padding: 30px
    .category-name
      h6
        font-size: 12px
        padding-left: 3px
        margin-bottom: 7px
      hr.underline
        width: 64px
        height: 1px
        border: none
        background-color: white
        margin-block-start: 0
        margin-block-end: 0
        margin-inline-start: 0
        margin-inline-end: 0
    h4.story-title
      font-size: 36px
      line-height: 40px
      letter-spacing: 0.75px
      margin-top: 33px
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
      .category-name
        hr.underline
          background-color: $primary-color
</style>
