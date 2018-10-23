<!-- =================================================
 Template
================================================== -->
<template>
  <div class="stories">
    <main-header
      :title="'Stories'"
      :has-nav-bar="false"/>

    <summary-block>
      Facilitator’s initial talking point comes here.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut.
    </summary-block>

    <ul class="story-list">
      <story-list-item
        v-for="story in getStories"
        :key="story.storyId"
        :category-name="story.category"
        :title="story.title"
        :thumbnail-filename="story.catchImageFilename"
        @clicked="jumpTo('StoryStart', {
          story_id: story.storyId,
          transition: 'fade'})"/>
    </ul>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from '@/components/MainHeader';
import SummaryBlock from '@/components/SummaryBlock';
import StoryListItem from '@/components/StoryListItem';
import storyPageMixin from '@/mixins/story-page';

export default {
  name: 'Stories',
  components: {
    MainHeader,
    SummaryBlock,
    StoryListItem,
  },
  mixins: [storyPageMixin],
  computed: {
    getStories() {
      return this.$store.getters.getStories;
    },
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
