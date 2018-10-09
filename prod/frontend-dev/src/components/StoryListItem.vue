<!-- =================================================
 Template
================================================== -->
<template>
  <div class="story-list-item">
    <div class="title-box">
      <div class="category-name">
        <h6>{{categoryName}}</h6>
        <hr class="underline"/>
      </div>
      <h4 class="title">{{title}}</h4>
    </div>
    <img
      :src="require('@/assets/images/' + thumbnailFilename)"
      class="thumbnail" />
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
export default {
  name: 'StoryListItem',
  props: {
    categoryName: String,
    title: String,
    thumbnailFilename: String,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.story-list-item
  width: 752px
  height: 280px
  margin-left: 80px
  position: relative
  overflow: hidden

  .title-box
    width: 250px
    height: 200px
    background-color: #0052FF
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

    h4.title
      font-size: 36px
      line-height: 40px
      letter-spacing: 0.75px
      margin-top: 33px

  img.thumbnail
    height: 100%
    float: right
</style>
