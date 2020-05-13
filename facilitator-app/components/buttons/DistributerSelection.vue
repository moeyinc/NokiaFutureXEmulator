<template>
  <div>
    <h6 class="label">
      Select Hero Package Skin
    </h6>
    <div class="button-container">
      <SquareImageButton
        v-for="(button, index) in buttons"
        :key="index"
        :value="button.value"
        :width="100"
        :image-filename="button.imageFilename"
        @click="onSelect({button, index})"
      />
    </div>
  </div>
  <!-- <ToggleButtonContainer
    :buttons="buttons"
    :button-width="100"
    title="Select Hero Package Skin"
    class="distributer-selection"
    @select="onSelect"
  /> -->
</template>

<script>
// import ToggleButtonContainer from './ToggleButtonContainer';
import SquareImageButton from './SquareImageButton';
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
  components: {
    // ToggleButtonContainer,
    SquareImageButton,
  },
  data() {
    return {
      buttons: [
        {
          distributerName: 'amazon',
          imageFilename: 'distributer-amazon.png',
          value: false,
        },
        {
          distributerName: 'fedex',
          imageFilename: 'distributer-fedex.png',
          value: false,
        },
        {
          distributerName: 'ups',
          imageFilename: 'distributer-ups.png',
          value: false,
        },
        {
          distributerName: 'dhl',
          imageFilename: 'distributer-dhl.png',
          value: false,
        },
        {
          distributerName: 'usps',
          imageFilename: 'distributer-usps.png',
          value: false,
        },
      ],
    };
  },
  computed: {
    ...mapState(['inStorySelectedDistributer']),
  },
  created() {
    switch (this.inStorySelectedDistributer) {
      case 'amazon':
        this.buttons[0].value = true;
        break;
      case 'fedex':
        this.buttons[1].value = true;
        break;
      case 'ups':
        this.buttons[2].value = true;
        break;
      case 'dhl':
        this.buttons[3].value = true;
        break;
      case 'usps':
        this.buttons[4].value = true;
        break;
    }
  },
  methods: {
    ...mapMutations(['updateInStorySelectedDistributer']),
    ...mapActions(['setDistributer']),
    onSelect({button, index}) {
      const targetButton = this.buttons[index];
      if (targetButton.value) return;
      for (const b of this.buttons) {
        b.value = false;
      }

      const distributerName = targetButton.distributerName;
      this.setDistributer(distributerName)
          .then(() => {
            targetButton.value = true;
            this.updateInStorySelectedDistributer(distributerName);
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
