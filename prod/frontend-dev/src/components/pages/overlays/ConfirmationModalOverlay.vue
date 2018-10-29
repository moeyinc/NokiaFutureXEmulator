<!-- =================================================
 Template
================================================== -->
<template>
  <overlay-wrapper
    class="confirmation-modal"
    @close-button-clicked="$emit('close')">
    <div class="container">
      <div class="content">
        <div class="message">
          {{message}}
        </div>
        <div class="button-container">
          <action-button
            class="left-button"
            :label="'Yes'"
            :enabled="true"
            :small="true"
            @clicked="$emit('execute')"/>
          <action-button
            :label="'No'"
            :enabled="true"
            :small="true"
            @clicked="$emit('close')"/>
        </div>
      </div>
    </div>
  </overlay-wrapper>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import OverlayWrapper from './OverlayWrapper';
import ActionButton from '@/components/ActionButton';

export default {
  name: 'ConfirmationModalOverlay',
  components: {
    OverlayWrapper,
    ActionButton,
  },
  props: {
    message: String,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.confirmation-modal
  position: relative

  .container
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

    .message
      font-size: 40px
      margin-bottom: 60px

    .button-container
      display: flex
      flex-direction: row
      justify-content: center

      .left-button
        margin-right: 20px
</style>
