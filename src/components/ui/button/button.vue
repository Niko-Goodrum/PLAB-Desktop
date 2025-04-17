<script setup lang="ts">
import "./style.scss";
import type {ButtonProps} from "@/types/button/button.type";

defineProps<ButtonProps>();
</script>

<template>
  <button
      :class="[
      'btn',
      `btn--${size}`,
      `btn--${color}`,
      line ? 'btn--outline' : 'btn--filled'
    ]"
      @click="onClick"
  >
    <slot />
  </button>
</template>
