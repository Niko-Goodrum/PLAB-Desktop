import { useMutation } from "@tanstack/vue-query";
import {upload} from "@/repository/upload/upload.repository";

export const useUpload = () => {
    return useMutation({
        mutationFn: upload,
    });
};