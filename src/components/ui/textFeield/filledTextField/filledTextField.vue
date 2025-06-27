<script setup lang="ts">
import "./style.scss";
import { ref } from "vue";
import Xmark from "@/components/icons/xmark.vue";
import Error from "@/components/icons/error.vue";
import Eye from "@/components/icons/eye/eye.vue";
import EyeSlash from "@/components/icons/eye/eyeSlash.vue";

const props = defineProps<{
  modelValue: string;
  type: "text" | "password";
  text?: string;
  width?: string;
  placeholder?: string;
  isLabel?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  handleKeyDown?: (e: KeyboardEvent) => void;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const inputType = ref(props.type);
const isFocused = ref(false);
const isShowValue = ref(false);

const handleChangeInput = (e: Event) => {
  const { value } = e.target as HTMLInputElement;
  emit("update:modelValue", value);
};

const clearInput = () => {
  emit("update:modelValue", "");
};
</script>

<template>
  <div
      :class="[
      'filled-text-field',
      { 'filled-text-field--disabled': props.isDisabled },
    ]"
      :style="{ width: props.width || '250px' }">
    <p class="filled-text-field-label" v-if="props.isLabel">
      {{ props.text || "Text" }}
    </p>
    <div
        :class="[
        'filled-text-field-input',
        {
          'filled-text-field-input--focused': isFocused,
          'filled-text-field-input--error': props.isError,
        },
      ]">
      <input
          :type="props.type === 'text' ? 'text' : inputType"
          :disabled="props.isDisabled"
          class="filled-text-field-input-text"
          :value="props.modelValue"
          :placeholder="props.placeholder || 'Input Your Text'"
          @focus="isFocused = true"
          @blur="isFocused = false"
          @input="handleChangeInput"
          @keydown="props.handleKeyDown"
      />
      <template v-if="props.modelValue">
        <Error v-if="props.isError" />
        <template v-else>
          <Xmark
              v-if="props.type === 'text'"
              @click="clearInput"
          />
          <template v-else>
            <Eye
                v-if="isShowValue"
                @click="
                () => {
                  isShowValue = false;
                  inputType = 'password';
                }
              "
            />
            <EyeSlash
                v-else
                @click="
                () => {
                  isShowValue = true;
                  inputType = 'text';
                }
              "
            />
          </template>
        </template>
      </template>
    </div>
  </div>
</template>