<template>
  <section>
    <form @submit.prevent="$emit('submit')">
      <input
        v-model="myPassword"
        type="password"
        placeholder="Enter Password"
      >
    </form>
    <hr>
  </section>
</template>

<script>
export default {
  props: {
    password: {
      type: String,
      required: true,
    },
  },
  computed: {
    myPassword: {
      get() {
        return this.password;
      },
      set(value) {
        this.$emit('update-password', value);
      },
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

section
  margin-bottom: 30px
  input
    background-color: transparent
    border: none
    padding: 0
    font: 40px 'NokiaPureText-Light'
    text-align: center
    color: $secondary-color
    &::-webkit-input-placeholder
      color: $secondary-color
    &:focus
      outline: none
  hr
    width: 100%
    border-color: $secondary-color
    border-style: solid
</style>
