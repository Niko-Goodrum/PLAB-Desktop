<script setup lang="ts">
import "./style.scss";
import type { ButtonProps } from "@/types/ui/button/button.type";

defineProps<ButtonProps>();
</script>

<template>
  <button
      :class="[
      'btn',
      `btn--${size}`,
      `btn--${color}`,
      line ? 'btn--outline' : 'btn--filled',
    ]"
      :style="customStyle"
      @click="onClick">
    <slot />
  </button>
</template>
