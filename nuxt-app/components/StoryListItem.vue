<template>
  <div
    class="story-list-item"
    @touchend.prevent="$emit('select')"
    @click="$emit('select')"
  >
    <div class="title-box">
      <div class="category-name">
        <h6>{{ categoryName }}</h6>
        <hr class="underline">
      </div>
      <h4 class="story-title">
        {{ title }}
      </h4>
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
  },
};
</script>

<style lang="stylus" scoped>
@import '~@styles/colors'

.story-list-item
  width: 752px
  height: 280px
  margin-left: 80px
  position: relative
  overflow: hidden

  .title-box
    width: 250px
    height: 200px
    background-color: $primary-color
    position: absolute
    top: 0
    left: 0
    z-index: 100
    padding: 30px
    .category-name
      h6
        font-size: 12px
        padding-left: 3px
        margin-bottom: 7px
      hr.underline
        width: 64px
        border: solid 0.5px white
        margin-block-start: 0
        margin-block-end: 0
        margin-inline-start: 0
        margin-inline-end: 0
    .story-title
      font-size: 36px
      line-height: 40px
      letter-spacing: 0.75px
      margin-top: 33px

  img.thumbnail
    height: 100%
    float: right
</style>
