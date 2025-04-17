<script setup lang="ts">
import Logo from "@/assets/images/Logo.svg";
import Light from "@/assets/images/header/light.svg";
import Dark from "@/assets/images/header/dark.svg";
import {useThemeStore} from "@/stores/theme/theme.store";
import Button from "@/components/ui/button/button.vue";
import "./style.scss";

const themeStore = useThemeStore();
</script>

<template>
  <header>
    <div class="logo_container">
      <Logo/>
      <div class="menu_container">
        <span><router-link to="/portfolio">포트폴리오</router-link></span>
        <span><router-link to="/interview">면접</router-link></span>
      </div>
    </div>
    <div class="button_container">
      <div class="auth_container">
        <!--Onclick은 추후에 수정-->
        <Button size="Medium" color="Primary" :on-click="() => console.log('Hello World')">로그인하기</Button>
        <Button size="Medium" :line="true" :on-click="() => console.log('Hello World')">회원가입하기</Button>
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