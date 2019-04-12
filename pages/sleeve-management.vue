<template>
  <div class="sleeve-management page">
    <PageHeader :title="'Sleeve Management'" />
    <SummaryBlock
      :summary-text="'Manage which sleeve to use for games in the stories.'"
    />
    <SleeveList />
  </div>
</template>

<script>
import PageHeader from '@comps/PageHeader';
import SummaryBlock from '@comps/SummaryBlock';
import SleeveList from '@comps/SleeveList';

export default {
  name: 'SleeveManagement',
  layout: 'with-side-menu',
  transition: 'fade',
  components: {
    PageHeader,
    SummaryBlock,
    SleeveList,
  },
};
</script>

<style lang="stylus" scoped>
.sleeve-management
  overflow-y: scroll
  -webkit-overflow-scrolling: touch
  overflow-scrolling: touch
</style>
