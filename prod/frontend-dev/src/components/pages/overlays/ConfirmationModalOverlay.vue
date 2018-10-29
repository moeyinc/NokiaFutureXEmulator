<!-- =================================================
 Template
================================================== -->
<template>
  <overlay-wrapper
    @close-button-clicked="$emit('close')">
  </overlay-wrapper>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import OverlayWrapper from './OverlayWrapper';

export default {
  name: 'ConfirmationModalOverlay',
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
</style>
