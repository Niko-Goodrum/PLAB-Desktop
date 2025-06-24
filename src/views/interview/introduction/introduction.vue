<script setup lang="ts">
import "./style.scss";
import type { InterviewType } from "@/types/interview/interview.type";
import Interviewer from "@/assets/images/interview/interviewer.vue";
import Button from "@/components/ui/button/button.vue";

const emit = defineEmits<{
  (e: "handleClickNextPage", type: InterviewType): void;
}>();
</script>

<template>
  <div class="introduction">
    <div class="introduction-wrap">
      <p class="introduction-wrap-content">
        어려웠던 면접, 이제는 PLAB이 도와드릴게요!
      </p>
      <Interviewer />
      <div class="introduction-wrap-btn">
        <Button
          :size="'Large'"
          :color="'Primary'"
          :customStyle="{
            fontFamily: 'Pretendard-Bold',
            fontSize: '16px',
          }"
          :onClick="() => emit('handleClickNextPage', 'Person')"
          >인성 면접</Button
        >
        <Button
          :size="'Large'"
          :color="'Primary'"
          :customStyle="{
            fontFamily: 'Pretendard-Bold',
            fontSize: '16px',
            lineHeight: '130%',
          }"
          :onClick="() => emit('handleClickNextPage', 'Tech')"
          >기술 면접</Button
        >
      </div>
    </div>
  </div>
</template>
