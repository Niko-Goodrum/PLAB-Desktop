<script setup lang="ts">
import Banner from "@/components/ui/banner/banner.vue";
import Wordmark from "@/components/portfolio/write/wordmark/wordmark.vue";
import Profile from "@/components/portfolio/write/profile/profile.vue";
import styles from "./style.module.scss";
import Work from "@/components/portfolio/write/work/work.vue";
import Stack from "@/components/portfolio/write/stack/stack.vue";
import Career from "@/components/portfolio/write/career/career.vue";
import Project from "@/components/portfolio/write/project/project.vue";
import Education from "@/components/portfolio/write/education/education.vue";
import {useProfileStore} from "@/stores/profile/profile.store.js";
import {useEducationStore} from "@/stores/education/education.store.js";

const store = useProfileStore();
const education = useEducationStore();
</script>

<template>
  <section :class="styles.write">
    <div :class="styles.contents">
      <Banner/>
      <div :class="styles.portfolio_editor">
        <Profile/>
        <Wordmark label="자기소개" v-model="store.wordmark"/>
        <Work/>
        <Stack v-model="store.stack"/>
      </div>
      <div :class="styles.project">
        <p :class="styles.project_title">프로젝트 · 경력</p>
        <Career/>
        <Project/>
      </div>
      <Education :item="education" />
    </div>
  </section>
</template>
