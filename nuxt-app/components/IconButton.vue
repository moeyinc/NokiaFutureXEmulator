<template>
  <img
    class="icon-button"
    :src="imgSrc"
    @mousedown="() => {if (clickable) active = true}"
    @mouseup="() => {if (clickable) active = false}"
    @mouseleave="() => {if (clickable) active = false}"
    @click="$emit('clicked')"
  >
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    filename: {
      type: String,
      default: '',
    },
    filenameActive: {
      type: String,
      default: '',
    },
    clickable: {
      type: Boolean,
      default: true,
    },
    overwriteActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    imgSrc() {
      let file;
      if (!this.active && !this.overwriteActive) {
        file = this.filename;
      } else {
        file = this.filenameActive;
      }

      return require('@images/' + file);
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
