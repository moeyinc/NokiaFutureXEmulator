<template>
  <div class="story-start">
    <MainHeader
      :title="selectedStory.title"
      :has-nav-bar="true"
      :category-name="selectedStory.category"
      :back-button-label="'Back To List'"
      @back-button-clicked="$router.push('/stories')"
    />

    <SummaryBlock :summary-text="selectedStory.summary" />

    <div
      class="catch"
      :style="{backgroundImage: 'url(' +
        require('@images/' + selectedStory.catchImageFilename) +')'}"
    />

    <FloatingActionButtonContainer>
      <ActionButton
        :label="'Start Story'"
        :enabled="true"
        @clicked="startStory"
      />
    </FloatingActionButtonContainer>
  </div>
</template>

<script>
import MainHeader from '@comps/MainHeader';
import SummaryBlock from '@comps/SummaryBlock';
import FloatingActionButtonContainer from
  '@comps/FloatingActionButtonContainer';
import ActionButton from '@comps/ActionButton';
import storyPageMixin from '@/mixins/story-page';

export default {
  name: 'StoryStart',
  layout: 'logged-in',
  components: {
    MainHeader,
    SummaryBlock,
    FloatingActionButtonContainer,
    ActionButton,
  },
  mixins: [storyPageMixin],
  computed: {
    storyId() {
      return parseInt(this.$nuxt.$route.params.storyId);
    },
    selectedStory() {
      return this.$store.getters.getSelectedStory(this.storyId);
    },
  },
  methods: {
    startStory() {
      this.$store.dispatch('startStory', {storyId: this.storyId})
          .then(() => {
            this.$router.push('/stories/' + this.storyId + '/section/1');
          })
          .catch(console.error);
    },
  },
};
</script>

<style lang="stylus" scoped>
.story-start
  .catch
    position: fixed
    top: 313px
    // left: 280px
    width: 832px
    height: 381px
    background-size: cover
    background-repeat: no-repeat
    background-position: right center
</style>
