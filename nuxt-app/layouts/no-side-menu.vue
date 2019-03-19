<template>
  <div class="no-side-menu">
    <nuxt data-app />
  </div>
</template>

<style scoped lang="stylus">
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
