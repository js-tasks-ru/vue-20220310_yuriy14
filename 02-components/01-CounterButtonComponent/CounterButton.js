import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  // Компонент должен иметь входной параметр
  props: {
    count: {
      default: 0,
    },
  },
  emits: ['update:count'],
  // Шаблон лучше держать максимально простым, а логику выносить в методы
  methods: {
    buttonClick() {
      this.$emit('update:count', this.count + 1);
    },
  },

  // Шаблон потребуется отредактировать
  template: `<button type="button" v-on:click="buttonClick">{{ count }}</button>`,
});
