<!-- =================================================
 Template
================================================== -->
<template>
  <div
    class="large-select-button"
    :style="{width: width + 'px', height: height + 'px'}"
    @mousedown="active = true"
    @mouseup="active = false"
    @mouseleave="active = false"
    @click="$emit('clicked')">
    <icon-button
      :filename="iconFilename"
      :filename-active="iconFilenameActive"
      :overwrite-active="active"
      :clickable="false"/>
    <h6>{{label}}</h6>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import IconButton from '@/components/IconButton';

export default {
  name: 'LargeSelectButton',
  components: {
    IconButton,
  },
  data() {
    return {
      active: false,
    };
  },
  props: {
    width: Number,
    height: Number,
    iconFilename: String,
    iconFilenameActive: String,
    label: String,
  },
  computed: {
    imgSrc() {
      let filename = this.active ? this.iconFilenameActive : this.iconFilename;
      return require('@/assets/images/' + filename);
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.large-select-button
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  border: solid 4px white

  img
    opacity: 0.75
    width: 80px
    height: 80px
    margin-bottom: 25px

  h6
    font-size: 24px
    line-height: 30px
</style>
