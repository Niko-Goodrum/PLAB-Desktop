<script setup lang="ts">
import { ref, watch } from "vue";
import { useUploader } from "@/composables/upload/useUpload.js";
import { useProfileStore } from "@/stores/profile/profile.store.js";
import Pen from "@/components/icons/pen.vue";
import Trash from "@/components/icons/trash.vue";
import styles from "./style.module.scss";

const fileInputRef = ref<HTMLInputElement | null>(null);
const { file, url, uploading } = useUploader();
const store = useProfileStore();

const openFilePicker = () => {
  fileInputRef.value?.click();
};

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const selected = target.files?.[0];
  if (selected) file.value = selected;
};

const clearFile = () => {
  file.value = null;
  if (fileInputRef.value) fileInputRef.value.value = "";
  store.setImageUrl("");
};

watch(url, (newUrl) => {
  if (newUrl) {
    store.setImageUrl(newUrl);
  }
});
</script>

<template>
  <div :class="styles.imageUploader">
    <input
        type="file"
        accept="image/*"
        ref="fileInputRef"
        :class="styles.fileInput"
        @change="handleFileChange"
    />

    <div v-if="url" :class="styles.preview">
      <img :src="url" alt="업로드된 이미지" />
    </div>

    <div v-else :class="styles.uploadPlaceholder" @click="openFilePicker">
      이미지 업로드
    </div>

    <div :class="styles.actionButtons" v-if="url">
      <Pen :class="styles.icon" @click="openFilePicker" title="수정" />
      <Trash :class="styles.icon" @click="clearFile" title="삭제" />
    </div>

    <p v-if="uploading">업로드 중...</p>
  </div>
</template>