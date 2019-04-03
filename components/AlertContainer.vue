<template>
  <div class="alert-container">
    <Alert
      v-for="(alertMessage, index) in alertMessages"
      :key="index"
      :message="alertMessage.message"
      :type="alertMessage.type"
      :display="alertMessage.display"
      @close="closeAlert(index)"
    />
  </div>
</template>

<script>
import Alert from './Alert';
import {mapState} from 'vuex';

export default {
  components: {
    Alert,
  },
  computed: {
    ...mapState(['alertMessages']),
  },
  methods: {
    closeAlert(index) {
      this.$store.commit('closeAlertMessage', index);
    },
  },
};
</script>

<style scoped lang="stylus">
.alert-container
  z-index: 9998
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
  display: flex
  flex-direction: column
</style>
