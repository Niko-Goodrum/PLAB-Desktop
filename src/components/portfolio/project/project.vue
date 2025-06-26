<script setup lang="ts">
import { ref } from "vue";
import styles from "./style.module.scss";
import IconButton from "@/components/ui/button/icon/iconButton.vue";
import Plus from "@/components/icons/plus.vue";
import ProjectCard from "@/components/portfolio/project/card/card.vue";
import { ProjectItem } from "@/types/project/project.type";

const projectList = ref<ProjectItem[]>([
  {
    id: "server-generated-id-1",
    name: "",
    position: "",
    start: "",
    end: "",
    work: "",
    stack: [],
    url: "",
    img: "",
  },
]);

const addProject = () => {
  projectList.value.push({
    id: `server-generated-id-${Math.random().toString(36).slice(2)}`, // 실제로는 서버로부터 받아야 함
    name: "",
    position: "",
    start: "",
    end: "",
    work: "",
    stack: [],
    url: "",
    img: "",
  });
};

const removeCareer = (id: string) => {
  projectList.value = projectList.value.filter((project) => project.id !== id);
};

const handleUpdateImg = (id: string, url: string) => {
  const idx = projectList.value.findIndex((project) => project.id === id);
  if (idx !== -1) {
    projectList.value[idx].img = url;
    projectList.value = [...projectList.value];
  }
};
</script>

<template>
  <div>
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      ">
      <span :class="styles.title">프로젝트</span>
      <IconButton
        :right-icon="Plus"
        bg-color="var(--Primary-Normal)"
        text-color="var(--Static-White)"
        :use-border="false"
        @click="addProject">
        프로젝트 추가
      </IconButton>
    </div>

    <ProjectCard
      v-for="project in projectList"
      :key="project.id"
      :item="project"
      :on-remove="() => removeCareer(project.id)"
      @updateImg="handleUpdateImg" />
  </div>
</template>
