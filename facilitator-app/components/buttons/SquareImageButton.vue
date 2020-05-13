<template>
  <div
    :class="['square-image-button', { active: value }]"
    :style="style"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 174,
    },
    imageFilename: {
      type: String,
      default: '',
    },
  },
  computed: {
    style() {
      return {
        width: this.width + 'px',
        height: this.width + 'px',
        backgroundImage: `url(${require('@images/' + this.imageFilename)})`,
      };
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.square-image-button
  border: none
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  border-radius: 0
  margin-right: 25px
  transition: opacity 0.3s
  &:not(.active)
    opacity: 0.5
</style>
