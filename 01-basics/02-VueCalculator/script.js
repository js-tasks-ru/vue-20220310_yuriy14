import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const RootComponent = {
  data() {
    return {
      operator: 0,
      leftValue: 0,
      rightValue: 0,
    };
  },
  computed: {
    result() {
      const leftValue = this.leftValue;
      const rightValue = this.rightValue;
      switch (this.operator) {
        case 'sum':
          return leftValue + rightValue;
        case 'subtract':
          return leftValue - rightValue;
        case 'multiply':
          return leftValue * rightValue;
        case 'divide':
          if (rightValue) {
            return leftValue / rightValue;
          }
      }
      return 0;
    },
  },
};

const app = createApp(RootComponent);
const vm = app.mount('#app');
