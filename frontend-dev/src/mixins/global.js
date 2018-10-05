export default {
  methods: {
    jumpTo(destination, params) {
      this.$router.push({name: destination, params: params});
    },
  },
};
