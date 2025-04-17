<script setup lang="ts">
import "./style.scss";
import Header from "@/components/common/header/header.vue";
import Read from "@/components/portfolio/read/read.vue";
import Write from "@/components/portfolio/write/write.vue";
</script>

<template>
  <Header/>
  <main class="portfolio-main">
    <Read />
    <Write />
  </main>
</template>