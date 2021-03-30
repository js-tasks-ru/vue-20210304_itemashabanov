import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupInfo from './MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';

export default {
  name: 'MeetupView',

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  computed: {
    imageLink() {
      return getImageUrlByImageId(this.meetup.imageId);
    },
    newDate() {
      return new Date(this.meetup.date);
    },
  },

  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
  },

  template: `
    <div>
      <meetup-cover :title="meetup.title" :link="imageLink" />
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"/>

            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda" />
          </div>
          <div class="meetup__aside">
            <meetup-info :organizer="meetup.organizer" :place="meetup.place" :date="newDate" />
          </div>
        </div>
      </div>
    </div>`,
};
