<script setup lang="ts">
import styles from "./style.module.scss";
import {useEducationStore} from "@/stores/education/education.store.js";

const education = useEducationStore();
</script>

<template>
  <div :class="styles.education_container">
    <p :class="styles.title">학력</p>
    <div :class="styles.education">
      <div :class="styles.school">
        <span :class="styles.name">{{ education.school }}</span>
        <div :class="styles.date">
          <span :class="styles.date">{{ education.startDate }}</span>
          <span>~</span>
          <span :class="styles.date">{{ education.endDate }}</span>
        </div>
      </div>
      <div :class="styles.title">
        <span :class="styles.text">전공</span>
        <span :class="styles.description">{{ education.major }}</span>
      </div>
      <div :class="styles.title2">
        <p :class="styles.text">상세 설명</p>
        <p :class="styles.description">{{ education.text }}</p>
      </div>
    </div>
  </div>
</template>