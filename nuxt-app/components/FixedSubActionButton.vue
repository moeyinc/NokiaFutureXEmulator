<template>
  <div
    class="fixed-sub-action-button"
    @click="$emit('click')"
  >
    <div class="inner">
      <img :src="require('@images/arrow-right.png')">
      <h6>{{ label }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="stylus">
.fixed-sub-action-button
  position: fixed
  top: 740px
  right: 612px
  padding-bottom: 9px
  display: inline-block
  border-bottom: solid 0.5px #5D8CEE
  .inner
    display: flex
    flex-direction: row
    align-items: center
    h6
      font-size: 20px
    img
      width: 20px
      height: 18px
      margin-right: 11px
      transform-origin: center
      transform: rotate(180deg)
</style>
