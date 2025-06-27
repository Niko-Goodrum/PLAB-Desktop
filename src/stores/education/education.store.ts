import { defineStore } from "pinia";
import { reactive } from "vue";
import type { EducationItem } from "@/types/education/education.type";

export const useEducationStore = defineStore("education", () => {
    const education = reactive<EducationItem>({
        id: "",
        school: "",
        startDate: "",
        endDate: "",
        major: "",
        text: "",
    });

    return {
        education,
    };
});