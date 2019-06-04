<template>
  <div class="preshow-module-list">
    <div class="label-box">
      {{ label }}
    </div>
    <PreshowModuleListItem
      v-for="(item, index) in items"
      :key="index"
      class="item"
      :name="item.name"
      :thumbnail-filename="item.thumbnail"
      :selected="item.name === selectedPreshowModuleName"
      @select="(name) => $emit('select', name)"
    />
  </div>
</template>

<script>
import PreshowModuleListItem from './PreshowModuleListItem';
export default {
  components: {
    PreshowModuleListItem,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    selectedPreshowModuleName: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.preshow-module-list
  display: flex
  align-items: center
  &:not(:first-child)
    margin-top: 25px
  .label-box
    width: 100px
    height: 100px
    background-color: alpha($secondary-border-color, .1)
    border-right: 1px solid $secondary-border-color
    display: flex
    justify-content: center
    align-items: center
    text-align: center
    font-size: 16px
    line-height: 24px
    color: $secondary-border-color
  .item
    margin-left: 25px
</style>
