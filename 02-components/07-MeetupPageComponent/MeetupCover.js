export default {
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
    },
    link: {
      type: String,
    }
  },

  computed: {
    style () {
      return this.link ? `--bg-url: url("${this.link}")` : null;
    }
  },
  
  template: `
    <div class="meetup-cover" :style="style">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
};
