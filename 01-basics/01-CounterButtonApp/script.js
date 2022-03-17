import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const RootComponent = {
  template: `<button @click="counter++" type="button">{{ counter }}</button>`,
  data() {
    return {
      counter: 0,
    };
  },
};

const app = createApp(RootComponent);
const vm = app.mount('#app');
