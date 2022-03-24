import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  props: {
    agendaItem: {
      type: Object,
      require: true,
    },
  },
  computed: {
    startsAt() {
      return this.agendaItem.startsAt;
    },
    endsAt() {
      return this.agendaItem.endsAt;
    },
    type() {
      return this.agendaItem.type;
    },
    title() {
      return this.agendaItem.title ?? agendaItemDefaultTitles[this.agendaItem.type];
    },
    description() {
      return this.agendaItem.description;
    },
    speaker() {
      return this.agendaItem.speaker;
    },
    language() {
      return this.agendaItem.language;
    },
    iconSrc() {
      const key = agendaItemIcons[this.type];
      if (key) {
        return `/assets/icons/icon-${key}.svg`;
      }
      return null;
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="iconSrc" class="icon" :alt="type" />
      </div>
      <div class="agenda-item__col">{{ startsAt }} - {{ endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ title }}</h3>
        <p v-if="speaker" class="agenda-item__talk">
          <span>{{ speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ language }}</span>
        </p>
        <p>{{ description }}</p>
      </div>
    </div>`,
});
