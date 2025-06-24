<script setup lang="ts">
import "./style.scss";
import Header from "@/components/common/header/header.vue";
import Introduction from "./introduction/introduction.vue";
import ChatBot from "./chatBot/chatBot.vue";
import { InterviewType } from "@/types/interview/interview.type";
import { ref } from "vue";

const isIntroductionPage = ref(true);
const interviewType = ref<InterviewType | undefined>();

const handleClickNextPage = (type: InterviewType) => {
  isIntroductionPage.value = false;
  interviewType.value = type;
};

const handleChangeType = (type: InterviewType) => {
  interviewType.value = type;
};
</script>

<template>
  <div class="interview">
    <Header />
    <Introduction
      v-if="isIntroductionPage && !interviewType"
      @handleClickNextPage="handleClickNextPage" />
    <ChatBot
      v-else
      :interviewType="interviewType!"
      @handleChangeType="handleChangeType" />
  </div>
</template>
