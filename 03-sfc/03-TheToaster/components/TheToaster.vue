<template>
  <div id="toasts" class="toasts">
    <div
      v-for="msg in msgObj"
      :key="msg.id"
      :class="['toast', msg.type == 'success' ? 'toast_success' : 'toast_error']"
    >
      <app-icon :icon="msg.type == 'success' ? 'check-circle' : 'alert-circle'" />
      <span>{{ msg.message }}</span>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon';

const DELAY = 5000;

export default {
  name: 'TheToaster',

  components: { AppIcon },

  data() {
    return {
      msgObj: [],
      msgType: null,
      message: null,
      items: 0,
    };
  },

  methods: {
    error(message) {
      this.msgObj.push({
        id: this.items++,
        type: 'error',
        message,
      });
      this.removeToast(this.msgObj);
    },

    success(message) {
      this.msgObj.push({
        id: this.items++,
        type: 'success',
        message,
      });
      this.removeToast(this.msgObj);
    },

    removeToast(msgObj) {
      setTimeout(function () {
        msgObj.shift();
      }, DELAY);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast > .icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
