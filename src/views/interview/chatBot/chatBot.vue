<script setup lang="ts">
import "./style.scss";
import ArrowUp from "@/components/icons/arrow/arrowUp.vue";
import ArrowDown from "@/components/icons/arrow/arrowDown.vue";
import Check from "@/components/icons/check.vue";
import Interviewer from "@/assets/images/interview/interviewer.vue";
import Apply from "@/components/icons/apply.vue";
import { InterviewType } from "@/types/interview/interview.type";
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import {
  usePostCreateInterview,
  usePostInterview,
} from "@/queries/interview/interview.query";
import { showToast } from "@/libs/toast/swal";

const postInterview = usePostInterview();
const postCreateInterview = usePostCreateInterview();
const isOpen = ref(false);
const chatId = ref<string>("");
const answer = ref<string>("");
const isLoading = ref(false);
const chatbotMessage = ref<string>("");
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

const handleClickReply = () => {
  if (isLoading.value) return;
  isLoading.value = true;

  if (answer.value === "") {
    showToast("error", "답변을 작성해주세요.");
    isLoading.value = false;
    return;
  }

  postInterview.mutate(
    { answer: answer.value, chat_id: chatId.value },
    {
      onSuccess: (data) => {
        chatId.value = data.data.chat_id;
        chatbotMessage.value = data.data.feedback;
        setTimeout(() => {
          chatbotMessage.value = data.data.question;
        }, 5000);
        isLoading.value = false;
      },
      onError: () => {
        showToast("error", "챗봇 메시지를 불러오는데 실패했습니다.");
        isLoading.value = false;
      },
    }
  );
};

watch(
  () => interviewType,
  (newType) => {
    postCreateInterview.mutate(newType, {
      onSuccess: (data) => {
        chatId.value = data.data.chat_id;
        chatbotMessage.value = data.data.question;
      },
      onError: () => {
        showToast("error", "챗봇 메시지를 불러오는데 실패했습니다.");
      },
    });
  },
  { immediate: true }
);

onMounted(() => {
  document.addEventListener("click", handleClickClose);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickClose);
});
</script>

<template>
  <div class="chatbot">
    <!-- <div class="chatbot-sidebar">
      <div v-for="i in 30" :key="i" class="chatbot-sidebar-item">
        New Chatasdfsfsdfasfasdfasf
      </div>
    </div> -->
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
            {{ chatbotMessage || "면접 질문 불러오는 중..." }}
          </div>
          <Interviewer />
        </div>
        <div class="chatbot-main-bottom-input">
          <textarea
            rows="1"
            ref="textareaRef"
            v-model="answer"
            @input="autoResize"
            class="chatbot-main-bottom-input-textarea"
            placeholder="질문에 대한 답변을 입력해주세요." />
          <div
            class="chatbot-main-bottom-input-button"
            @click="handleClickReply">
            <Apply />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
