<template>
  <div
    class="jump-exit-button"
    @click="$emit('click')"
  >
    <div class="inner">
      <MenuIcon class="menu-icon" />
      <h6>Jump/Exit</h6>
    </div>
  </div>
</template>

<script>
import MenuIcon from '@images/menu-icon.svg';

export default {
  components: {
    MenuIcon,
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.jump-exit-button
  display: inline-block
  border-bottom: solid 1px $secondary-border-color
  .inner
    display: flex
    align-items: center
    .menu-icon
      fill: white
      width: 15px
      height: 13px
      margin-right: 11px
    h6
      font-size: 20px
</style>
