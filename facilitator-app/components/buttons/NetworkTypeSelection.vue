<template>
  <div>
    <h6 class="label">
      Network Select
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
</template>

<script>
import SquareImageButton from './SquareImageButton';
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
  components: {
    SquareImageButton,
  },
  data() {
    return {
      buttons: [
        {
          name: '5g',
          imageFilename: 'network-type-5g.png',
          value: false,
        },
        {
          name: 'wifi',
          imageFilename: 'network-type-wifi.png',
          value: false,
        },
        {
          name: '4g',
          imageFilename: 'network-type-4g.png',
          value: false,
        },
      ],
    };
  },
  computed: {
    ...mapState(['inStorySelectedNetworkType']),
  },
  created() {
    switch (this.inStorySelectedNetworkType) {
      case '5g':
        this.buttons[0].value = true;
        break;
      case 'wifi':
        this.buttons[1].value = true;
        break;
      case '4g':
        this.buttons[2].value = true;
        break;
    }
  },
  methods: {
    ...mapMutations(['updateInStorySelectedNetworkType']),
    ...mapActions(['updateUI']),
    onSelect({button, index}) {
      const targetButton = this.buttons[index];
      if (targetButton.value) return;
      for (const b of this.buttons) {
        b.value = false;
      }

      const networkType = targetButton.name;
      this.updateUI({key: 'network-type', value: networkType})
          .then(() => {
            targetButton.value = true;
            this.updateInStorySelectedNetworkType(networkType);
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
