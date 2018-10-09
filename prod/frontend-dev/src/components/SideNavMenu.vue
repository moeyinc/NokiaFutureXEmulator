<!-- =================================================
 Template
================================================== -->
<template>
  <div class="side-nav-menu">
    <div class="brand-logo-block">
      <img :src="require('@/assets/images/belllabs-logo.png')" />
    </div>
    <div class="menu-block">
      <div class="fite-lab-box">
        FITE Lab
      </div>
      <side-nav-menu-item
        :label="'Stories'"
        :icon-filename="'story-icon.png'"/>
    </div>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import SideNavMenuItem from './SideNavMenuItem';

export default {
  name: 'SideNavMenu',
  components: {
    SideNavMenuItem,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.side-nav-menu
  background-color: purple
  display: flex
  flex-direction: column
  width: 280px
  height: 100%

  .brand-logo-block
    min-height: 160px
    background-color: #023EA8
    position: relative

    img
      width: 180px
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)

  .menu-block
    position: relative
    background-color: #0052FF
    height: 100%

    .fite-lab-box
      background-color: #041B67
      position: absolute
      width: 180px
      height: 45px
      top: -22.5px
      left: 0
      text-align: center
      line-height: 45px
</style>
