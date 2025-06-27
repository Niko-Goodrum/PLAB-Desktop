<script setup lang="ts">
import { useProjectStore } from "@/stores/project/project.store.js";
import ProjectCard from "./card/card.vue";
import Plus from "@/components/icons/plus.vue";
import styles from "./style.module.scss";
import IconButton from "@/components/ui/button/icon/iconButton.vue";

const store = useProjectStore();

const add = () => {
  const id = `project-${crypto.randomUUID()}`;
  store.addProject(id);
};
</script>

<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
      <span :class="styles.title">프로젝트</span>
      <IconButton
          :right-icon="Plus"
          bg-color="var(--Primary-Normal)"
          text-color="var(--Static-White)"
          :use-border="false"
          @click="add">
        프로젝트 추가
      </IconButton>
    </div>

    <ProjectCard
        v-for="project in store.projectList"
        :key="project.id"
        :item="project"
        :on-remove="() => store.removeProject(project.id)"
        @update-img="(id, url) => store.updateProjectImage(id, url)"
    />
  </div>
</template>