<script setup lang="ts">
import type {ButtonProps} from "@/types/button/button.type";

defineProps<ButtonProps>();
</script>

<template>
  <button
      :class="[
      'btn',
      `btn--${size || 'medium'}`,
      `btn--${color || 'primary'}`,
      line ? 'btn--outline' : null
    ]"
      @click="onClick"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use "@/design/function/flex" as *;
@use "@/design/fonts/typography" as *;

.btn {
  @include flex-center;
  cursor: pointer;

  &--extraLarge { @include HeadLine2-Bold; padding: 10px 24px; border-radius: var(--Shape-Large) };
  &--large { @include Body-Bold; padding: 14px 20px; border-radius: var(--Shape-Medium) };
  &--medium { @include Label-Bold; padding: 10px 16px; border-radius: var(--Shape-Small) };
  &--small { @include Caption-Bold; padding: 8px 12px; border-radius: var(--Shape-ExtraSmall) };

  &--filled {
    &.btn--primary {
      background-color: var(--Primary-Normal);
      color: var(--Static-White);
    }
    &.btn--alternative {
      background-color: var(--Primary-Alternative);
      color: var(--Static-White);
    }
    &.btn--normal {
      background-color: var(--Fill-Gray);
      color: var(--Label-Neutral);
    }
    &.btn--white {
      background-color: var(--Static-White);
      color: var(--Static-Black);
    }
  }

  &--outline {
    background-color: transparent var(--Fill-Support);
    border: 1px solid var(--Primary-Normal);
    color: var(--Primary-Normal);
  }
}
</style>