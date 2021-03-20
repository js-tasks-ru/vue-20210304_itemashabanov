import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

/**
 * Функция, возвращающая словарь заголовков по умолчанию для всех типов пунктов программы
 */
const getAgendaItemDefaultTitles = () => ({
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
});

/**
 * Функция, возвращая словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const getAgendaItemIcons = () => ({
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
});

new Vue({
  data() {
    return {
      rawMeetup: null,
    }
  },

  computed: {

    meetup() {
      if(!this.rawMeetup)
        return false;
      
      // return {
      //   title: this.rawMeetup.title,
      //   description: this.rawMeetup.description,
      //   imageSrc: this.rawMeetup.imageId ? getImageUrlByImageId(this.rawMeetup.imageId) : null,
      //   organizer: this.rawMeetup.organizer,
      //   place: this.rawMeetup.place,
      //   date: this.formatDate(this.rawMeetup.date),
      //   agenda: this.reformAgenda(this.rawMeetup.agenda),
      // }

      // return this.rawMeetup.map((meetup) => ({
      //   ...meetup,
      //   imageSrc: meetup.imageId ? getImageUrlByImageId(meetup.imageId) : null,
      //   date: this.formatDate(meetup.date),
      //   agenda: this.reformAgenda(meetup.agenda),
      // }));
      return {
        ...this.rawMeetup,
        imageSrc: this.rawMeetup.imageId ? getImageUrlByImageId(this.rawMeetup.imageId) : null,
        date: this.formatDate(this.rawMeetup.date),
        agenda: this.reformAgenda(this.rawMeetup.agenda),
      };
    },
  },

  mounted() {
    fetch("https://course-vue.javascript.ru/api/meetups/" + MEETUP_ID)
        .then(res => res.json())
        .then(meetup => {this.rawMeetup = meetup;});
  },

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },

    reformAgenda(agenda) {
      return agenda.map((agenda) => ({
        ...agenda,
        title: agenda.title ? agenda.title : getAgendaItemDefaultTitles()[agenda.type],
        icon: getAgendaItemIcons()[agenda.type],
      }));
    },
  }
}).$mount('#app');
