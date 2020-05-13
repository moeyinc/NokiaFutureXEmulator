<template>
  <div
    :class="['wide-button', { active: value }]"
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
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.wide-button
  display: flex
  justify-content: center
  align-items: center
  height: 62px
  width: 190px
  border: solid 1px $secondary-border-color
  font-family: 'NokiaPureText-Regular'
  font-size: 30px
  color: $secondary-border-color
  border-radius: 8px
  &.active
    color: white
    background-color: $primary-color
  &:not(:first-child)
    margin-left: 20px
</style>
