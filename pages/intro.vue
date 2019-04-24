<template>
  <div class="intro page">
    <div class="text-container">
      <h1>
        Welcome to<br>
        <span class="future">The Future</span>
      </h1>
      <p>
        What is the future city like? The new 5G network technology will
        improve all aspects of our life. This is not a sci-fi fairy tale
        anymore. It is happening.
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
  transition: (to, from) => {
    if (!to || !from) return 'fade';
    const thisPageName = 'intro';
    if (to.name === thisPageName) {
      // when routing to this page,
      // if the previous page is stories page or
      // story section page, apply slide-right animation
      switch (from.name) {
        case 'stories':
          return 'slide-right';
        default:
          return 'fade';
      }
    } else if (from.name === thisPageName) {
      // when routing to other pages,
      // if the destination is stories page,
      // apply fade animation
      switch (to.name) {
        case 'stories':
          return 'fade';
        default:
          return 'fade';
      }
    }
  },
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
  created() {
    if (this.$route.hash === '#replay') {
      this.introMovieStarted = true;
    }
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
