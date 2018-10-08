<!-- =================================================
 Template
================================================== -->
<template>
  <div class="screen-center-outer">
    <div class="screen-center-inner">
      <div class="container">
        <div class="brand-block">
          <img :src="require('@/assets/images/belllabs-logo.png')"/>
          <h4 class="fite-lab">FITE Lab</h4>
        </div>
        <div class="password-block">
          <form @submit.prevent="authorize()">
            <input
              type="password"
              placeholder="Enter Password"
              v-model="password"/>
          </form>
          <hr />
        </div>
        <div class="start-block" @click="authorize()">
          <div class="inner">
            <h3 class="start-session">Start Session</h3>
            <img :src="require('@/assets/images/arrow-right.png')"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import APP_CONFIG from '@/../static/app-config';

export default {
  name: 'Login',
  data() {
    return {
      password: '',
    };
  },
  methods: {
    authorize() {
      if (this.password === APP_CONFIG.PASSWORD) {
        console.log('authorized');
        this.jumpTo('LoggedIn', {transition: 'fade'});
      } else {
        console.log('wrong password!');
        this.password = '';
      }
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.screen-center-outer
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: table
  background-image: url('~@/assets/images/login-bg.png')
  background-size: cover
  background-repeat: no-repeat
  background-position: center

  .screen-center-inner
    display: table-cell
    vertical-align: middle

    .container
      text-align: center

      .brand-block
        margin-bottom: 66px

        img
          width: 264px
          height: 24px
          margin-bottom: 27px

        h4.fite-lab
          font-size: 18px

      .password-block
        margin-bottom: 30px

        input
          background-color: transparent
          border: none
          padding: 0
          font: 40px 'Avenir-Medium'
          text-align: center
          color: #4F88FF

          &::-webkit-input-placeholder
            color: #4F88FF

          &:focus
            outline: none

        hr
          width: 100%
          border-color: #4F88FF
          border-style: solid

      .start-block
        display: inline-block

        .inner
          display: flex
          flex-direction: row
          align-items: center

          h3.start-session
            font-size: 24px

          img
            width: 25.5px
            height: 23px
            margin-left: 11px
</style>
