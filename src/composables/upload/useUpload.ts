import { ref, watch } from "vue";
import { useUpload } from "@/queries/upload/upload.query";

export const useUploader = () => {
    const file = ref<File | null>(null);
    const url = ref<string | null>(null);

    const { mutate, isPending } = useUpload();

    watch(file, (f) => {
        if (!f) {
            url.value = null;
            return;
        }

        mutate(f, {
            onSuccess: (result: string) => {
                url.value = result;
            },
        });
    });

    return {
        file,
        url,
        uploading: isPending,
    };
};