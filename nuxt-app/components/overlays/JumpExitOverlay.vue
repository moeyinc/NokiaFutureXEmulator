<template>
  <OverlayWrapper
    scrollable
    @close-button-clicked="$emit('close')"
  >
    <template>
      <header>
        <h1>Jump / Exit Menu</h1>
      </header>
      <div class="section-jump-list-header">
        <div class="section-label">
          SECTION
        </div>
      </div>
      <div class="section-jump-list">
        <SectionJumpListItem
          v-for="section in sections"
          :key="section.id"
          :section="section"
          :highlighted="section.id === highlightedSectionId"
          :selected="section.id === selectedSectionId"
          @jump="$emit('jump', section.id)"
          @row-clicked="onRowClicked(section.id)"
        />
        <SectionJumpListItem
          exit
          :section="{title: 'Exit Story'}"
          :highlighted="highlightedSectionId === -1"
          @exit="$emit('exit')"
          @row-clicked="onRowClicked(-1)"
        />
      </div>
    </template>
  </OverlayWrapper>
</template>

<script>
import OverlayWrapper from './OverlayWrapper';
import SectionJumpListItem from './SectionJumpListItem';

export default {
  components: {
    OverlayWrapper,
    SectionJumpListItem,
  },
  props: {
    sections: {
      type: Array,
      default: () => [],
    },
    selectedSectionId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      highlightedSectionId: 0,
    };
  },
  methods: {
    onRowClicked(sectionId) {
      this.highlightedSectionId = sectionId;
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

header
  padding: 70px 80px 40px 80px

  h1
    font-size: 40px

.section-jump-list-header
  height: 62px
  width: 100%
  border-bottom: solid 1px $secondary-border-color
  .section-label
    margin-left: 100px
    width: 90px
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    color: $secondary-color
    font-size: 12px
    letter-spacing: 1.25px

.section-jump-list
  padding: 0 100px 77px
</style>
