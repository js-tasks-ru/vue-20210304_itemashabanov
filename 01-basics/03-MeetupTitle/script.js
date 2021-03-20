import Vue from './vendor/vue.esm.browser.js';

const a = new Vue({
    data() {
        return {
            meetupCount: 5,
            meetupID: null,
            firstTitle: null,
        }
    },

    watch: {
        meetupID() {
            this.title = this.getMeetupTitle(this.meetupID);
        }
    },

    computed: {
        title: {
            get: function () {
                return this.firstTitle;
            },

            set: function (newValue) {
                this.firstTitle = newValue;
            },
        }
    },

    methods: {
        getMeetupTitle(id) {
            fetch("https://course-vue.javascript.ru/api/meetups/" + id)
                .then(res => res.json())
                .then(meetup => this.firstTitle = meetup.title);
        },
    },
}).$mount("#meetupTitle");