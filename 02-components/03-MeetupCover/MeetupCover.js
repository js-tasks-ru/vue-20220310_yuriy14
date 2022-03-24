import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  computed: {
    bgUrl() {
      if (this.image) {
        return `--bg-url: url('${this.image}')`;
      }
      return null;
    },
  },

  template: `
    <div class="meetup-cover" :style="bgUrl">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
