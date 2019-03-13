<template>
  <div
    :class="['network-option-button', {'selected': isSelected}]"
    @click="$emit('clicked')"
  >
    <div class="category-label">
      {{ category }}
    </div>
    <div class="network-name">
      {{ name }}
    </div>
    <div class="network-parameters-container">
      <div class="network-parameter">
        <div>SECURITY</div>
        <div>{{ security }}</div>
      </div>
      <div class="network-parameter">
        <div>LATENCY</div>
        <div>{{ latency }}</div>
      </div>
      <div class="network-parameter">
        <div>BANDWIDTH</div>
        <div>{{ bandwidth }}</div>
      </div>
      <div class="network-parameter last-item">
        <div>RELIABILITY</div>
        <div>{{ reliability }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NetworkOptionButton',
  props: {
    name: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
    },
    security: {
      type: String,
      default: '',
    },
    latency: {
      type: String,
      default: '',
    },
    bandwidth: {
      type: String,
      default: '',
    },
    reliability: {
      type: String,
      default: '',
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
.network-option-button
  width: 230px
  height: 500px
  border: solid 4px white
  position: relative

  .category-label
    position: absolute
    top: 30px
    left: 30px
    font-size: 12px
    letter-spacing: 1.27px
    padding: 6px 0
    border-bottom: solid 0.5px white

  .network-name
    position: absolute
    top: 78px
    left: 30px
    height: 130px
    font-size: 32px
    line-height: 40px
    display: flex
    flex-direction: column
    justify-content: flex-end

  .network-parameters-container
    position: absolute
    top: 230px
    left: 0
    right: 0
    bottom: 0
    border-top: solid 0.5px white

    .network-parameter
      display: flex
      flex-direction: row
      margin: 0 30px
      height: 60px
      justify-content: space-between
      align-items: center
      font-size: 12px
      letter-spacing: 1.27px
      border-bottom: solid 0.5px white

      &.last-item
        border-bottom: none

  &.selected
    background-color: #0052FF
    border: none

    .network-parameters-container
      border-top: solid 0.5px #4F88FF

      .network-parameter
        border-bottom: solid 0.5px #4F88FF
</style>
