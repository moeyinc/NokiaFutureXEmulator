<template>
  <div class="with-side-menu">
    <SideNavMenu />
    <main>
      <nuxt data-app />
    </main>
  </div>
</template>

<script>
import SideNavMenu from '@comps/SideNavMenu';
import requireLogInMixin from '@/mixins/requireLogIn.js';

export default {
  name: 'WithSideMenu',
  components: {
    SideNavMenu,
  },
  mixins: [
    requireLogInMixin,
  ],
};
</script>

<style lang="stylus" scoped>
.with-side-menu
  user-select: none
  overflow: hidden
  position: fixed
  top: 0
  left: 0
  height: 100%
  background-image: url('~@images/loggedin-bg.png')
  background-size: cover
  background-position: center
  background-repeat: no-repeat

  main
    margin-left: 280px
    width: 832px
    height: 100%
    overflow-y: hidden
    overflow-x: hidden
    position: relative
</style>
