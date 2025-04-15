<script setup lang="ts">
import { IconProps } from "@/types/icon/icon.type";
import { themeColor } from "@/design/color/themeColor";

const { size = 24, color = "staticBlack" } = defineProps<IconProps>();
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 14L12 9L7 14"
      :stroke="themeColor[color as keyof typeof themeColor] || color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>
