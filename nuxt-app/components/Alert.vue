<template>
  <transition name="fade">
    <div
      v-if="display"
      :class="['alert', {
        error: type === 'error',
        info: type === 'info',
        success: type === 'success',
        warning: type === 'warning',
      }]"
    >
      <!-- eslint-disable -->
      <p class="message">{{ message }}</p>
      <!-- eslint-enable -->
      <div class="close-button-wrapper">
        <CloseIcon
          class="close-icon"
          @click="$emit('close')"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import CloseIcon from '@images/close-icon.svg';

export default {
  components: {
    CloseIcon,
  },
  props: {
    message: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      validator: (value) => {
        return ['error', 'info', 'success', 'warning'].includes(value);
      },
      default: 'error',
    },
    display: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.alert
  min-height: 80px
  width: 540px
  display: flex
  justify-content: space-between
  align-items: center
  color: white
  font-size: 24px
  padding: 25px 30px
  &.error
    background-color: $error-color
  &:not(:first-child)
    margin-top: 1px
  p.message
    white-space: pre-line
    line-height: 1.2em
  .close-button-wrapper
    display: flex
    height: 100%
    flex-direction: column
    justify-content: center
    align-items: center
    padding-left: 20px
    .close-icon
      fill: white
      stroke: white
      width: 17.5px
      height: 17.5px
</style>
