import MeetupView from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export default {
  name: 'MeetupPage',

  data() {
    return {
      meetup: null,
    };
  },

  mounted() {
    fetchMeetup(MEETUP_ID).then((res) => this.meetup = res);
  },

  components: {
    MeetupView
  },

  template: `<meetup-view v-if="meetup" :meetup="meetup" />`,
};