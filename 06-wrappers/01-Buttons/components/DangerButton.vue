<template>
  <base-button
    class="button_danger"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </base-button>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  name: 'DangerButton',

  inheritAttrs: false,

  components: {
    BaseButton,
  },
};
</script>

<style scoped>
.button_danger {
  background-color: var(--white);
  border-color: var(--red);
  color: var(--red);
}

.button_danger:hover {
  border-color: var(--red-light);
}
</style>
