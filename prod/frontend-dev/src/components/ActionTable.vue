<!-- =================================================
 Template
================================================== -->
<template>
  <table>
    <tr
      v-for="(item, index) in items"
      :key="index"
      @click="$emit('clicked', item.type)">
      <td class="icon">
        <icon-button
          :filename="item.iconFilename"
          :filename-active="item.iconFilenameActive"
          :clickable="false"/>
      </td>
      <td class="item-name">
        {{item.name}}
      </td>
      <td
        v-if="!item.data"
        class="item-data empty">
        Not Selected
      </td>
      <td
        v-else
        class="item-data">
        {{item.data.name}}
      </td>
    </tr>
  </table>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import IconButton from '@/components/IconButton';

export default {
  name: 'ActionTable',
  components: {
    IconButton,
  },
  props: {
    items: Array,
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
table
  width: 100%
  font-size: 24px
  line-height: 36px

  tr
    height: 91px
    border-top: solid 0.5px #4F88FF
    border-bottom: solid 0.5px #4F88FF

    td
      vertical-align: middle
      padding: 0 20px

    td.icon
      width: 56px
      padding-right: 0

      img
        display: table-cell
        width: 36px
        height: 36px
        opacity: 0.75

    td.item-name
      text-align: left

    td.item-data
      text-align: right

      &.empty
        opacity: 0.5
</style>
