export default {
  methods: {
    jumpTo(destination, params) {
      this.$router.push({name: destination, params: params});
    },
    jumpToPath(path, params) {
      this.$router.push({path: path, params: params});
    },
  },
};
