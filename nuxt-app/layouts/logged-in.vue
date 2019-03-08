<template>
  <div class="logged-in">
    <side-nav-menu />
    <main id="app-main">
      <router-view />
    </main>
  </div>
</template>

<script>
import SideNavMenu from '@/components/SideNavMenu';

export default {
  name: 'LoggedIn',
  components: {
    SideNavMenu,
  },
  mounted() {
    if (!this.$store.state.isLoggedIn) {
      console.log('not logged in!', this.$store.state.isLoggedIn);
      this.jumpTo('Login', {transition: 'fade'});
    }
  },
};
</script>

<style lang="stylus" scoped>
.logged-in
  position: fixed
  top: 0
  left: 0
  height: 100%
  background-image: url('~@/assets/images/loggedin-bg.png')
  background-size: cover
  background-position: center
  background-repeat: no-repeat

  #app-main
    margin-left: 280px
    height: 100%
    overflow-y: hidden // scroll
    overflow-x: hidden
    position: relative
</style>
