<!-- =================================================
 Template
================================================== -->
<template>
  <div class="story-start">

    <main-header
      :title="'Future Factory 4.0'"
      :has-nav-bar="true"
      :category-name="'BUSINESS'"
      :back-button-label="'Back To List'"
      @back-button-clicked="jumpTo('Stories', {transition: 'slide-right'})"/>

    <summary-block>
      Full automated manufacturing lines powered by 5G Network.
      Lorem ipsum dolor sit amet.
    </summary-block>

    <img
      class="catch"
      :src="require('@/assets/images/' + 'future-factory-start.png')"/>

    <floating-action-button-container
      :action-button-label="'Start Interactive Version'"
      :sub-action-button-label="'Play Video Ver.'"/>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from '@/components/MainHeader';
import SummaryBlock from '@/components/SummaryBlock';
import FloatingActionButtonContainer from
  '@/components/FloatingActionButtonContainer';

export default {
  name: 'StoryStart',
  components: {
    MainHeader,
    SummaryBlock,
    FloatingActionButtonContainer,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.story-start

  img.catch
    margin-top: 32px
    width: 832px
</style>
