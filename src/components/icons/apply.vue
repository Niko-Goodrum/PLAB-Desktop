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
      d="M20.235 5.68597C20.667 4.49097 19.509 3.33297 18.314 3.76597L3.709 9.04797C2.51 9.48197 2.365 11.118 3.468 11.757L8.13 14.456L12.293 10.293C12.4816 10.1108 12.7342 10.01 12.9964 10.0123C13.2586 10.0146 13.5094 10.1197 13.6948 10.3051C13.8802 10.4906 13.9854 10.7414 13.9877 11.0036C13.99 11.2658 13.8892 11.5184 13.707 11.707L9.544 15.87L12.244 20.532C12.882 21.635 14.518 21.489 14.952 20.291L20.235 5.68597Z"
      :fill="themeToken[color as keyof typeof themeToken] || color" />
  </svg>
</template>
