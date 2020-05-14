<template>
  <div>
    <h6 class="label">
      Network Cover Area
    </h6>
    <div class="checkbox-container">
      <v-checkbox
        v-for="(checkbox, index) in networkCoverAreaCheckboxes"
        :key="checkbox.key"
        v-model="checkbox.value"
        :label="checkbox.label"
        dark
        class="checkbox-item"
        @change="onSelect('network-cover-area', checkbox, index)"
      />
    </div>
    <h6 class="label">
      Network Structure
    </h6>
    <div class="checkbox-container">
      <v-checkbox
        v-for="(checkbox, index) in networkStructureCheckboxes"
        :key="checkbox.key"
        v-model="checkbox.value"
        :label="checkbox.label"
        dark
        class="checkbox-item"
        @change="onSelect('network-structure', checkbox, index)"
      />
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      networkCoverAreaCheckboxes: [
        {
          key: '5g',
          label: '5G Cover Area',
          value: true,
        },
        {
          key: '4g',
          label: '4G Cover Area',
          value: true,
        },
      ],
      networkStructureCheckboxes: [
        {
          key: 'fiber-cable',
          label: 'Fiber Cable',
          value: true,
        },
        {
          key: 'aggregator',
          label: 'Aggregator',
          value: true,
        },
        {
          key: 'fiber-node',
          label: 'Fiber Node',
          value: true,
        },
        {
          key: 'small-cell',
          label: 'Small Cell',
          value: true,
        },
        {
          key: 'base-station',
          label: 'Base Station',
          value: true,
        },
        {
          key: 'edge-cloud',
          label: 'Edge Cloud',
          value: true,
        },
      ],
    };
  },
  methods: {
    ...mapActions(['updateUI']),
    onSelect(key, checkbox, index) {
      const value = {};
      value[checkbox.key] = checkbox.value;
      this.updateUI({key, value})
          .catch(console.error);
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~@styles/colors'

h6.label
  color: $secondary-color
  font-size: 20px
  line-height: 30px
  margin-bottom: 10px

.checkbox-container
  display: flex
  flex-wrap: wrap
  padding-bottom: 20px
  .checkbox-item
    width: 220px
    min-width: 220px
    max-width: 220px
    margin-top: 0
</style>

<style lang="stylus">
.checkbox-container
  .v-input--selection-controls
    margin-top: 0
    .v-input__slot
      margin-bottom: 0
      label
        font-family: 'NokiaPureText-Light'
        font-size: 20px
    &.v-input--is-label-active
      label
        color: white
    &:not(.v-input--is-label-active)
      .v-icon
        color: rgba(255, 255, 255, 0.7)
</style>
