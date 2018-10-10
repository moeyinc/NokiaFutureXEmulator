<!-- =================================================
 Template
================================================== -->
<template>
  <img
    class="icon-button"
    :src="imgSrc"
    @mousedown="() => {if (clickable) active = true}"
    @mouseup="() => {if (clickable) active = false}"
    @mouseleave="() => {if (clickable) active = false}"
    @click="$emit('clicked')" />
</template>

<!-- =================================================
 Script
================================================== -->
<script>
export default {
  name: 'IconButton',
  data() {
    return {
      active: false,
    };
  },
  props: {
    filename: String,
    filenameActive: String,
    clickable: {
      type: Boolean,
      default: true,
    },
    overwriteActive: Boolean,
  },
  computed: {
    imgSrc() {
      let file;
      if (!this.active && !this.overwriteActive) {
        file = this.filename;
      } else {
        file = this.filenameActive;
      }

      return require('@/assets/images/' + file);
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
</style>
