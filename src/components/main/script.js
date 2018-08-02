import tinySlider from 'vue-tiny-slider';
import data from './data.json';

export default {
  name: 'main-component',
  components: {
    'tiny-slider': tinySlider
  },
  data() {
    return {
      slider: {
        slides: data.slides,
        responsive: {
          768: {
            items: 2
          },
          992: {
            items: 3
          }
        }
      }
    }
  }
}