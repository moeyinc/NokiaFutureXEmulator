<template>
  <div
    :class="['toggle-button-item', {
      active: value,
      'square-image-button': squareImageButton,
    }]"
    :style="style"
    @click="$emit('click')"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    squareImageButton: {
      type: Boolean,
      default: false,
    },
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
    imageFilename: {
      type: String,
      default: '',
    },
  },
  computed: {
    style() {
      return {
        width: this.width + 'px',
        height: this.squareImageButton ? this.width + 'px' : '62px',
        backgroundImage: this.squareImageButton
          ? 'url(' + require('@images/' + this.imageFilename) + ')'
          : '',
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
  &:not(.square-image-button)
    &.active
      color: white
      background-color: $primary-color
    &:first-child
      border-radius: 8px 0 0 8px
    &:last-child
      border-radius: 0 8px 8px 0
  &.square-image-button
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
