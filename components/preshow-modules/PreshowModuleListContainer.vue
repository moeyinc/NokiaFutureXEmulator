<template>
  <div class="preshow-module-list-container">
    <PreshowModuleList
      label="Ambient Modules"
      :items="ambientModules"
      :selected-preshow-module-name="selectedPreshowModuleName"
      @select="onSelect"
    />
    <PreshowModuleList
      label="Intro Modules"
      :items="introModules"
      :selected-preshow-module-name="selectedPreshowModuleName"
      @select="onSelect"
    />
  </div>
</template>

<script>
import PreshowModuleList from './PreshowModuleList';
import {mapState} from 'vuex';

export default {
  components: {
    PreshowModuleList,
  },
  computed: {
    ...mapState([
      'ambientModules',
      'introModules',
      'selectedPreshowModuleName',
    ]),
  },
  methods: {
    onSelect(name) {
      this.$store.dispatch('playPreshowModule', name)
          .then(() => {
            this.$store.commit('updateSelectedPreshowModuleName', name);
          })
          .catch(console.error);
    },
  },
};
</script>

<style scoped lang="stylus">
.preshow-module-list-container
  height: 275px
  padding: 25px 80px
  background-color: rgba(0, 0, 0, .3)
</style>
