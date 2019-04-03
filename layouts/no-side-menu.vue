<template>
  <div class="layout-wrapper">
    <div class="no-side-menu">
      <nuxt data-app />
      <AlertContainer />
    </div>
  </div>
</template>

<script>
import AlertContainer from '@comps/AlertContainer';

export default {
  components: {
    AlertContainer,
  },
};
</script>

<style scoped lang="stylus">
.layout-wrapper
  width: 1112px
  height: 832px
  position: relative
  .no-side-menu
    user-select: none
    overflow: hidden
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-image: url('~@images/login-bg.png')
    background-size: cover
    background-repeat: no-repeat
    background-position: center
</style>
