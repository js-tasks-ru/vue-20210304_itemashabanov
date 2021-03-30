import MeetupAgendaItem from './MeetupAgendaItem.js';

export default {
  name: 'MeetupAgenda',

  props: {
    agenda: {
      type: Array,
      requierd: true,
    },
  },

  components: {
    MeetupAgendaItem,
  },

  template: `
    <div class="meetup-agenda">
      <meetup-agenda-item v-for="agendaItem in agenda" :key="agendaItem.id" :agendaItem="agendaItem" />
    </div>`,
};
