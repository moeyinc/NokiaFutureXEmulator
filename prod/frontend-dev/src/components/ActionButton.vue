<!-- =================================================
 Template
================================================== -->
<template>
  <div
    class="action-button"
    :style="buttonStyle"
    @click="$emit('clicked')">
    {{label}}
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
</style>
