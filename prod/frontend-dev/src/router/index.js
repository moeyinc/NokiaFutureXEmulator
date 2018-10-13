import Vue from 'vue';
import Router from 'vue-router';
import TransitionWrapper from '@/components/TransitionWrapper';
import Login from '@/components/pages/Login';
import LoggedIn from '@/components/pages/LoggedIn';
import Stories from '@/components/pages/Stories';
import StoryStart from '@/components/pages/StoryStart';
import TalkingPoints from '@/components/pages/TalkingPoints';
import PlayerModeSelection from
  '@/components/pages/mission/PlayerModeSelection';
import PlayerNetworkSelection from
  '@/components/pages/mission/PlayerNetworkSelection';
import MissionControls from '@/components/pages/mission/MissionControls';
import PostMission from '@/components/pages/mission/PostMission';

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
                  path: '/story-start/:story_id',
                  name: 'StoryStart',
                  component: StoryStart,
                },
                {
                  path: '/story-live/:story_id/intro',
                  name: 'Intro',
                  component: TalkingPoints,
                },
                {
                  path: '/story-live/:story_id/interlude',
                  name: 'Interlude',
                  component: TalkingPoints,
                },
                {
                  path: '/story-live/:story_id/outro',
                  name: 'Outro',
                  component: TalkingPoints,
                },
                {
                  path: '/story-live/:story_id/prerendered',
                  name: 'Prerendered',
                  component: TalkingPoints,
                },
                {
                  path: '/story-live/:story_id/mission/' +
                    ':mission_id/player-mode-selection',
                  name: 'PlayerModeSelection',
                  component: PlayerModeSelection,
                },
                {
                  path: '/story-live/:story_id/mission/' +
                    ':mission_id/player-network-selection',
                  name: 'PlayerNetworkSelection',
                  component: PlayerNetworkSelection,
                },
                {
                  path: '/story-live/:story_id/mission/' +
                    ':mission_id/mission-controls',
                  name: 'MissionControls',
                  component: MissionControls,
                },
                {
                  path: '/story-live/:story_id/mission/' +
                    ':mission_id/post-mission',
                  name: 'PostMission',
                  component: PostMission,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
