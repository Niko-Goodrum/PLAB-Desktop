<script setup lang="ts">
import {computed} from 'vue'
import styles from './style.module.scss'
import Search from "@/components/icons/search.vue";

const props = defineProps<{
  modelValue: string
  placeholder?: string
  status?: 'default' | 'disabled' | 'focus' | 'error'
}>()

const emit = defineEmits(['update:modelValue'])

const isDisabled = computed(() => props.status === 'disabled')

const borderClass = computed(() => {
  switch (props.status) {
    case 'focus':
      return styles.focus
    case 'error':
      return styles.error
    default:
      return styles.default
  }
})
</script>

<template>
  <div :class="[styles.searchBar, borderClass, { [styles.disabled]: isDisabled }]">
    <Search/>
    <input
        type="text"
        :placeholder="props.placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :disabled="isDisabled"
    />
  </div>
</template>