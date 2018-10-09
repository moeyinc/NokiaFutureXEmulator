<!-- =================================================
 Template
================================================== -->
<template>
  <div class="logged-in">
    <side-nav-menu/>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import SideNavMenu from './SideNavMenu';

export default {
  name: 'LoggedIn',
  components: {
    SideNavMenu,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.logged-in
  height: 100%
</style>
