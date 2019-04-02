<template>
  <div class="talking-points page">
    <SectionHeader
      :story-title="selectedStory.title"
      :section-id="sectionId"
      :section-title="selectedSection.title"
      @jump-exit-button-clicked="overlay = 'jumpexit'"
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

    <transition name="pop-slide-left">
      <ActionButton
        v-show="readyToProceed"
        fixed
        :label="isLastSection ? 'End' : 'Next'"
        @click="isLastSection ? endStory() : gotoSection(sectionId + 1)"
      />
    </transition>

    <SubActionButton
      v-if="selectedSection.replayButton"
      class="replay-button"
      fixed
      back
      large
      label="Start Over"
      :additional-style="subActionButtonPositionStyle"
      @click="replay"
    />

    <JumpExitOverlay
      v-if="overlay === 'jumpexit'"
      :sections="selectedStory.sections"
      :selected-section-id="sectionId"
      @close="overlay = null"
      @jump="gotoSection"
      @exit="endStory"
    />

    <CalibrationOverlay
      v-if="overlay === 'calibration'"
      @close="overlay = null"
    >
      <SubActionButton
        fixed
        label="No sleeve operation. AUTO PILOT this task."
        :additional-style="{
          left: '50%',
          transform: 'translateX(-50%)',
        }"
        @click="autoplay"
      />
    </CalibrationOverlay>
  </div>
</template>

<script>
import SectionHeader from '@comps/SectionHeader';
import ActionButton from '@comps/buttons/ActionButton';
import SubActionButton from '@comps/buttons/SubActionButton';
import ARToggleButton from '@comps/buttons/ARToggleButton';
import NetworkToggleButton from '@comps/buttons/NetworkToggleButton';
import JumpExitOverlay from '@comps/overlays/JumpExitOverlay';
import CalibrationOverlay from '@comps/overlays/CalibrationOverlay';
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
      // when routed to this page,
      // if the previous page is story-start page apply slide-left animation
      // if the origin is previous section page,
      // apply slide-left animation.
      // else, apply fade animation.
      switch (from.name) {
        case 'stories-storyId':
          return 'slide-left';
          break;
        case thisPageName:
          const mySectionId = parseInt(to.params.sectionId);
          const prevSectionId = parseInt(from.params.sectionId);
          if (prevSectionId === mySectionId - 1) return 'slide-left';
        default:
          return 'fade';
      }
    } else if (from.name === thisPageName) {
      // when routed to other pages,
      // if the destination is next section page,
      // apply slide-left animation.
      // else, apply fade animation.
      switch (to.name) {
        case thisPageName:
          const mySectionId = parseInt(from.params.sectionId);
          const nextSectionId = parseInt(to.params.sectionId);
          if (nextSectionId === mySectionId + 1) return 'slide-left';
        default:
          return 'fade';
      }
    }
  },
  components: {
    SectionHeader,
    ActionButton,
    SubActionButton,
    JumpExitOverlay,
    ARToggleButton,
    NetworkToggleButton,
    CalibrationOverlay,
  },
  mixins: [
    storyPageMixin,
  ],
  data() {
    return {
      readyToProceed: false,
      overlay: null,
      transitionDone: false,
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
    subActionButtonPositionStyle() {
      const bottom = this.readyToProceed ? '200px' : '60px';
      return {
        left: 'auto',
        right: '80px',
        bottom: bottom,
      };
    },
  },
  watch: {
    overlay(newVal, oldVal) {
      if (!newVal && oldVal === 'calibration') {
        if (process.env.isDev && this.selectedSection.sleeveCalibration) {
          setTimeout(() => {
            this.readyToProceed = true;
          }, 300);
        }
      }
    },
  },
  created() {
    // set event listeners for MQTT messages
    this.setEventListeners();

    // for dev, turn readyToProceed flag on after 500ms
    if (process.env.isDev && !this.selectedSection.sleeveCalibration) {
      setTimeout(() => {
        this.readyToProceed = true;
      }, 300);
    }

    // show claibtration overlay if needed
    if (this.selectedSection.sleeveCalibration) {
      setTimeout(() => {
        this.overlay = 'calibration';
      }, 400);
    }
  },
  destroyed() {
    this.removeEventListeners();
  },
  methods: {
    setEventListeners() {
      EventBus.$on('ready-to-proceed', () => {
        this.readyToProceed = true;
      });
    },
    removeEventListeners() {
      EventBus.$off('ready-to-proceed');
    },
    autoplay() {
      this.$store.dispatch('autoplay')
          .then(() => {
            this.overlay = null;
          })
          .catch(console.error);
    },
    replay() {
      this.$store.dispatch('replay')
          .then(() => {
            this.overlay = 'calibration';
            this.readyToProceed = false;
          })
          .catch(console.error);
    },
    endStory() {
      this.$store.dispatch('endStory')
          .then(() => {
            this.$router.push('/stories');
            this.overlay = null;
          })
          .catch(console.error);
    },
    gotoSection(sectionId) {
      this.$store.dispatch('gotoSection', {
        sectionId,
        storyId: this.storyId,
      })
          .then(() => {
            const path = '/stories/' + this.storyId +
              '/section/' + sectionId;
            this.$router.push(path);
            this.overlay = null;
          })
          .catch(console.error);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@styles/vue-transitions'

p.section-text
  overflow-y: scroll
  -webkit-overflow-scrolling: touch
  overflow-scrolling: touch
  white-space: pre-line
  padding: 0 80px
  font-size: 20px
  line-height: 30px
  color: white

.replay-button
  transition: all duration ease
</style>
