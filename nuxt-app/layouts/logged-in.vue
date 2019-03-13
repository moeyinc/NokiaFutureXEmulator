<template>
  <div class="logged-in">
    <SideNavMenu />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import SideNavMenu from '@comps/SideNavMenu';
import {mapState} from 'vuex';

export default {
  name: 'LoggedIn',
  components: {
    SideNavMenu,
  },
  computed: {
    ...mapState(['isLoggedIn']),
  },
  mounted() {
    if (!this.isLoggedIn) {
      console.log('Not logged in!');
      this.jumpTo('index', {transition: 'fade'});
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
