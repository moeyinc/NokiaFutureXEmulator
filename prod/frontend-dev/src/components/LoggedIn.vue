<!-- =================================================
 Template
================================================== -->
<template>
  <div class="logged-in">
    <side-nav-bar/>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import SideNavBar from './SideNavBar';

export default {
  name: 'LoggedIn',
  components: {
    SideNavBar,
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
