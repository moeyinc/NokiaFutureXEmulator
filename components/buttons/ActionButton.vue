<template>
  <div
    :class="['action-button', {fixed}]"
    :style="style"
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
    fixed: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '',
    },
  },
  computed: {
    style() {
      if (!this.width) return;
      return {
        width: this.width,
      };
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.action-button
  display: flex
  justify-content: center
  align-items: center
  width: 300px
  height: 80px
  font-size: 36px
  letter-spacing: .75px
  background-color: $primary-color
  &.fixed
    position: absolute
    right: 0
    bottom: 60px
    width: 260px
    height: 100px
    font-size: 40px
    letter-spacing: .83px
</style>
