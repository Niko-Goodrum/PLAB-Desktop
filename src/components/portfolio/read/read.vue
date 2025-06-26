<script setup lang="ts">
import styles from "./style.module.scss";
import Preview from "@/components/icons/preview.vue";
import IconButton from "@/components/ui/button/icon/iconButton.vue";
import Sparkles from "@/components/icons/sparkles.vue";
import Save from "@/components/icons/save.vue";
import Download from "@/components/icons/download.vue";
import Profile from "@/components/portfolio/read/profile/profile.vue";
import { usePdf } from "@/composables/pdf/usePdf";
import Divider from "@/components/divider/divider.vue";
import Career from "@/components/portfolio/read/career/career.vue";

const { exportPdf } = usePdf();
</script>

<template>
  <section :class="styles.read">
    <div :class="styles.header">
      <div :class="styles.preview">
        <Preview />
        <span>포트폴리오 미리보기</span>
      </div>
      <div :class="styles.button_section">
        <IconButton
            :right-icon="Sparkles"
            :use-border="true"
            bg-color="var(--Background-Normal)"
            border-color="var(--Secondary-Normal)"
            text-color="var(--Secondary-Normal)"
        >
          AI 피드백
        </IconButton>
        <IconButton
            :right-icon="Save"
            :use-border="true"
            bg-color="var(--Background-Normal)"
            border-color="var(--Line-Normal)"
            text-color="var(--Label-Neutral)"
        >
          저장하기
        </IconButton>
        <IconButton
            :right-icon="Download"
            bg-color="var(--Primary-Normal)"
            text-color="var(--Static-White)"
            @click="exportPdf('pdf-area')"
        >
          PDF 다운로드
        </IconButton>
      </div>
    </div>

    <div :class="styles.contents" id="pdf-area">
      <Profile />
      <Divider />
      <Career />
    </div>
  </section>
</template>