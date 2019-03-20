<template>
  <div
    class="jump-exit-button"
    @click="$emit('click')"
  >
    <div class="inner">
      <img :src="require('@images/arrow-right.png')">
      <h6>Jump/Exit</h6>
    </div>
  </div>
</template>

<style scoped lang="stylus">
@import '~@styles/colors'

.jump-exit-button
  display: inline-block
  border-bottom: solid 1px $secondary-border-color
  .inner
    display: flex
    align-items: center
    img
      width: 20px
      height: 18px
      margin-right: 11px
      transform-origin: center
      transform: rotate(180deg)
    h6
      font-size: 20px
</style>
