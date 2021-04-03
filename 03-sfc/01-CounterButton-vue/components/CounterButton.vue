<template>
    <div>
        <button @click="returnNewCount(count)">{{ count }}</button>
    </div>
</template>

<script>
export default {
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
        increment() {
            return this.count + 1;
        },

        returnNewCount() {
            this.$emit('increment', this.increment());
        },
    },
};
</script>

<style>
</style>
