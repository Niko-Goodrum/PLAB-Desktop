import { defineStore } from "pinia";
import { ref } from "vue";
import {ProjectItem} from "@/types/project/project.type.js";

export const useProjectStore = defineStore("project", () => {
    const projectList = ref<ProjectItem[]>([]);

    const addProject = (id: string) => {
        projectList.value.push({
            id,
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
        projectList.value = projectList.value.filter((p) => p.id !== id);
    };

    return {
        projectList,
        addProject,
        removeProject,
    };
});