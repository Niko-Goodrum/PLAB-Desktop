<script setup lang="ts">
import { useProfileStore } from "@/stores/portfolio/profile.store";
import TextField from "@/components/ui/textFeield/textField/textField.vue";
import Upload from "@/components/upload/upload.vue";
import styles from "./style.module.scss";

const store = useProfileStore();
</script>

<template>
  <div :class="styles.profile">
    <p :class="styles.title">기본 정보</p>
    <div :class="styles.profileContent">
      <div :class="styles.enterInformation">
        <div :class="styles.upInformation">
          <TextField v-model="store.name" label="이름" show-clear:true/>
          <TextField v-model="store.phoneNumber" label="전화번호" />
        </div>
        <TextField v-model="store.email" label="이메일" />
      </div>
      <div :class="styles.imageSection">
        <Upload v-model="store.image_url" />
      </div>
    </div>
  </div>
</template>