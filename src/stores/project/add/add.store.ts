import { defineStore } from "pinia";
import { ref } from "vue";
import {ProjectItem} from "@/types/project/project.type.js";

export const useProjectStore = defineStore("project", () => {
    const projects = ref<ProjectItem[]>([]);

    const addProject = () => {
        projects.value.push({
            id: "",
            name: "",
            affiliation: "",
            position: "",
            start: "",
            end: "",
            work: "",
            stack: [],
        });
    };

    const removeProject = (index: number) => {
        projects.value.splice(index, 1);
    };

    return {
        projects,
        addProject,
        removeProject,
    };
});