<template>
  <div class="scrollable">
    <nuxt data-app />
  </div>
</template>

<style scoped lang="stylus">
.scrollable
  overflow-y: scroll
  -webkit-overflow-scrolling: touch
  overflow-scrolling: touch
  height: 100%
</style>

<style lang="stylus">
#__nuxt, #__layout
  width: auto
  height: auto
  position: relative
</style>
