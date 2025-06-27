<script setup lang="ts">
import styles from "./style.module.scss";
import {useProjectStore} from "@/stores/project/project.store";
import {storeToRefs} from "pinia";

const projectStore = useProjectStore();
const {projectList} = storeToRefs(projectStore);
</script>

<template>
  <div :class="styles.container">
    <p :class="styles.main_title">프로젝트</p>
    <div
        v-for="project in projectList"
        :key="project.id"
        :class="styles.career"
    >
      <div :class="styles.introduce">
        <span :class="styles.name">{{ project.name }}</span>
        <span :class="styles.date">{{ project.start }} ~ {{ project.end }}</span>
      </div>

      <div :class="styles.description">
        <div :class="styles.section">
          <div :class="styles.title">
            <span :class="styles.text">포지션</span>
          </div>
          <span :class="styles.text">{{ project.position }}</span>
        </div>

        <div :class="styles.section">
          <div :class="styles.title">
            <span :class="styles.text">주요 업무</span>
          </div>
          <div :class="styles.span">
            <span :class="styles.text">{{ project.work }}</span>
          </div>
        </div>
        <div :class="styles.section">
          <div :class="styles.title">
            <span :class="styles.text">관련 링크</span>
          </div>
          <div :class="styles.span">
            <span :class="styles.text">{{ project.url }}</span>
          </div>
        </div>

        <div :class="styles.section">
          <div :class="styles.title">
            <span :class="styles.text">기술 스택</span>
          </div>
          <div :class="styles.stack_list">
            <div v-for="item in project.stack" :key="item" :class="styles.stack_item">
              {{ item }}
            </div>
          </div>
        </div>

        <div :class="styles.section" v-if="project.image_url">
          <div>
            <span :class="styles.text">사진</span>
          </div>
        </div>
        <img
            :src="project.image_url"
            alt="project image"
            :class="styles.image"
        />
      </div>
    </div>
  </div>
</template>