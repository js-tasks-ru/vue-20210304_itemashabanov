import Vue from './vendor/vue.esm.browser.js';

const counter = new Vue({
  el: '#counter',
  data: {
    count: 0,
  },

  methods: {
    countUpdate() {
      return (this.count += 1);
    },
  },
});
