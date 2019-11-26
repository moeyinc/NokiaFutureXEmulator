<template>
  <div class="stories page">
    <PageHeader title="Future X Scenarios" />

    <PreshowModuleListContainer
      class="preshow-modules-layout"
    />

    <section class="story-section">
      <h5 class="story-list-title">
        Scenarios
      </h5>
      <div class="story-list">
        <StoryListItem
          v-for="story in stories"
          :key="story.id"
          class="story-list-item"
          :category-name="story.category"
          :title="story.title"
          :disabled="story.disabled"
          :thumbnail-filename="story.catchImageFilename"
          @select="startStory(story)"
        />
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '@comps/PageHeader';
import StoryListItem from '@comps/StoryListItem';
import storyPageMixin from '@/mixins/story-page';
import PreshowModuleListContainer
  from '@comps/preshow-modules/PreshowModuleListContainer';
import {mapState, mapMutations} from 'vuex';

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
        case 'stories-storyId-section-sectionId':
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
    PreshowModuleListContainer,
    StoryListItem,
  },
  mixins: [storyPageMixin],
  computed: {
    ...mapState(['stories']),
  },
  mounted() {
    this.resetStoryTempStates();
    this.resetSectionTempStates();
  },
  methods: {
    ...mapMutations(['resetStoryTempStates', 'resetSectionTempStates']),
    startStory(story) {
      this.$store.dispatch('startStory', story.id)
          .then(() => {
            this.$router.push('/stories/' + story.id + '/section/1');
          })
          .catch(console.error);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@styles/colors'

.stories
  .preshow-modules-layout
    position: absolute
    width: 100%
    top: 170px

  section.story-section
    position: absolute
    bottom: 53px
    padding: 0 80px
    h5.story-list-title
      font-size: 20px
      line-height: 30px
      color: $secondary-border-color
      margin-bottom: 15px
    .story-list
      display: flex
      justify-content: flex-start
      .story-list-item
        &:not(:first-child)
          margin-left: 40px
</style>
