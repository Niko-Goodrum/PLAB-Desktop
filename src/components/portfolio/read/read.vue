<script setup lang="ts">
import "./style.scss";
import Preview from "@/components/icons/preview.vue";
import IconButton from "@/components/ui/button/icon/iconButton.vue";
import Sparkles from "@/components/icons/sparkles.vue";
import Save from "@/components/icons/save.vue";
import Download from "@/components/icons/download.vue";
import {useProfileStore} from "@/stores/portfolio/profile.store.js";
import {marked} from "marked";

const store = useProfileStore();

</script>

<template>
  <section class="read">
    <div class="header">
      <div class="preview">
        <Preview/>
        <span>포트폴리오 미리보기</span>
      </div>
      <div class="button_section">
        <IconButton :right-icon="Sparkles" :use-border="true" bg-color="var(--Background-Normal)"
                    border-color="var(--Secondary-Normal)" text-color="var(--Secondary-Normal)">
          AI 피드백
        </IconButton>
        <IconButton :right-icon="Save" :use-border="true" bg-color="var(--Background-Normal)"
                    border-color="var(--Line-Normal)" text-color="var(--Label-Neutral)">
          저장하기
        </IconButton>
        <IconButton :right-icon="Download" bg-color="var(--Primary-Normal)" text-color="var(--Static-White)">
          PDF 다운로드
        </IconButton>
      </div>
    </div>
    <div class="contents">
      <div class="about_me">
        <div class="profile_box">
          <img v-if="store.image_url" :src="store.image_url" alt="프로필 이미지" class="profile_image" />
          <div class="text_info">
            <p><strong>이름:</strong> {{ store.name }}</p>
            <p><strong>전화번호:</strong> {{ store.phoneNumber }}</p>
            <p><strong>이메일:</strong> {{ store.email }}</p>
            <p><strong>직무:</strong> {{ store.work }}</p>
            <p><strong>기술 스택:</strong></p>
            <ul>
              <li v-for="item in store.stack" :key="item">{{ item }}</li>
            </ul>
            <p><strong>워드마크:</strong></p>
            <div v-html="marked(store.wordmark)" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>