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
      @back-button-clicked="overlay = 'confirmation'"
    />

    <div v-if="tp">
      <summary-block
        v-for="(talkingPoint, index) in tp.talkingPoints"
        :key="index"
        class="talk-point"
        :talk-point-label="talkingPoint.heading"
        :summary-text="talkingPoint.text"
      />
    </div>

    <floating-action-button-container>
      <action-button
        v-show="playing"
        :key="'pause'"
        style="margin-right: 30px"
        :label="'Pause'"
        :icon-filename="'pause-icon.png'"
        :enabled="true"
        @clicked="pause()"
      />
      <action-button
        v-show="!playing"
        :key="'play'"
        style="margin-right: 30px"
        :label="'Play'"
        :icon-filename="'play-icon.png'"
        :enabled="true"
        @clicked="play()"
      />
      <action-button
        v-if="storyId === 1"
        :label="'Skip'"
        :icon-filename="'skip-icon.png'"
        :enabled="true"
        @clicked="skip()"
      />
    </floating-action-button-container>

    <confirmation-modal-overlay
      v-if="overlay === 'confirmation'"
      :message="'Are you sure to end story?'"
      @close="overlay = null"
      @execute="endStory()"
    />
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
import ConfirmationModalOverlay from
  '@/components/pages/overlays/ConfirmationModalOverlay';
import EventBus from '@/event-bus';
import selectedStoryMixin from '@/mixins/selected-story';
import storyPageMixin from '@/mixins/story-page';

export default {
  name: 'TalkingPoints',
  components: {
    MainHeader,
    SummaryBlock,
    FloatingActionButtonContainer,
    ActionButton,
    ConfirmationModalOverlay,
  },
  mixins: [
    selectedStoryMixin,
    storyPageMixin,
  ],
  data() {
    return {
      playing: true,
      overlay: null,
    };
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
        case 'Teaser':
          keyName = 'teaser';
          break;
      }
      if (!keyName) return;
      return this.selectedStory[keyName];
    },
  },
  created() {
    this.setEventListeners();
  },
  destroyed() {
    this.removeEventListeners();
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
            transition: 'slide-left',
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
            transition: 'slide-left',
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
    removeEventListeners() {
      EventBus.$off('completed-story-intro');
      EventBus.$off('completed-story-interlude');
      EventBus.$off('completed-story');
    },
    endStory() {
      this.$store.dispatch('endStory')
          .then(() => {
            this.jumpTo('Stories', {transition: 'fade'});
          })
          .catch((err) => {
            console.error('There was error on sending message', err);
          });
    },
    play() {
      this.$store.dispatch('play')
          .then(() => {
            this.playing = true;
          })
          .catch((err) => {
            console.error('There was error on sending message', err);
          });
    },
    pause() {
      this.$store.dispatch('pause')
          .then(() => {
            this.playing = false;
          })
          .catch((err) => {
            console.error('There was error on sending message', err);
          });
    },
    skip() {
      const routeName = this.$route.name;
      if (routeName === 'Intro') {
        this.$store.dispatch('skip')
            .then(() => {
              this.jumpTo('PlayerModeSelection', {
                story_id: this.storyId,
                mission_id: 1,
                transition: 'slide-left',
              });
            })
            .catch((err) => {
              console.error('There was error on sending message', err);
            });
      } else if (routeName === 'Outro') {
        this.endStory();
      }
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.talking-points
  padding-bottom: 150px
  overflow-y: scroll
  -webkit-overflow-scrolling: touch
  overflow-scrolling: touch

  .talk-point
    margin-bottom: 50px
</style>
