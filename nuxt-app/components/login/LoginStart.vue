<template>
  <section
    @touchend.prevent="$emit('start')"
    @click="$emit('start')"
  >
    <div class="inner">
      <h3 class="start-session">
        Start Session
      </h3>
      <ArrowIcon class="arrow-icon" />
    </div>
  </section>
</template>

<script>
import ArrowIcon from '@images/arrow-icon.svg';

export default {
  components: {
    ArrowIcon,
  },
};

</script>

<style scoped lang="stylus">
section
  display: inline-block
  .inner
    display: flex
    flex-direction: row
    align-items: center
    h3.start-session
      font-size: 24px
    .arrow-icon
      width: 25.5px
      margin-left: 10px
      transform-origin: center
      transform: rotate(180deg)
</style>
