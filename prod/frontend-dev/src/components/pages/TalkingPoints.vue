<!-- =================================================
 Template
================================================== -->
<template>
  <div class="talking-points">

    <main-header
      :title="'Future Factory 4.0'"
      :has-nav-bar="true"
      :category-name="'BUSINESS'"
      :back-button-label="'End Story'"
      @back-button-clicked="jumpTo('Stories', {transition: 'fade'})"/>

    <summary-block
      class="talk-point"
      :talk-point-label="'Summary here'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut.
    </summary-block>

    <summary-block
      class="talk-point"
      :talk-point-label="'Summary here'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut.
    </summary-block>

    <summary-block
      class="talk-point"
      :talk-point-label="'Summary here'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut.
    </summary-block>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from '@/components/MainHeader';
import SummaryBlock from '@/components/SummaryBlock';

export default {
  name: 'TalkingPoints',
  components: {
    MainHeader,
    SummaryBlock,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.talking-points
  .talk-point
    margin-bottom: 50px
</style>
