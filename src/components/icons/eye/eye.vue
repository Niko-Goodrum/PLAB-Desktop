<script setup lang="ts">
import { IconProps } from "@/types/icon/icon.type";
import { themeColor } from "@/design/color/themeColor";

const { size = 20, color = "labelAssistive" } = defineProps<IconProps>();
defineEmits(["click"]);
</script>

<template>
  <svg
    @click="$emit('click')"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    cursor="pointer"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 17.4C10.932 17.4 9.88795 17.0833 8.99992 16.4899C8.1119 15.8966 7.41976 15.0532 7.01105 14.0665C6.60234 13.0797 6.4954 11.994 6.70376 10.9465C6.91212 9.89899 7.42642 8.9368 8.18162 8.1816C8.93683 7.4264 9.89901 6.9121 10.9465 6.70374C11.994 6.49538 13.0798 6.60231 14.0665 7.01103C15.0532 7.41974 15.8966 8.11187 16.4899 8.9999C17.0833 9.88792 17.4 10.932 17.4 12C17.4 13.4321 16.8311 14.8057 15.8184 15.8184C14.8057 16.831 13.4322 17.4 12 17.4ZM12 3.59998C3.6 3.59998 0 12 0 12C0 12 3.6 20.4 12 20.4C20.4 20.4 24 12 24 12C24 12 20.4 3.59998 12 3.59998Z"
      :fill="themeColor[color as keyof typeof themeColor] || color" />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      :fill="themeColor[color as keyof typeof themeColor] || color" />
  </svg>
</template>
