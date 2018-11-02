<!-- =================================================
 Template
================================================== -->
<template>
  <div class="stories">
    <main-header
      :title="'Stories'"
      :has-nav-bar="false"/>

    <summary-block
      :summary-text="'Talk about Future X Factory and ' +
      'introduce yourself as factory\'s tele-manager and tele-operator'"/>

    <ul class="story-list">
      <story-list-item
        v-for="story in getStories"
        :key="story.storyId"
        class="story-list-item"
        :category-name="story.category"
        :title="story.title"
        :thumbnail-filename="story.catchImageFilename"
        @clicked="jumpTo('StoryStart', {
          story_id: story.storyId,
          transition: 'slide-left'})"/>
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
.stories
  overflow-y: scroll
  -webkit-overflow-scrolling: touch
  overflow-scrolling: touch

  ul.story-list
    margin-top: 79px

    .story-list-item
      margin-bottom: 70px
</style>
