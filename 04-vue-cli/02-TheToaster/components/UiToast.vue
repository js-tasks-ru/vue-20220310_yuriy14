<template>
  <div class="toast" :class="toast.definingClass">
    <ui-icon class="toast__icon" :icon="toast.icon" />
    <slot />
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'UiToast',
  components: { UiIcon },
  props: {
    toast: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style scoped>
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
.toast__icon {
  margin-right: 12px;
}
.toast.toast_success {
  color: var(--green);
}
.toast.toast_error {
  color: var(--red);
}
</style>
