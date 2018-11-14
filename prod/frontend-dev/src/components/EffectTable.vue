<!-- =================================================
 Template
================================================== -->
<template>
  <table>
    <tr class="header-row">
      <th class="padding"></th>
      <th class="my-title">
        {{title}}
      </th>
      <th class="reset">
        <sub-action-button
          v-if="resetButton"
          :label="'Reset to Default'"
          :icon-filename="'reset-icon.png'"
          :has-underline="false"
          @clicked="$emit('reset')"/>
      </th>
      <th class="padding"></th>
    </tr>
    <tr
      v-for="(param, key, index) in params"
      :key="index"
      class="data-row">
      <td class="padding"></td>
      <td class="label">
        {{param.name}}
      </td>
      <td class="control">
        <input
          v-if="param.type === 'slider'"
          type="range"
          class="slider"
          :min="param.min"
          :max="param.max"
          :step="param.step"
          v-model="param.value"
          @change="$emit('changed', {
            key: key,
            value: param.value})"/>
        <v-switch
          v-if="param.type === 'toggle'"
          v-model="param.value"
          :color="'blue'"
          @change="$emit('toggled', {
            key: key,
            value: param.value})"/>
      </td>
      <td class="padding"></td>
    </tr>
  </table>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import SubActionButton from '@/components/SubActionButton';

export default {
  name: 'EffectTable',
  props: {
    title: String,
    params: Object,
    resetButton: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    SubActionButton,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
table
  width: 100%
  font-size: 20px
  line-height: 36px

  tr
    &.header-row
      height: 80px

    &.data-row td:not(.padding)
      height: 120px
      border-top: solid 0.5px #4F88FF

    th, td
      vertical-align: middle

    th.padding, td.padding
      width: 100px

    th.padding
      border-bottom: solid 0.5px #4F88FF

    th.my-title
      color: #4F88FF
      font-family: 'NokiaPureText-Regular'
      text-align: left
      font-size: 30px
      min-width: 200px

    th.reset
      text-align: right

    td.control
      width: 500px

      input.slider
        -webkit-appearance: none
        appearance: none
        width: 100%
        height: 6px
        border-radius: 3px
        background: #0B4EC5
        outline: none
        opacity: 0.7
        -webkit-transition: .2s
        transition: opacity .2s

        &::-webkit-slider-thumb
          -webkit-appearance: none
          appearance: none
          width: 20px
          height: 20px
          border-radius: 10px
          box-shadow: 0 2px 4px 0 #000000
          background: #0052FF
</style>
