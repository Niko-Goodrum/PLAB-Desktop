<script setup lang="ts">
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

<style lang="scss" scoped>
@use "@/design/function/flex" as *;
@use "@/design/fonts/typography" as *;

.filled-text-field {
  @include flex-column;

  width: min-content;
  gap: 10px;

  &--disabled {
    opacity: 0.5;
  }

  &-label {
    @include Label-Bold;
    color: var(--Label-Bold);
    margin: 0;
  }

  &-input {
    @include flex-row;
    align-items: center;

    border: 1px solid var(--Line-Normal);
    border-radius: var(--Shape-ExtraSmall);
    background-color: var(--Background-Normal);

    padding: 15px;

    &--focused {
      border: 1px solid var(--Primary-Normal);
    }

    &--error {
      border: 1px solid var(--Status-Error);
    }

    &-text {
      @include Label-Medium;
      color: var(--Label-Normal);
      width: 100%;

      background-color: transparent;
      border: none;
      outline: none;

      &::placeholder {
        color: var(--Label-Assistive);
      }
    }
  }
}
</style>
