<script setup lang="ts">
import "./style.scss";
import ArrowUp from "@/components/icons/arrow/arrowUp.vue";
import ArrowDown from "@/components/icons/arrow/arrowDown.vue";
import Check from "@/components/icons/check.vue";
import Interviewer from "@/assets/images/interview/interviewer.vue";
import Apply from "@/components/icons/apply.vue";
import { onMounted, ref } from "vue";

const message = ref("");
const textareaRef = ref<HTMLTextAreaElement | null>(null);

const autoResize = () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = "auto";
    textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
  }
};
</script>

<template>
  <div class="chatbot">
    <div class="chatbot-sidebar">
      <div
        v-for="item in Array.from({ length: 30 })"
        class="chatbot-sidebar-item">
        New Chatasdfsfsdfasfasdfasf
      </div>
    </div>
    <div class="chatbot-main">
      <div class="chatbot-main-top">
        <div class="chatbot-main-top-category">
          <span class="chatbot-main-top-category-text">기술 면접</span>
          <ArrowDown />
        </div>
        <div class="chatbot-main-top-option">
          <div class="chatbot-main-top-option-item">
            <span
              :class="[
                'chatbot-main-top-option-item-text',
                { 'chatbot-main-top-option-item-text-selected': true },
              ]"
              >기술 면접</span
            >
            <Check size="22" color="primaryNormal" />
          </div>
          <div class="chatbot-main-top-option-item">
            <span class="chatbot-main-top-option-item-text">인성 면접</span>
          </div>
        </div>
      </div>
      <div class="chatbot-main-bottom">
        <div class="chatbot-main-bottom-ai">
          <div class="chatbot-main-bottom-ai-speechBubble">
            정적 타이핑을 통해 코드의 안정성을 향상시키는 건 맞으나, 그에 대한
            이유도 함께 첨부하면 좋아요
          </div>
          <Interviewer />
        </div>
        <div class="chatbot-main-bottom-input">
          <textarea
            rows="1"
            ref="textareaRef"
            v-model="message"
            @input="autoResize"
            class="chatbot-main-bottom-input-textarea"
            placeholder="질문에 대한 답변을 입력해주세요." />
          <div class="chatbot-main-bottom-input-button">
            <Apply />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
