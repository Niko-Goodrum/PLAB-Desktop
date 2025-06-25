<script setup lang="ts">
import Banner from "@/components/ui/banner/banner.vue";
import Wordmark from "@/components/wordmark/wordmark.vue";
import Profile from "@/components/profile/profile.vue";
import styles from "./style.module.scss";
import Work from "@/components/work/work.vue";
import Stack from "@/components/stack/stack.vue";
</script>

<template>
  <section :class="styles.write">
    <div :class="styles.contents">
      <Banner />
      <div :class="styles.portfolio_editor">
        <Profile />
        <Wordmark />
        <Work />
        <Stack />
      </div>
      <div :class="styles.project">

      </div>
    </div>
  </section>
</template>