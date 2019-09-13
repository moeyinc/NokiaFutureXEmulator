<template>
  <div
    :class="['action-button', {fixed}]"
    :style="[style, additionalStyle]"
    @click="$emit('click')"
  >
    <div class="inner">
      <div class="main">
        {{ label }}
      </div>
      <div
        v-if="sublabel"
        class="sub"
      >
        {{ sublabel }}
      </div>
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
    sublabel: {
      type: String,
      default: '',
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '',
    },
    additionalStyle: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    style() {
      if (!this.width) return;
      return {
        width: this.width,
      };
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.action-button
  display: flex
  justify-content: center
  align-items: center
  width: 300px
  height: 80px
  font-size: 36px
  letter-spacing: .75px
  background-color: $primary-color
  &.fixed
    position: absolute
    right: 0
    bottom: 60px
    width: 260px
    height: 100px
    font-size: 40px
    letter-spacing: .83px

    .inner
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .sub
        font-family: 'NokiaPureText-Medium'
        font-size: 18px
        color: $subtitle-color
        margin-top: 10px
</style>
