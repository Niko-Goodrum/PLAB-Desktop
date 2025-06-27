<script setup lang="ts">
import { computed, ref } from "vue";
import ArrowDown from "@/components/icons/arrow/arrowDown.vue";
import TextField from "@/components/ui/textFeield/textField/textField.vue";
import FilledTextField from "@/components/ui/textFeield/filledTextField/filledTextField.vue";
import Wordmark from "@/components/portfolio/write/wordmark/wordmark.vue";
import Stack from "@/components/portfolio/write/stack/stack.vue";
import IconButton from "@/components/ui/button/icon/iconButton.vue";
import Trash from "@/components/icons/trash.vue";
import styles from "./style.module.scss";
import { ProjectItem } from "@/types/project/project.type";
import Plus from "@/components/icons/plus.vue";

const props = defineProps<{
  item: ProjectItem;
  onRemove: () => void;
}>();

const emit = defineEmits<{
  (e: "updateImg", id: string, url: string): void;
}>();

const isCollapsed = ref(false);
const contentRef = ref<HTMLElement | null>(null);
const imageUrl = ref<string | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);

const contentHeight = computed(() =>
  isCollapsed.value ? "0px" : `${contentRef.value?.scrollHeight || 0}px`
);

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileChange = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (file) {
    const url = URL.createObjectURL(file);
    imageUrl.value = url;
    emit("updateImg", props.item.id, url);
  }
};
</script>

<template>
  <div :class="styles.project">
    <div :class="styles.drop" @click="isCollapsed = !isCollapsed">
      <span>활동 정보</span>
      <div style="display: flex; align-items: center; gap: 8px">
        <IconButton
          :right-icon="Trash"
          bg-color="var(--Background-Normal)"
          text-color="var(--Label-Error)"
          :use-border="false"
          @click.stop="onRemove">
          삭제
        </IconButton>
        <ArrowDown
          :class="[styles.arrow, { [styles.collapsed]: isCollapsed }]" />
      </div>
    </div>

    <div
      ref="contentRef"
      :class="styles.projectContent"
      :style="{
        maxHeight: contentHeight,
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
      }">
      <div :class="styles.group">
        <TextField
          v-model="item.name"
          label="프로젝트명"
          placeholder="프로젝트명을 입력해주세요." />
        <TextField
          v-model="item.position"
          label="담당 역할"
          placeholder="담당 역할을 입력해주세요" />
      </div>

      <div :class="styles.date">
        <p>프로젝트 기간</p>
        <div :class="styles.time">
          <FilledTextField
            v-model="item.start"
            type="text"
            :width="'100%'"
            :value="item.start"
            placeholder="(YYYY.MM)"
            :isLabel="false" />
          <span>~</span>
          <FilledTextField
            v-model="item.end"
            type="text"
            :width="'100%'"
            :value="item.end"
            placeholder="(YYYY.MM)"
            :isLabel="false" />
        </div>
      </div>

      <Wordmark
        v-model="item.work"
        label="주요 업무 및 성과"
        placeholder="프로젝트에 대한 소개 및 담당한 역할, 성과, 업무 등을 작성해주세요!" />
      <Stack
        v-model="item.stack"
        :show-label="false"
        sub-label="사용한 기술 스택" />

      <div :class="styles.url">
        <div :class="styles.urlTop">
          <p :class="styles.urlTitle">url</p>
        </div>
        <div :class="styles.urlBottom">
          <FilledTextField
            v-model="item.url"
            type="text"
            :value="item.url"
            :text="'링크'"
            :placeholder="'https://'"
            :width="'100%'"
            :isLabel="true" />
        </div>
      </div>

      <div :class="styles.img">
        <div :class="styles.imgTop">
          <p :class="styles.imgTitle">이미지</p>
          <p :class="styles.imgSubTitle">579 X 327</p>
        </div>
        <div :class="styles.preview" @click="triggerFileInput">
          <img v-if="imageUrl" :src="imageUrl" :class="styles.previewImg" />
          <div v-else :class="styles.default">
            <Plus :color="'staticBlack'" />
          </div>
        </div>
        <input
          type="file"
          ref="fileInput"
          accept="image/*"
          @change="handleFileChange"
          style="display: none" />
      </div>
    </div>
  </div>
</template>
