<script setup lang="ts">
import { ref } from "vue";
import IconButton from "@/components/ui/button/icon/iconButton.vue";
import Plus from "@/components/icons/plus.vue";
import ProjectCard from "@/components/portfolio/project/card/card.vue";
import type { ProjectItem } from "@/types/project/project.type";

const projectList = ref<ProjectItem[]>([
  {
    id: "server-generated-id-1",
    name: "",
    affiliation: "",
    position: "",
    start: "",
    end: "",
    work: "",
    stack: [],
  }
]);

const addProject = () => {
  projectList.value.push({
    id: `server-generated-id-${Math.random().toString(36).slice(2)}`, // 실제로는 서버로부터 받아야 함
    name: "",
    affiliation: "",
    position: "",
    start: "",
    end: "",
    work: "",
    stack: [],
  });
};

const removeProject = (id: string) => {
  projectList.value = projectList.value.filter((project) => project.id !== id);
};
</script>

<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
      <span>경력</span>
      <IconButton
          :right-icon="Plus"
          bg-color="var(--Primary-Normal)"
          text-color="var(--Static-White)"
          :use-border="false"
          @click="addProject"
      >
        경력 추가
      </IconButton>
    </div>

    <ProjectCard
        v-for="project in projectList"
        :key="project.id"
        :item="project"
        :on-remove="() => removeProject(project.id)"
    />
  </div>
</template>