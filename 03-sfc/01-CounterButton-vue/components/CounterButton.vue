<template>
  <div>
    <button @click="returnNewCount(count)">{{ count }}</button>
  </div>
</template>

<script>
export default {
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

  methods: {
    increment() {
      return this.count + 1;
    },

    returnNewCount() {
      this.$emit('increment', this.increment());
    },
  },
};
</script>

<style></style>
