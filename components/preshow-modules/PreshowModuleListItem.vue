<template>
  <div
    :class="['preshow-module-list-item', {selected}]"
    :style="{backgroundImage: backgroundImage}"
    @click="onClick"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    thumbnailFilename: {
      type: String,
      default: '',
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    backgroundImage() {
      return 'url(' + require('@images/' + this.thumbnailFilename) + ')';
    },
  },
  methods: {
    onClick() {
      this.$emit('select', this.name);
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.preshow-module-list-item
  width: 100px
  height: 100px
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  position: relative
  opacity: .66
  &.selected
    opacity: 1.0
  &.selected::before
    position: absolute
    width: 100%
    height: 100%
    content: ""
    border: 7px solid $primary-color
</style>
