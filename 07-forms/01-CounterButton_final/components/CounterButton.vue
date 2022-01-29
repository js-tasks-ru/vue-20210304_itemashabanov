<template>
  <button :value="newCount" @click="counter(newCount)">{{ newCount }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  model: {
    prop: 'count',
    event: 'increment',
  },

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      newCount: null,
    };
  },

  // computed: {
  //   listeners() {
  //     return {
  //       ...this.$listeners,
  //       click: (event) => this.$emit('increment', Number(event.target.value) + 1),
  //     };
  //   },
  // },

  watch: {
    count: {
      immediate: true,
      handler() {
        if (this.count !== this.newCount) this.newCount = this.count; //$emit('increment', Number(this.newCount) + 1)
      },
    },

    newCount: {
      handler(newValue) {
        this.$emit('increment', newValue);
      },
    },
  },

  methods: {
    counter(count) {
      this.newCount = count + 1;
    },
  },
  updated() {
  
  }
};
</script>
