<template>
  <div class="stories page">
    <PageHeader title="Future X Scenarios" />

    <SummaryBlock
      :summary-text="'From here we have a view of the Future City. ' +
        'A fast, reliable 5G network connects everything and allows us ' +
        'to collect the information we need. An entire city can be ' +
        'efficiently managed by fewer people and it is more secure than ever.'"
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

    <SubActionButton
      fixed
      back
      label="Replay Intro"
      @click="replayIntro"
    />
  </div>
</template>

<script>
import PageHeader from '@comps/PageHeader';
import SummaryBlock from '@comps/SummaryBlock';
import StoryListItem from '@comps/StoryListItem';
import storyPageMixin from '@/mixins/story-page';
import SubActionButton from '@comps/buttons/SubActionButton';
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
        case 'intro':
          return 'slide-right';
        default:
          return 'fade';
      }
    }
  },
  components: {
    PageHeader,
    SummaryBlock,
    StoryListItem,
    SubActionButton,
  },
  mixins: [storyPageMixin],
  computed: {
    ...mapState(['stories']),
  },
  mounted() {
    this.$store.commit('resetStoryTempStates');
  },
  methods: {
    selectStory(story) {
      this.$router.push('/stories/' + story.id);
    },
    replayIntro() {
      this.$store.dispatch('startIntro')
          .then(() => {
            this.$router.push({
              path: '/intro',
              hash: '#replay',
            });
          })
          .catch(console.error);
    },
  },
};
</script>

<style lang="stylus" scoped>
.stories
  .story-list
    position: absolute
    width: 100%
    bottom: 150px
    padding: 0 80px
    display: flex
    justify-content: space-between
</style>
