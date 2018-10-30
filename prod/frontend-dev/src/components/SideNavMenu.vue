<!-- =================================================
 Template
================================================== -->
<template>
  <div>
    <div class="side-nav-menu">
      <div class="brand-logo-block">
        <img :src="require('@/assets/images/belllabs-logo.png')" />
      </div>
      <div class="menu-block">
        <div class="fite-lab-box">
          FITE Lab
        </div>
        <div class="padding-box"></div>
        <side-nav-menu-item
          :label="'Stories'"
          :active="!isOnRoomEffectsPage && !isOnSleeveManagementPage"
          :icon-filename="'story-icon.png'"
          :icon-filename-active="'story-icon-active.png'"
          @clicked="jumpToLastStoryPage()"/>
        <side-nav-menu-item
          :label="'Room Effects'"
          :active="isOnRoomEffectsPage"
          :icon-filename="'room-effect-icon.png'"
          :icon-filename-active="'room-effect-icon-active.png'"
          @clicked="jumpTo('RoomEffects', {transition: 'fade'})"/>
        <side-nav-menu-item
          :label="'Manage Sleeves'"
          :active="isOnSleeveManagementPage"
          :icon-filename="'sleeve-icon.png'"
          :icon-filename-active="'sleeve-icon-active.png'"
          @clicked="jumpTo('SleeveManagement', {transition: 'fade'})"/>

        <side-nav-menu-item
          class="logout-item"
          :label="'Logout'"
          :active="false"
          :icon-filename="'logout-icon.png'"
          :icon-filename-active="'logout-icon-active.png'"
          @clicked="overlay = 'confirmation'"/>
      </div>
    </div>
    <transition :name="'fade'">
      <confirmation-modal-overlay
        v-if="overlay === 'confirmation'"
        :message="'Are you sure to logout?'"
        @close="overlay = null"
        @execute="logout()"/>
    </transition>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import SideNavMenuItem from '@/components/SideNavMenuItem';
import ConfirmationModalOverlay from
  '@/components/pages/overlays/ConfirmationModalOverlay';

export default {
  name: 'SideNavMenu',
  data() {
    return {
      overlay: null,
      lastStoryPage: null,
    };
  },
  components: {
    SideNavMenuItem,
    ConfirmationModalOverlay,
  },
  computed: {
    isOnRoomEffectsPage() {
      if (this.$route.name === 'RoomEffects') return true;
      return false;
    },
    isOnSleeveManagementPage() {
      if (this.$route.name === 'SleeveManagement') return true;
      return false;
    },
  },
  methods: {
    jumpToLastStoryPage() {
      let page = this.$store.state.lastStoryPage;
      if (!page) {
        console.error('No lastStoryPagePath found', page);
        return;
      }
      this.jumpTo(page.name, {
        story_id: page.story_id,
        mission_id: page.mission_id,
        transition: 'fade',
      });
    },
    logout() {
      this.$store.dispatch('logout')
          .then(() => {
            this.jumpTo('Login', {transition: 'fade'});
          })
          .catch(() => {
            console.error('Logout failed!');
          });
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.side-nav-menu
  position: fixed
  top: 0
  left: 0
  background-color: purple
  display: flex
  flex-direction: column
  width: 280px
  height: 100%

  .brand-logo-block
    min-height: 160px
    background-color: #023EA8
    position: relative

    img
      width: 180px
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)

  .menu-block
    position: relative
    background-color: #0052FF
    height: 100%
    display: flex
    flex-direction: column
    justify-content: flex-start

    .padding-box
      height: 63px
      background-color: #0052FF
      border-bottom: solid 1px #0B4EC5

    .fite-lab-box
      background-color: #041B67
      font-family: "NokiaPureText-Regular"
      letter-spacing: 2px
      position: absolute
      width: 180px
      height: 45px
      top: -22.5px
      left: 0
      text-align: center
      line-height: 45px
      z-index: 100

    .logout-item
      width: 100%
      position: absolute
      bottom: 0
      border-top: solid 1px #0B4EC5
</style>
