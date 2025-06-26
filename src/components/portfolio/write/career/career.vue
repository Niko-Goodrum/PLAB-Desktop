<script setup lang="ts">
import { ref } from "vue";
import styles from "./style.module.scss";
import IconButton from "@/components/ui/button/icon/iconButton.vue";
import Plus from "@/components/icons/plus.vue";
import CareerCard from "@/components/portfolio/write/career/card/card.vue";
import type { CareerItem } from "@/types/career/career.type.js";

const careerList = ref<CareerItem[]>([
  {
    id: "server-generated-id-1",
    name: "",
    affiliation: "",
    position: "",
    start: "",
    end: "",
    work: "",
    stack: [],
  },
]);

const addCareer = () => {
  careerList.value.push({
    id: `server-generated-id-${Math.random().toString(36).slice(2)}`, // 실제로는 서버로부터 받아야 함
    name: "",
    affiliation: "",
    position: "",
    start: "",
    end: "",
    work: "",
    stack: [],
  });
};

const removeCareer = (id: string) => {
  careerList.value = careerList.value.filter((career) => career.id !== id);
};
</script>

<template>
  <div>
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      ">
      <span :class="styles.title">경력</span>
      <IconButton
        :right-icon="Plus"
        bg-color="var(--Primary-Normal)"
        text-color="var(--Static-White)"
        :use-border="false"
        @click="addCareer">
        경력 추가
      </IconButton>
    </div>

    <CareerCard
      v-for="career in careerList"
      :key="career.id"
      :item="career"
      :on-remove="() => removeCareer(career.id)" />
  </div>
</template>
