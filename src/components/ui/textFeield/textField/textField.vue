<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { TextFieldProps } from '@/types/ui/textField/textField.type'
import './style.scss'

import Xmark from '@/components/icons/xmark.vue'
import Error from '@/components/icons/error.vue'

const props = defineProps<TextFieldProps>()
const emit = defineEmits(['update:modelValue'])

const isFocused = ref(false)
const internalError = ref(false)

const handleInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

// clear 버튼
const clearInput = () => {
  emit('update:modelValue', '')
}

// 에러 보여줄지 결정
const showError = computed(() => props.error || internalError.value)

// 부모가 error 주면 내부에서 2초만 표시
watch(() => props.error, (newVal) => {
  if (newVal) {
    internalError.value = true
    setTimeout(() => {
      internalError.value = false
    }, 2000)
  }
})

const showClear = computed(() =>
    props.showClear && props.modelValue && !props.disabled && !showError.value
)

const wrapperClass = computed(() => ({
  textfield: true,
  disabled: props.disabled,
  error: showError.value,
  focused: isFocused.value,
}))
</script>

<template>
  <div :class="wrapperClass">
    <p v-if="props.label" class="label" :for="props.id">{{ props.label }}</p>
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
      <Xmark
          v-if="showClear"
          class="icon"
          @click="clearInput"
      />
      <Error
          v-else-if="showError"
          class="icon"
      />
      <span
          v-else
          class="icon icon-placeholder"
          aria-hidden="true"
      />
    </div>
  </div>
</template>