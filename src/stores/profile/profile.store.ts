import { defineStore } from "pinia";
import { ref } from "vue";

export const useProfileStore = defineStore("profile", () => {
    const name = ref("");
    const phoneNumber = ref("");
    const email = ref("");
    const imageFile = ref<File | null>(null);
    const image_url = ref<string>("");
    const wordmark = ref("");
    const work = ref("");
    const stack = ref<string[]>([]);

    const setImageUrl = (url: string) => {
        image_url.value = url;
    };

    return {
        name,
        phoneNumber,
        email,
        imageFile,
        image_url,
        wordmark,
        stack,
        work,
        setImageUrl,
    };
});