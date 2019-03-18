<template>
  <section>
    <h2>{{ sectionTitle }}</h2>
    <VSelect
      :items="options"
      :value="value"
      label="Select One"
      @change="(val) => $emit('change', val)"
    />
  </section>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      validator: () => true,
      default: '',
    },
  },
};
</script>

<style scoped lang="stylus">
section
  h2
    font-size: 18px
    font-family: 'NokiaPureHeadline_Regular'
    margin-bottom: 8px
</style>
