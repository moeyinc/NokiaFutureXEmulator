<template>
  <div class="scrollable">
    <nuxt data-app />
  </div>
</template>

<style scoped lang="stylus">
.scrollable
  overflow: scroll
  -webkit-overflow-scrolling: touch
  overflow-scrolling: touch
  height: 100%
</style>
