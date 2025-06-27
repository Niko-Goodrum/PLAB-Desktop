<script setup lang="ts">
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import "@/design/global.scss";
</script>

<template>
  <router-view />
  <VueQueryDevtools />
</template>

<style scoped lang="scss">
</style>
