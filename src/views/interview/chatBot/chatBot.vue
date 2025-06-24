<script setup lang="ts">
import "./style.scss";
import ArrowUp from "@/components/icons/arrow/arrowUp.vue";
import ArrowDown from "@/components/icons/arrow/arrowDown.vue";
import Check from "@/components/icons/check.vue";
import Interviewer from "@/assets/images/interview/interviewer.vue";
import Apply from "@/components/icons/apply.vue";
import { InterviewType } from "@/types/interview/interview.type";
import { onBeforeUnmount, onMounted, ref } from "vue";

const isOpen = ref(false);
const message = ref<string>("");
const categoryRef = ref<HTMLDivElement | null>(null);
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const { interviewType } = defineProps<{
  interviewType: InterviewType;
}>();
const emit = defineEmits<{
  (e: "handleChangeType", type: InterviewType): void;
}>();

const autoResize = () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = "auto";
    textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
  }
};

const handleClickClose = (event: MouseEvent) => {
  if (
    isOpen.value &&
    categoryRef.value &&
    !categoryRef.value.contains(event.target as Node)
  ) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickClose);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickClose);
});
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
        <div
          ref="categoryRef"
          class="chatbot-main-top-category"
          @click="isOpen = !isOpen">
          <span class="chatbot-main-top-category-text">{{
            interviewType === "Tech" ? "기술 면접" : "인성 면접"
          }}</span>
          <ArrowUp v-if="isOpen" color="labelNormal" />
          <ArrowDown v-else color="labelNormal" />
        </div>
        <div v-if="isOpen" class="chatbot-main-top-option">
          <div
            class="chatbot-main-top-option-item"
            @click="() => emit('handleChangeType', 'Tech')">
            <span
              :class="[
                'chatbot-main-top-option-item-text',
                {
                  'chatbot-main-top-option-item-text-selected':
                    interviewType === 'Tech',
                },
              ]"
              >기술 면접</span
            >
            <Check
              v-if="interviewType === 'Tech'"
              size="22"
              color="primaryNormal" />
          </div>
          <div
            class="chatbot-main-top-option-item"
            @click="() => emit('handleChangeType', 'Person')">
            <span
              :class="[
                'chatbot-main-top-option-item-text',
                {
                  'chatbot-main-top-option-item-text-selected':
                    interviewType === 'Person',
                },
              ]"
              >인성 면접</span
            >
            <Check
              v-if="interviewType === 'Person'"
              size="22"
              color="primaryNormal" />
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
