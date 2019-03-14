<template>
  <nav>
    <div class="side-nav-menu">
      <div class="brand-logo-block">
        <img :src="require('@images/belllabs-logo.png')">
      </div>
      <div class="menu-block">
        <div class="fite-lab-box">
          FITE Lab
        </div>
        <div class="padding-box" />
        <SideNavMenuItem
          :label="'Stories'"
          :active="!isOnRoomEffectsPage && !isOnSleeveManagementPage"
          :icon-filename="'story-icon.png'"
          :icon-filename-active="'story-icon-active.png'"
          @select="jumpToLastStoryPage"
        />
        <SideNavMenuItem
          :label="'Room Effects'"
          :active="isOnRoomEffectsPage"
          :icon-filename="'room-effect-icon.png'"
          :icon-filename-active="'room-effect-icon-active.png'"
          @select="$router.push('/room-effects')"
        />
        <SideNavMenuItem
          :label="'Manage Sleeves'"
          :active="isOnSleeveManagementPage"
          :icon-filename="'sleeve-icon.png'"
          :icon-filename-active="'sleeve-icon-active.png'"
          @select="$router.push('/sleeve-management')"
        />
        <SideNavMenuItem
          class="logout-item"
          :label="'Logout'"
          :active="false"
          :icon-filename="'logout-icon.png'"
          :icon-filename-active="'logout-icon-active.png'"
          @select="overlay = 'confirmation'"
        />
      </div>
    </div>
    <transition :name="'fade'">
      <ConfirmationModalOverlay
        v-if="overlay === 'confirmation'"
        :message="'Are you sure to logout?'"
        @close="overlay = null"
        @execute="logout()"
      />
    </transition>
  </nav>
</template>

<script>
import SideNavMenuItem from '@comps/SideNavMenuItem';
import ConfirmationModalOverlay from
  '@comps/overlays/ConfirmationModalOverlay';
import {mapState} from 'vuex';

export default {
  name: 'SideNavMenu',
  components: {
    SideNavMenuItem,
    ConfirmationModalOverlay,
  },
  data() {
    return {
      overlay: null,
    };
  },
  computed: {
    ...mapState(['currentPage', 'lastStoryPage']),
    isOnRoomEffectsPage() {
      if (this.currentPage === 'room-effects') return true;
      return false;
    },
    isOnSleeveManagementPage() {
      if (this.currentPage === 'sleeve-management') return true;
      return false;
    },
  },
  methods: {
    jumpToLastStoryPage() {
      if (!this.lastStoryPage) {
        this.$router.push('/stories');
        return;
      }
      const storyId = this.lastStoryPage.params.storyId;
      const sectionId = this.lastStoryPage.params.sectionId;
      if (!storyId) {
        this.$router.push('/stories');
      } else if (!sectionId) {
        this.$router.push('/stories/' + storyId);
      } else {
        this.$router.push('/stories/' + storyId + '/section/' + sectionId);
      }
    },
    logout() {
      this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/');
          })
          .catch(console.error);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@styles/colors'

.side-nav-menu
  position: fixed
  top: 0
  left: 0
  display: flex
  flex-direction: column
  width: 280px
  height: 100%

  .brand-logo-block
    min-height: 160px
    background-color: $brand-bg-color
    position: relative
    img
      width: 180px
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)

  .menu-block
    position: relative
    background-color: $primary-color
    height: 100%
    display: flex
    flex-direction: column
    justify-content: flex-start
    .padding-box
      height: 63px
      background-color: $primary-color
      border-bottom: solid 1px $primary-border-color
    .fite-lab-box
      background-color: $brand-bg-color-dark
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
      border-top: solid 1px $primary-border-color
</style>
