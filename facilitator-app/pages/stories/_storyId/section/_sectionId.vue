<template>
  <div class="section page">
    <SectionHeader
      :story-title="selectedStory.title"
      :section-id="sectionId"
      :section-title="selectedSection.title"
      @jump-exit-button-clicked="overlay = 'jumpexit'"
    />

    <!-- eslint-disable -->
    <p class="section-text">{{ selectedSection.text }}</p>
    <!-- eslint-enable -->

    <NetworkTypeSelection
      v-if="selectedSection.networkTypeSelection"
      class="selection-container"
    />

    <NetworkStructureSelection
      v-if="selectedSection.networkStructure"
      class="selection-container"
    />

    <DistributerSelection
      v-if="selectedSection.distributerSelection"
      class="selection-container"
    />

    <transition name="fade">
      <CraneControl
        v-if="selectedSection.craneControl &&
          inStoryUIParams.displaySwayControl"
        class="selection-container"
      />
    </transition>

    <transition name="fade">
      <ActionButton
        v-show="showStartMissionButton"
        label="Start"
        :additional-style="{
          width: '240px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '90px',
        }"
        @click="startMission"
      />
    </transition>

    <NetworkVisualizationController
      v-if="selectedSection.networkVisualization
        && selectedSection.networkVisualization.length > 0"
      :has-wireless-button="
        selectedSection.networkVisualization.includes('wireless')
      "
      :has-wired-button="selectedSection.networkVisualization.includes('wired')"
    />

    <transition name="pop-slide-left">
      <ActionButton
        v-show="inSectionReadyToProceed"
        fixed
        :label="isLastSection ? 'End' : 'Next'"
        :sublabel="selectedSection.nextText"
        @click="isLastSection ? endStory() : gotoSection(sectionId + 1)"
      />
    </transition>

    <transition name="pop-slide-left">
      <ActionButton
        v-show="showAcceptButton"
        fixed
        label="Accept"
        @click="accept"
      />
    </transition>

    <transition name="pop-slide-left">
      <SubActionButton
        v-show="showReplayButton"
        class="replay-button"
        fixed
        right
        back
        large
        label="Redo"
        :yield-to-action-button="true"
        @click="replay"
      />
    </transition>

    <transition :name="'fade'">
      <JumpExitOverlay
        v-if="overlay === 'jumpexit'"
        :sections="selectedStory.sections"
        :selected-section-id="sectionId"
        @close="overlay = null"
        @jump="gotoSection"
        @exit="endStory"
      />
    </transition>

    <transition :name="'fade'">
      <CalibrationOverlay
        v-if="overlay === 'calibration'"
        @close="overlay = null"
      >
        <ActionButton
          fixed
          label="Auto Mode"
          :additional-style="{
            left: '50%',
            transform: 'translateX(-50%)',
            height: '62px',
            fontSize: '30px',
            width: '220px',
          }"
          @click="autoplay"
        />
      </CalibrationOverlay>
    </transition>
  </div>
</template>

<script>
import SectionHeader from '@comps/SectionHeader';
import ActionButton from '@comps/buttons/ActionButton';
import SubActionButton from '@comps/buttons/SubActionButton';
import NetworkTypeSelection from '@comps/buttons/NetworkTypeSelection';
import NetworkStructureSelection
  from '@comps/buttons/NetworkStructureSelection';
import CraneControl from '@comps/buttons/CraneControl';
import NetworkVisualizationController
  from '@comps/buttons/NetworkVisualizationController';
import DistributerSelection from '@comps/buttons/DistributerSelection';
import JumpExitOverlay from '@comps/overlays/JumpExitOverlay';
import CalibrationOverlay from '@comps/overlays/CalibrationOverlay';
import storyPageMixin from '@/mixins/story-page';
import {mapState, mapMutations} from 'vuex';

