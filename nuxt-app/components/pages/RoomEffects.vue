<!-- =================================================
 Template
================================================== -->
<template>
  <div class="room-effects">
    <main-header
      :title="'Room Effects'"
      :has-nav-bar="false"
    />

    <summary-block :summary-text="'Control audio and lights of the room.'" />

    <effect-table
      class="audio-table"
      :title="'AUDIO'"
      :params="audioParams"
      @reset="resetMasterVolume()"
      @changed="onAudioChanged"
    />

    <effect-table
      class="projector-table"
      :title="'PROJECTORS'"
      :params="projectorParams"
      :reset-button="false"
      @toggled="onProjectorToggled"
    />
  </div>
</template>

<!-- =================================================
 Script
================================================== -->
<script>
import MainHeader from '@/components/MainHeader';
import SummaryBlock from '@/components/SummaryBlock';
import EffectTable from '@/components/EffectTable';

export default {
  name: 'RoomEffects',
  components: {
    MainHeader,
    SummaryBlock,
    EffectTable,
  },
  data() {
    return {
      audioParams: {
        master: {
          name: 'Master',
          type: 'slider',
          value: 1.0,
          max: 3.0,
          min: 0.0,
          step: 0.1,
          default: 1.0,
        },
      },
      projectorParams: {
        power: {
          name: 'Power On/Off',
          type: 'toggle',
          value: false,
        },
        // shutter: {
        //   name: 'Shutter On/Off',
        //   type: 'toggle',
        //   value: false,
        // },
      },
    };
  },
  created() {
    this.initAudioMaster();
    this.initProjectorPowerState();
    // this.initProjectorShutterState();
  },
  methods: {
    initAudioMaster() {
      this.$store.dispatch('getCurrentVolume')
          .then((res) => {
            this.audioParams.master.value = parseFloat(res.data.value);
          })
          .catch((err) => {
            console.error(err);
          });
    },
    initProjectorPowerState() {
      this.$store.dispatch('getCurrentProjectorState')
          .then((state) => {
            this.projectorParams.power.value = state;
          })
          .catch((err) => {
            console.error(err);
          });
    },
    // initProjectorShutterState() {
    //   this.$store.dispatch('getCurrentProjectorState')
    //       .then((state) => {
    //         this.projectorParams.shutter.value = state;
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //       });
    // },
    onAudioChanged({key, value}) {
      console.log('onAudioChanged', key, value);
      if (key === 'master') {
        this.updateMasterVolume(value);
      }
    },
    onProjectorToggled({key, value}) {
      console.log('onProjectorToggled', key, value);
      if (key === 'power') {
        this.turnAllProjectorsPower(value);
      } else if (key ==='shutter') {
        this.turnAllProjectorsShutter(value);
      }
    },
    updateMasterVolume(value) {
      this.$store.dispatch('updateVolume', value)
          .then(() => {
            console.log('success');
          })
          .catch((err) => {
            console.error(err);
          });
    },
    turnAllProjectorsPower(value) {
      this.$store.dispatch('turnAllProjectors', value)
          .then(() => {
            console.log('success');
          })
          .catch((err) => {
            console.error(err);
          });
    },
    resetMasterVolume() {
      this.updateMasterVolume(this.audioParams.master.default);
      this.audioParams.master.value = this.audioParams.master.default;
    },
  },
};
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
.audio-table
  margin-top: 40px
</style>
