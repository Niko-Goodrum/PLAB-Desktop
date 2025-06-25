<script setup lang="ts">
import { computed, ref } from "vue";
import ArrowDown from "@/components/icons/arrow/arrowDown.vue";
import TextField from "@/components/ui/textFeield/textField/textField.vue";
import FilledTextField from "@/components/ui/textFeield/filledTextField/filledTextField.vue";
import Wordmark from "@/components/portfolio/wordmark/wordmark.vue";
import Stack from "@/components/portfolio/stack/stack.vue";
import IconButton from "@/components/ui/button/icon/iconButton.vue";
import Trash from "@/components/icons/trash.vue";
import styles from "./style.module.scss";
import {ProjectItem} from "@/types/project/project.type.js";

const props = defineProps<{
  item: ProjectItem
  onRemove: () => void
}>();

const isCollapsed = ref(false);
const contentRef = ref<HTMLElement | null>(null);

const contentHeight = computed(() =>
    isCollapsed.value ? "0px" : `${contentRef.value?.scrollHeight || 0}px`
);
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
            @click.stop="onRemove"
        >
          삭제
        </IconButton>
        <ArrowDown :class="[styles.arrow, { [styles.collapsed]: isCollapsed }]" />
      </div>
    </div>

    <div
        ref="contentRef"
        :class="styles.projectContent"
        :style="{
        maxHeight: contentHeight,
        overflow: 'hidden',
        transition: 'max-height 0.4s ease'
      }"
    >
      <TextField v-model="item.name" label="회사명" placeholder="회사명을 입력해주세요." />
      <div :class="styles.group">
        <TextField v-model="item.affiliation" label="부서명" placeholder="소속 부서 또는 팀명을 입력해주세요." />
        <TextField v-model="item.position" label="포지션" placeholder="담당 포지션을 입력해주세요" />
      </div>

      <div :class="styles.date">
        <p>재직 기간</p>
        <div :class="styles.time">
          <FilledTextField v-model="item.start" type="text" placeholder="입사 (YYYY.MM)" :isLabel="false" />
          <span>~</span>
          <FilledTextField v-model="item.end" type="text" placeholder="퇴사 (YYYY.MM)" :isLabel="false" />
        </div>
      </div>

      <Wordmark
          v-model="item.work"
          label="주요 업무 및 성과"
          placeholder="프로젝트에 대한 소개 및 담당한 역할, 성과, 업무 등을 작성해주세요!"
      />
      <Stack v-model="item.stack" :show-label="false" sub-label="사용한 기술 스택" />
    </div>
  </div>
</template>