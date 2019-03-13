<template>
  <div class="stories">
    <MainHeader :title="'Stories'" />

    <SummaryBlock
      :summary-text="'Talk about Future X Factory and ' +
        'introduce yourself as factory\'s tele-manager and tele-operator'"
    />

    <ul class="story-list">
      <StoryListItem
        v-for="story in getStories"
        :key="story.storyId"
        class="story-list-item"
        :category-name="story.category"
        :title="story.title"
        :thumbnail-filename="story.catchImageFilename"
        @select="startStory(story)"
      />
    </ul>
  </div>
</template>

<script>
import MainHeader from '@comps/MainHeader';
import SummaryBlock from '@comps/SummaryBlock';
import StoryListItem from '@comps/StoryListItem';
import storyPageMixin from '@/mixins/story-page';
import {mapGetters} from 'vuex';

export default {
  name: 'Stories',
  layout: 'logged-in',
  components: {
    MainHeader,
    SummaryBlock,
    StoryListItem,
  },
  mixins: [storyPageMixin],
  computed: {
    ...mapGetters(['getStories']),
  },
  methods: {
    startStory(story) {
      this.$router.push('/stories/' + story.storyId);
    },
  },
};
</script>

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
