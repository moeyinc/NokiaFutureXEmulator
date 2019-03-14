export default {
  created() {
    this.$store.commit('updateLastStoryPage', this.$nuxt.$route);
  },
};
