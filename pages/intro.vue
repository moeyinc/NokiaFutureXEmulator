<template>
  <div class="intro page">
    <div class="text-container">
      <h1>
        Welcome to<br>
        <span class="future">The Future</span>
      </h1>
      <p>
        Facilitator’s initial talking point comes here.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor
      </p>
    </div>
    <transition name="pop-slide-left">
      <ActionButton
        v-show="!introMovieStarted"
        fixed
        label="Start Intro"
        @click="startIntro"
      />
    </transition>
    <SubActionButton
      fixed
      forward
      right
      :yield-to-action-button="!introMovieStarted"
      large
      label="Skip Intro"
      @click="skipIntro"
    />
  </div>
</template>

<script>
import ActionButton from '@comps/buttons/ActionButton';
import SubActionButton from '@comps/buttons/SubActionButton';
import requireLogInMixin from '@/mixins/requireLogIn.js';

export default {
  layout: 'no-side-menu',
  transition: 'fade',
  components: {
    ActionButton,
    SubActionButton,
  },
  mixins: [
    requireLogInMixin,
  ],
  data() {
    return {
      introMovieStarted: false,
      readyToShowButton: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.readyToShowButton = true;
    }, 300);
  },
  methods: {
    startIntro() {
      this.$store.dispatch('startIntro')
          .then(() => {
            this.introMovieStarted = true;
          })
          .catch(console.error);
    },
    skipIntro() {
      this.$store.dispatch('skipIntro')
          .then(() => {
            this.$router.push('/stories');
          })
          .catch(console.error);
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

.intro
  background-image: url('~@images/intro-background.png')
  background-position: bottom right
  background-size: contain
  background-repeat: no-repeat

  .text-container
    position: absolute
    top: 80px
    left: 100px
    h1
      max-width: 453px
      font-size: 80px
      line-height: 90px
      letter-spacing: 1.6px
      color: $secondary-color
      span.future
        font-family: 'NokiaPureText-Bold'
        color: white
    p
      max-width: 420px
      font-size: 20px
      line-height: 30px
      margin-top: 25px
</style>
