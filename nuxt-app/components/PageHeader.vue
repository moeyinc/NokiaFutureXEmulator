<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="stylus" scoped>
header
  padding: 70px 80px 40px 80px
  h1
    font-size: 60px
</style>
