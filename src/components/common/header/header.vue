<script setup lang="ts">
import Logo from "@/assets/images/Logo.svg";
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
    <div>

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
}

.logo_container {
  @include flex-center;
  gap: 100px;
}

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

</style>
