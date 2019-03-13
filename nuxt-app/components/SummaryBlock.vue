<template>
  <div class="summary-block">
    <p
      v-if="talkPointLabel"
      class="talk-point-label"
    >
      <span class="blue-text">Talking Point</span>
      <span class="talk-point-text">{{ talkPointLabel }}</span>
    </p>
    <!-- eslint-disable -->
    <p
      class="summary-text"
      v-html="summaryText"
    />
    <!-- eslint-enable -->
  </div>
</template>

<script>
export default {
  name: 'SummaryBlock',
  props: {
    talkPointLabel: {
      type: String,
      default: '',
    },
    summaryText: {
      type: String,
      default: '',
    },
  },
};
</script>

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
