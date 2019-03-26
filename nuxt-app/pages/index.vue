<template>
  <div class="screen-center-outer page">
    <div class="screen-center-inner">
      <div class="my-container">
        <LoginBrandLogo />
        <LoginPassword
          :password="password"
          @update-password="(value) => password = value"
          @submit="login"
        />
        <LoginStart @start="login" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginBrandLogo from '@comps/login/LoginBrandLogo';
import LoginPassword from '@comps/login/LoginPassword';
import LoginStart from '@comps/login/LoginStart';

export default {
  name: 'Login',
  layout: 'no-side-menu',
  transition: 'fade',
  components: {
    LoginBrandLogo,
    LoginPassword,
    LoginStart,
  },
  data() {
    return {
      password: '',
    };
  },
  created() {
    this.$store.dispatch('initMqttClient');
    this.$store.dispatch('getExperienceConfig');
    this.$store.dispatch('getSelectedSleeveId');
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.password)
          .then(() => {
            this.$router.push('/intro');
          })
          .catch((err) => {
            if (err.message === 'WrongPassword') {
              alert('Wrong Password!');
              this.password = '';
            }
          });
    },
  },
};
</script>

<style lang="stylus" scoped>
.screen-center-outer
  display: table
  width: 100%
  height: 100%
  .screen-center-inner
    display: table-cell
    vertical-align: middle
    .my-container
      text-align: center
</style>
