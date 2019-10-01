<template>
  <div>
    <h6
      v-if="title"
      class="container-title"
    >
      {{ title }}
    </h6>
    <div class="toggle-button">
      <ToggleButtonItem
        v-for="(button, index) in buttons"
        :key="index"
        :square-image-button="squareImageButton"
        :label="button.label"
        :value="button.value"
        :width="buttonWidth"
        :image-filename="button.imgFilename"
        @click="$emit('select', {button, index})"
      />
    </div>
  </div>
</template>

<script>
import ToggleButtonItem from './ToggleButtonItem';

export default {
  components: {
    ToggleButtonItem,
  },
  props: {
    squareImageButton: {
      type: Boolean,
      default: false,
    },
    buttons: {
      type: Array,
      default: () => [],
    },
    buttonWidth: {
      type: Number,
      default: 174,
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

h6.container-title
  color: $secondary-color
  font-size: 20px
  line-height: 30px
  margin-bottom: 10px

.toggle-button
  display: flex
</style>
