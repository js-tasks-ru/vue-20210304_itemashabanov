<template>
  <component
    :is="componentType"
    class="button"
    :class="{ 'button_block': isBlock }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseButton',

  inheritAttrs: false,

  props: {
    block: {
      type: Boolean,
    },

    tag: {
      type: String,
      default: 'button',
    },
  },

  computed: {
    isBlock() {
      return this.block;
    },

    componentType() {
      return this.tag;
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 10px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: initial;
  text-align: center;
  border: 4px solid transparent;
  transition: 0.2s all;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
}

.button.button_block {
  display: block;
  width: 100%;
}
</style>
