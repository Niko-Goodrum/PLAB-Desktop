<script setup lang="ts">
import "./style.scss";
import Header from "@/components/common/header/header.vue";
import Introduction from "./introduction/introduction.vue";
import ChatBot from "./chatBot/chatBot.vue";
import { ref } from "vue";

export type InterviewType = "Tech" | "Person";

const isIntroductionPage = ref(true);
const interviewType = ref<InterviewType | undefined>();

const handleClickNextPage = (type: InterviewType) => {
  isIntroductionPage.value = false;
  interviewType.value = type;
};
</script>

<template>
  <div class="interview">
    <Header />
    <Introduction
      v-if="isIntroductionPage && !interviewType"
      @handleClickNextPage="handleClickNextPage" />
    <ChatBot v-else />
  </div>
</template>
