<!-- =================================================
 Template
================================================== -->
<template>
  <div class="room-effects">
    <main-header
      :title="'Room Effects'"
      :has-nav-bar="false"/>

    <summary-block>
      Setting description comes here. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.
    </summary-block>

    <effect-table
      class="audio-table"
      :title="'AUDIO'"
      :params="audioParams"/>
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
      audioParams: [
        {
          name: 'Master',
          value: 1.0,
          max: 3.0,
          min: 0.0,
          step: 0.1,
          default: 1.0,
        },
      ],
    };
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
