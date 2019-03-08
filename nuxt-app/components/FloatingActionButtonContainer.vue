<!-- =================================================
 Template
================================================== -->
<template>
  <div class="action-button-container">
    <div
      class="inner"
      :style="{justifyContent: justifyContent}"
    >
      <slot />
    </div>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
export default {
  name: 'FloatingActionButtonContainer',
  props: {
    justifyContent: {
      type: String,
      default: 'flex-end',
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.action-button-container
  position: fixed
  bottom: 0
  left: 280px
  right: 0

  .inner
    position: absolute
    bottom: 60px
    right: 80px
    left: 80px
    height: 100px
    display: flex
    flex-direction: row
    align-items: flex-end
</style>
