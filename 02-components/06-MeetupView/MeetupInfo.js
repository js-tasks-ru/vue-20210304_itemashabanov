export default {
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },

  computed: {
    localeDate() {
      return this.date.toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    datetime() {
      let dd = this.date.getDate();
      if (dd < 10) dd = '0' + dd;

      let mm = this.date.getMonth() + 1;
      if (mm < 10) mm = '0' + mm;

      let yy = this.date.getFullYear();
      if (yy < 10) yy = '0' + yy;

      return yy + '-' + mm + '-' + dd;
    },
  },

  template: `
    <ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="datetime">{{ localeDate }}</time>
      </li>
    </ul>`,
};
