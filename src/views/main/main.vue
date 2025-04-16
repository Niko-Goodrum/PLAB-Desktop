<script setup lang="ts">

import Header from "@/components/common/header/header.vue";
import MainCharacter from "@/assets/images/main/character.vue"
import Portfolio from "@/assets/images/main/portfolio.svg";
import Business from "@/assets/images/main/business.vue";

</script>

<template>
  <main>
    <Header/>
    <section class="banner contents">
      <div class="description">
        <div>
          <p class="b_main">포트폴리오부터 면접까지,<br/>이젠 한번에</p>
          <p class="b_sub">깔끔한 포트폴리오 템플릿 및 맞춤형 면접 준비</p>
        </div>
        <div>

        </div>
      </div>
      <div>
        <MainCharacter/>
      </div>
    </section>
    <section class="contents portfolio">
      <div>
        <p class="contents_main">더 쉽고 간편하게<br/>포트폴리오를 작성해보세요.</p>
        <p class="contents_sub">미리 제공하는 포트폴리오 양식을 통해 포트폴리오를<br/>
          보다 쉽게 작성하고 AI에게 피드백을 받아보세요!</p>
      </div>
      <Portfolio class="floating"/>
    </section>
    <section class="contents business">
      <Business/>
      <div>
        <p class="contents_main">면접 이제는 같이 준비해요!</p>
        <p class="contents_sub">AI가 제공하는 면접 질문을 토대로 답변을 만들어<br/>면접 스킬을 향상시켜보세요!</p>
      </div>
    </section>
  </main>
</template>

<style lang="scss" setup>
@use "@/design/function/flex" as *;
@use "@/design/color/sementic" as *;
@use "@/design/fonts/typography" as *;

.banner {
  background-color: var(--Primary-Normal);
}

.portfolio {
  background-color: var(--Background-Normal);
}

.business {
  background-color: var(--Fill-Normal);
}

.contents {
  @include flex-center;
  padding: 70px 100px;
  gap: 100px;
}

.description {
  @include flex-column;
  gap: 15px;
  padding: 10px;

  .b_main {
    @include Display2-Bold;
    color: var(--Static-Black);
  }

  .b_sub {
    @include Body-Medium;
    color: var(--Static-White);
  }
}


.contents_main {
  @include Display2-Bold;
  color: var(--Label-Normal);
}

.contents_sub {
  @include Body-Medium;
  color: var(--Label-Neutral);
}

.floating {
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
