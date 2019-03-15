<template>
  <div class="stories">
    <MainHeader :title="'Stories'" />

    <SummaryBlock
      :summary-text="'Talk about Future X Factory and ' +
        'introduce yourself as factory\'s tele-manager and tele-operator'"
    />

    <ul class="story-list">
      <StoryListItem
        v-for="story in stories"
        :key="story.id"
        class="story-list-item"
        :category-name="story.category"
        :title="story.title"
        :thumbnail-filename="story.catchImageFilename"
        @select="selectStory(story)"
      />
    </ul>
  </div>
</template>

<script>
import MainHeader from '@comps/MainHeader';
import SummaryBlock from '@comps/SummaryBlock';
import StoryListItem from '@comps/StoryListItem';
import storyPageMixin from '@/mixins/story-page';
import {mapState} from 'vuex';

export default {
  name: 'Stories',
  layout: 'logged-in',
  transition: (to, from) => {
    if (!to || !from) return 'fade';
    const thisPageName = 'stories';
    if (to.name === thisPageName) {
      // when routing to this page,
      // if the previous page is story-start page or
      // story section page, apply slide-right animation
      switch (from.name) {
        case 'stories-storyId':
        case 'stories-storyId-section-sectionId':
          return 'slide-right';
        default:
          return 'fade';
      }
    } else if (from.name === thisPageName) {
      // when routing to other pages,
      // if the destination is story-start page,
      // apply slide-left animation
      switch (to.name) {
        case 'stories-storyId':
          return 'slide-left';
        default:
          return 'fade';
      }
    }
  },
  components: {
    MainHeader,
    SummaryBlock,
    StoryListItem,
  },
  mixins: [storyPageMixin],
  computed: {
    ...mapState(['stories']),
  },
  methods: {
    selectStory(story) {
      this.$router.push('/stories/' + story.id);
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
