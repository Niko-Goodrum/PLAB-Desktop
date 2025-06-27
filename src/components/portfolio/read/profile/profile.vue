<script setup lang="ts">

import styles from "./style.module.scss"
import {marked} from "marked";
import {useProfileStore} from "@/stores/profile/profile.store.js";

const store = useProfileStore();

marked.setOptions({
  breaks: true,
})

</script>

<template>
  <div :class="styles.about_me">
    <div :class="styles.info_container">
      <div :class="styles.info_wrap">
        <div :class="styles.name_section">
          <p :class="styles.name">{{ store.name }}</p>
          <p :class="styles.work">{{ store.work }}</p>
        </div>
        <div :class="styles.information">
          <div :class="styles.information_container">
            <span :class="styles.title">Phone</span>
            <span :class="styles.infor">{{ store.phoneNumber }}</span>
          </div>
          <div :class="styles.information_container">
            <span :class="styles.title">Email</span>
            <span :class="styles.infor">{{ store.email }}</span>
          </div>
        </div>
      </div>
      <img
          v-if="store.image_url"
          :src="store.image_url"
          alt="프로필 이미지"
          :class="styles.profile_image"
      />
    </div>
    <div :class="styles.introduction">
      <p :class="styles.title">자기소개</p>
      <p :class="styles.intro" v-html="marked(store.wordmark)"/>
    </div>
    <div :class="styles.skill">
      <p :class="styles.title">기술 스택</p>
      <div :class="styles.skill_list">
        <div
            v-for="item in store.stack"
            :key="item"
            :class="styles.skill_item"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>