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
      d="M17.85 11.698L17.142 10.991L7.242 20.891H3V16.648L14.314 5.33404L19.971 10.991C20.1585 11.1786 20.2638 11.4329 20.2638 11.698C20.2638 11.9632 20.1585 12.2175 19.971 12.405L12.9 19.477L11.485 18.062L17.85 11.698ZM15.728 9.57704L14.314 8.16304L5 17.477V18.891H6.414L15.728 9.57704ZM18.556 2.50604L21.385 5.33404C21.478 5.42692 21.5517 5.53721 21.6021 5.6586C21.6524 5.78 21.6783 5.91013 21.6783 6.04154C21.6783 6.17296 21.6524 6.30309 21.6021 6.42448C21.5517 6.54588 21.478 6.65617 21.385 6.74904L19.97 8.16304L15.728 3.92004L17.142 2.50604C17.3295 2.31857 17.5838 2.21326 17.849 2.21326C18.1142 2.21326 18.3685 2.31857 18.556 2.50604Z"
      :fill="themeColor[color as keyof typeof themeColor] || color" />
  </svg>
</template>
