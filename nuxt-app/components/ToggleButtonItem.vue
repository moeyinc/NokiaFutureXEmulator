<template>
  <div
    :class="['toggle-button-item', {active: value}]"
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
    value: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 174,
    },
  },
  computed: {
    style() {
      return {
        width: this.width + 'px',
      };
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.toggle-button-item
  display: flex
  justify-content: center
  align-items: center
  height: 62px
  border: solid 1px $secondary-border-color
  font-family: 'NokiaPureText-Regular'
  font-size: 30px
  color: $secondary-border-color
  &.active
    color: white
    background-color: $primary-color
  &:first-child
    border-radius: 8px 0 0 8px
  &:last-child
    border-radius: 0 8px 8px 0
</style>
