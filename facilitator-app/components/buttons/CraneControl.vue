<template>
  <div>
    <h6 class="label">
      Sway Control
    </h6>
    <div class="button-container">
      <SquareImageButton
        toggle-image
        :value="isSwayControlEnabled"
        :width="100"
        image-filename="crane-operation-on.png"
        image-filename-off="crane-operation-off.png"
        @click="onSelect"
      />
    </div>
  </div>
</template>

<script>
import SquareImageButton from './SquareImageButton';
import {mapActions} from 'vuex';

export default {
  components: {
    SquareImageButton,
  },
  data: () => ({
    isSwayControlEnabled: false,
  }),
  methods: {
    ...mapActions(['updateUI']),
    onSelect() {
      const newVal = !this.isSwayControlEnabled;
      this.updateUI({key: 'sway-control', value: newVal})
          .then(() => {
            this.isSwayControlEnabled = newVal;
          })
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

.button-container
  display: flex
</style>