export default {
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
        case 'stories':
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
    NetworkTypeSelection,
    NetworkStructureSelection,
    CraneControl,
    NetworkVisualizationController,
    DistributerSelection,
    CalibrationOverlay,
  },
  mixins: [
    storyPageMixin,
  ],
  data() {
    return {
      acceptedMission: false,
      overlay: null,
      isReadyToStartMission: true,
    };
  },
  computed: {
    ...mapState([
      'inSectionReadyToProceed',
      'inSectionMissionState',
      'inStoryUIParams',
    ]),
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
    returnHash() {
      return this.$route.hash === '#return';
    },
    showReplayButton() {
      return this.selectedSection.replayButton &&
        this.inSectionMissionState === 'completed' && !this.acceptedMission;
    },
    showAcceptButton() {
      return this.selectedSection.acceptButton &&
        this.inSectionMissionState === 'completed' && !this.acceptedMission;
    },
    showStartMissionButton() {
      return this.selectedSection.startMissionButton &&
        this.inSectionMissionState === 'not-started' &&
        this.isReadyToStartMission;
    },
  },
  watch: {
    overlay(newVal, oldVal) {
      // for dev
      if (!newVal && oldVal === 'calibration') {
        if (process.env.isDev && this.selectedSection.sleeveCalibration) {
          setTimeout(() => {
            this.updateInSectionMissionState('completed');
            if (!this.selectedSection.acceptButton) {
              this.updateInSectionReadyToProceed(true);
            }
          }, 300);
        }
      }
    },
    acceptedMission(newVal, oldVal) {
      // for dev
      if (newVal && !oldVal) {
        if (process.env.isDev) {
          setTimeout(() => {
            this.updateInSectionReadyToProceed(true);
          }, 300);
        }
      }
    },
  },
  created() {
    // for dev, turn readyToProceed flag on after 300ms
    if (process.env.isDev &&
      !this.selectedSection.sleeveCalibration &&
      !this.selectedSection.startMissionButton
    ) {
      setTimeout(() => {
        this.updateInSectionReadyToProceed(true);
      }, 300);
    }

    // if returning from other pages, don't reset
    // readyToProceed and completedMission flags
    if (!this.returnHash) {
      this.resetSectionTempStates();
    }

    // show calibtration overlay if needed
    if (this.selectedSection.sleeveCalibration && !this.returnHash) {
      setTimeout(() => {
        this.overlay = 'calibration';
      }, 400);
    }

    // wired value always starts with false
    this.updateInStoryNetworkViz({key: 'wired', value: false});

    // crane control always starts with false
    this.updateInStoryUIParams({swayControl: false, displaySwayControl: false});
  },
  methods: {
    ...mapMutations([
      'updateInSectionReadyToProceed',
      'updateInSectionMissionState',
      'resetSectionTempStates',
      'updateInStoryNetworkViz',
      'updateInStoryUIParams',
    ]),
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
            if (this.selectedSection.sleeveCalibration) {
              this.overlay = 'calibration';
            }
            if (this.selectedSection.craneControl) {
              this.updateInStoryUIParams({
                swayControl: false,
                displaySwayControl: false,
              });
            }
            const nextState = this.selectedSection.startMissionButton
              ? 'not-started' : 'ongoing';
            this.updateInSectionMissionState(nextState);
            this.updateInSectionReadyToProceed(false);

            // wait a bit to show StartMission button to avoid layout collapse
            this.isReadyToStartMission = false;
            setTimeout(() => {
              this.isReadyToStartMission = true;
            }, 300);
          })
          .catch(console.error);
    },
    accept() {
      this.$store.dispatch('accept')
          .then(() => {
            this.acceptedMission = true;
          })
          .catch(console.error);
    },
    startMission() {
      this.$store.dispatch('startMission')
          .then(() => {
            this.updateInSectionMissionState('ongoing');
            if (process.env.isDev) {
              if (this.selectedSection.craneControl) {
                setTimeout(() => {
                  this.updateInStoryUIParams({displaySwayControl: true});
                }, 300);
              }
              setTimeout(() => {
                this.updateInSectionMissionState('completed');
                this.updateInSectionReadyToProceed(true);
              }, 1200);
            }
          })
          .catch(console.error);
    },
    endStory() {
      this.$store.dispatch('endStory')
          .then(() => {
            this.$router.push('/stories');
            this.overlay = null;
            const name = 'city-top';
            this.$store.commit('updateSelectedPreshowModuleName', name);
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
p.section-text
  overflow-y: auto
  -webkit-overflow-scrolling: touch
  overflow-scrolling: touch
  white-space: pre-line
  padding: 0 80px
  font-size: 20px
  line-height: 30px
  color: white

.selection-container
  padding: 0 80px
  margin-top: 40px
</style>
