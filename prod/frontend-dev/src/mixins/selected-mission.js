export default {
  computed: {
    storyId() {
      return parseInt(this.$route.params.story_id);
    },
    missionId() {
      return parseInt(this.$route.params.mission_id);
    },
    selectedMission() {
      return this.$store.getters.getSelectedMission({
        storyId: this.storyId,
        missionId: this.missionId,
      });
    },
  },
};
