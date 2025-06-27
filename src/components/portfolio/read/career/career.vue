<script setup lang="ts">
import styles from "./style.module.scss";
import {useCareerStore} from "@/stores/career/career.store.js";

const store = useCareerStore();
</script>

<template>
  <div :class="styles.container">
    <p :class="styles.main_title">경력</p>
    <div
        v-for="career in store.careerList"
        :key="career.id"
        :class="styles.career"
    >
      <div :class="styles.introduce">
        <span :class="styles.name">{{ career.name }}</span>
        <span :class="styles.date">{{ career.start }} ~ {{ career.end }}</span>
      </div>

      <div :class="styles.description">
        <div :class="styles.section">
          <div :class="styles.title">
            <span :class="styles.text">부서명</span>
          </div>
          <span :class="styles.text">{{ career.affiliation }}</span>
        </div>

        <div :class="styles.section">
          <div :class="styles.title">
            <span :class="styles.text">포지션</span>
          </div>
          <span :class="styles.text">{{ career.position }}</span>
        </div>

        <div :class="styles.section">
          <div :class="styles.title">
            <span :class="styles.text">주요 업무</span>
            <span :class="styles.text">{{ career.work }}</span>
          </div>
        </div>

        <div :class="styles.section">
          <div :class="styles.title">
            <span :class="styles.text">기술 스택</span>
          </div>
          <div :class="styles.stack_list">
            <div v-for="item in career.stack" :key="item" :class="styles.stack_item">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>