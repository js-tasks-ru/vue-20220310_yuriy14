<template>
  <div class="toasts">
    <template v-for="toast in toasts" :key="toast">
      <ui-toast :toast="toast">
        <span @click="this.delete(toast)">{{ toast.text }}</span>
      </ui-toast>
    </template>
    <!-- <div class="toast toast_success">
      <ui-icon class="toast__icon" icon="check-circle" />
      <span>Success Toast Example</span>
    </div>

    <div class="toast toast_error">
      <ui-icon class="toast__icon" icon="alert-circle" />
      <span>Error Toast Example</span>
    </div> -->
  </div>
</template>

<script>
import UiIcon from './UiIcon';
import UiToast from './UiToast';

export default {
  name: 'TheToaster',
  components: { UiIcon, UiToast },
  data() {
    return {
      toasts: [],
    };
  },
  methods: {
    add({
      definingClass = 'toast_success',
      icon = 'check-circle',
      text = 'Text Toast Example',
      timerDelete = 5000,
    } = {}) {
      const toast = {
        definingClass,
        icon,
        text,
      };
      const index = this.toasts.push(toast) - 1;
      const toastRef = this.toasts[index];
      toastRef.timerId = setTimeout(() => {
        this.delete(toastRef);
      }, timerDelete);
    },
    delete(toast) {
      const index = this.toasts.findIndex((item) => item === toast);
      this.toasts.splice(index, 1);
      const { timerId } = toast;
      clearTimeout(timerId);
    },
    success(text) {
      this.add({
        definingClass: 'toast_success',
        icon: 'check-circle',
        text,
      });
    },
    error(text) {
      this.add({
        definingClass: 'toast_error',
        icon: 'alert-circle',
        text,
      });
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
@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
.toast + .toast {
  margin-top: 20px;
}
</style>
