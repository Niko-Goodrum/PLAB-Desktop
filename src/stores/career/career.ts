import { defineStore } from "pinia";
import { ref } from "vue";
import {CareerItem} from "@/types/career/career.type.js";

export const useCareerStore = defineStore("career", () => {
    const careerList = ref<CareerItem[]>([]);

    const addCareer = (id: string) => {
        careerList.value.push({
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

    const removeCareer = (id: string) => {
        careerList.value = careerList.value.filter((p) => p.id !== id);
    };

    return {
        careerList,
        addCareer,
        removeCareer,
    };
});