<template>
  <header>
    <nav>
      <div class="meta-label">
        {{ storyTitle }}
        <span class="section-id">
          Section {{ sectionId }}
        </span>
      </div>
      <JumpExitButton
        @click="$emit('jump-exit-button-clicked')"
      />
    </nav>
    <h1>
      {{ sectionTitle }}
    </h1>
  </header>
</template>

<script>
import JumpExitButton from './buttons/JumpExitButton';

export default {
  components: {
    JumpExitButton,
  },
  props: {
    storyTitle: {
      type: String,
      default: '',
    },
    sectionId: {
      type: Number,
      default: 0,
    },
    sectionTitle: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

header
  padding: 59px 80px 40px 80px

  nav
    height: 29px
    margin-bottom: 29px
    display: flex
    justify-content: space-between
    .meta-label
      font-size: 20px
      span.section-id
        color: $secondary-color
  h1
    font-size: 60px
</style>
