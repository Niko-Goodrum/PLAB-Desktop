<script setup lang="ts">
import {ref} from "vue";
import styles from "./style.module.scss";
import FilledTextField from "@/components/ui/textFeield/filledTextField/filledTextField.vue";
const work = ref("");
</script>

<template>
<div :class="styles.container">
  <p>직무 · 직군</p>
  <FilledTextField v-model="work" type="text" placeholder="직무 · 직군을 입력해주세요" :isLabel="false" />
</div>
</template>