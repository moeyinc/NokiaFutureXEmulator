<!-- =================================================
 Template
================================================== -->
<template>
  <div class="action-button">
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
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.action-button
  display: inline-block
  padding: 40px 30px
  background-color: #0052FF
  font-size: 36px
  line-height: 52px
  letter-spacing: 0.75px
</style>
