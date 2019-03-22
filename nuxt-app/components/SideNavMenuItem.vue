<template>
  <div
    :class="['side-nav-menu-item', {active}]"
    @click="$emit('click')"
  >
    <div class="icon-column">
      <div class="icon-wrapper">
        <div class="icon">
          <slot />
        </div>
      </div>
    </div>
    <div class="label-column">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@styles/colors'

.side-nav-menu-item
  height: 80px
  background-color: $primary-color
  border-bottom: solid 1px $primary-border-color
  display: flex
  flex-direction: row
  &.active
    background-color: $primary-active-color
    .icon
      fill: $secondary-color !important

  .icon-column
    min-width: 70px
    text-align: right
    display: flex
    align-items: center
    justify-content: flex-end
    .icon-wrapper
      height: 30px
      width: 30px
      position: relative
      .icon
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        fill: white
  .label-column
    width: 100%
    padding: 0 17px
    text-align: left
    font-size: 20px
    color: white
    display: flex
    align-items: center
</style>
