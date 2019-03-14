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
  layout: 'default',
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
            this.$router.push('/stories');
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
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: table
  background-image: url('~@images/login-bg.png')
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  .screen-center-inner
    display: table-cell
    vertical-align: middle
    .container
      text-align: center
</style>
