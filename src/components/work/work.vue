<script setup lang="ts">
import {useProfileStore} from "@/stores/portfolio/profile.store";
import styles from "./style.module.scss";
import FilledTextField from "@/components/ui/textFeield/filledTextField/filledTextField.vue";

const store = useProfileStore();
</script>

<template>
  <div :class="styles.container">
    <p>직무 · 직군</p>
    <FilledTextField
        v-model="store.work"
        type="text"
        placeholder="직무 · 직군을 입력해주세요"
        :isLabel="false"
    />
  </div>
</template>