<script setup lang="ts">
import styles from "./style.module.scss"
import MirrorBall from "@/assets/images/portfolio/mirrorBall.svg";
</script>

<template>
  <div :class="styles.banner">
    <MirrorBall/>
    <div :class="styles.banner_contents">
      <p :class="styles.banner_title">PLAB을 통해</p>
      <p :class="styles.description">깔끔한 포트폴리오를 만들어보세요!</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>