<script setup lang="ts">
import { useProfileStore } from "@/stores/profile/profile.store.js";
import TextField from "@/components/ui/textFeield/textField/textField.vue";
import Upload from "@/components/portfolio/write/upload/upload.vue";
import styles from "./style.module.scss";

const store = useProfileStore();
</script>

<template>
  <div :class="styles.profile">
    <p :class="styles.title">기본 정보</p>
    <div :class="styles.profileContent">
      <div :class="styles.enterInformation">
        <div :class="styles.upInformation">
          <TextField v-model="store.name" label="이름" show-clear:true placeholder="이름을 입력해주세요." />
          <TextField v-model="store.phoneNumber" label="전화번호" placeholder="전화번호를 입력해주세요." />
        </div>
        <TextField v-model="store.email" label="이메일" placeholder="이메일을 입력해주세요." />
      </div>
      <div :class="styles.imageSection">
        <Upload v-model="store.image_url" />
      </div>
    </div>
  </div>
</template>