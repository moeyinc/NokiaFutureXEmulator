<template>
  <div
    :class="['side-nav-menu-item', {'active': active}]"
    @touchend.prevent="$emit('select')"
    @click="$emit('select')"
  >
    <div class="icon-wrapper">
      <IconButton
        :filename="iconFilename"
        :filename-active="iconFilenameActive"
        :overwrite-active="active"
        :clickable="false"
      />
    </div>
    <div class="label-wrapper">
      {{ label }}
    </div>
  </div>
</template>

<script>
import IconButton from '@comps/buttons/IconButton';

export default {
  name: 'SideNavMenuItem',
  components: {
    IconButton,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
    iconFilename: {
      type: String,
      default: '',
    },
    iconFilenameActive: {
      type: String,
      default: '',
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

  .icon-wrapper
    min-width: 70px
    text-align: right
    display: flex
    align-items: center
    justify-content: flex-end
    img
      height: 23px
  .label-wrapper
    width: 100%
    padding: 0 17px
    text-align: left
    font-size: 20px
    color: white
    display: flex
    align-items: center
</style>
