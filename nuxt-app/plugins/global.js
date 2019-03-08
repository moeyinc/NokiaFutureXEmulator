import Vue from 'vue';

Vue.mixin({
  methods: {
    jumpTo(destination, params, hash) {
      this.$router.push({name: destination, params: params, hash: hash});
    },
  },
});
