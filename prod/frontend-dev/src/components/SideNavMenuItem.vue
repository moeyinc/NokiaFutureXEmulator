<!-- =================================================
 Template
================================================== -->
<template>
  <div :class="['side-nav-menu-item', {'active': active}]">
    <div class="icon-wrapper">
      <icon-button
        :filename="iconFilename"
        :filename-active="iconFilenameActive"
        :overwrite-active="active"
        :clickable="false"/>
    </div>
    <div class="label-wrapper">
      {{label}}
    </div>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import IconButton from '@/components/IconButton';

export default {
  name: 'SideNavMenuItem',
  components: {
    IconButton,
  },
  props: {
    label: String,
    active: Boolean,
    iconFilename: String,
    iconFilenameActive: String,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.side-nav-menu-item
  height: 80px
  background-color: #0052FF
  border-bottom: solid 1px #0B4EC5
  display: flex
  flex-direction: row

  &.active
    background-color: #0049E4

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
