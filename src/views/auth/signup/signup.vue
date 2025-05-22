<script setup lang="ts">
import "./style.scss";
import Logo from "@/assets/images/Logo.svg";
import Button from "@/components/ui/button/button.vue";
import FilledTextField from "@/components/ui/textFeield/filledTextField/filledTextField.vue";
import { showToast } from "@/libs/toast/swal";
import { usePostSignup } from "@/queries/auth/auth.query";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const postSignup = usePostSignup();
const isDisabled = ref(false);
const isError = ref(false);
const value = ref({
  email: "",
  password: "",
  username: "",
});

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    handleClickSubmit();
  }
};

const handleClickSubmit = () => {
  if (isDisabled.value) return;
  isDisabled.value = true;

  postSignup.mutate(value.value, {
    onSuccess: () => {
      isError.value = false;
      showToast("success", "회원가입 성공");
      router.push("/signin");
    },
    onError: () => {
      showToast("error", "회원가입 실패");
      isError.value = true;
      isDisabled.value = false;
    },
  });
};
</script>

<template>
  <div class="signup">
    <div class="signup-panel">
      <Logo style="width: 100px; height: 26px" />
      <div class="signup-panel-info">
        <FilledTextField
          v-model="value.username"
          :type="'text'"
          :width="'285px'"
          :isDisabled="isDisabled"
          :isError="isError"
          :text="'이름'"
          :value="value.username"
          :placeholder="'이름을 입력해주세요'" />
        <FilledTextField
          v-model="value.email"
          :type="'text'"
          :width="'285px'"
          :isDisabled="isDisabled"
          :isError="isError"
          :text="'이메일'"
          :value="value.email"
          :placeholder="'이메일을 입력해주세요'" />
        <FilledTextField
          v-model="value.password"
          :type="'password'"
          :width="'285px'"
          :isDisabled="isDisabled"
          :isError="isError"
          :text="'비밀번호'"
          :value="value.password"
          :placeholder="'비밀번호을 입력해주세요'"
          :handleKeyDown="handleKeyDown" />
      </div>
      <div class="signup-panel-btn">
        <Button
          :size="'Medium'"
          :color="'Primary'"
          :customStyle="{ width: '320px', padding: '13px 0' }"
          :onclick="handleClickSubmit"
          >회원가입</Button
        >
        <div class="signup-panel-btn-link">
          <span>이미 계정이 있으시다면?</span>
          <router-link to="/signin">
            <span class="signup-panel-btn-link-text">로그인</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
