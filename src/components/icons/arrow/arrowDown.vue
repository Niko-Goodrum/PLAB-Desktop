<script setup lang="ts">
interface Props {
  size?: number;
  color?: string;
}

const { size = 24, color = "var(--Static-Black)" } = defineProps<Props>();
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 10L12 15L17 10"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>
