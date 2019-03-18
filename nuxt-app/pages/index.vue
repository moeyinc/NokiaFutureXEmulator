<template>
  <div class="screen-center-outer">
    <div class="screen-center-inner">
      <div class="container">
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
import LoginBrandLogo from '@comps/LoginBrandLogo';
import LoginPassword from '@comps/LoginPassword';
import LoginStart from '@comps/LoginStart';

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
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.password)
          .then(() => {
            this.$router.push('/initial-calibration');
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
    .container
      text-align: center
</style>
