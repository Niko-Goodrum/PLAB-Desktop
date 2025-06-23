<script setup lang="ts">
import Banner from "@/components/banner/banner.vue";
import Wordmark from "@/components/wordmark/wordmark.vue";
import Profile from "@/components/profile/profile.vue";
import styles from "./style.module.scss";
</script>

<template>
  <section :class="styles.write">
    <div :class="styles.contents">
      <Banner />
      <div :class="styles.portfolio_editor">
        <Profile />
        <Wordmark />
      </div>
    </div>
  </section>
</template>