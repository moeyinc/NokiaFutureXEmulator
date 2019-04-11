<template>
  <div class="layout-wrapper">
    <div class="with-side-menu">
      <SideNavMenu />
      <main>
        <nuxt data-app />
        <AlertContainer />
      </main>
    </div>
  </div>
</template>

<script>
import SideNavMenu from '@comps/SideNavMenu';
import AlertContainer from '@comps/AlertContainer';
import requireLogInMixin from '@/mixins/requireLogIn';
import notScrollablePageMixin from '@/mixins/notScrollablePage';

export default {
  name: 'WithSideMenu',
  components: {
    SideNavMenu,
    AlertContainer,
  },
  mixins: [
    requireLogInMixin,
    notScrollablePageMixin,
  ],
};
</script>

<style lang="stylus" scoped>
.layout-wrapper
  width: 1112px
  height: 814px
  position: fixed
  .with-side-menu
    user-select: none
    overflow: hidden
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-image: url('~@images/loggedin-bg.png')
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    main
      position: absolute
      top: 0
      right: 0
      bottom: 0
      left: 280px
      width: 832px
      height: 100%
      overflow: hidden
</style>
