<template>
  <div
    :class="['section-jump-list-item', {highlighted}]"
    @click="$emit('row-clicked')"
  >
    <SelectedIcon
      v-show="selected"
      class="selected-icon"
    />
    <div
      v-if="!exit"
      class="section-id"
    >
      {{ section.id }}
    </div>
    <div
      v-if="exit"
      class="section-id"
    >
      <ExitIcon class="exit-icon" />
    </div>
    <div
      v-if="!exit"
      class="section-thumbnail"
    >
      <div
        class="thumbnail"
        :style="thumbnailStyle"
      />
    </div>
    <div class="section-title">
      {{ section.title }}
    </div>
    <ActionButton
      v-show="highlighted && !selected"
      class="jump-button"
      :label="exit ? 'Exit' : 'Jump'"
      width="150px"
      @click="exit ? $emit('exit') : $emit('jump')"
    />
  </div>
</template>

<script>
import ActionButton from '@comps/buttons/ActionButton';
import SelectedIcon from '@images/selected-icon.svg';
import ExitIcon from '@images/exit-icon.svg';

export default {
  components: {
    ActionButton,
    SelectedIcon,
    ExitIcon,
  },
  props: {
    section: {
      type: Object,
      default: () => {},
    },
    highlighted: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    exit: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    thumbnailStyle() {
      return {
        backgroundImage: 'url(' +
          require('@images/' + this.section.thumbnail) + ')',
      };
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.section-jump-list-item
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
  .section-id
    width: 90px
    max-width: 90px
    color: $secondary-color
    font-size: 44px
    text-align: center
    .exit-icon
      width: 40px
      fill: $secondary-color
  .section-thumbnail
    width: 100px
    max-width: 100px
    display: flex
    justify-content: center
    align-items: center
    .thumbnail
      background-size: cover
      background-position: center
      background-repeat: no-repeat
      width: 80px
      height: 80px
  .section-title
    font-size: 24px
    letter-spacing: .8px
    text-align: left
    padding-left: 10px
  .jump-button
    position: absolute
    right: 10px
    top: 10px
</style>
