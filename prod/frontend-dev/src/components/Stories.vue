<!-- =================================================
 Template
================================================== -->
<template>
  <div class="stories">
    <main-header
      :title="'Stories'"
      :has-nav-bar="false"/>
    <!-- <main-header
      :title="'Stories'"
      :has-nav-bar="true"
      :category-name="'BUSINESS'"
      :back-button-label="'Back To Top'"/> -->

    <summary-block>
      Facilitator’s initial talking point comes here.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut.
    </summary-block>

    <ul class="story-list">
      <story-list-item
        :category-name="'BUSINESS'"
        :title="'Future Factory 4.0'"
        :thumbnail-filename="'future-factory-thumbnail.png'"/>
    </ul>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from './MainHeader';
import SummaryBlock from './SummaryBlock';
import StoryListItem from './StoryListItem';

export default {
  name: 'Stories',
  components: {
    MainHeader,
    SummaryBlock,
    StoryListItem,
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
ul.story-list
  margin-top: 79px
</style>
