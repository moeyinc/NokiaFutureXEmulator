import Vue from 'vue';
import Router from 'vue-router';
import TransitionWrapper from '@/components/TransitionWrapper';
import Login from '@/components/Login';
import LoggedIn from '@/components/LoggedIn';
import Stories from '@/components/Stories';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: TransitionWrapper,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },
        {
          path: 'logged-in',
          component: LoggedIn,
          children: [
            {
              path: '/stories',
              name: 'Stories',
              component: Stories,
            },
          ],
        },
      ],
    },
  ],
});
