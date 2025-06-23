import { PlabAxios } from "@/libs/axios/customAxios";

export const upload = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await PlabAxios.post("/portfolio/upload-image", formData);
    return res.data.data.image_url;
};