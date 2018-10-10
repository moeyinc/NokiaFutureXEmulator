<!-- =================================================
 Template
================================================== -->
<template>
  <div class="main-header">
    <div
      v-if="hasNavBar"
      class="nav-bar">
      <div
        v-if="categoryName"
        class="category-name">
        <h6>{{categoryName}}</h6>
        <hr class="underline"/>
      </div>
      <div
        v-if="backButtonLabel"
        class="back-button-wrapper"
        @click="$emit('back-button-clicked')">
        <div class="inner">
          <img :src="require('@/assets/images/arrow-right.png')"/>
          <h6>{{backButtonLabel}}</h6>
        </div>
      </div>
    </div>
    <div class="title">
      <h1>{{title}}</h1>
      <h2 v-if="subtitle">{{subtitle}}</h2>
    </div>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
export default {
  name: 'MainHeader',
  props: {
    title: String,
    subtitle: String,
    hasNavBar: Boolean,
    categoryName: String,
    backButtonLabel: String,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.main-header
  padding: 59px 80px 40px 80px

  .nav-bar
    height: 29px
    margin-bottom: 12px
    display: flex
    flex-direction: row
    justify-content: space-between

    .category-name
      align-self: flex-start

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

    .back-button-wrapper
      display: inline-block
      border-bottom: solid 0.5px #5D8CEE

      .inner
        display: flex
        flex-direction: row
        align-items: center

        h6
          font-size: 20px

        img
          width: 20px
          height: 18px
          margin-right: 11px
          transform-origin: center
          transform: rotate(180deg)

  .title
    padding-top: 17px
    white-space: nowrap

    h1
      font-size: 60px

    h2
      font-size: 60px
      color: #4889FF

</style>
