<!-- =================================================
 Template
================================================== -->
<template>
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
      <!-- <side-nav-menu-item
        :label="'Room Effects'"
        :active="isOnRoomEffectsPage"
        :icon-filename="'room-effect-icon.png'"
        :icon-filename-active="'room-effect-icon-active.png'"
        @clicked="jumpTo('RoomEffects', {transition: 'fade'})"/> -->
      <side-nav-menu-item
        :label="'Sleeve Management'"
        :active="isOnSleeveManagementPage"
        :icon-filename="'sleeve-icon.png'"
        :icon-filename-active="'sleeve-icon-active.png'"
        @clicked="jumpTo('SleeveManagement', {transition: 'fade'})"/>

      <side-nav-menu-item
        class="logout-item"
        :label="'Logout'"
        :active="false"
        :icon-filename="'logout-icon.png'"
        :icon-filename-active="'logout-icon-active.png'"/>
    </div>
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import SideNavMenuItem from '@/components/SideNavMenuItem';

export default {
  name: 'SideNavMenu',
  components: {
    SideNavMenuItem,
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
      let path = this.$store.state.lastStoryPagePath;
      if (!path) {
        console.error('No lastStoryPagePath found', path);
        return;
      }
      this.jumpToPath(path, {transition: 'fade'});
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
