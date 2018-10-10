import Vue from 'vue';
import Router from 'vue-router';
import TransitionWrapper from '@/components/TransitionWrapper';
import Login from '@/components/pages/Login';
import LoggedIn from '@/components/pages/LoggedIn';
import Stories from '@/components/pages/Stories';
import StoryStart from '@/components/pages/StoryStart';
import Live from '@/components/pages/Live';
import TalkingPoints from '@/components/pages/TalkingPoints';
import PlayerModeSelection from
  '@/components/pages/mission/PlayerModeSelection';
import PlayerNetworkSelection from
  '@/components/pages/mission/PlayerNetworkSelection';

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
              path: '',
              component: TransitionWrapper,
              children: [
                {
                  path: '/stories',
                  name: 'Stories',
                  component: Stories,
                },
                {
                  path: '/story-start',
                  name: 'StoryStart',
                  component: StoryStart,
                },
                {
                  path: '/live',
                  name: 'Live',
                  component: Live,
                  /*
                  beforeEnter: (to, from, next) => {
                    // some conditions to determine which page to render
                    const section = $store.getters.getCurrentSection();
                    if (sectoin.sectionType === 'movie') {
                      next({name: 'TalkingPoints'});
                    } else if (sectoin.sectionType === 'mission') {
                      const missionStep = $store.state.missionStep;
                      switch (missionStep) {
                        case 'playerModeSelection':
                          next({name: 'PlayerModeSelection'});
                        case 'playerNetworkSelection':
                          next({name: 'PlayerNetworkSelection'});
                        case 'calibration':
                          next({name: 'Calibration'});
                        case 'playing':
                          next({name: 'MissionControls'});
                        case 'postMission':
                          next({name: 'PostMission'});
                      }
                    }
                    // no mission found
                    next();
                  },
                  */
                },
                {
                  path: '/live/talking-points',
                  name: 'TalkingPoints',
                  component: TalkingPoints,
                },
                {
                  path: '/live/player-mode-selection',
                  name: 'PlayerModeSelection',
                  component: PlayerModeSelection,
                },
                {
                  path: '/live/player-network-selection',
                  name: 'PlayerNetworkSelection',
                  component: PlayerNetworkSelection,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
