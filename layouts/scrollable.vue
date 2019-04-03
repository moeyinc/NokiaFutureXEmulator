<template>
  <div class="layout-wrapper">
    <div class="scrollable">
      <nuxt data-app />
    </div>
  </div>
</template>

<style scoped lang="stylus">
.layout-wrapper
  width: auto
  height: auto
  position: relative
  .scrollable
    overflow-y: scroll
    -webkit-overflow-scrolling: touch
    overflow-scrolling: touch
    height: 100%
</style>
