export default {
  created() {
    this.$store.commit('updateLastStoryPage', {
      name: this.$route.name,
      story_id: this.$route.params.story_id,
      mission_id: this.$route.params.mission_id,
    });
  },
};
