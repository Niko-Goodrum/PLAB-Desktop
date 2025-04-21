<script setup lang="ts">
import "./style.scss";
import Logo from "@/assets/images/Logo.svg";
import Button from "@/components/ui/button/button.vue";
import FilledTextField from "@/components/ui/textFeield/filledTextField/filledTextField.vue";
</script>

<template>
  <div class="signup">
    <div class="signup-panel">
      <Logo style="width: 100px; height: 26px" />
      <div class="signup-panel-info">
        <FilledTextField
          :type="'text'"
          :width="'310px'"
          :text="'이메일'"
          :placeholder="'이메일을 입력해주세요'" />
        <FilledTextField
          :type="'password'"
          :width="'310px'"
          :text="'비밀번호'"
          :placeholder="'비밀번호을 입력해주세요'" />
      </div>
      <div class="signup-panel-btn">
        <Button
          :size="'Medium'"
          :color="'Primary'"
          :customStyle="{ width: '342px', padding: '13px 0' }"
          >로그인</Button
        >
        <div class="signup-panel-btn-link">
          <span>아직 계정이 없으시다면?</span>
          <router-link to="/signin">
            <span class="signup-panel-btn-link-text">로그인</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
