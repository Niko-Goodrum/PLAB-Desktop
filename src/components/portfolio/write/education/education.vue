<script setup lang="ts">
import styles from "./style.module.scss";
import FilledTextField from "@/components/ui/textFeield/filledTextField/filledTextField.vue";
import TextField from "@/components/ui/textFeield/textField/textField.vue";
import Wordmark from "@/components/portfolio/write/wordmark/wordmark.vue";
import ArrowDown from "@/components/icons/arrow/arrowDown.vue";
import {computed, ref} from "vue";
import {EducationItem} from "@/types/education/education.type";

const props = defineProps<{ item: EducationItem }>();

const isCollapsed = ref(false);
const contentRef = ref<HTMLElement | null>(null);

const contentHeight = computed(() =>
    isCollapsed.value ? "0px" : `${contentRef.value?.scrollHeight || 0}px`
);
</script>

<template>
  <div :class="styles.education">
    <div :class="styles.drop" @click="isCollapsed = !isCollapsed">
      <span>학력</span>
      <ArrowDown :class="[styles.arrow, { [styles.collapsed]: isCollapsed }]"/>
    </div>

    <div
        ref="contentRef"
        :class="styles.projectContent"
        :style="{
        maxHeight: contentHeight,
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
      }"
    >
      <TextField
          v-model="item.school"
          label="학교명"
          placeholder="학교명을 입력해주세요."
      />

      <div :class="styles.date">
        <p>재학 기간</p>
        <div :class="styles.time">
          <FilledTextField
              v-model="item.startDate"
              type="text"
              :width="'100%'"
              placeholder="입학 (YYYY.MM)"
              :isLabel="false"
          />
          <span>~</span>
          <FilledTextField
              v-model="item.endDate"
              type="text"
              :width="'100%'"
              placeholder="졸업 (YYYY.MM)"
              :isLabel="false"
          />
        </div>
      </div>

      <TextField v-model="item.major"
                 label="전공"
                 placeholder="전공을 입력해주세요."/>
      <Wordmark
          v-model="item.text"
          label="상세 설명"
          placeholder="이수 과목, 특별 사항 등을 적어주세요."
      />
    </div>
  </div>
</template>