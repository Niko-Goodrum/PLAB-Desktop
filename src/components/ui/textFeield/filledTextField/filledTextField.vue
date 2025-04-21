<script setup lang="ts">
import "./style.scss";
import { ref } from "vue";
import Xmark from "@/components/icons/xmark.vue";
import type { FilledTextFieldProps } from "@/types/ui/filledTextField/filledTextField.type";
import Error from "@/components/icons/error.vue";
import Eye from "@/components/icons/eye/eye.vue";
import EyeSlash from "@/components/icons/eye/eyeSlash.vue";

const { type, text, width, placeholder, isLabel, isDisabled, isError } =
  defineProps<FilledTextFieldProps>();

const value = ref("");
const inputType = ref(type);
const isFocused = ref(false);
const isShowValue = ref(false);
</script>

<template>
  <div
    :class="[
      'filled-text-field',
      { 'filled-text-field--disabled': isDisabled },
    ]">
    <p class="filled-text-field-label" v-if="isLabel ? isLabel : true">
      {{ text ? text : "Text" }}
    </p>
    <div
      :class="[
        'filled-text-field-input',
        {
          'filled-text-field-input--focused': isFocused,
          'filled-text-field-input--error': isError,
        },
      ]"
      :style="{ width: width ? width : '250px' }">
      <input
        :type="type === 'text' ? 'text' : inputType"
        :disabled="isDisabled"
        class="filled-text-field-input-text"
        v-model="value"
        :placeholder="placeholder ? placeholder : 'Input Your Text'"
        @focus="isFocused = true"
        @blur="isFocused = false" />
      <template v-if="value">
        <Error v-if="isError" />
        <template v-else>
          <Xmark v-if="type === 'text'" @click="value = ''" />
          <template v-else>
            <Eye
              v-if="isShowValue"
              @click="
                () => {
                  isShowValue = false;
                  inputType = 'password';
                }
              " />
            <EyeSlash
              v-else
              @click="
                () => {
                  isShowValue = true;
                  inputType = 'text';
                }
              " />
          </template>
        </template>
      </template>
    </div>
  </div>
</template>
