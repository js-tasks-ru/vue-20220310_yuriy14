import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
const Component = {
  data() {
    return {
      meetupId: 0,
      meetupTitle: '',
    };
  },
  watch: {
    meetupId(id) {
      fetchMeetupById(id).then(({ title = '' } = {}) => (this.meetupTitle = title));
    },
  },
};

const app = createApp(Component);
const vm = app.mount('#app');
