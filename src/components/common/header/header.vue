<script setup lang="ts">
import Logo from "@/assets/images/Logo.svg";
import Light from "@/assets/images/header/light.svg";
import Dark from "@/assets/images/header/dark.svg";
import {useThemeStore} from "@/stores/theme/theme.store";
import Button from "@/components/ui/button/button.vue";

const themeStore = useThemeStore();
</script>

<template>
  <header>
    <div class="logo_container">
      <Logo/>
      <div class="menu_container">
        <span>포트폴리오</span>
        <span>면접</span>
      </div>
    </div>
    <div class="button_container">
      <div class="auth_container">
        <!--Onclick은 추후에 수정-->
        <Button size="Medium" color="Primary" :on-click="() => console.log('Hello World')">포트폴리오 작성하기</Button>
        <Button size="Medium" :line="true" :on-click="() => console.log('Hello World')">면접 준비하기</Button>
      </div>
      <div class="theme_toggle" @click="themeStore.toggleTheme">
        <transition name="fade-icon" mode="out-in">
          <Light v-if="themeStore.theme === 'light'" key="light" class="icon"/>
          <Dark v-else key="dark" class="icon"/>
        </transition>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "@/design/fonts/_typography" as *;
@use "@/design/function/_flex" as *;
@use "@/design/shadow/_elevation" as *;

header {
  @include flex-between;
  @include Black-1;
  width: 100vw;
  padding: 20px 70px;
  background-color: var(--Background-Normal);
  box-sizing: border-box;

  .logo_container {
    @include flex-center;
    gap: 100px;

    .menu_container {
      @include flex-row;
      gap: 20px;
      padding: 10px;

      span {
        @include HeadLine2-Bold;
        color: var(--Label-Normal);
        cursor: pointer;
      }
    }
  }

  .button_container {
    @include flex-center;
    gap: 25px;

    .auth_container {
      gap: 10px;
      @include flex-center;

    }

  }

  .theme_toggle {
    @include flex-center;
    cursor: pointer;
    transition: transform 0.02s ease;

    &:active {
      transform: scale(0.9);
    }
  }

  .fade-icon-enter-active,
  .fade-icon-leave-active {
    transition: opacity 0.1s ease, transform 0.1s ease;
  }

  .fade-icon-enter-from,
  .fade-icon-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }
}


</style>