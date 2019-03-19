<template>
  <div
    class="fixed-action-button"
    @click="$emit('click')"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.fixed-action-button
  width: 260px
  height: 100px
  background-color: $primary-color
  position: absolute
  right: 0
  bottom: 60px
  display: flex
  justify-content: center
  align-items: center
  font-size: 40px
  color: white
  letter-spacing: .83px
</style>
