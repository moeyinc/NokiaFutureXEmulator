<template>
  <section
    @touchend.prevent="$emit('start')"
    @click="$emit('start')"
  >
    <div class="inner">
      <h3 class="start-session">
        Start Session
      </h3>
      <img :src="require('@images/arrow-right.png')">
    </div>
  </section>
</template>

<style scoped lang="stylus">
section
  display: inline-block
  .inner
    display: flex
    flex-direction: row
    align-items: center
    h3.start-session
      font-size: 24px
    img
      width: 25.5px
      height: 23px
      margin-left: 11px
</style>
