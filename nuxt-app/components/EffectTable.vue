<template>
  <table>
    <tr class="header-row">
      <th class="padding" />
      <th class="my-title">
        {{ title }}
      </th>
      <th class="reset">
        <div
          v-if="resetButton"
          class="inner"
        >
          <ResetIcon class="reset-icon" />
          <SubActionButton
            label="Reset to Default"
            :underline="false"
            @click="$emit('reset')"
          />
        </div>
      </th>
      <th class="padding" />
    </tr>
    <tr
      v-for="(param, key, index) in params"
      :key="index"
      class="data-row"
    >
      <td class="padding" />
      <td class="label">
        {{ param.name }}
      </td>
      <td class="control">
        <input
          v-if="param.type === 'slider'"
          v-model="param.value"
          type="range"
          class="slider"
          :min="param.min"
          :max="param.max"
          :step="param.step"
          @change="$emit('changed', {
            key: key,
            value: param.value})"
        >
        <v-switch
          v-if="param.type === 'toggle'"
          v-model="param.value"
          :color="'blue'"
          @change="$emit('toggled', {
            key: key,
            value: param.value})"
        />
      </td>
      <td class="padding" />
    </tr>
  </table>
</template>

<script>
import SubActionButton from '@comps/buttons/SubActionButton';
import ResetIcon from '@images/reset-icon.svg';

export default {
  name: 'EffectTable',
  components: {
    SubActionButton,
    ResetIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    params: {
      type: Object,
      default: () => {},
    },
    resetButton: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

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
      position: relative
      .inner
        position: absolute
        right: 0
        top: 50%
        transform: translateY(-50%)
        display: flex
        justify-content: center
        align-items: center
      .reset-icon
        fill: white
        width: 24px
        height: 24px
        margin-right: 8px

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
