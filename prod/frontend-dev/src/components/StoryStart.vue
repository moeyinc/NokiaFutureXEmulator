<!-- =================================================
 Template
================================================== -->
<template>
  <div class="story-start">

    <main-header
      :title="'Future Factory 4.0'"
      :has-nav-bar="true"
      :category-name="'BUSINESS'"
      :back-button-label="'Back To Top'"
      @back-button-clicked="jumpTo('Stories', {transition: 'slide-right'})"/>

    <summary-block>
      Full automated manufacturing lines powered by 5G Network.
      Lorem ipsum dolor sit amet.
    </summary-block>

    <img
      class="catch"
      :src="require('@/assets/images/' + 'future-factory-start.png')">

    <div class="action-button-container">
      <action-button
        class="action-button"
        :label="'Start Interactive Version'"/>

      <sub-action-button
        class="sub-action-button"
        :label="'Play Video Ver.'"/>
    </div>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from './MainHeader';
import SummaryBlock from './SummaryBlock';
import ActionButton from './ActionButton';
import SubActionButton from './SubActionButton';

export default {
  name: 'StoryStart',
  components: {
    MainHeader,
    SummaryBlock,
    ActionButton,
    SubActionButton,
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
      width: 100%
      height: auto

    .action-button-container
      position: relative
      padding: 43px 80px 80px 80px

      .action-button
        position: absolute
        top: -20px
        right: 80px
</style>
