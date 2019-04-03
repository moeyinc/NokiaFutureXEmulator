<template>
  <OverlayWrapper
    @close-button-clicked="$emit('close')"
  >
    <div class="confirmation-container">
      <div class="confirmation-content">
        <div class="confirmation-message">
          {{ message }}
        </div>
        <div class="button-container">
          <ActionButton
            class="left-button"
            label="Yes"
            @click="$emit('execute')"
          />
          <ActionButton
            label="No"
            @click="$emit('close')"
          />
        </div>
      </div>
    </div>
  </OverlayWrapper>
</template>

<script>
import OverlayWrapper from './OverlayWrapper';
import ActionButton from '@comps/buttons/ActionButton';

export default {
  name: 'ConfirmationModalOverlay',
  components: {
    OverlayWrapper,
    ActionButton,
  },
  props: {
    message: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="stylus" scoped>
.confirmation-container
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  .confirmation-message
    text-align: center
    font-size: 40px
    margin-bottom: 60px
  .button-container
    display: flex
    flex-direction: row
    justify-content: center
    .left-button
      margin-right: 20px
</style>
