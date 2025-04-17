<script setup lang="ts">
import "./style.scss";
import MirrorBall from "@/assets/images/portfolio/mirrorBall.svg";

</script>

<template>
  <section class="write">
    <div class="contents">
      <div class="banner">
        <MirrorBall />
        <div>
          <p class="title">PLAB을 통해</p>
          <p class="description">깔끔한 포트폴리오를 만들어보세요!</p>
        </div>
      </div>
      <div class="portfolio-editor">
        <div class="profile-block">
          <p class="title">기본 정보</p>
          <div class="profile-content">
            <div class="profile_image">
              <div class="enter_information"></div>
              <div class="image_section"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>