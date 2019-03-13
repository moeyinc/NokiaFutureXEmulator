<template>
  <div class="post-mission">
    <main-header
      :title="selectedStory.title"
      :subtitle="selectedMission.pageSubtitle"
      :has-nav-bar="true"
      :category-name="selectedStory.category"
      :back-button-label="'End Story'"
      @back-button-clicked="overlay = 'confirmation'"
    />

    <div class="wrapper">
      <action-headline>Continue Mission or Proceed Story?</action-headline>
      <div class="post-mission-button-container">
        <large-select-button
          v-if="selectedMission.replayable"
          class="left-button"
          :width="320"
          :height="320"
          :icon-filename="'replay-icon.png'"
          :icon-filename-active="'replay-icon-active.png'"
          :label="'Play Mission Again'"
          @clicked="replayMission()"
        />
        <large-select-button
          :width="320"
          :height="320"
          :icon-filename="'proceed-icon.png'"
          :icon-filename-active="'proceed-icon-active.png'"
          :label="'Proceed to Next'"
          @clicked="proceedToNext()"
        />
      </div>
    </div>

    <confirmation-modal-overlay
      v-if="overlay === 'confirmation'"
      :message="'Are you sure to end story?'"
      @close="overlay = null"
      @execute="endStory()"
    />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import ActionHeadline from '@/components/ActionHeadline';
import LargeSelectButton from '@/components/LargeSelectButton';
import ConfirmationModalOverlay from
  '@/components/pages/overlays/ConfirmationModalOverlay';
import selectedStoryMixin from '@/mixins/selected-story';
import selectedMissionMixin from '@/mixins/selected-mission';
import storyPageMixin from '@/mixins/story-page';

export default {
  name: 'MissionControls',
  components: {
    MainHeader,
    ActionHeadline,
    LargeSelectButton,
    ConfirmationModalOverlay,
  },
  mixins: [
    selectedStoryMixin,
    selectedMissionMixin,
    storyPageMixin,
  ],
  data() {
    return {
      overlay: null,
    };
  },
  methods: {
    replayMission() {
      this.$store.dispatch('replayMission')
          .then(() => {
            this.jumpTo('PlayerModeSelection', {
              storyId: this.storyId,
              missionId: this.missionId,
              transition: 'slide-right',
            });
          })
          .catch((err) => {
            alert('There was error on publishing MQTT message', err);
          });
    },
    proceedToNext() {
      if (this.missionId === 1) {
        if (this.selectedStory.interlude) {
          // if this story has interlude, send the message to start it
          this.$store.dispatch('playStoryInterlude')
              .then(() => {
                this.jumpTo('Interlude', {
                  story_id: this.storyId,
                  transition: 'slide-left',
                });
              })
              .catch((err) => {
                alert('There was error on publishing MQTT message', err);
              });
        } else {
          // move to mission 2 player mode selection screen
          this.$store.dispatch('proceed')
              .then(() => {
                this.jumpTo('PlayerModeSelection', {
                  story_id: this.storyId,
                  mission_id: this.missionId + 1,
                  transition: 'slide-left',
                });
              })
              .catch((err) => {
                alert('There was error on publishing MQTT message', err);
              });
        }
      } else if (this.missionId === 2) {
        // if this is the mission 2, send a message to start outro
        this.$store.dispatch('playStoryOutro')
            .then(() => {
              this.jumpTo('Outro', {
                story_id: this.storyId,
                transition: 'slide-left',
              });
            })
            .catch((err) => {
              alert('There was error on publishing MQTT message', err);
            });
      }
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
  },
};
</script>

<style lang="stylus" scoped>
.post-mission
  .wrapper
    padding: 0 80px

    .post-mission-button-container
      display: flex
      flex-direction: row

      .left-button
        margin-right: 36px
</style>
