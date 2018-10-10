<!-- =================================================
 Template
================================================== -->
<template>
  <div class="logged-in">
    <side-nav-menu/>
    <main id="app-main">
      <router-view/>
    </main>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import SideNavMenu from './SideNavMenu';
import TransitionWrapper from './TransitionWrapper';

export default {
  name: 'LoggedIn',
  components: {
    SideNavMenu,
    TransitionWrapper,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.logged-in
  height: 100%
  background-image: url('~@/assets/images/loggedin-bg.png')
  background-size: cover
  background-position: center
  background-repeat: no-repeat

  #app-main
    padding-left: 280px
    height: 100%
    overflow-y: scroll
    overflow-x: hidden
</style>
