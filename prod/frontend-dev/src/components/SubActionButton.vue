<!-- =================================================
 Template
================================================== -->
<template>
  <div class="sub-action-button" @click="$emit('clicked')">
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
  name: 'SubActionButton',
  props: {
    label: String,
    iconFilename: String,
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

  .inner
    display: flex
    flex-direction: row
    align-items: center

    img
      width: 30px
      height: 30px
      margin-right: 11px
</style>
