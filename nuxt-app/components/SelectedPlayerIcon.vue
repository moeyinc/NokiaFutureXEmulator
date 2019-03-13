<template>
  <div class="player-box">
    <p>{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: 'SelectSleeveOverlay',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="stylus" scoped>
.player-box
  display: inline-block
  width: 50px
  height: 50px
  padding: 12px
  background-color: #0052FF
  color: white
  font-family: 'NokiaPureText-Regular'
  font-size: 20px
  line-height: 48px
  margin-right: 18px
  position: relative

  p
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>
