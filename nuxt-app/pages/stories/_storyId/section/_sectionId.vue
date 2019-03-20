<template>
  <div class="talking-points page">
    <SectionHeader
      :story-title="selectedStory.title"
      :section-id="sectionId"
      :section-title="selectedSection.title"
      @jump-exit-button-clicked="overlay = 'confirmation'"
    />

    <!-- eslint-disable -->
    <p class="section-text">{{ selectedSection.text }}</p>
    <!-- eslint-enable -->

    <ARToggleButton
      v-if="selectedSection.control === 'ar'"
      :on="inStoryAREnabled"
    />

    <NetworkToggleButton
      v-if="selectedSection.control === 'network'"
      :selected-network="inStorySelectedNetwork"
    />

    <FixedActionButton
      :label="isLastSection ? 'End' : 'Next'"
      @click="isLastSection ? endStory() : proceed()"
    />

    <ConfirmationModalOverlay
      v-if="overlay === 'confirmation'"
      :message="'Are you sure to end story?'"
      @close="overlay = null"
      @execute="endStory()"
    />
  </div>
</template>

<script>
import SectionHeader from '@comps/SectionHeader';
import FixedActionButton from '@comps/FixedActionButton';
import ARToggleButton from '@comps/ARToggleButton';
import NetworkToggleButton from '@comps/NetworkToggleButton';
import ConfirmationModalOverlay from
  '@comps/overlays/ConfirmationModalOverlay';
import EventBus from '@/event-bus';
import storyPageMixin from '@/mixins/story-page';
import {mapState} from 'vuex';

export default {
  name: 'TalkingPoints',
  layout: 'with-side-menu',
  transition: (to, from) => {
    if (!to || !from) return 'fade';
    const thisPageName = 'stories-storyId-section-sectionId';
    if (to.name === thisPageName) {
      // when routing to this page,
      // if the previous page is story-start page apply slide-left animation
      // if the origin is previous section page,
      // apply slide-left animation.
      // if the origin is next section page,
      // apply slide-right animation.
      switch (from.name) {
        case 'stories-storyId':
          return 'slide-left';
        case thisPageName:
          const mySectionId = to.params.sectionId;
          const prevSectionId = from.params.sectionId;
          if (prevSectionId > mySectionId) return 'slide-right';
          else if (prevSectionId < mySectionId) return 'slide-left';
        default:
          return 'fade';
      }
    } else if (from.name === thisPageName) {
      // when routing to other pages,
      // if the destination is previous section page,
      // apply slide-right animation.
      // if the destination is next section page,
      // apply slide-left animation.
      switch (to.name) {
        case thisPageName:
          const mySectionId = from.params.sectionId;
          const nextSectionId = to.params.sectionId;
          if (nextSectionId > mySectionId) return 'slide-right';
          else if (nextSectionId < mySectionId) return 'slide-left';
        default:
          return 'fade';
      }
    }
  },
  components: {
    SectionHeader,
    FixedActionButton,
    ConfirmationModalOverlay,
    ARToggleButton,
    NetworkToggleButton,
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
    ...mapState(['inStoryAREnabled', 'inStorySelectedNetwork']),
    storyId() {
      return parseInt(this.$nuxt.$route.params.storyId);
    },
    sectionId() {
      return parseInt(this.$nuxt.$route.params.sectionId);
    },
    selectedStory() {
      return this.$store.getters.selectedStory(this.storyId);
    },
    selectedSection() {
      return this.$store.getters.selectedSection({
        storyId: this.storyId,
        sectionId: this.sectionId,
      });
    },
    isLastSection() {
      return this.$store.getters.isLastSection({
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
      EventBus.$off('ready-to-proceed');
    },
    endStory() {
      this.$store.dispatch('endStory')
          .then(() => {
            this.$router.push('/stories');
          })
          .catch(console.error);
    },
    proceed() {
      const nextSectionId = this.sectionId + 1;
      this.$store.dispatch('gotoSection', nextSectionId)
          .then(() => {
            const path = '/stories/' + this.storyId +
              '/section/' + nextSectionId;
            this.$router.push(path);
          })
          .catch(console.error);
    },
  },
};
</script>

<style lang="stylus" scoped>
p.section-text
  overflow-y: scroll
  -webkit-overflow-scrolling: touch
  overflow-scrolling: touch
  white-space: pre-line
  padding: 0 80px
  font-size: 20px
  line-height: 30px
  color: white
</style>
