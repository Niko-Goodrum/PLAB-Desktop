<script setup lang="ts">
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
</script>

<template>
  <router-view />
  <VueQueryDevtools />
</template>

<style scoped lang="scss">
@use "@/design/global";
@use "@/design/color/sementic" as *;
</style>
