<script setup lang="ts">
import { ref, computed } from 'vue'
import type {TextFieldProps} from "@/types/textField/textField.type";
import './style.scss'

import Xmark from "@/components/icons/xmark.vue";
import Error from "@/components/icons/error.vue";

const props = defineProps<TextFieldProps>()
const emit = defineEmits(['update:modelValue'])

const isFocused = ref(false)

const handleInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

const clearInput = () => {
  emit('update:modelValue', '')
}

const showClearButton = computed(() =>
    props.showClear && props.modelValue && !props.disabled && !props.error
)

const wrapperClass = computed(() => ({
  textfield: true,
  disabled: props.disabled,
  error: props.error,
  focused: isFocused.value,
}))
</script>

<template>
  <div :class="wrapperClass">
    <label v-if="props.label" class="label" :for="props.id">{{ props.label }}</label>
    <div class="input-wrapper">
      <input
          :id="props.id"
          :name="props.name"
          :placeholder="props.placeholder"
          :value="props.modelValue"
          :disabled="props.disabled"
          @focus="isFocused = true"
          @blur="isFocused = false"
          @input="handleInput"
      />
      <Xmark v-if="showClearButton" @click="clearInput" />
      <Error v-if="props.error" />
    </div>
  </div>
</template>