<script setup lang="ts">
import { IconProps } from "@/types/icon/icon.type";
import { themeColor } from "@/design/color/themeColor";

const { size = 16, color = "labelNormal" } = defineProps<IconProps>();
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 12.8C13.5 12.31 12.78 12 12 12C11.2935 12.0001 10.6097 12.2499 10.0695 12.7053C9.52932 13.1607 9.16743 13.7923 9.04779 14.4887C8.92814 15.185 9.05844 15.9012 9.41566 16.5108C9.77288 17.1203 10.334 17.5841 11 17.82C11.0331 16.7975 11.3259 15.8002 11.8507 14.922C12.3755 14.0438 13.1152 13.3135 14 12.8ZM11.09 19H5V5H16.17L19 7.83V12.35C19.75 12.61 20.42 13 21 13.54V7L17 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H11.81C11.46 20.39 11.21 19.72 11.09 19ZM6 10H15V6H6V10ZM15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21Z"
      :fill="themeColor[color as keyof typeof themeColor] || color" />
  </svg>
</template>
