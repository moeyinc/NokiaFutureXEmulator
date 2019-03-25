<template>
  <div class="story-start page">
    <PageHeader :title="selectedStory.title" />

    <SummaryBlock :summary-text="selectedStory.summary" />

    <div
      class="catch"
      :style="{backgroundImage: 'url(' +
        require('@images/' + selectedStory.catchImageFilename) +')'}"
    />

    <SubActionButton
      fixed
      back
      label="Back to List"
      @click="backToList"
    />

    <transition name="pop-slide-left">
      <ActionButton
        v-show="readyToProceed"
        fixed
        label="Start"
        @click="startStory"
      />
    </transition>
  </div>
</template>

<script>
import PageHeader from '@comps/PageHeader';
import SummaryBlock from '@comps/SummaryBlock';
import ActionButton from '@comps/buttons/ActionButton';
import SubActionButton from '@comps/buttons/SubActionButton';
import storyPageMixin from '@/mixins/story-page';

export default {
  name: 'StoryStart',
  layout: 'with-side-menu',
  transition: (to, from) => {
    if (!to || !from) return 'fade';
    const thisPageName = 'stories-storyId';
    if (to.name === thisPageName) {
      // when routing to this page,
      // if the previous page is stories page or
      // story section page, apply slide-right animation
      switch (from.name) {
        case 'stories':
          return 'slide-left';
        default:
          return 'fade';
      }
    } else if (from.name === thisPageName) {
      // when routing to other pages,
      // if the destination is stories page,
      // apply slide-left animation
      switch (to.name) {
        case 'stories':
          return 'slide-right';
        default:
          return 'fade';
      }
    }
  },
  components: {
    PageHeader,
    SummaryBlock,
    ActionButton,
    SubActionButton,
  },
  mixins: [storyPageMixin],
  data() {
    return {
      readyToProceed: false,
    };
  },
  computed: {
    storyId() {
      return parseInt(this.$nuxt.$route.params.storyId);
    },
    selectedStory() {
      return this.$store.getters.selectedStory(this.storyId);
    },
  },
  mounted() {
    setTimeout(() => {
      this.readyToProceed = true;
    }, 500);
  },
  methods: {
    startStory() {
      this.$store.dispatch('startStory', this.storyId)
          .then(() => {
            this.$router.push('/stories/' + this.storyId + '/section/1');
          })
          .catch(console.error);
    },
    backToList() {
      this.$router.push('/stories');
    },
  },
};
</script>

<style lang="stylus" scoped>
.story-start
  .catch
    position: absolute
    bottom: 120px
    right: 0
    width: 832px
    height: 381px
    background-size: cover
    background-repeat: no-repeat
    background-position: right center
</style>
