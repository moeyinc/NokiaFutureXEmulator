<!-- =================================================
 Template
================================================== -->
<template>
  <div class="talking-points">

    <main-header
      :title="selectedStory.title"
      :subtitle="tp && tp.pageSubtitle"
      :has-nav-bar="true"
      :category-name="selectedStory.category"
      :back-button-label="'End Story'"
      @back-button-clicked="jumpTo('Stories', {transition: 'fade'})"/>

    <div v-if="tp">
      <summary-block
        v-for="(talkingPoint, index) in tp.talkingPoints"
        :key="index"
        class="talk-point"
        :talk-point-label="talkingPoint.heading">
        {{talkingPoint.text}}
      </summary-block>
    </div>

  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from '@/components/MainHeader';
import SummaryBlock from '@/components/SummaryBlock';
import EventBus from '@/event-bus';
import selectedStoryMixin from '@/mixins/selected-story';

export default {
  name: 'TalkingPoints',
  components: {
    MainHeader,
    SummaryBlock,
  },
  mixins: [
    selectedStoryMixin,
  ],
  created() {
    this.setEventListeners();
  },
  computed: {
    tp() {
      let keyName;
      switch (this.$route.name) {
        case 'Intro':
          keyName = 'intro';
          break;
        case 'Outro':
          keyName = 'outro';
          break;
        case 'Interlude':
          keyName = 'interlude';
          break;
        case 'Prerendered':
          keyName = 'movieVersion';
          break;
      }
      if (!keyName) return;
      return this.selectedStory[keyName];
    },
  },
  methods: {
    setEventListeners() {
      const routeName = this.$route.name;
      // completed-story-intro
      EventBus.$on('completed-story-intro', () => {
        if (routeName === 'Intro') {
          this.jumpTo('PlayerModeSelection', {
            story_id: this.storyId,
            mission_id: 1,
            transition: 'fade',
          });
        } else {
          console.log('No action triggered because Im not on Intro page');
        }
      });

      // completed-story-interlude
      EventBus.$on('completed-story-interlude', () => {
        if (routeName === 'Interlude') {
          this.jumpTo('PlayerModeSelection', {
            story_id: this.storyId,
            mission_id: 2,
            transition: 'fade',
          });
        } else {
          console.log('No action triggered because Im not on Interlude page');
        }
      });

      // completed-story
      EventBus.$on('completed-story', () => {
        if (routeName === 'Outro' || routeName === 'Prerendered') {
          this.jumpTo('Stories', {
            transition: 'fade',
          });
        } else {
          console.log('No action triggered because Im not on Outro or ' +
            ' Prerendered page');
        }
      });
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.talking-points
  .talk-point
    margin-bottom: 50px
</style>
