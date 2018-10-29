<!-- =================================================
 Template
================================================== -->
<template>
  <div class="story-start">

    <main-header
      :title="selectedStory.title"
      :has-nav-bar="true"
      :category-name="selectedStory.category"
      :back-button-label="'Back To List'"
      @back-button-clicked="jumpTo('Stories', {transition: 'slide-right'})"/>

    <summary-block>
      {{selectedStory.summary}}
    </summary-block>

    <div
      class="catch"
      :style="{backgroundImage: 'url(' +
        require('@/assets/images/' + selectedStory.catchImageFilename) +
        ')'}">
    </div>

    <floating-action-button-container>
      <action-button
        :label="'Start Story'"
        :enabled="true"
        @clicked="startStory('interactive')"/>
    </floating-action-button-container>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from '@/components/MainHeader';
import SummaryBlock from '@/components/SummaryBlock';
import FloatingActionButtonContainer from
  '@/components/FloatingActionButtonContainer';
import ActionButton from '@/components/ActionButton';
import storyPageMixin from '@/mixins/story-page';

export default {
  name: 'StoryStart',
  components: {
    MainHeader,
    SummaryBlock,
    FloatingActionButtonContainer,
    ActionButton,
  },
  mixins: [storyPageMixin],
  computed: {
    storyId() {
      return parseInt(this.$route.params.story_id);
    },
    selectedStory() {
      return this.$store.getters.getSelectedStory(this.storyId);
    },
  },
  methods: {
    startStory(mode) {
      this.$store.dispatch('startStory', {mode, storyId: this.storyId})
          .then(() => {
            if (mode === 'interactive') {
              this.jumpTo('Intro', {
                story_id: this.storyId,
                transition: 'slide-left',
              });
            } else if (mode === 'movie') {
              this.jumpTo('Prerendered', {
                story_id: this.storyId,
                transition: 'slide-left',
              });
            }
          })
          .catch((err) => {
            alert('There was error on publishing MQTT message', err);
          });
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
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
