export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  model: {
    prop: "count",
    event: "increment",
  },

  methods: {
    increment(count) {
      return count += 1;
    },

    returnNewCount(count) {
        this.$emit('increment', this.increment(count));
    },
  },

  template: `
    <button @click="returnNewCount(count)" type="button">{{ count }}</button>
  `,
};
