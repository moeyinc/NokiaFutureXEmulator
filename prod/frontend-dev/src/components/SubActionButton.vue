<!-- =================================================
 Template
================================================== -->
<template>
  <div class="sub-action-button">
    {{label}}
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
export default {
  name: 'SubActionButton',
  props: {
    label: String,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.sub-action-button
  display: inline-block
  font-size: 24px
  line-height: 52px
  letter-spacing: 0.5px
  border-bottom: solid 0.5px #5D8CEE
</style>
