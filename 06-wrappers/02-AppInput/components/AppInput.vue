<template>
  <div class="input-group"
    :class="{
      'input-group_icon': hasIcon.exists,
      'input-group_icon-left': hasIcon.left,
      'input-group_icon-right': hasIcon.right,
    }"
  >
    <slot name="left-icon" class="icon" />
    <component
      :is="isMultiline"
      v-bind="$attrs"
      ref="input"
      class="form-control"
      :class="{
        'form-control_sm': isSmall,
        'form-control_rounded': isRounded,
      }"
      :value.prop="value"
      v-on="listeners"
    ></component>

    <slot name="right-icon" class="icon" />
  </div>
</template>

<script>
export default {
  name: 'AppInput',

  inheritAttrs: false,

  model: {
    prop: 'value',
    event: 'input',
  },

  props: {
    small: {
      type: Boolean,
    },

    rounded: {
      type: Boolean,
    },

    multiline: {
      type: Boolean,
      default: false,
    },

    value: {
      type: String,
    },
  },

  data() {
    return {
      hasIcon: {
        exists: false,
        left: false,
        right: false,
      },
    };
  },

  computed: {
    isSmall() {
      return this.small;
    },

    isRounded() {
      return this.rounded;
    },

    isMultiline() {
      return this.multiline ? 'textarea' : 'input';
    },

    listeners() {
      return {
        ...this.$listeners,
        input: ($event) => this.$emit('input', $event.target.value),
        change: ($event) => this.$emit('change', $event.target.value),
      };
    },
  },

  mounted() {
    this.updateHasIcon();
  },

  updated() {
    this.updateHasIcon();
  },

  methods: {
    updateHasIcon() {
      this.hasIcon.exists = !!this.$slots['left-icon'] || !!this.$slots['right-icon'];
      this.hasIcon.left = !!this.$slots['left-icon'];
      this.hasIcon.right = !!this.$slots['right-icon'];
    },
  },
};
</script>

<style scoped>
.form-control {
  padding: 12px 16px;
  height: 52px;
  border-radius: 8px;
  border: 2px solid var(--blue-light);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);
  transition: 0.2s all;
  background-color: var(--white);
  outline: none;
  box-shadow: none;
}

.form-control::placeholder {
  font-weight: 400;
  color: var(--blue-2);
}

.form-control:focus {
  border-color: var(--blue);
}

textarea.form-control {
  width: 100%;
  min-height: 211px;
}

.form-control.form-control_rounded {
  border-radius: 26px;
}

.form-control.form-control_sm.form-control_rounded {
  border-radius: 22px;
}

.form-control.form-control_sm {
  padding: 8px 16px;
  height: 44px;
  border-radius: 4px;
}

.input-group {
  position: relative;
}

.input-group .form-control {
  width: 100%;
}

.input-group.input-group_icon .form-control {
  padding-left: 50px;
}

.input-group.input-group_icon .icon {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.input-group.input-group_icon.input-group_icon-left .icon:first-child {
  left: 16px;
}

.input-group.input-group_icon.input-group_icon-right .icon:last-child {
  right: 16px;
}
</style>
