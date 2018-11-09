<!-- =================================================
 Template
================================================== -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('initMqttClient');
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus">
@import '../node_modules/reset-css/reset.css'
@import './stylus/reset-additional'
@import './stylus/fonts'
@import './stylus/global-styles'
@import './stylus/vue-transitions'
@import '~vuetify/src/stylus/main'
</style>
