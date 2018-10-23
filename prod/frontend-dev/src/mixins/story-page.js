export default {
  created() {
    this.$store.commit('updateLastStoryPagePath', this.$route.fullPath);
  },
};
