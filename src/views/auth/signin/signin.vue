<script setup lang="ts">
import "./style.scss";
import Logo from "@/assets/images/Logo.svg";
import Button from "@/components/ui/button/button.vue";
import FilledTextField from "@/components/ui/textFeield/filledTextField/filledTextField.vue";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/token/token.constant";
import { showToast } from "@/libs/toast/swal";
import token from "@/libs/token/token";
import { usePostSignin } from "@/queries/auth/auth.query";
import { SigninResponse } from "@/types/auth/auth.type";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const postSignin = usePostSignin();
const isDisabled = ref(false);
const isError = ref(false);
const value = ref({
  email: "",
  password: "",
});

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    handleClickSubmit();
  }
};

const handleClickSubmit = () => {
  if (isDisabled.value) return;
  isDisabled.value = true;

  postSignin.mutate(value.value, {
    onSuccess: (data: SigninResponse) => {
      isError.value = false;

      token.setToken(ACCESS_TOKEN_KEY, data.data.access_token);
      token.setToken(REFRESH_TOKEN_KEY, data.data.refresh_token);

      showToast("success", "로그인 성공");
      router.push("/");
    },
    onError: () => {
      showToast("error", "로그인 실패");
      isError.value = true;
      isDisabled.value = false;
    },
  });
};
</script>

<template>
  <div class="signin">
    <div class="signin-panel">
      <Logo style="width: 100px; height: 26px" />
      <div class="signin-panel-info">
        <FilledTextField
          v-model="value.email"
          :type="'text'"
          :width="'320px'"
          :isLabel="true"
          :isDisabled="isDisabled"
          :isError="isError"
          :text="'이메일'"
          :value="value.email"
          :placeholder="'이메일을 입력해주세요'" />
        <FilledTextField
          v-model="value.password"
          :type="'password'"
          :width="'320px'"
          :isLabel="true"
          :isDisabled="isDisabled"
          :isError="isError"
          :text="'비밀번호'"
          :value="value.password"
          :placeholder="'비밀번호을 입력해주세요'"
          :handleKeyDown="handleKeyDown" />
      </div>
      <div class="signin-panel-btn">
        <Button
          :size="'Medium'"
          :color="'Primary'"
          :customStyle="{ width: '320px', padding: '13px 0' }"
          :onclick="handleClickSubmit"
          >로그인</Button
        >
        <div class="signin-panel-btn-link">
          <span>아직 계정이 없으시다면?</span>
          <router-link to="/signup">
            <span class="signin-panel-btn-link-text">회원가입</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
