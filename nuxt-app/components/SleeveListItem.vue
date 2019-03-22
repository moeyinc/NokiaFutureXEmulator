<template>
  <div
    :class="['sleeve-list-item', {highlighted}]"
    @click="$emit('row-clicked')"
  >
    <SelectedIcon
      v-show="selected"
      class="selected-icon"
    />
    <div class="text">
      {{ sleeveIdText }}
    </div>
    <ActionButton
      v-show="highlighted"
      class="select-button"
      :label="selected ? 'Recalibrate' : 'Select'"
      width="220px"
      @click="$emit('calibrate')"
    />
  </div>
</template>

<script>
import ActionButton from '@comps/buttons/ActionButton';
import SelectedIcon from '@images/selected-icon.svg';

export default {
  components: {
    ActionButton,
    SelectedIcon,
  },
  props: {
    sleeveId: {
      type: String,
      default: '',
    },
    highlighted: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    sleeveIdText() {
      if (!this.selected) return this.sleeveId;
      return this.sleeveId + ' (selected)';
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.sleeve-list-item
  height: 100px
  position: relative
  border-bottom: solid 1px $secondary-border-color
  display: flex
  align-items: center
  &.highlighted
    background-color: rgba(79, 136, 255, .2)
  .selected-icon
    position: absolute
    top: 50%
    left: 0
    transform: translateY(-50%)
    fill: $primary-color
  .text
    font-size: 24px
    letter-spacing: .8px
    text-align: left
    padding: 0 20px
  .select-button
    position: absolute
    right: 10px
    top: 10px
</style>
