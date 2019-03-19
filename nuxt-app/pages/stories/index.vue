<template>
  <div class="stories">
    <MainHeader title="Story Selection" />

    <SummaryBlock
      :summary-text="'Talking point comes here. Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua. Ut enim ad minim veniam'"
    />

    <div class="story-list">
      <StoryListItem
        v-for="story in stories"
        :key="story.id"
        class="story-list-item"
        :category-name="story.category"
        :title="story.title"
        :disabled="story.disabled"
        :thumbnail-filename="story.catchImageFilename"
        @select="selectStory(story)"
      />
    </div>
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
  layout: 'with-side-menu',
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
  position: relative
  width: 100%
  height: 100%
  .story-list
    position: absolute
    width: 100%
    bottom: 109px
    padding: 0 80px
    display: flex
    justify-content: space-between
</style>
