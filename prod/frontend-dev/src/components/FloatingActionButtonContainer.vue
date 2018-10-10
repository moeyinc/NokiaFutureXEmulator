<!-- =================================================
 Template
================================================== -->
<template>
  <div class="action-button-container">
    <div class="inner" :style="justifyStyle">
      <sub-action-button
        v-if="subActionButtonLabel"
        class="sub-action-button"
        :label="subActionButtonLabel"
        @clicked="$emit('sub-action-button-clicked')"/>
      <action-button
        class="action-button"
        :label="actionButtonLabel"
        :enabled="isActionButtonEnabled"
        @clicked="$emit('action-button-clicked')"/>
    </div>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import ActionButton from '@/components/ActionButton';
import SubActionButton from '@/components/SubActionButton';

export default {
  name: 'FloatingActionButtonContainer',
  components: {
    ActionButton,
    SubActionButton,
  },
  props: {
    actionButtonLabel: String,
    subActionButtonLabel: String,
    isActionButtonEnabled: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    justifyStyle() {
      return {
        justifyContent: this.subActionButtonLabel ?
          'space-between' : 'flex-end',
      };
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.action-button-container
  height: 100%
  position: fixed
  bottom: 0
  left: 280px
  right: 0

  .inner
    position: absolute
    bottom: 60px
    right: 80px
    left: 80px
    height: 100px
    display: flex
    flex-direction: row
    align-items: flex-end
</style>
