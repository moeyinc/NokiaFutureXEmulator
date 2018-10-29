<!-- =================================================
 Template
================================================== -->
<template>
  <div
    :class="['action-button', {'small': small}]"
    :style="buttonStyle"
    @click="() => {if (enabled) $emit('clicked')}">
    <div class="inner">
      <img
        v-if="iconFilename"
        :src="require('@/assets/images/' + iconFilename)"/>
      <h6>{{label}}</h6>
    </div>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
export default {
  name: 'ActionButton',
  props: {
    label: String,
    enabled: Boolean,
    small: Boolean,
    iconFilename: String,
  },
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.enabled ? '#0052FF' : 'transparent',
        opacity: this.enabled ? 1.0 : 0.5,
        border: this.enabled ? 'none' : 'solid 5px white',
      };
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.action-button
  display: flex
  flex-direction: row
  align-items: center
  height: 100px
  padding: 0px 30px
  font-size: 36px
  line-height: 52px
  letter-spacing: 0.75px

  &.small
    height: 80px
    padding: 0px 80px

  .inner
    display: flex
    flex-direction: row
    align-items: center

    img
      width: 50px
      height: 50px
      margin-right: 11px
</style>
