export default {
  methods: {
    jumpTo(destination, params, hash) {
      this.$router.push({name: destination, params: params, hash: hash});
    },
  },
};
