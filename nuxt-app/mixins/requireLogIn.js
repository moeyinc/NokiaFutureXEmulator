import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState(['isLoggedIn']),
  },
  created() {
    if (!this.isLoggedIn) {
      console.log('Not logged in!');
      this.$router.push('/');
    }
  },
};
