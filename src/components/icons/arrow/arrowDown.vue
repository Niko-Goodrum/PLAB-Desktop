<script setup lang="ts">
import { IconProps } from "@/types/icon/icon.type";
import { themeToken } from "@/design/color/themeToken";

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
      d="M7 10L12 15L17 10"
      :stroke="themeToken[color as keyof typeof themeToken] || color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>
