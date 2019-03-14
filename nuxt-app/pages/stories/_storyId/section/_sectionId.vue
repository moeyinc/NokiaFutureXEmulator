<template>
  <div class="talking-points">
    <MainHeader
      :title="selectedStory.title"
      :subtitle="selectedSection.title"
      :has-nav-bar="true"
      :category-name="selectedStory.category"
      :back-button-label="'End Story'"
      @back-button-clicked="overlay = 'confirmation'"
    />

    <SummaryBlock
      v-for="(talkingPoint, index) in selectedSection.talkingPoints"
      :key="index"
      class="talk-point"
      :talk-point-label="talkingPoint.heading"
      :summary-text="talkingPoint.text"
    />

    <FloatingActionButtonContainer>
      <ActionButton
        :label="'Next'"
        :icon-filename="'skip-icon.png'"
        :enabled="true"
        @clicked="skip()"
      />
    </FloatingActionButtonContainer>

    <ConfirmationModalOverlay
      v-if="overlay === 'confirmation'"
      :message="'Are you sure to end story?'"
      @close="overlay = null"
      @execute="endStory()"
    />
  </div>
</template>

<script>
import MainHeader from '@comps/MainHeader';
import SummaryBlock from '@comps/SummaryBlock';
import FloatingActionButtonContainer from
  '@comps/FloatingActionButtonContainer';
import ActionButton from '@comps/ActionButton';
import ConfirmationModalOverlay from
  '@comps/overlays/ConfirmationModalOverlay';
import EventBus from '@/event-bus';
import storyPageMixin from '@/mixins/story-page';

export default {
  name: 'TalkingPoints',
  layout: 'logged-in',
  components: {
    MainHeader,
    SummaryBlock,
    FloatingActionButtonContainer,
    ActionButton,
    ConfirmationModalOverlay,
  },
  mixins: [
    storyPageMixin,
  ],
  data() {
    return {
      playing: true,
      overlay: null,
    };
  },
  computed: {
    storyId() {
      return parseInt(this.$nuxt.$route.params.storyId);
    },
    sectionId() {
      return parseInt(this.$nuxt.$route.params.sectionId);
    },
    selectedSection() {
      return this.$store.getters.getSelectedSection({
        storyId: this.storyId,
        sectionId: this.sectionId,
      });
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
      // ready-to-proceed message
      EventBus.$on('ready-to-proceed', () => {
        console.log('ready-to-proceed');
      });
    },
    removeEventListeners() {
      EventBus.$off('eady-to-proceed');
    },
    endStory() {
      this.$store.dispatch('endStory')
          .then(() => {
            this.$router.push('/stories');
          })
          .catch(console.error);
    },
  },
};
</script>

<style lang="stylus" scoped>
.talking-points
  padding-bottom: 150px
  overflow-y: scroll
  -webkit-overflow-scrolling: touch
  overflow-scrolling: touch

  .talk-point
    margin-bottom: 50px
</style>
