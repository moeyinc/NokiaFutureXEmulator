export default {
  computed: {
    storyId() {
      return parseInt(this.$route.params.story_id);
    },
    selectedStory() {
      return this.$store.getters.getSelectedStory(this.storyId);
    },
  },
};
