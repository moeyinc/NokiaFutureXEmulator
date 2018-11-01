<!-- =================================================
 Template
================================================== -->
<template>
  <div class="summary-block">
    <p
      v-if="talkPointLabel"
      class="talk-point-label">
      <span class="blue-text">Point</span>
      <span class="talk-point-text">{{talkPointLabel}}</span>
    </p>
    <p class="summary-text" v-html="summaryText">
    </p>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
export default {
  name: 'SummaryBlock',
  props: {
    talkPointLabel: String,
    summaryText: String,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.summary-block
  padding: 0 80px
  font-size: 20px
  line-height: 30px
  color: white

  p.talk-point-label
    margin-bottom: 25px

    span.blue-text
      color: #4F88FF
      margin-right: 12px

    span.talk-point-text
      font-weight: bold
</style>
