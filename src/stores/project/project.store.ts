import { defineStore } from "pinia";
import { ref } from "vue";
import type { ProjectItem } from "@/types/project/project.type.ts";

export const useProjectStore = defineStore("project", () => {
    const projectList = ref<ProjectItem[]>([]);

    const addProject = (id: string) => {
        projectList.value.push({
            id,
            name: "",
            position: "",
            start: "",
            end: "",
            work: "",
            stack: [],
            url: "",
            image_url: "",
        });
    };

    const removeProject = (id: string) => {
        projectList.value = projectList.value.filter((p) => p.id !== id);
    };

    const updateProjectImage = (id: string, imageUrl: string) => {
        const project = projectList.value.find((p) => p.id === id);
        if (project) project.image_url = imageUrl;
    };

    return {
        projectList,
        addProject,
        removeProject,
        updateProjectImage,
    };
});