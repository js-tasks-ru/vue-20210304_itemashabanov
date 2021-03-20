import Vue from './vendor/vue.esm.browser.js';

new Vue({
  data() {
    return {
      meetupId: null,
      meetup: null,
    };
  },

  computed: {
    meetupTitle() {
      return this.meetup && this.meetup.title;
    },
  },

  watch: {
    meetupId(newMeetupId) {
      this.fetchMeetup(newMeetupId);
    },
  },

  methods: {
    fetchMeetup(id) {
      fetch(`https://course-vue.javascript.ru/api/meetups/${id}`)
        .then((res) => res.json())
        .then((meetup) => (this.meetup = meetup));
    },
  },
}).$mount('#app');
