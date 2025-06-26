<script setup lang="ts">
import styles from "./style.module.scss"
import { useCareerStore } from "@/stores/career/career.js";
import IconButton from "@/components/ui/button/icon/iconButton.vue";
import Plus from "@/components/icons/plus.vue";
import CareerCard from "@/components/portfolio/write/career/card/card.vue";

const store = useCareerStore();

const addCareer = () => {
  const id = `server-generated-id-${Math.random().toString(36).slice(2)}`;
  store.addCareer(id);
};
</script>

<template>
  <div :class="styles.container">
    <div style="display: flex; justify-content: space-between; align-items: center;">
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
        v-for="career in store.careerList"
        :key="career.id"
        :item="career"
        :on-remove="() => store.removeCareer(career.id)" />
  </div>
</template>