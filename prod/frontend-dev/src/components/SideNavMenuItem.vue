<!-- =================================================
 Template
================================================== -->
<template>
  <div class="side-nav-menu-item">
    <div class="icon-wrapper">
      <img :src="require('@/assets/images/' + iconFilename)"/>
    </div>
    <div class="label-wrapper">
      {{label}}
    </div>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
export default {
  name: 'SideNavMenuItem',
  props: {
    label: String,
    iconFilename: String,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.side-nav-menu-item
  height: 80px
  background-color: pink
  display: flex
  flex-direction: row

  &.active
    background-color: orange

  .icon-wrapper
    min-width: 70px
    text-align: right

    img
      height: 30px

  .label-wrapper
    width: 100%
    padding: 0 17px
    text-align: left
    font-size: 20px
</style>
