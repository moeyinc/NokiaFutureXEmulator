<!-- =================================================
 Template
================================================== -->
<template>
  <overlay-wrapper
    :header-title="'Sleeve Calibration'"
    @close-button-clicked="$emit('close')">
  </overlay-wrapper>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import OverlayWrapper from './OverlayWrapper';

export default {
  name: 'Calibration',
  components: {
    OverlayWrapper,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
</style>
