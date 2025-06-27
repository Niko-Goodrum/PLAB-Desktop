<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  onClick?: () => void;
  leftIcon?: any;
  rightIcon?: any;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  useBorder?: boolean;
}>();

const style = computed(() => ({
  padding: "10px 15px",
  gap: "8px",
  backgroundColor: props.bgColor || "transparent",
  color: props.textColor || "inherit",
  border: props.useBorder
      ? `1px solid ${props.borderColor || "currentColor"}`
      : "none",
}));
</script>

<template>
  <button class="btn" :style="style" @click="onClick">
    <component :is="leftIcon" v-if="leftIcon" class="icon" />
    <span><slot /></span>
    <component :is="rightIcon" v-if="rightIcon" class="icon" />
  </button>
</template>

<style scoped lang="scss">
@use "@/design/function/flex" as *;
@use "@/design/fonts/typography" as *;

.btn {
  @include flex-center;
  @include Label-Bold;
  border-radius: var(--Shape-ExtraSmall);
  cursor: pointer;
  display: inline-flex;
  transition: all 0.2s ease;
}

</style>