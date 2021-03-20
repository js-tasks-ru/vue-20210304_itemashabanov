import Vue from './vendor/vue.esm.browser.js';

const a = new Vue({
    data() {
        return {
            meetupCount: 5,
            meetupID: null,
            title: null,
        }
    },

    watch: {
        meetupID() {
            this.getMeetupTitle(this.meetupID);
        }
    },

    methods: {
        getMeetupTitle(id) {
            fetch("https://course-vue.javascript.ru/api/meetups/" + id)
                .then(res => res.json())
                .then(meetup => this.title = meetup.title);
        },
    },
}).$mount("#meetupTitle");