import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    MeetupView,
    UiAlert,
    UiContainer,
  },

  props: {
    meetupId: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      meetup: {
        value: null,
        error: null,
      },
    };
  },

  watch: {
    meetupId(id) {
      this.getMeetup(id);
    },
  },

  created() {
    this.getMeetup(this.meetupId);
  },

  methods: {
    getMeetup(meetupId) {
      this.meetup.value = null;
      this.meetup.error = null;
      fetchMeetupById(meetupId)
        .then((data) => (this.meetup.value = data))
        .catch((error) => (this.meetup.error = error));
    },
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <meetup-view v-if="meetup.value" :meetup="meetup.value" />

      <ui-container v-else-if="!meetup.error">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else>
        <ui-alert>{{ meetup.error.message }}</ui-alert>
      </ui-container>
    </div>`,
});
