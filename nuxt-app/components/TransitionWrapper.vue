<!-- =================================================
 Template
================================================== -->
<template>
  <!-- <div class="transition-wrapper"> -->
  <transition :name="transitionName">
    <router-view class="transition-child-view" />
  </transition>
  <!-- </div> -->
</template>

<!-- =================================================
 Script
================================================== -->
<script>
export default {
  name: 'TransitionWrapper',
  data() {
    return {
      transitionName: '',
    };
  },
  /**
   * beforeRouteUpdate - Vue router's lifecycle hook.
   * Called before $route is updated
   * @param  {!Object} to   destination's route object
   * @param  {!Object} from origin's route object
   * @param  {!Function} next function to proceed
   */
  beforeRouteUpdate(to, from, next) {
    // get transition type from params
    this.transitionName = to.params.transition;

    // proceed to next step of Vue router's lifecycle
    next();
  },
};
</script>

<!-- =================================================
 Style
================================================== -->
<style scoped lang='stylus'>
@import '~@/stylus/vue-transitions'
// .transition-wrapper
//   position: relative

.transition-child-view
  position: absolute
  width: 100%
  height: 100%
  top: 0px
  left: 0px
</style>
